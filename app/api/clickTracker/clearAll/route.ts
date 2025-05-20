import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Add cache control headers to prevent result caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function DELETE() {
  let client = null;
  
  try {
    console.log('API Route clearAll: Connecting to MongoDB directly');
    
    // Connect directly to MongoDB
    const mongoUrl = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/travel-insurance';
    client = new MongoClient(mongoUrl);
    await client.connect();
    
    console.log('API Route clearAll: Connected to MongoDB');
    
    const db = client.db();
    
    // Verify collection exists and count documents before deletion
    const collection = db.collection('BuyNowClick');
    const countBefore = await collection.countDocuments({});
    console.log(`API Route clearAll: Found ${countBefore} records before deletion`);
    
    // Delete all documents from BuyNowClick collection
    const result = await collection.deleteMany({});
    
    // Verify deletion by counting again
    const countAfter = await collection.countDocuments({});
    console.log(`API Route clearAll: Found ${countAfter} records after deletion`);

    console.log(`API Route clearAll: Deleted ${result.deletedCount} records`);
    
    if (countAfter > 0) {
      console.log(`API Route clearAll: WARNING - ${countAfter} records still exist after deletion!`);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: `Successfully deleted ${result.deletedCount} click tracking records`,
      deletedCount: result.deletedCount,
      remainingCount: countAfter
    }, {
      headers: {
        // Prevent caching
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('API Route clearAll: Error:', error);
    return NextResponse.json(
      { error: 'Failed to clear records: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  } finally {
    // Close the connection
    if (client) {
      await client.close();
      console.log('API Route clearAll: MongoDB connection closed');
    }
  }
} 