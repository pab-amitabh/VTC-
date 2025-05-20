import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import crypto from 'crypto';

// Define interfaces for our data
interface ClickRecord {
  _id: any;
  providerName: string;
  planName: string;
  province: string | null;
  ipAddress?: string;
  customerName?: string;
  customerPhone?: string;
  clickCount: number;
  trackingId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Secure this endpoint with basic admin auth
export async function GET(request: Request) {
  let client = null;
  
  try {
    // Check credentials (reuse same admin credentials from middleware)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new Response('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin Access"' }
      });
    }
    
    const [username, password] = atob(authHeader.substring(6)).split(':');
    
    // Get credentials from env vars with fallbacks
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'travel2024';
    
    if (username !== adminUsername || password !== adminPassword) {
      return new Response('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin Access"' }
      });
    }
    
    console.log('API Route cleanup: Starting duplicate click cleanup...');
    
    // Connect to MongoDB
    try {
      console.log('API Route cleanup: Connecting to MongoDB directly');
      
      const mongoUrl = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/travel-insurance';
      client = new MongoClient(mongoUrl);
      await client.connect();
      
      console.log('API Route cleanup: Connected to MongoDB');
      
      const db = client.db();
      const collection = db.collection('BuyNowClick');
      
      // Get all records (will be modified in-place)
      const allRecords: ClickRecord[] = await collection.find({}).toArray() as ClickRecord[];
      console.log(`API Route cleanup: Found ${allRecords.length} total records`);

      // Find duplicates (same provider+plan+province but different records)
      const groups: Record<string, ClickRecord[]> = {};
      
      // Group by provider+plan+province
      allRecords.forEach(record => {
        const key = `${record.providerName}|${record.planName}|${record.province || 'null'}`;
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(record);
      });
      
      // Find duplicates and collect stats
      const duplicateGroups: ClickRecord[][] = Object.values(groups).filter(group => group.length > 1);
      let totalDuplicates = 0;
      let recordsUpdated = 0;
      let recordsDeleted = 0;
      let recordsWithTrackingId = 0;
      
      // Process all duplicates
      for (const group of duplicateGroups) {
        totalDuplicates += group.length - 1;
        
        // Sort by updatedAt (desc) to keep the most recent one
        group.sort((a, b) => {
          const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
          const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
          return dateB - dateA;
        });
        
        // The first one will be kept (most recent)
        const mainRecord = group[0];
        
        // If any record has customer info, merge it into the main record
        let hasUpdatedMainRecord = false;
        let totalClicks = mainRecord.clickCount || 1; // Start with main record's count
        
        // Generate a tracking ID if it doesn't exist
        if (!mainRecord.trackingId) {
          mainRecord.trackingId = crypto.randomUUID();
          hasUpdatedMainRecord = true;
          recordsWithTrackingId++;
        }
        
        // Process duplicates
        for (let i = 1; i < group.length; i++) {
          const dupRecord = group[i];
          
          // Add click count to main record
          totalClicks += dupRecord.clickCount || 1;
          
          // Check if this duplicate has customer info the main doesn't
          if (!mainRecord.customerName && dupRecord.customerName) {
            mainRecord.customerName = dupRecord.customerName;
            hasUpdatedMainRecord = true;
          }
          
          if (!mainRecord.customerPhone && dupRecord.customerPhone) {
            mainRecord.customerPhone = dupRecord.customerPhone;
            hasUpdatedMainRecord = true;
          }
          
          // Delete the duplicate
          await collection.deleteOne({ _id: dupRecord._id });
          recordsDeleted++;
        }
        
        // Update the main record with merged data and total clicks
        if (hasUpdatedMainRecord || totalClicks !== mainRecord.clickCount) {
          await collection.updateOne(
            { _id: mainRecord._id },
            { 
              $set: {
                ...mainRecord,
                clickCount: totalClicks,
                updatedAt: new Date()
              }
            }
          );
          recordsUpdated++;
        }
      }
      
      // Also add tracking IDs to any remaining records that don't have one
      const remainingWithoutTrackingId = await collection.find({ trackingId: { $exists: false } }).toArray() as ClickRecord[];
      for (const record of remainingWithoutTrackingId) {
        await collection.updateOne(
          { _id: record._id },
          { 
            $set: {
              trackingId: crypto.randomUUID(),
              updatedAt: new Date()
            }
          }
        );
        recordsWithTrackingId++;
      }
      
      return NextResponse.json({
        success: true,
        message: 'Cleanup completed successfully',
        stats: {
          totalRecords: allRecords.length,
          duplicateGroups: duplicateGroups.length,
          totalDuplicates,
          recordsUpdated,
          recordsDeleted,
          recordsWithTrackingId
        }
      });
    } catch (dbError) {
      console.error('API Route cleanup: Database error during cleanup:', dbError);
      return NextResponse.json(
        { error: 'Database error: ' + (dbError instanceof Error ? dbError.message : String(dbError)) },
        { status: 500 }
      );
    } finally {
      if (client) {
        await client.close();
        console.log('API Route cleanup: MongoDB connection closed');
      }
    }
  } catch (error) {
    console.error('API Route cleanup: General error during cleanup:', error);
    return NextResponse.json(
      { error: 'Failed to perform cleanup: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
} 