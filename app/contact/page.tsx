import { Metadata } from 'next'
import { IMAGES } from '@/config/images'

export const metadata: Metadata = {
  title: 'Contact Us | InsureTravel',
  description: 'Get in touch with InsureTravel for any questions about travel insurance, quotes, or support. Our team is here to help you find the right coverage for your needs.',
  openGraph: {
    title: 'Contact Us | InsureTravel',
    description: 'Get in touch with InsureTravel for any questions about travel insurance, quotes, or support.',
    images: [{
      url: IMAGES.og.default.src,
      width: IMAGES.og.default.width,
      height: IMAGES.og.default.height,
      alt: IMAGES.og.default.alt
    }]
  },
}

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about travel insurance? Our team is here to help you find the right coverage for your needs.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">1-800-INSURANCE</p>
                <p className="text-sm text-gray-500">Monday to Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">support@insuretravel.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Office</h3>
                <p className="text-gray-600">123 Insurance Street</p>
                <p className="text-gray-600">Toronto, ON M5V 2H1</p>
                <p className="text-sm text-gray-500">By appointment only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us | InsureTravel",
            "description": "Get in touch with InsureTravel for any questions about travel insurance, quotes, or support.",
            "publisher": {
              "@type": "Organization",
              "name": "InsureTravel",
              "logo": {
                "@type": "ImageObject",
                "url": IMAGES.logo.src
              }
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "InsureTravel",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Insurance Street",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M5V 2H1",
                "addressCountry": "CA"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "1-800-INSURANCE",
                  "contactType": "customer service",
                  "areaServed": "CA",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "email": "support@insuretravel.com",
                  "contactType": "customer service"
                }
              ]
            }
          })
        }}
      />
    </main>
  )
} 