import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: string;
  author?: string;
}

export default function SEO({ 
  title = 'Event Space Atlanta - Find Your Perfect Venue',
  description = 'Discover unique venues for weddings, corporate events, and special occasions in Atlanta. Book with confidence.',
  image = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
  url = 'https://eventspaceatlanta.com',
  type = 'website',
  keywords = ['event space', 'atlanta venues', 'wedding venues', 'corporate events', 'party venues'],
  canonicalUrl,
  ogType = 'website',
  author = 'Event Space Atlanta'
}: SEOProps) {
  const siteTitle = 'Event Space Atlanta';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl || url} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebSite',
          name: siteTitle,
          url: url,
          description: description,
          author: {
            "@type": "Organization",
            name: author
          },
          publisher: {
            "@type": "Organization",
            name: siteTitle,
            logo: {
              "@type": "ImageObject",
              url: "https://eventspaceatlanta.com/logo.png"
            }
          },
          image: image,
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
}