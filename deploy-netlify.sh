#!/bin/bash

# Netlify Deployment Script for Portfolio
echo "🚀 Deploying Portfolio to Netlify"
echo "=================================="

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Netlify
    echo "📦 Deploying to Netlify..."
    npx netlify-cli@latest deploy --prod --dir=.next
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "Your portfolio is now live on Netlify!"
    else
        echo "❌ Deployment failed. Please check the logs above."
    fi
else
    echo "❌ Build failed. Please fix the errors and try again."
fi

