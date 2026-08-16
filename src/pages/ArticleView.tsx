import React from 'react'
import { Link } from 'react-router-dom'
import { getArticleBySlug, getCategoryById, getAuthorById } from '@/lib/content'

// The URL params will be provided by react-router via useParams() inside the actual route component,
// but for simplicity we can just receive the slug as a prop or use the hook directly.
import { useParams, Navigate } from 'react-router-dom'
import { AdSlot } from '@/components/monetization/AdSlot'

export const ArticleView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug || '')

  if (!article) {
    return <Navigate to="/404" replace />
  }

  const category = getCategoryById(article.categoryId)
  const author = getAuthorById(article.authorId)
  
  const dateStr = new Date(article.publishedAt).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {category && (
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-0.5 bg-editorial-accent"></span>
          <Link to={`/categoria/${category.slug}`} className="text-sm font-bold text-editorial-accent uppercase tracking-widest hover:underline underline-offset-4">
            {category.name}
          </Link>
        </div>
      )}

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-editorial-primary leading-[1.1] mb-8">
        {article.title}
      </h1>

      <p className="text-xl md:text-2xl text-editorial-secondary font-sans leading-relaxed mb-10 border-l-4 border-editorial-primary/20 pl-6">
        {article.excerpt}
      </p>

      <div className="flex flex-wrap items-center justify-between border-y-2 border-editorial-primary/20 py-4 mb-12">
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-editorial-primary">
          {author && <span>POR {author.name}</span>}
          <span className="text-editorial-accent">•</span>
          <time dateTime={article.publishedAt}>{dateStr}</time>
        </div>
        <div className="text-sm font-bold text-editorial-secondary uppercase tracking-widest mt-4 sm:mt-0">
          Leitura: {article.readingTime} min
        </div>
      </div>

      <div className="aspect-[21/9] w-full overflow-hidden bg-gray-200 mb-12 border-2 border-editorial-primary">
        <img 
          src={article.coverImage} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg md:prose-xl prose-editorial max-w-none font-sans text-editorial-primary leading-relaxed mb-16">
        {/* Usamos dangerouslySetInnerHTML apenas para o nosso mock seguro, mas num projeto real deveríamos higienizar */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      <div className="mt-16 mb-8">
        <AdSlot slot="article_bottom" className="w-full h-48 border-2 border-editorial-primary bg-white flex items-center justify-center text-editorial-secondary font-bold" />
      </div>
    </main>
  )
}
