import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Ciência', href: '/categoria/ciencia' },
    { label: 'Inteligência Artificial', href: '/categoria/inteligencia-artificial' },
    { label: 'Tecnologia', href: '/categoria/tecnologia' },
    { label: 'Games', href: '/categoria/games' },
    { label: 'Cinema', href: '/categoria/cinema' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-editorial-bg border-b-[3px] border-editorial-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Menu Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-editorial-primary hover:text-editorial-accent p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo Clássico */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link to="/" className="flex items-center justify-center md:justify-start">
              <img src="/logo.png" alt="MuacyNerd" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center border-l border-editorial-primary/20 pl-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-bold text-editorial-primary hover:text-editorial-accent transition-colors uppercase tracking-widest relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-editorial-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <button className="text-editorial-primary hover:text-editorial-accent transition-colors p-2" aria-label="Pesquisar">
              <Search size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Expanded */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-editorial-bg border-t-[3px] border-editorial-primary absolute w-full left-0 shadow-2xl">
          <div className="px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-xl font-serif font-bold text-editorial-primary hover:text-editorial-accent uppercase tracking-widest border-b border-editorial-primary/10 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
