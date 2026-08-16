import React from 'react'
import { adsConfig } from '@/config/ads'

type AdSlotProps = {
  slot: keyof typeof adsConfig.slots
  className?: string
}

export const AdSlot: React.FC<AdSlotProps> = ({ slot, className = '' }) => {
  if (!adsConfig.enabled) return null
  
  const slotConfig = adsConfig.slots[slot]
  if (!slotConfig?.active) return null

  // Modo de desenvolvimento: Exibe placeholder
  return (
    <div 
      className={`bg-gray-100 border border-gray-200 border-dashed rounded flex flex-col items-center justify-center p-4 text-center ${className}`}
      aria-label="Espaço Publicitário"
    >
      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Publicidade</span>
      <span className="text-sm text-gray-500">{slotConfig.dimensions}</span>
    </div>
  )
}
