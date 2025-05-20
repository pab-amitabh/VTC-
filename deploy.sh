#!/bin/bash
# Deployment script for travel insurance full stack app

echo "🔄 Preparing for deployment..."

# Make sure prisma schema is up to date
echo "📊 Generating Prisma client..."
npx prisma generate

# Build the application 
echo "🏗️  Building Next.js application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  
  # Deploy to Vercel
  echo "🚀 Deploying to Vercel..."
  vercel --prod
  
  if [ $? -eq 0 ]; then
    echo "✅ Deployment successful! Your app is now live."
    echo "🔗 Don't forget to set these environment variables in Vercel:"
    echo "   - MONGODB_URI: Your MongoDB connection string"
    echo "   - ADMIN_USERNAME: Username for admin area"
    echo "   - ADMIN_PASSWORD: Password for admin area"
  else
    echo "❌ Deployment failed. Check the errors above."
  fi
else
  echo "❌ Build failed. Fix the errors before deploying."
fi 