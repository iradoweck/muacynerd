import React from 'react'
import { ExternalLink } from 'lucide-react'

type AffiliateCardProps = {
  title: string
  description: string
  imageUrl: string
  price: string
  link: string
  storeName: string
}

export const AffiliateCard: React.FC<AffiliateCardProps> = ({
  title, description, imageUrl, price, link, storeName
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
      <div className="sm:w-1/3 aspect-square bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
        <img src={imageUrl} alt={title} className="object-cover w-full h-full" loading="lazy" />
      </div>
      <div className="sm:w-2/3 flex flex-col justify-between">
        <div>
          <span className="text-xs text-editorial-accent font-semibold uppercase tracking-wider">Recomendação MuacyNerd</span>
          <h3 className="text-lg font-bold mt-1 text-editorial-primary line-clamp-2">{title}</h3>
          <p className="text-sm text-editorial-secondary mt-2 line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-editorial-accent hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Ver na {storeName}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
