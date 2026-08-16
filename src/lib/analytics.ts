// src/lib/analytics.ts

/**
 * Módulo de Analytics
 * Este ficheiro concentra toda a lógica de tracking.
 * Se no futuro decidir usar Google Analytics 4 ou Meta Pixel, 
 * basta injetar o código real nas funções correspondentes, 
 * sem necessidade de alterar os componentes.
 */

export const GA_TRACKING_ID = '' // Insira o seu G-XXXXXXX
export const PIXEL_ID = ''       // Insira o seu Pixel ID

export const pageView = (url: string) => {
  // Simulação de tracking para a consola no ambiente de desenvolvimento
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics] PageView: ${url}`)
  }

  // --- Google Analytics 4 ---
  if (typeof window !== 'undefined' && (window as any).gtag && GA_TRACKING_ID) {
    ;(window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }

  // --- Meta Pixel ---
  if (typeof window !== 'undefined' && (window as any).fbq && PIXEL_ID) {
    ;(window as any).fbq('track', 'PageView')
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics] Event: ${action} | Category: ${category} | Label: ${label} | Value: ${value}`)
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
