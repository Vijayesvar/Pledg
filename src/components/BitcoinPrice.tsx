import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react'
import axios from 'axios'
import { API_CONFIG, getCoinAPIHeaders, getCoinMarketCapHeaders, fetchBitcoinPriceFallback } from '@/config/api'

interface BitcoinPriceData {
  price: number
  change24h: number
  changePercentage: number
  lastUpdated: Date
}

export function BitcoinPrice() {
  const [priceData, setPriceData] = useState<BitcoinPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBitcoinPrice = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Try CoinMarketCap first (most reliable)
      try {
        const response = await axios.get(`${API_CONFIG.COINMARKETCAP_BASE_URL}/${API_CONFIG.ENDPOINTS.COINMARKETCAP_QUOTES}`, {
          headers: getCoinMarketCapHeaders()
        })
        
        const btcData = response.data.data.BTC
        const inrQuote = btcData.quote.INR
        
        setPriceData({
          price: inrQuote.price,
          change24h: inrQuote.percent_change_24h * inrQuote.price / 100,
          changePercentage: inrQuote.percent_change_24h,
          lastUpdated: new Date()
        })
        return // Success with CoinMarketCap
      } catch (cmcErr) {
        console.log('CoinMarketCap failed, trying CoinGecko:', cmcErr)
      }
      
      // Fallback to CoinGecko
      try {
        const fallbackData = await fetchBitcoinPriceFallback()
        setPriceData({
          price: fallbackData.price,
          change24h: fallbackData.change24h,
          changePercentage: fallbackData.changePercentage,
          lastUpdated: new Date()
        })
        return // Success with CoinGecko
      } catch (coingeckoErr) {
        console.log('CoinGecko failed, trying CoinAPI:', coingeckoErr)
      }
      
      // Final fallback to CoinAPI
      const response = await axios.get(`${API_CONFIG.COINAPI_BASE_URL}${API_CONFIG.ENDPOINTS.EXCHANGE_RATE('BTC', 'INR')}`, {
        headers: getCoinAPIHeaders()
      })
      
      const price = response.data.rate
      
      setPriceData({
        price,
        change24h: 0,
        changePercentage: 0,
        lastUpdated: new Date()
      })
    } catch (err) {
      console.error('All APIs failed:', err)
      setError('Failed to fetch Bitcoin price')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBitcoinPrice()
    
    // Update price every 30 seconds
    const interval = setInterval(fetchBitcoinPrice, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toFixed(2)}%`
  }

  if (loading && !priceData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary-400/10 via-primary-500/5 to-primary-600/10 border-2 border-primary-400/30 rounded-2xl p-6 backdrop-blur-sm shadow-xl"
      >
        <div className="flex items-center justify-center gap-3">
          <RefreshCw className="h-5 w-5 animate-spin text-primary-400" />
          <span className="text-gray-300">Loading Bitcoin price...</span>
        </div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-red-500/10 via-red-600/5 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-6 backdrop-blur-sm shadow-xl"
      >
        <div className="text-center">
          <p className="text-red-400 mb-2">Failed to load Bitcoin price</p>
          <button
            onClick={fetchBitcoinPrice}
            className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors"
          >
            Retry
          </button>
        </div>
      </motion.div>
    )
  }

  if (!priceData) return null

  const isPositive = priceData.changePercentage >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-primary-400/10 via-primary-500/5 to-primary-600/10 border-2 border-primary-400/30 rounded-2xl p-6 backdrop-blur-sm shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">₿</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Bitcoin Price</h3>
            <p className="text-sm text-gray-400">Live in INR</p>
          </div>
        </div>
        <button
          onClick={fetchBitcoinPrice}
          disabled={loading}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 text-gray-400 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">{formatPrice(priceData.price)}</span>
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
            isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="font-semibold">{formatChange(priceData.changePercentage)}</span>
          </div>
        </div>

        <div className="text-xs text-gray-400">
          Last updated: {priceData.lastUpdated.toLocaleTimeString('en-IN')}
        </div>

        <div className="pt-3 border-t border-gray-700">
          <p className="text-sm text-gray-300">
            <strong>Your Bitcoin Value:</strong> If you have 1 BTC, it's worth{' '}
            <span className="text-primary-400 font-semibold">{formatPrice(priceData.price)}</span> today.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
