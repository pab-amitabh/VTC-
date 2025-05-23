import React from 'react';
import './globals.css';
import { Metadata } from 'next';
import { IMAGES } from '@/config/images';
import SmoothScroll from '../src/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://insuretravel.com'),
  title: {
    default: 'InsureTravel - Comprehensive Travel Insurance Solutions',
    template: '%s | InsureTravel'
  },
  description: 'Get comprehensive travel insurance coverage for your journey. Compare plans, get instant quotes, and protect your trip with InsureTravel.',
  keywords: ['travel insurance', 'medical insurance', 'trip cancellation', 'visitor insurance', 'super visa insurance', 'student insurance'],
  authors: [{ name: 'InsureTravel' }],
  creator: 'InsureTravel',
  publisher: 'InsureTravel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://insuretravel.com',
    siteName: 'InsureTravel',
    title: 'InsureTravel - Comprehensive Travel Insurance Solutions',
    description: 'Get comprehensive travel insurance coverage for your journey. Compare plans, get instant quotes, and protect your trip with InsureTravel.',
    images: [{
      url: IMAGES.og.default.src,
      width: IMAGES.og.default.width,
      height: IMAGES.og.default.height,
      alt: IMAGES.og.default.alt
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InsureTravel - Comprehensive Travel Insurance Solutions',
    description: 'Get comprehensive travel insurance coverage for your journey. Compare plans, get instant quotes, and protect your trip with InsureTravel.',
    images: [{
      url: IMAGES.og.default.src,
      width: IMAGES.og.default.width,
      height: IMAGES.og.default.height,
      alt: IMAGES.og.default.alt
    }]
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'bing': 'your-bing-verification-code'
    }
  },
  alternates: {
    canonical: 'https://insuretravel.com',
    languages: {
      'en-CA': 'https://insuretravel.com',
      'fr-CA': 'https://insuretravel.com/fr'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Abril+Fatface&display=swap" rel="stylesheet" />
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('ServiceWorker registration successful');
                    })
                    .catch(err => {
                      console.log('ServiceWorker registration failed: ', err);
                    });
                });
              }
            `
          }}
        />

        {/* Preload Critical Images */}
        <link 
          rel="preload" 
          href={IMAGES.logo.src} 
          as="image" 
          type="image/png"
        />
        <link 
          rel="preload" 
          href={IMAGES.og.default.src} 
          as="image" 
          type="image/jpeg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, shrink-to-fit=no" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
} 