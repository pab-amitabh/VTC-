# Deployment Guide for Travel Insurance App

This guide will help you deploy the Travel Insurance application on Vercel with working MongoDB integration.

## Prerequisites

1. A [Vercel](https://vercel.com/) account
2. A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for cloud database

## Setting up MongoDB Atlas

1. Create a MongoDB Atlas account or sign in to your existing account
2. Create a new project and cluster (the free tier is sufficient for this app)
3. Set up database access by creating a user with read/write permissions
4. Configure network access to allow connections from anywhere (or specify Vercel's IP ranges if you prefer more security)
5. Get your MongoDB connection string by clicking "Connect" > "Connect your application"
   - It will look like: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/travel-insurance?retryWrites=true&w=majority`
   - Replace `<username>` and `<password>` with your database user credentials

## Deploying to Vercel

1. Push your code to a git repository (GitHub, GitLab, or Bitbucket)
2. Sign in to Vercel and import your project
3. In the project configuration, add the following environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `ADMIN_USERNAME`: Username for admin area (optional - defaults to "admin")
   - `ADMIN_PASSWORD`: Password for admin area (optional - defaults to "travel2024")
4. Deploy the application

## Verifying the Deployment

1. Once deployment is complete, visit your app URL
2. Test the main functionality of the app
3. Try accessing the admin area at `/admin/stats` - you should be prompted for authentication
   - Use the username and password you configured in environment variables (or the defaults)
4. Test the click tracking functionality by clicking on "Buy Now" buttons
5. Verify in the admin dashboard that clicks are being tracked

## Troubleshooting

If the click tracking functionality isn't working:

1. Check Vercel logs for any connection errors
2. Verify that your MongoDB Atlas connection string is correct
3. Ensure database user has correct permissions
4. Check that network access is properly configured in MongoDB Atlas
5. Test the `/api/directTestAdd` endpoint directly to see if MongoDB connection works

## Security Notes

1. The admin credentials are currently set in the middleware code or environment variables. For a production application, you should use a more robust authentication system.
2. Make sure to use a strong password for MongoDB Atlas and the admin area.
3. Consider restricting network access in MongoDB Atlas to only allow connections from your Vercel deployment. 