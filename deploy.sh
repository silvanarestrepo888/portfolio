#!/bin/bash

# Portfolio Deployment Script
# This script provides multiple deployment options

echo "🚀 Portfolio Deployment Tool"
echo "=============================="

# Function to deploy to Vercel
deploy_vercel() {
    echo "📦 Deploying to Vercel..."
    npx vercel --prod --force
    echo "✅ Vercel deployment complete!"
}

# Function to build and prepare for manual deployment
build_only() {
    echo "🔨 Building project..."
    npm run build
    echo "✅ Build complete! Ready for manual deployment."
}

# Function to check deployment status
check_status() {
    echo "🔍 Checking deployment status..."
    npx vercel ls | head -5
}

# Function to clear cache and redeploy
fresh_deploy() {
    echo "🧹 Clearing cache and deploying fresh..."
    npm run cache-clear
    npx vercel --prod --force
    echo "✅ Fresh deployment complete!"
}

# Main menu
echo "Select deployment option:"
echo "1) Deploy to Vercel"
echo "2) Build only (for manual deployment)"
echo "3) Check deployment status"
echo "4) Fresh deployment (clear cache + deploy)"
echo "5) Exit"

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        deploy_vercel
        ;;
    2)
        build_only
        ;;
    3)
        check_status
        ;;
    4)
        fresh_deploy
        ;;
    5)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid option. Please run the script again."
        exit 1
        ;;
esac
