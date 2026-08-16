import React from 'react'
import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium text-editorial-secondary uppercase tracking-wider overflow-x-auto whitespace-nowrap pb-2">
      <ol className="flex items-center space-x-2">
        <li>
          <a href="/" className="hover:text-editorial-accent transition-colors">Home</a>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight size={14} className="text-gray-400" />
              {isLast || !item.href ? (
                <span className="text-gray-400" aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href} className="hover:text-editorial-accent transition-colors">
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
