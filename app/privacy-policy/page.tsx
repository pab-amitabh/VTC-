import { Metadata } from 'next'
import { IMAGES } from '@/config/images'

export const metadata: Metadata = {
  title: 'Privacy Policy | InsureTravel',
  description: 'Learn about how InsureTravel collects, uses, and protects your personal information. Our privacy policy outlines your rights and our commitment to data protection.',
  openGraph: {
    title: 'Privacy Policy | InsureTravel',
    description: 'Learn about how InsureTravel collects, uses, and protects your personal information.',
    images: [{
      url: IMAGES.og.default.src,
      width: IMAGES.og.default.width,
      height: IMAGES.og.default.height,
      alt: IMAGES.og.default.alt
    }]
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          At InsureTravel, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information</li>
            <li>Date of birth and age</li>
            <li>Travel details and insurance preferences</li>
            <li>Payment information</li>
            <li>Medical information (for insurance purposes)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and maintain our services</li>
          <li>To process your insurance applications</li>
          <li>To communicate with you about your policy</li>
          <li>To improve our services</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
        <p className="mb-4">
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Insurance providers and underwriters</li>
          <li>Service providers and business partners</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p>Email: privacy@insuretravel.com</p>
          <p>Phone: 1-800-INSURANCE</p>
          <p>Address: 123 Insurance Street, Toronto, ON M5V 2H1</p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | InsureTravel",
            "description": "Learn about how InsureTravel collects, uses, and protects your personal information.",
            "publisher": {
              "@type": "Organization",
              "name": "InsureTravel",
              "logo": {
                "@type": "ImageObject",
                "url": IMAGES.logo.src
              }
            },
            "mainEntity": {
              "@type": "Article",
              "name": "Privacy Policy",
              "dateModified": new Date().toISOString(),
              "author": {
                "@type": "Organization",
                "name": "InsureTravel"
              }
            }
          })
        }}
      />
    </main>
  )
} 