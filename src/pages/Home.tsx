import React from 'react'
import { NewsCard } from '@/components/content/NewsCard'
import { AdSlot } from '@/components/monetization/AdSlot'
import { getAllArticles } from '@/lib/content'

export const Home: React.FC = () => {
  const articles = getAllArticles()
  
  const featuredArticle = articles[0]
  const listArticles = articles.slice(1, 4)
  const compactArticles = articles.slice(2, 5)

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      {/* Banner Publicitário */}
      <AdSlot slot="header" className="mb-12 h-24 border-2 border-editorial-primary bg-white flex items-center justify-center text-editorial-secondary font-bold" />

      {/* Notícia Destaque Principal */}
      {featuredArticle && (
        <NewsCard article={featuredArticle} featured={true} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        
        {/* Grelha Central (Latest) */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-serif font-black text-editorial-primary uppercase tracking-tighter">
              Últimas Edições
            </h2>
            <div className="h-[2px] bg-editorial-primary flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        
        {/* Sidebar (Trending/Compact) */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-serif font-black text-editorial-primary uppercase tracking-tighter">
              Em Foco
            </h2>
            <div className="h-[2px] bg-editorial-primary flex-grow"></div>
          </div>
          
          <div className="flex flex-col border-t border-editorial-primary/20">
            {compactArticles.map((article) => (
              <NewsCard key={article.id} article={article} compact={true} />
            ))}
          </div>

          <div className="mt-10">
            <AdSlot slot="sidebar" className="w-full h-[600px] border-2 border-editorial-primary bg-white flex items-center justify-center text-editorial-secondary font-bold" />
          </div>
        </div>

      </div>
    </main>
  )
}
