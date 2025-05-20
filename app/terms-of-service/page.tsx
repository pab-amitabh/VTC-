import { Metadata } from 'next'
import { IMAGES } from '@/config/images'

export const metadata: Metadata = {
  title: 'Terms of Service | InsureTravel',
  description: 'Read our Terms of Service to understand your rights and responsibilities when using InsureTravel services. Learn about our policies, user obligations, and service terms.',
  openGraph: {
    title: 'Terms of Service | InsureTravel',
    description: 'Read our Terms of Service to understand your rights and responsibilities when using InsureTravel services.',
    images: [{
      url: IMAGES.og.default.src,
      width: IMAGES.og.default.width,
      height: IMAGES.og.default.height,
      alt: IMAGES.og.default.alt
    }]
  }
}

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using InsureTravel's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
        <div className="space-y-4">
          <p>Our services are intended for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Individuals seeking travel insurance coverage</li>
            <li>Authorized insurance agents and brokers</li>
            <li>Businesses looking for group travel insurance</li>
          </ul>
          <p className="mt-4">You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Insurance Policies</h2>
        <div className="space-y-4">
          <p>Important information about insurance policies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All insurance policies are subject to the terms and conditions of the specific insurance provider</li>
            <li>Coverage details and exclusions are specified in each policy document</li>
            <li>Premium rates are subject to change based on various factors</li>
            <li>Claims are processed according to the insurance provider's procedures</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
        <div className="space-y-4">
          <p>When creating an account, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Be responsible for all activities under your account</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p className="mb-4">
          All content, features, and functionality of our services are owned by InsureTravel and are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">
          InsureTravel shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p>For questions about these Terms, please contact us at:</p>
          <p>Email: legal@insuretravel.com</p>
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
            "name": "Terms of Service | InsureTravel",
            "description": "Read our Terms of Service to understand your rights and responsibilities when using InsureTravel services.",
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
              "name": "Terms of Service",
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