import React, { useState, useMemo } from 'react'
import { SEO } from '@/components/ui/SEO'
import { NewsCard } from '@/components/content/NewsCard'
import { getAllArticles } from '@/lib/content'
import { Search } from 'lucide-react'

export const SearchView: React.FC = () => {
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)
  
  const allArticles = useMemo(() => getAllArticles(), [])
  
  const filteredArticles = useMemo(() => {
    if (!query.trim()) return []
    const lowerQuery = query.toLowerCase()
    return allArticles.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) || 
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery)
    )
  }, [query, allArticles])

  const loadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  const hasMore = visibleCount < filteredArticles.length

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <SEO 
        title="Pesquisa | MuacyNerd"
        description="Pesquise os nossos artigos, notícias e análises."
        url="https://muacynerd.net/pesquisa"
      />
      
      <div className="mb-16 border-b-[3px] border-editorial-primary pb-8 relative">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-editorial-primary uppercase tracking-tighter mb-8">
          Pesquisa
        </h1>
        <div className="relative max-w-3xl">
          <input 
            type="text" 
            placeholder="O que procura?"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setVisibleCount(6) // Reset pagination on new search
            }}
            className="w-full bg-transparent border-b-2 border-editorial-primary/20 focus:border-editorial-accent outline-none py-4 text-2xl md:text-4xl font-serif text-editorial-primary placeholder:text-editorial-primary/30 transition-colors pr-12"
            autoFocus
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-editorial-primary/30 w-8 h-8" />
        </div>
      </div>

      {!query.trim() && (
        <div className="text-center py-16">
          <p className="text-2xl font-serif text-editorial-secondary italic">Comece a digitar para encontrar artigos.</p>
        </div>
      )}

      {query.trim() && filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl font-serif text-editorial-secondary italic">Nenhum resultado encontrado para "{query}".</p>
        </div>
      )}

      {filteredArticles.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredArticles.slice(0, visibleCount).map((article) => (
              <NewsCard key={article.id} article={article} compact />
            ))}
          </div>
          
          {hasMore && (
            <div className="mt-16 flex justify-center border-t border-editorial-primary/10 pt-12">
              <button 
                onClick={loadMore}
                className="px-10 py-4 border-[3px] border-editorial-primary text-editorial-primary font-bold tracking-widest uppercase hover:bg-editorial-primary hover:text-editorial-bg transition-colors"
              >
                Carregar Mais Resultados
              </button>
            </div>
          )}
        </>
      )}
    </main>
  )
}
