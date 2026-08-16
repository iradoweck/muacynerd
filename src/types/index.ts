export type SEOData = {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export type Category = {
  id: string
  slug: string
  name: string
  description: string
}

export type Author = {
  id: string
  slug: string
  name: string
  bio: string
  avatarUrl: string
  twitterUrl?: string
  linkedinUrl?: string
}

export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // Conteúdo Markdown ou HTML estático
  coverImage: string
  publishedAt: string
  updatedAt?: string
  categoryId: string
  authorId: string
  tags: string[]
  featured: boolean
  seo?: SEOData
}
