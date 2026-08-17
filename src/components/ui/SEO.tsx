import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  author?: string
  publishedTime?: string
  structuredData?: Record<string, any>
}

const SITE_URL = 'https://muacynerd.net'
const DEFAULT_IMAGE = `${SITE_URL}/og-default.jpg`
const SITE_NAME = 'MuacyNerd'

export const SEO = ({
  title,
  description = 'Portal de notícias e artigos independentes com visão editorial premium.',
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  type = 'website',
  author,
  publishedTime,
  structuredData,
}: SEOProps) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
