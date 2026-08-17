export const adsConfig = {
  enabled: true, // Master switch
  providers: {
    googleAdsense: {
      enabled: false,
      clientId: 'ca-pub-XXXXXXXXXXXXX',
    },
    directSponsorship: {
      enabled: true,
    }
  },
  slots: {
    header: {
      active: true,
      dimensions: '728x90',
    },
    articleInline: {
      active: true,
      dimensions: '300x250',
      frequency: 3, // Inserir a cada 3 parágrafos
    },
    sidebar: {
      active: true,
      dimensions: '300x600',
    }
  }
}
