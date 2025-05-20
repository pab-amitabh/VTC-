import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

// Add cache control headers to prevent result caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  let client = null;
  
  try {
    console.log('API addTestData: Connecting to MongoDB directly');
    
    // Connect directly to MongoDB
    const mongoUrl = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/travel-insurance';
    client = new MongoClient(mongoUrl);
    await client.connect();
    
    console.log('API addTestData: Connected to MongoDB');
    
    const db = client.db();
    
    // Create/update a document directly using findOneAndUpdate to avoid conflicts
    const result = await db.collection('BuyNowClick').findOneAndUpdate(
      { 
        providerName: 'Test Provider',
        planName: 'Test Plan',
        province: null
      },
      {
        $set: {
          updatedAt: new Date(),
          providerName: 'Test Provider',
          planName: 'Test Plan',
          province: null
        },
        $inc: { 
          clickCount: 1 
        },
        $setOnInsert: {
          createdAt: new Date()
        }
      },
      { 
        upsert: true,
        returnDocument: 'after'
      }
    );

    console.log('API addTestData: Result', result);
    
    // Fetch current data
    const records = await db.collection('BuyNowClick').find({}).toArray();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test record created or updated', 
      result: result,
      currentRecords: records
    }, {
      headers: {
        // Prevent caching
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('API addTestData: Error:', error);
    return NextResponse.json(
      { error: 'Failed: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  } finally {
    // Close the connection
    if (client) {
      await client.close();
      console.log('API addTestData: MongoDB connection closed');
    }
  }
} 