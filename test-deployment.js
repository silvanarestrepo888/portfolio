#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Testing deployment optimizations...\n');

// Test 1: Check if all required files exist
console.log('1. Checking required files...');
const requiredFiles = [
  'next.config.ts',
  'package.json',
  'src/app/page.tsx',
  'src/app/globals.css',
  'src/components/navigation/FloatingNavigation.tsx',
  'public/silvana-profile.jpg'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ Missing required files. Deployment will fail.');
  process.exit(1);
}

// Test 2: Validate Next.js config
console.log('\n2. Validating Next.js configuration...');
try {
  const nextConfig = require('./next.config.ts');
  console.log('✅ Next.js config is valid');
} catch (error) {
  console.log('❌ Next.js config error:', error.message);
}

// Test 3: Check package.json
console.log('\n3. Checking package.json...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredDeps = ['next', 'react', 'react-dom', 'framer-motion'];
  
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) {
      console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
    } else {
      console.log(`❌ Missing dependency: ${dep}`);
    }
  });
} catch (error) {
  console.log('❌ Package.json error:', error.message);
}

// Test 4: Simple build test (without full compilation)
console.log('\n4. Testing build process...');
try {
  console.log('Starting Next.js build test...');
  execSync('npx next build --debug', { stdio: 'inherit', timeout: 60000 });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.log('❌ Build failed:', error.message);
  console.log('\n📋 Troubleshooting suggestions:');
  console.log('- Remove complex CSS animations');
  console.log('- Simplify component logic');
  console.log('- Check for SSR compatibility');
  console.log('- Verify image optimization settings');
}

console.log('\n🎯 Deployment test completed.');