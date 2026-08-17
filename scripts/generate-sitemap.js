import fs from 'fs'
import path from 'path'

// Mock simple parser to extract slugs from the TS files since we don't have a DB yet.
function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const slugs = []
  const regex = /slug:\s*['"]([^'"]+)['"]/g
  let match
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1])
  }
  return slugs
}

const DOMAIN = 'https://muacynerd.net'
const articlesPath = path.resolve('src/data/articles.ts')
const categoriesPath = path.resolve('src/data/categories.ts')

const articleSlugs = extractSlugs(articlesPath)
const categorySlugs = extractSlugs(categoriesPath)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${categorySlugs.map(slug => `  <url>
    <loc>${DOMAIN}/categoria/${slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
${articleSlugs.map(slug => `  <url>
    <loc>${DOMAIN}/artigo/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap)
console.log('✅ Sitemap gerado com sucesso em public/sitemap.xml')
