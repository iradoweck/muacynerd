import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getArticlesByCategory, getAllCategories } from '@/lib/content'
import { NewsCard } from '@/components/content/NewsCard'
import { SEO } from '@/components/ui/SEO'

export const CategoryView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const categories = getAllCategories()
  const category = categories.find(c => c.slug === slug)

  if (!category) {
    return <Navigate to="/404" replace />
  }

  const articles = getArticlesByCategory(category.id)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO 
        title={`${category.name} | MuacyNerd`}
        description={category.description || `Leia as últimas notícias sobre ${category.name}`}
        url={`https://muacynerd.net/categoria/${category.slug}`}
      />
      <div className="mb-16 border-b-[3px] border-editorial-primary pb-8">
        <h1 className="text-6xl md:text-8xl font-serif font-black text-editorial-primary uppercase tracking-tighter">
          {category.name}
        </h1>
        {category.description && (
          <p className="mt-6 text-xl text-editorial-secondary font-sans max-w-2xl">
            {category.description}
          </p>
        )}
      </div>

      {articles.length === 0 ? (
        <div className="py-20 text-center border border-editorial-primary/20 bg-editorial-bg">
          <p className="text-xl font-bold font-sans text-editorial-secondary">
            Ainda não existem artigos nesta categoria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </main>
  )
}
