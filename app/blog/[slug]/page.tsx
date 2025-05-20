import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or database
const blogPosts = {
  'understanding-travel-insurance-coverage': {
    title: 'Understanding Travel Insurance Coverage: A Complete Guide',
    content: `
      <h2>What is Travel Insurance?</h2>
      <p>Travel insurance is a type of insurance that covers various risks while traveling, including medical emergencies, trip cancellation, lost luggage, and more.</p>
      
      <h2>Types of Coverage</h2>
      <h3>Medical Coverage</h3>
      <p>Medical coverage is essential for any international trip. It covers emergency medical expenses, hospital stays, and medical evacuation if necessary.</p>
      
      <h3>Trip Cancellation</h3>
      <p>Trip cancellation coverage protects your investment if you need to cancel your trip due to covered reasons such as illness, injury, or other unforeseen circumstances.</p>
      
      <h3>Baggage Protection</h3>
      <p>Baggage protection covers lost, stolen, or damaged luggage and personal belongings during your trip.</p>
    `,
    date: '2024-03-15',
    author: 'InsureTravel Team',
    readTime: '8 min read',
    category: 'Guides',
  },
  // Add more blog posts here
}

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | InsureTravel Blog`,
    description: post.content.replace(/<[^>]*>/g, '').slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, '').slice(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, '').slice(0, 160),
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-deepBlue">{post.category}</span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Structured data for the blog post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.content.replace(/<[^>]*>/g, '').slice(0, 160),
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "InsureTravel",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lovable.dev/opengraph-image-p98pqg.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://your-domain.com/blog/${params.slug}`
            }
          })
        }}
      />
    </article>
  )
} 