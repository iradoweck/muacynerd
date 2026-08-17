import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-editorial-primary text-white border-t-[8px] border-editorial-accent mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/20 pb-16">
          
          <div className="md:col-span-5">
            <Link to="/" className="block mb-6">
              <img src="/logo v.png" alt="MuacyNerd" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-base text-gray-400 max-w-md font-sans leading-relaxed">
              Jornalismo digital independente. Exploramos as fronteiras da ciência, tecnologia, cultura pop e a revolução da inteligência artificial.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-400">Institucional</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><Link to="/sobre" className="hover:text-editorial-accent transition-colors underline decoration-transparent hover:decoration-editorial-accent underline-offset-4">Sobre Nós</Link></li>
              <li><Link to="/politica-editorial" className="hover:text-white transition-colors">Política Editorial</Link></li>
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-400">Edição Semanal</h4>
            <p className="text-base text-gray-300 mb-6 font-sans">
              Receba um resumo analítico das notícias que realmente importam. Sem spam.
            </p>
            <form className="flex border border-white/30 focus-within:border-editorial-accent transition-colors" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Endereço de email" 
                className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 font-sans focus:outline-none rounded-none"
              />
              <button 
                type="submit" 
                className="bg-white hover:bg-editorial-accent hover:text-white text-editorial-primary font-bold px-6 uppercase tracking-widest transition-colors text-sm"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase text-gray-500">
          <p>&copy; {new Date().getFullYear()} MUACYNERD EDITORIAL. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="mt-6 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-editorial-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-editorial-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
