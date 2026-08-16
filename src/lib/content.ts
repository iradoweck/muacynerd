import type { Article, Category, Author } from '@/types'
import { articles } from '@/data/articles'
import { categories } from '@/data/categories'
import { authors } from '@/data/authors'

export const getAllArticles = (): Article[] => {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export const getFeaturedArticles = (): Article[] => {
  return getAllArticles().filter((article) => article.featured)
}

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return getAllArticles().filter((article) => article.categoryId === categoryId)
}

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((c) => c.id === id)
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((c) => c.slug === slug)
}

export const getAllCategories = (): Category[] => {
  return categories
}

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find((a) => a.id === id)
}

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors.find((a) => a.slug === slug)
}
