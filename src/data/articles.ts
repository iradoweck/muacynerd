import type { Article } from '@/types'

export const articles: Article[] = [
  {
    id: 'art-1',
    slug: 'futuro-da-ia-generativa',
    title: 'O Futuro da IA Generativa na Educação',
    excerpt: 'Como os grandes modelos de linguagem estão a transformar as salas de aula e a forma como os alunos aprendem.',
    content: 'A inteligência artificial generativa tem o potencial de personalizar a educação de formas nunca antes vistas. Professores podem criar planos de aula adaptativos, enquanto alunos utilizam tutores virtuais disponíveis 24/7. No entanto, o desafio ético sobre autoria e plágio continua no centro do debate...',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2026-08-16T10:00:00Z',
    categoryId: 'cat-ia',
    authorId: 'auth-joao',
    tags: ['Inteligência Artificial', 'Educação', 'Futuro'],
    featured: true,
  }
]
