import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { ArticleView } from '@/pages/ArticleView'
import { CategoryView } from '@/pages/CategoryView'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigo/:slug" element={<ArticleView />} />
          <Route path="/categoria/:slug" element={<CategoryView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
