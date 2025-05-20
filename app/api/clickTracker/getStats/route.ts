import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Add cache control headers to prevent result caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  let client = null;
  
  try {
    console.log('API Route getStats: Fetching click statistics');
    
    // Get all click records using direct MongoDB connection
    try {
      console.log('API Route getStats: Connecting to MongoDB directly');
      
      // Connect directly to MongoDB
      const mongoUrl = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/travel-insurance';
      client = new MongoClient(mongoUrl);
      await client.connect();
      
      console.log('API Route getStats: Connected to MongoDB');
      
      const db = client.db();
      
      console.log('API Route getStats: Using direct MongoDB client');
      
      // Query documents directly
      const clickStats = await db.collection('BuyNowClick')
        .find({})
        .sort({ clickCount: -1 })
        .toArray();

      console.log(`API Route getStats: Found ${clickStats.length} click statistics records`);
      
      if (clickStats.length > 0) {
        console.log('API Route getStats: Sample first record:', JSON.stringify(clickStats[0]));
      } else {
        console.log('API Route getStats: No records found in database');
      }
      
      // Transform MongoDB _id to id for client compatibility
      const formattedStats = clickStats.map((stat: any) => ({
        id: stat._id.toString(),
        providerName: stat.providerName,
        planName: stat.planName,
        province: stat.province,
        ipAddress: stat.ipAddress || 'N/A',
        customerName: stat.customerName || 'N/A',
        customerPhone: stat.customerPhone || 'N/A',
        clickCount: stat.clickCount,
        trackingId: stat.trackingId || 'N/A',
        createdAt: stat.createdAt,
        updatedAt: stat.updatedAt,
      }));
      
      return NextResponse.json({ 
        success: true, 
        data: formattedStats,
        timestamp: new Date().toISOString() 
      }, {
        headers: {
          // Prevent caching
          'Cache-Control': 'no-store, max-age=0, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
    } catch (dbError) {
      console.error('API Route getStats: Database error when fetching statistics:', dbError);
      return NextResponse.json(
        { error: 'Database error: ' + (dbError instanceof Error ? dbError.message : String(dbError)) },
        { status: 500 }
      );
    } finally {
      // Close the connection
      if (client) {
        await client.close();
        console.log('API Route getStats: MongoDB connection closed');
      }
    }
  } catch (error) {
    console.error('API Route getStats: Error in getStats route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch click statistics: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
} 