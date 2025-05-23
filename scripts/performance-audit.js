#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Performance audit script
async function runPerformanceAudit() {
  console.log('🚀 Starting Performance Audit...\n');

  // 1. Bundle Analysis
  console.log('📦 Analyzing bundle size...');
  try {
    await runCommand('npm', ['run', 'analyze']);
    console.log('✅ Bundle analysis complete - check .next/analyze/client.html\n');
  } catch (error) {
    console.log('❌ Bundle analysis failed:', error.message, '\n');
  }

  // 2. Lighthouse CLI (if available)
  console.log('🔍 Running Lighthouse audit...');
  try {
    await runCommand('npx', ['lighthouse', 'http://localhost:3000', '--output=html', '--output-path=./lighthouse-report.html', '--chrome-flags="--headless"']);
    console.log('✅ Lighthouse audit complete - check lighthouse-report.html\n');
  } catch (error) {
    console.log('❌ Lighthouse not available, skipping...\n');
  }

  // 3. Check for common performance issues
  console.log('🔧 Checking for common performance issues...');
  await checkPerformanceIssues();

  console.log('🎉 Performance audit complete!');
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Command failed with code ${code}`));
    });
  });
}

async function checkPerformanceIssues() {
  const issues = [];

  // Check for large dependencies
  if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const largeDeps = ['moment', 'lodash', '@material-ui/core'];
    
    largeDeps.forEach(dep => {
      if (pkg.dependencies && pkg.dependencies[dep]) {
        issues.push(`⚠️  Large dependency detected: ${dep} - consider alternatives`);
      }
    });
  }

  // Check for unoptimized images
  const imageFormats = ['.jpg', '.jpeg', '.png'];
  const publicDir = path.join(process.cwd(), 'public');
  
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir, { recursive: true });
    const largeImages = files.filter(file => {
      const filePath = path.join(publicDir, file);
      if (fs.lstatSync(filePath).isFile() && imageFormats.some(format => file.endsWith(format))) {
        const stats = fs.statSync(filePath);
        return stats.size > 500 * 1024; // > 500KB
      }
      return false;
    });

    if (largeImages.length > 0) {
      issues.push(`⚠️  Large images detected (${largeImages.length}) - consider optimization`);
    }
  }

  // Check for excessive re-renders (basic static analysis)
  const componentFiles = [];
  function findComponents(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        findComponents(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        componentFiles.push(filePath);
      }
    });
  }

  findComponents(path.join(process.cwd(), 'src'));
  
  let componentsWithoutMemo = 0;
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('export default') && !content.includes('memo(') && !content.includes('React.memo')) {
      componentsWithoutMemo++;
    }
  });

  if (componentsWithoutMemo > 5) {
    issues.push(`⚠️  ${componentsWithoutMemo} components without React.memo - consider memoization`);
  }

  if (issues.length === 0) {
    console.log('✅ No obvious performance issues detected');
  } else {
    console.log('Performance recommendations:');
    issues.forEach(issue => console.log(issue));
  }
  
  console.log('');
}

if (require.main === module) {
  runPerformanceAudit().catch(console.error);
}

module.exports = { runPerformanceAudit }; 