# 🚀 Portfolio Deployment Guide

This guide provides multiple deployment options for your portfolio website.

## 📋 Available Deployment Methods

### 1. **Vercel (Current)**
- **Status**: ✅ Active
- **Domain**: https://experiencearchitect.design
- **Commands**:
  ```bash
  npm run deploy-prod      # Standard deployment
  npm run deploy-force     # Force deployment (clears cache)
  ```

### 2. **Netlify (New Alternative)**
- **Status**: 🔧 Ready to deploy
- **Account**: silvanarestrepo888@gmail.com
- **Commands**:
  ```bash
  npm run deploy-netlify        # Production deployment
  npm run deploy-netlify-draft  # Draft deployment (for testing)
  ./deploy-netlify.sh          # Using deployment script
  ```

### 3. **GitHub Actions (Automated)**
- **Status**: 🔧 Configured
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Push to main branch

## 🛠️ Quick Deployment Commands

### Deploy to Vercel
```bash
# Standard deployment
npm run deploy-prod

# Force deployment (clears cache)
npm run deploy-force

# Check deployment status
npm run deployment-info
```

### Deploy to Netlify
```bash
# Production deployment
npm run deploy-netlify

# Draft deployment (for testing)
npm run deploy-netlify-draft

# Using deployment script
./deploy-netlify.sh
```

### Build Only (Manual Deployment)
```bash
# Build the project
npm run build

# Clear cache and build
npm run cache-clear && npm run build
```

## 🔧 Configuration Files

- **Vercel**: `vercel.json`
- **Netlify**: `netlify.toml`
- **Railway**: `railway.json`
- **GitHub Actions**: `.github/workflows/deploy.yml`

## 🎯 Recommended Workflow

1. **For Quick Updates**: Use `npm run deploy-force`
2. **For Testing**: Use `npm run deploy-netlify-draft`
3. **For Production**: Use `npm run deploy-netlify`
4. **For Automated**: Push to GitHub (triggers GitHub Actions)

## 🚨 Troubleshooting

### Vercel Issues
- Clear cache: `npm run cache-clear`
- Force deploy: `npm run deploy-force`
- Check status: `npm run deployment-info`

### Netlify Issues
- Check build: `npm run build`
- Deploy draft first: `npm run deploy-netlify-draft`
- Check logs in Netlify dashboard

## 📊 Deployment Status

- **Vercel**: ✅ Active (https://experiencearchitect.design)
- **Netlify**: 🔧 Ready
- **GitHub Actions**: 🔧 Configured
- **Railway**: 🔧 Configured

## 🎉 Success!

Your portfolio now has multiple deployment options. Choose the one that works best for your workflow!
