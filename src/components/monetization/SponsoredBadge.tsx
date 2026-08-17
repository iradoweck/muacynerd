import React from 'react'
import { Sparkles } from 'lucide-react'

export const SponsoredBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider rounded">
      <Sparkles size={14} className="text-amber-500" />
      Conteúdo Patrocinado
    </div>
  )
}
