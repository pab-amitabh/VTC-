import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Travel Insurance Blog | Tips, Guides & Latest Updates',
  description: 'Expert advice on travel insurance, coverage guides, and industry updates. Learn about travel safety, insurance requirements, and how to choose the right plan.',
  openGraph: {
    title: 'Travel Insurance Blog | Tips, Guides & Latest Updates',
    description: 'Expert advice on travel insurance, coverage guides, and industry updates. Learn about travel safety, insurance requirements, and how to choose the right plan.',
    type: 'website',
  },
}

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Travel Insurance Coverage: A Complete Guide',
    slug: 'understanding-travel-insurance-coverage',
    excerpt: 'Learn everything you need to know about travel insurance coverage, including medical benefits, trip cancellation, and baggage protection.',
    date: '2024-03-15',
    category: 'Guides',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Top 10 Travel Insurance Myths Debunked',
    slug: 'travel-insurance-myths-debunked',
    excerpt: 'Discover the truth behind common travel insurance misconceptions and make informed decisions about your coverage.',
    date: '2024-03-10',
    category: 'Tips',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'How to Choose the Right Travel Insurance Plan',
    slug: 'choose-right-travel-insurance-plan',
    excerpt: 'A comprehensive guide to selecting the perfect travel insurance plan based on your needs, destination, and budget.',
    date: '2024-03-05',
    category: 'Guides',
    readTime: '10 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Insurance Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert insights, guides, and updates to help you make informed decisions about your travel insurance needs.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-deepBlue">{post.category}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-deepBlue transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <time dateTime={post.date} className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-deepBlue hover:text-deepBlue/80 font-medium text-sm"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Structured data for the blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Travel Insurance Blog",
            "description": "Expert advice on travel insurance, coverage guides, and industry updates.",
            "url": "https://your-domain.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "InsureTravel",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lovable.dev/opengraph-image-p98pqg.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "InsureTravel"
              }
            }))
          })
        }}
      />
    </div>
  )
} 