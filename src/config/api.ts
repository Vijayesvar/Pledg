// API Configuration - Only CoinMarketCap
export const API_CONFIG = {
  COINMARKETCAP_KEY: '4baa6a0be5d34537bb1f16f6dd47ca2a',
  COINMARKETCAP_BASE_URL: 'https://pro-api.coinmarketcap.com/v1',

  // API Endpoints
  ENDPOINTS: {
    COINMARKETCAP_QUOTES: 'cryptocurrency/quotes/latest?symbol=BTC&convert=INR',
    COINMARKETCAP_DETAILED: 'cryptocurrency/quotes/latest?id=1&convert=INR',
    COINGECKO_PRICE: 'simple/price?ids=bitcoin&vs_currencies=inr&include_24hr_change=true'
  },
  COINGECKO_BASE_URL: 'https://api.coingecko.com/api/v3',
}

// Helper function to get API headers
export const getCoinMarketCapHeaders = () => ({
  'X-CMC_PRO_API_KEY': API_CONFIG.COINMARKETCAP_KEY,
  'Accept': 'application/json'
})
