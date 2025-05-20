// This is a proper page component for the root route
import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Import the same App component used in the catch-all route
const App = dynamic(() => import('../src/App'), { ssr: false });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Visitor to Canada Insurance: Compare Quotes | InsureTravel',
    description: 'Compare affordable Visitor to Canada insurance plans from 30+ trusted providers. Get customized coverage for tourists, students, & Super Visa in minutes!',
    keywords: [
      'visitor to canada insurance',
      'travel insurance canada',
      'super visa insurance',
      'visitor insurance quotes',
      'medical insurance visitors',
      'travel medical insurance',
      'trip cancellation insurance',
      'visitor insurance canada',
      'canada visitor insurance comparison',
      'emergency medical insurance'
    ],
    alternates: {
      canonical: 'https://insuretravel.com',
    },
    openGraph: {
      title: 'Visitor to Canada Insurance: Compare Quotes | InsureTravel',
      description: 'Compare affordable Visitor to Canada insurance plans from 30+ trusted providers. Get customized coverage for tourists, students, & Super Visa in minutes!',
      url: 'https://insuretravel.com',
      siteName: 'InsureTravel',
      images: [
        {
          url: 'https://lovable.dev/opengraph-image-p98pqg.png',
          width: 1200,
          height: 630,
          alt: 'InsureTravel - Compare Visitor to Canada Insurance Quotes'
        }
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Visitor to Canada Insurance: Compare Quotes | InsureTravel',
      description: 'Compare affordable Visitor to Canada insurance plans from 30+ trusted providers. Get customized coverage for tourists, students, & Super Visa in minutes!',
      images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
    },
  }
}

export default function Home() {
  return <App />;
} 