import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About InsureTravel | Your Trusted Travel Insurance Partner',
  description: 'Learn about InsureTravel, your trusted partner for comprehensive travel insurance solutions. We provide expert guidance and competitive quotes for all your travel insurance needs.',
  openGraph: {
    title: 'About InsureTravel | Your Trusted Travel Insurance Partner',
    description: 'Learn about InsureTravel, your trusted partner for comprehensive travel insurance solutions. We provide expert guidance and competitive quotes for all your travel insurance needs.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About InsureTravel</h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in travel protection since 2010
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Our Mission</h2>
          <p>
            At InsureTravel, we believe that everyone deserves peace of mind while traveling. 
            Our mission is to provide accessible, comprehensive travel insurance solutions that 
            protect travelers from unexpected events and ensure worry-free journeys.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Expert guidance from licensed insurance professionals</li>
            <li>Competitive quotes from top-rated insurance providers</li>
            <li>24/7 customer support and emergency assistance</li>
            <li>Comprehensive coverage options for all types of travel</li>
            <li>Fast and easy online quote process</li>
          </ul>

          <h2>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3>Trust & Reliability</h3>
              <p>We build lasting relationships with our customers through transparency and reliability.</p>
            </div>
            <div>
              <h3>Customer First</h3>
              <p>Your needs and satisfaction are our top priorities.</p>
            </div>
            <div>
              <h3>Innovation</h3>
              <p>We continuously improve our services to better serve our customers.</p>
            </div>
            <div>
              <h3>Expertise</h3>
              <p>Our team consists of experienced insurance professionals.</p>
            </div>
          </div>
        </div>

        {/* Structured data for the About page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About InsureTravel",
              "description": "Learn about InsureTravel, your trusted partner for comprehensive travel insurance solutions.",
              "publisher": {
                "@type": "Organization",
                "name": "InsureTravel",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://lovable.dev/opengraph-image-p98pqg.png"
                }
              },
              "mainEntity": {
                "@type": "Organization",
                "name": "InsureTravel",
                "description": "Your trusted partner in travel protection since 2010",
                "url": "https://your-domain.com",
                "sameAs": [
                  "https://twitter.com/insuretravel",
                  "https://www.facebook.com/insuretravel",
                  "https://www.linkedin.com/company/insuretravel"
                ]
              }
            })
          }}
        />
      </article>
    </div>
  )
} 