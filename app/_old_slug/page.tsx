import React from 'react'
import { ClientOnly } from './client'
import { Metadata } from 'next'

export function generateStaticParams() {
  return []
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Travel Insurance Quotes & Coverage | InsureTravel',
    description: 'Compare travel insurance quotes from top providers. Get comprehensive coverage for medical emergencies, trip cancellation, and more. Instant quotes, 24/7 support.',
    keywords: [
      'travel insurance quotes',
      'travel medical insurance',
      'trip cancellation insurance',
      'visitor insurance canada',
      'super visa insurance',
      'travel insurance comparison',
      'best travel insurance',
      'cheap travel insurance',
      'travel insurance coverage',
      'emergency medical insurance'
    ],
    alternates: {
      canonical: 'https://your-domain.com',
    },
    openGraph: {
      title: 'Travel Insurance Quotes & Coverage | InsureTravel',
      description: 'Compare travel insurance quotes from top providers. Get comprehensive coverage for medical emergencies, trip cancellation, and more. Instant quotes, 24/7 support.',
      url: 'https://your-domain.com',
      siteName: 'InsureTravel',
      images: [
        {
          url: 'https://lovable.dev/opengraph-image-p98pqg.png',
          width: 1200,
          height: 630,
          alt: 'InsureTravel - Compare Travel Insurance Quotes'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Travel Insurance Quotes & Coverage | InsureTravel',
      description: 'Compare travel insurance quotes from top providers. Get comprehensive coverage for medical emergencies, trip cancellation, and more. Instant quotes, 24/7 support.',
      images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
    },
  }
}

export default function Page() {
  return <ClientOnly />
} 