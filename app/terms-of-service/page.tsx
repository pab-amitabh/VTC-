"use client"

import { Metadata } from 'next'
import { IMAGES } from '@/config/images'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

// Metadata can't be used in Client Components, so we'll need to set it differently
// export const metadata: Metadata = {
//   title: 'Terms of Service | InsureTravel',
//   description: 'Read our Terms of Service to understand your rights and responsibilities when using InsureTravel services.',
//   openGraph: {
//     title: 'Terms of Service | InsureTravel',
//     description: 'Read our Terms of Service to understand your rights and responsibilities when using InsureTravel services.',
//     images: [{
//       url: IMAGES.og.default.src,
//       width: IMAGES.og.default.width,
//       height: IMAGES.og.default.height,
//       alt: IMAGES.og.default.alt
//     }]
//   }
// }

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">TERMS AND CONDITIONS</h1>
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <p className="mb-4">
            Welcome to [insert company name here] ("we", "us", or "our"). We operate the website [insert website here] (the "Site"), which provides Canadian visitor insurance quotes, comparisons, and policy purchase options (the "Services") for travellers visiting Canada.
          </p>
          <p className="mb-4">
            These Terms of Service ("Terms") govern your use of our Site and Services, including applying for and purchasing visitor insurance through us. By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our Site or Services.
          </p>
          <p className="mb-4">
            We may update these Terms periodically, and your continued use of the Site means you accept those changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">General terms of use</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">About us</h3>
          <p className="mb-4">
            We are a licensed insurance brokerage offering visitor insurance for travellers to Canada. We operate under provincial regulators, including the Financial Services Regulatory Authority of Ontario (FSRA), Insurance Council of British Columbia, Alberta Insurance Council (AIC), and Insurance Council of Manitoba (ICM).
          </p>
          <p className="mb-4">
            We don't sell our own insurance policies. Instead, we connect individuals with visitors to Canada insurance policies from some of the most trusted Canadian insurance providers. Our digital tools and expert advisors help users understand their options and choose the right coverage based on the information they provide.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Our offerings</h3>
          <p className="mb-4">Our services in the field of visitor insurance in Canada include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Insurance quotes: We generate affordable visitor to Canada insurance quotes from licensed Canadian insurers</li>
            <li>Policy comparisons: We provide side-by-side comparisons to help you evaluate coverage, benefits, and prices</li>
            <li>Needs assessment: Our tools help assess your insurance needs based on your travel plans and personal requirements</li>
            <li>Educational resources: We offer clear, easy-to-read content to help you understand visitor insurance</li>
            <li>Policy purchase: We help you apply for and buy an affordable visitor insurance plan that fits your overall needs</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Our independent advice policy</h3>
          <p className="mb-4">
            We offer unbiased recommendations based on your profile, your unique needs, and available insurance products. Our advice is limited to insurers who share product data with us or partner with us to offer their policies. We regularly review these partnerships to ensure a wide and fair representation of the market.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">In which provinces do we offer our services?</h3>
          <p className="mb-4">
            We offer visitor insurance services to residents of Ontario, British Columbia, Alberta, and Manitoba. If you live outside these provinces or outside Canada, you can still browse parts of our website, but you can't buy insurance through us. We may restrict access to certain content or services based on your location.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">How do we provide visitor insurance quotes?</h3>
          <p className="mb-4">
            We get visitor insurance quotes from an independent third-party provider. The quotes come directly from the top licensed insurers in Canada, we don't set the prices. The quotes you see may vary in type, number, or duration based on insurer availability and product offerings.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">What is the validity of the quotes that we offer?</h3>
          <p className="mb-4">
            All the visitor insurance quotes on our website are estimates based on the details that you provide. They are not final offers or guarantees of coverage. Our partner insurers will review your information and may adjust the price of premiums after underwriting.
          </p>
          <p className="mb-4">
            Your premium rate is only confirmed once you complete the application, sign it, and pay. We are not responsible for any changes in price, availability, or approval. To avoid delays or denial, please ensure all information you enter is accurate and up-to-date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Additional terms for using our website</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Accessing our website</h3>
          <p className="mb-4">
            You are responsible for making any arrangements required to access our website. While we aim to keep the site available at all times, we do not guarantee uninterrupted access. The website, its content, or any of our services may become temporarily or permanently unavailable without notice. We are not liable for any loss or inconvenience caused by downtime, interruptions, or changes to the site.
          </p>
          <p className="mb-4">
            We may update, restrict, suspend, or remove any part of the website at any time, without prior notice. To use our services or apply for visitor insurance through our platform, you must be at least 18 years old.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Collection and use of personal information</h3>
          <p className="mb-4">
            When you use certain features of our site, such as getting a quote or applying for visitor insurance, we collect personally identifiable information (PII), such as your name, contact details, and travel-related information. We may share this information with our licensed insurance partners to process your request and offer coverage.
          </p>
          <p className="mb-4">
            We collect, use, and store your personal data in accordance with applicable privacy laws and our own internal policies. For more information on how we handle your data, including your rights and options, please refer to our Privacy Policy, which forms part of these Terms of Use.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Third-party links</h3>
          <p className="mb-4">
            Our site may link to third-party websites or services. We don't control or endorse them and aren't responsible for their content or policies. You access them at your own risk. We're not liable for any issues that arise from using third-party sites.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Site content</h3>
          <p className="mb-4">
            We help you compare visitor insurance plans from third-party insurers, we don't sell our own insurance. While we aim to keep information accurate, we can't guarantee it's always up to date.
          </p>
          <p className="mb-4">
            You're responsible for your decisions based on the content we provide. We don't offer financial advice and aren't liable for any resulting actions or damages.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Product availability</h3>
          <p className="mb-4">
            The availability of visitor insurance in Canada varies by province. Some products shown may not be offered to you based on where you live. All coverage is subject to each insurer's terms and approval. Product details may change without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Prohibited activities</h2>
          <p className="mb-4">To purchase visitor insurance in Canada from our website, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Use our services for illegal or unauthorized purposes</li>
            <li>Violate others' rights, including intellectual property</li>
            <li>Disrupt our site or security features</li>
            <li>Upload harmful code or collect personal data without consent</li>
            <li>Use bots, scrapers, or automated tools without permission</li>
            <li>Impersonate others or give false information</li>
            <li>Share, sell, or transfer your access to our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Copyright and trademarks</h2>
          <p className="mb-4">
            All content on our site is protected by Canadian copyright laws and belongs to us, unless noted otherwise. Third-party trademarks remain the property of their respective owners.
          </p>
          <p className="mb-4">
            You may not copy, share, or reuse any content without our written permission. We may change, suspend, or remove any part of the site or services at any time, without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How do we communicate with you?</h2>
          <p className="mb-4">
            We'll contact you by email using the address you provide. By using our services, you agree to receive all communication electronically, we don't send paper mail. If you're looking to reach out to us, email us at [emailaddress] or reach us via our website chat.
          </p>
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
                  "url": IMAGES.logo?.src
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
      <Footer />
    </>
  )
} 