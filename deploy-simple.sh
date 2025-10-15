#!/bin/bash

# Simple Portfolio Deployment Script
echo "🚀 Portfolio Deployment Tool"
echo "=============================="

# Function to deploy to Vercel
deploy_vercel() {
    echo "📦 Deploying to Vercel..."
    npm run build
    if [ $? -eq 0 ]; then
        npx vercel --prod --force
        echo "✅ Vercel deployment complete!"
    else
        echo "❌ Build failed. Please fix errors and try again."
    fi
}

# Function to check status
check_status() {
    echo "🔍 Checking deployment status..."
    npx vercel ls | head -5
}

# Function to clear cache and deploy
fresh_deploy() {
    echo "🧹 Fresh deployment..."
    npm run cache-clear
    npm run build
    npx vercel --prod --force
    echo "✅ Fresh deployment complete!"
}

# Main menu
echo "Select deployment option:"
echo "1) Deploy to Vercel (Current)"
echo "2) Check deployment status"
echo "3) Fresh deployment (clear cache + deploy)"
echo "4) Exit"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        deploy_vercel
        ;;
    2)
        check_status
        ;;
    3)
        fresh_deploy
        ;;
    4)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid option. Please run the script again."
        exit 1
        ;;
esac


