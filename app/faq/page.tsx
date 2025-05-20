import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Insurance FAQ | Common Questions Answered',
  description: 'Find answers to common questions about travel insurance, coverage options, claims process, and more. Get expert guidance on choosing the right travel insurance plan.',
  openGraph: {
    title: 'Travel Insurance FAQ | Common Questions Answered',
    description: 'Find answers to common questions about travel insurance, coverage options, claims process, and more. Get expert guidance on choosing the right travel insurance plan.',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What is travel insurance and why do I need it?',
    answer: 'Travel insurance provides coverage for unexpected events during your trip, including medical emergencies, trip cancellation, lost luggage, and more. It\'s essential for protecting your investment and ensuring peace of mind while traveling.'
  },
  {
    question: 'What does travel insurance typically cover?',
    answer: 'Travel insurance typically covers medical emergencies, trip cancellation or interruption, lost or delayed baggage, travel delays, and emergency evacuation. Coverage varies by plan, so it\'s important to review the specific policy details.'
  },
  {
    question: 'When should I purchase travel insurance?',
    answer: 'It\'s best to purchase travel insurance as soon as you book your trip. This ensures you\'re covered for trip cancellation from the start and may provide additional benefits like pre-existing condition coverage.'
  },
  {
    question: 'How much does travel insurance cost?',
    answer: 'Travel insurance costs vary based on factors such as trip duration, destination, coverage amount, and traveler\'s age. On average, it costs 4-10% of your total trip cost.'
  },
  {
    question: 'What is pre-existing condition coverage?',
    answer: 'Pre-existing condition coverage protects you for medical issues that existed before purchasing the insurance. Not all plans include this coverage, so it\'s important to check the policy details if you have pre-existing conditions.'
  },
  {
    question: 'How do I file a travel insurance claim?',
    answer: 'To file a claim, contact your insurance provider as soon as possible after the incident. You\'ll need to provide documentation such as receipts, medical reports, and police reports. Most providers offer online claim submission.'
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about travel insurance
          </p>
        </header>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </article>
    </div>
  )
} 