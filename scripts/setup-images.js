const fs = require('fs');
const path = require('path');
let canvasModule = null;

try {
  // Try to require canvas, but don't fail if it's not available
  canvasModule = require('canvas');
  console.log('Canvas module loaded successfully.');
} catch (error) {
  console.warn('Canvas module not available. Will skip creating PNG images.');
}

// Define the directory structure
const directories = [
  'public/images',
  'public/images/icons',
  'public/images/social',
  'public/images/og',
  'public/images/blog',
];

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to create a placeholder image
function createPlaceholderImage(width, height, text, outputPath) {
  // Skip if canvas is not available
  if (!canvasModule) {
    console.log(`Skipped image: ${outputPath} (canvas not available)`);
    return;
  }

  const { createCanvas } = canvasModule;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#1f2937';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Created image: ${outputPath}`);
}

// Create placeholder images
const images = [
  {
    path: 'public/images/logo.png',
    width: 180,
    height: 60,
    text: 'Logo'
  },
  {
    path: 'public/images/hero.jpg',
    width: 1920,
    height: 1080,
    text: 'Hero Image'
  },
  {
    path: 'public/images/og/default.jpg',
    width: 1200,
    height: 630,
    text: 'Default OG Image'
  },
  {
    path: 'public/images/og/about.jpg',
    width: 1200,
    height: 630,
    text: 'About OG Image'
  },
  {
    path: 'public/images/og/contact.jpg',
    width: 1200,
    height: 630,
    text: 'Contact OG Image'
  },
  {
    path: 'public/images/og/blog.jpg',
    width: 1200,
    height: 630,
    text: 'Blog OG Image'
  },
  {
    path: 'public/images/blog/default.jpg',
    width: 800,
    height: 450,
    text: 'Blog Default'
  }
];

// Create SVG icons
const svgIcons = {
  'public/images/icons/visitor-insurance.svg': '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="#E5E7EB"/><text x="32" y="32" text-anchor="middle" dominant-baseline="middle" fill="#1F2937" font-family="Arial" font-size="12">Visitor</text></svg>',
  'public/images/icons/super-visa-insurance.svg': '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="#E5E7EB"/><text x="32" y="32" text-anchor="middle" dominant-baseline="middle" fill="#1F2937" font-family="Arial" font-size="12">Super Visa</text></svg>',
  'public/images/icons/travel-medical-insurance.svg': '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="#E5E7EB"/><text x="32" y="32" text-anchor="middle" dominant-baseline="middle" fill="#1F2937" font-family="Arial" font-size="12">Medical</text></svg>',
  'public/images/icons/trip-cancellation-insurance.svg': '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="#E5E7EB"/><text x="32" y="32" text-anchor="middle" dominant-baseline="middle" fill="#1F2937" font-family="Arial" font-size="12">Trip</text></svg>',
  'public/images/icons/student-insurance.svg': '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="#E5E7EB"/><text x="32" y="32" text-anchor="middle" dominant-baseline="middle" fill="#1F2937" font-family="Arial" font-size="12">Student</text></svg>',
};

// Create social media icons
const socialIcons = {
  'public/images/social/facebook.svg': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/></svg>',
  'public/images/social/twitter.svg': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#1DA1F2"/></svg>',
  'public/images/social/linkedin.svg': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/></svg>',
};

// Create all placeholder images
images.forEach(image => {
  createPlaceholderImage(image.width, image.height, image.text, image.path);
});

// Create SVG icons
Object.entries(svgIcons).forEach(([path, svg]) => {
  fs.writeFileSync(path, svg);
  console.log(`Created SVG: ${path}`);
});

// Create social media icons
Object.entries(socialIcons).forEach(([path, svg]) => {
  fs.writeFileSync(path, svg);
  console.log(`Created SVG: ${path}`);
});

console.log('Image setup completed successfully!'); 