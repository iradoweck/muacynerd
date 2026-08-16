import React from 'react'

type TagProps = {
  label: string
  href?: string
}

export const Tag: React.FC<TagProps> = ({ label, href }) => {
  const baseClasses = "inline-flex items-center px-3 py-1 bg-gray-100 text-editorial-secondary text-xs font-semibold rounded hover:bg-gray-200 transition-colors"
  
  if (href) {
    return (
      <a href={href} className={baseClasses}>
        #{label}
      </a>
    )
  }
  
  return (
    <span className={baseClasses}>
      #{label}
    </span>
  )
}
