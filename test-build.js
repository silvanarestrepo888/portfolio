const { execSync } = require('child_process');

try {
  console.log('Starting build test...');
  const result = execSync('npm run build', { 
    encoding: 'utf8', 
    timeout: 60000,
    stdio: 'pipe'
  });
  console.log('Build successful!');
  console.log(result);
} catch (error) {
  console.log('Build failed:');
  console.log(error.stdout || error.message);
  console.log(error.stderr);
}