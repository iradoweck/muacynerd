import React from 'react'
import { Link } from 'react-router-dom'
import type { Article } from '@/types'
import { getCategoryById, getAuthorById } from '@/lib/content'

type NewsCardProps = {
  article: Article
  compact?: boolean
  featured?: boolean
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, compact = false, featured = false }) => {
  const category = getCategoryById(article.categoryId)
  const author = getAuthorById(article.authorId)
  
  const dateStr = new Date(article.publishedAt).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  // Variante: Listagem Compacta (Lateral)
  if (compact) {
    return (
      <article className="group flex gap-5 items-start py-5 border-b border-editorial-primary/20 last:border-0">
        <div className="w-28 aspect-square flex-shrink-0 overflow-hidden bg-gray-200">
          <img 
            src={article.coverImage} 
            alt={article.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center min-h-[7rem]">
          {category && (
            <Link to={`/categoria/${category.slug}`} className="text-xs font-bold text-editorial-accent uppercase tracking-widest mb-2 block hover:underline underline-offset-4">
              {category.name}
            </Link>
          )}
          <h3 className="text-lg font-serif font-bold text-editorial-primary leading-tight group-hover:text-editorial-accent transition-colors">
            <Link to={`/artigo/${article.slug}`}>{article.title}</Link>
          </h3>
        </div>
      </article>
    )
  }

  // Variante: Destaque Principal
  if (featured) {
    return (
      <article className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 border-b-[3px] border-editorial-primary mb-8">
        <div className="aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden bg-gray-200 order-2 md:order-1">
          <img 
            src={article.coverImage} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        
        <div className="flex flex-col justify-center order-1 md:order-2 py-4 md:py-8">
          {category && (
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-0.5 bg-editorial-accent"></span>
              <Link to={`/categoria/${category.slug}`} className="text-sm font-bold text-editorial-accent uppercase tracking-widest hover:underline underline-offset-4">
                {category.name}
              </Link>
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-editorial-primary leading-[1.1] mb-6 group-hover:text-editorial-accent transition-colors">
            <Link to={`/artigo/${article.slug}`}>{article.title}</Link>
          </h2>
          
          <p className="text-lg text-editorial-secondary font-sans leading-relaxed mb-8 border-l-2 border-editorial-primary/20 pl-4">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-editorial-primary">
            {author && <span>POR {author.name}</span>}
            <span className="text-editorial-accent">•</span>
            <time dateTime={article.publishedAt}>{dateStr}</time>
          </div>
        </div>
      </article>
    )
  }

  // Variante: Padrão (Grid)
  return (
    <article className="group flex flex-col h-full border border-editorial-primary/20 bg-editorial-bg p-5 hover:bg-white transition-colors duration-300">
      <div className="aspect-video w-full overflow-hidden bg-gray-200 mb-5 border border-editorial-primary/10">
        <img 
          src={article.coverImage} 
          alt={article.title} 
          className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        {category && (
          <Link to={`/categoria/${category.slug}`} className="text-xs font-bold text-editorial-accent uppercase tracking-widest mb-3 hover:underline underline-offset-4 block">
            {category.name}
          </Link>
        )}
        <h3 className="text-2xl font-serif font-bold text-editorial-primary leading-tight mb-4 group-hover:text-editorial-accent transition-colors">
          <Link to={`/artigo/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-editorial-secondary text-sm leading-relaxed line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
      </div>
      
      <div className="pt-6 mt-6 border-t border-editorial-primary/20 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
        {author && <span className="text-editorial-primary truncate">{author.name}</span>}
        <time dateTime={article.publishedAt}>{dateStr}</time>
      </div>
    </article>
  )
}
