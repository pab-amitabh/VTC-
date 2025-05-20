import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

export async function GET() {
  let client = null;
  
  try {
    console.log('API test: Connecting to MongoDB directly');
    
    // Connect directly to MongoDB
    const mongoUrl = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/travel-insurance';
    client = new MongoClient(mongoUrl);
    await client.connect();
    
    console.log('API test: Connected to MongoDB');
    
    const db = client.db();
    
    // Create/update a test record
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

    console.log('API test: Result', result);
    
    // Fetch all records
    const records = await db.collection('BuyNowClick').find({}).toArray();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test operation completed', 
      result: result,
      records: records
    });
  } catch (error) {
    console.error('API test: Error:', error);
    return NextResponse.json(
      { error: 'Failed: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  } finally {
    // Close the connection
    if (client) {
      await client.close();
      console.log('API test: MongoDB connection closed');
    }
  }
} 