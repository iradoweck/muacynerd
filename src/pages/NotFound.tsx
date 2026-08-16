import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h1 className="text-9xl font-serif font-black text-editorial-accent leading-none mb-6">404</h1>
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-editorial-primary mb-8">
        Página Não Encontrada
      </h2>
      <p className="text-xl text-editorial-secondary font-sans max-w-lg mb-12 border-t-2 border-editorial-primary/20 pt-8">
        O artigo ou secção que procura foi arquivado, movido ou nunca existiu na nossa base de dados editorial.
      </p>
      
      <Link 
        to="/" 
        className="bg-editorial-primary text-white hover:bg-editorial-accent font-bold px-8 py-4 uppercase tracking-widest transition-colors text-sm"
      >
        Voltar à Primeira Página
      </Link>
    </main>
  )
}
