import type { Author } from '@/types'

export const authors: Author[] = [
  {
    id: 'auth-maria',
    slug: 'maria-silva',
    name: 'Maria Silva',
    bio: 'Jornalista de ciência e tecnologia com mais de 10 anos de experiência.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    twitterUrl: 'https://twitter.com',
  },
  {
    id: 'auth-joao',
    slug: 'joao-costa',
    name: 'João Costa',
    bio: 'Especialista em inteligência artificial e crítico de cinema nas horas vagas.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Joao',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'auth-ana',
    slug: 'ana-pereira',
    name: 'Ana Pereira',
    bio: 'Gamer profissional e entusiasta de gadgets inovadores.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  }
]
