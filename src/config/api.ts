// API Configuration
export const API_CONFIG = {
  COINAPI_KEY: 'd3996455-2961-4c60-9fd8-85c162f0bf71',
  COINAPI_BASE_URL: 'https://rest.coinapi.io/v1',
  COINGECKO_BASE_URL: 'https://api.coingecko.com/api/v3',
  COINMARKETCAP_KEY: '4baa6a0be5d34537bb1f16f6dd47ca2a',
  COINMARKETCAP_BASE_URL: 'https://pro-api.coinmarketcap.com/v1',
  
  // API Endpoints
  ENDPOINTS: {
    EXCHANGE_RATE: (from: string, to: string) => `/exchangerate/${from}/${to}`,
    OHLCV: (symbol: string, period: string) => `/ohlcv/${symbol}/latest?period_id=${period}`,
    COINGECKO_PRICE: 'simple/price?ids=bitcoin&vs_currencies=inr&include_24hr_change=true',
    COINGECKO_DETAILED: 'coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false',
    COINMARKETCAP_QUOTES: 'cryptocurrency/quotes/latest?symbol=BTC&convert=INR',
    COINMARKETCAP_DETAILED: 'cryptocurrency/quotes/latest?id=1&convert=INR'
  }
}

// Helper function to get API headers
export const getCoinAPIHeaders = () => ({
  'X-CoinAPI-Key': API_CONFIG.COINAPI_KEY
})

export const getCoinMarketCapHeaders = () => ({
  'X-CMC_PRO_API_KEY': API_CONFIG.COINMARKETCAP_KEY,
  'Accept': 'application/json'
})

// Fallback to CoinGecko if CoinAPI fails
export const fetchBitcoinPriceFallback = async () => {
  try {
    const response = await fetch(`${API_CONFIG.COINGECKO_BASE_URL}/${API_CONFIG.ENDPOINTS.COINGECKO_PRICE}`)
    const data = await response.json()
    return {
      price: data.bitcoin.inr,
      change24h: data.bitcoin.inr_24h_change,
      changePercentage: data.bitcoin.inr_24h_change_percentage || data.bitcoin.inr_24h_change
    }
  } catch (error) {
    console.error('CoinGecko fallback failed:', error)
    return {
      price: 10000000, // Fallback price
      change24h: 0,
      changePercentage: 0
    }
  }
}
