import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import { headers } from 'next/headers';
import crypto from 'crypto';

export async function POST(request: Request) {
  let client = null;
  
  try {
    console.log('API Route: Received clickTracker request');
    const body = await request.json();
    const { 
      providerName, 
      planName, 
      province = null, 
      customerName = null, 
      customerPhone = null,
      trackingId = null // New field to link initial click with form submission
    } = body;

    // Get IP address from multiple possible headers with fallbacks
    const headersList = headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-real-ip');
    const cfIp = headersList.get('cf-connecting-ip');
    
    // Try multiple header sources for the IP address
    let ipAddress = '127.0.0.1';
    if (forwardedFor) {
      ipAddress = forwardedFor.split(',')[0].trim();
    } else if (realIp) {
      ipAddress = realIp;
    } else if (cfIp) {
      ipAddress = cfIp;
    }
    
    console.log('API Route: IP Address detection:', {
      forwardedFor,
      realIp,
      cfIp,
      rawHeaders: {
        'x-forwarded-for': headersList.get('x-forwarded-for'),
        'x-real-ip': headersList.get('x-real-ip'),
        'cf-connecting-ip': headersList.get('cf-connecting-ip'),
      },
      detectedIpAddress: ipAddress
    });

    console.log('API Route: Click tracking request details:', { 
      providerName, 
      planName, 
      province,
      ipAddress,
      customerName,
      customerPhone,
      trackingId,
      timestamp: new Date().toISOString() 
    });

    if (!providerName || !planName) {
      console.error('API Route: Missing required fields:', { providerName, planName });
      return NextResponse.json(
        { error: 'Provider name and plan name are required' },
        { status: 400 }
      );
    }

    // Connect directly to MongoDB
    try {
      console.log('API Route: Connecting to MongoDB directly');
      
      // Connect directly to MongoDB
      const mongoUrl = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/travel-insurance';
      client = new MongoClient(mongoUrl);
      await client.connect();
      
      console.log('API Route: Connected to MongoDB');
      
      const db = client.db();
      
      console.log('API Route: Using direct MongoDB client to track click');

      let result;
      
      // If trackingId is provided, update the existing record
      if (trackingId) {
        console.log('API Route: Updating existing record with tracking ID:', trackingId);
        
        result = await db.collection('BuyNowClick').findOneAndUpdate(
          { 
            trackingId // Match the specific record by tracking ID
          },
          {
            $set: {
              updatedAt: new Date(),
              // Update with customer info
              ...(customerName && { customerName }),
              ...(customerPhone && { customerPhone })
            }
          },
          { 
            returnDocument: 'after'
          }
        );
      } else {
        // Generate a unique tracking ID for this click
        const generatedTrackingId = crypto.randomUUID();
        console.log('API Route: Creating new record with generated tracking ID:', generatedTrackingId);
        
        // Create a new record for the initial click
        result = await db.collection('BuyNowClick').findOneAndUpdate(
          { 
            providerName,
            planName,
            province,
            ipAddress
          },
          {
            $set: {
              updatedAt: new Date(),
              // Set these values on update
              ...(providerName && { providerName }),
              ...(planName && { planName }),
              ...(province !== undefined && { province }),
              ipAddress,
              ...(customerName && { customerName }),
              ...(customerPhone && { customerPhone }),
              trackingId: generatedTrackingId
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
      }

      console.log('API Route: Click tracking result:', result);
      
      // Add verification for customer info update
      if (customerName && customerPhone) {
        console.log('API Route: Verified customer info update:', {
          customerNameUpdated: result?.value?.customerName === customerName || result?.customerName === customerName,
          customerPhoneUpdated: result?.value?.customerPhone === customerPhone || result?.customerPhone === customerPhone,
          resultData: result?.value || result
        });
      }
      
      return NextResponse.json({ 
        success: true, 
        message: trackingId ? 'Click record updated with customer info' : 'New click record created',
        data: result?.value || result,
        trackingId: trackingId || result?.value?.trackingId || result?.trackingId
      });
    } catch (dbError) {
      console.error('API Route: Database error when tracking click:', dbError);
      return NextResponse.json(
        { error: 'Database error: ' + (dbError instanceof Error ? dbError.message : String(dbError)) },
        { status: 500 }
      );
    } finally {
      // Close the connection
      if (client) {
        await client.close();
        console.log('API Route: MongoDB connection closed');
      }
    }
  } catch (error) {
    console.error('API Route: Error parsing request:', error);
    return NextResponse.json(
      { error: 'Failed to parse request: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 400 }
    );
  }
} 