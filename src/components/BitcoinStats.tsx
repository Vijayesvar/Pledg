import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, DollarSign, Users } from 'lucide-react'
import axios from 'axios'
import { API_CONFIG, getCoinMarketCapHeaders } from '@/config/api'

interface BitcoinStatsData {
  price: number
  change24h: number
  changePercentage: number
  marketCap: number
  volume24h: number
}

export function BitcoinStats() {
  const [stats, setStats] = useState<BitcoinStatsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBitcoinStats = async () => {
      try {
        // Use only CoinMarketCap API
        const response = await axios.get(`${API_CONFIG.COINMARKETCAP_BASE_URL}/${API_CONFIG.ENDPOINTS.COINMARKETCAP_DETAILED}`, {
          headers: getCoinMarketCapHeaders()
        })
        
        const btcData = response.data.data['1'] // Bitcoin ID is 1
        const inrQuote = btcData.quote.INR
        
        const newStats = {
          price: inrQuote.price,
          change24h: inrQuote.percent_change_24h * inrQuote.price / 100,
          changePercentage: inrQuote.percent_change_24h,
          marketCap: inrQuote.market_cap,
          volume24h: inrQuote.volume_24h
        }
        
        setStats(newStats)
        
        // Store the last successful stats in localStorage for fallback
        localStorage.setItem('lastBitcoinStats', JSON.stringify(newStats))
        
      } catch (error) {
        console.error('CoinMarketCap API failed:', error)
        
        // Use last recorded stats as fallback
        const lastStatsData = localStorage.getItem('lastBitcoinStats')
        if (lastStatsData) {
          try {
            const parsedData = JSON.parse(lastStatsData)
            setStats(parsedData)
          } catch (parseErr) {
            console.error('Failed to parse last stats data:', parseErr)
            setStats({
              price: 0,
              change24h: 0,
              changePercentage: 0,
              marketCap: 0,
              volume24h: 0
            })
          }
        } else {
          setStats({
            price: 0,
            change24h: 0,
            changePercentage: 0,
            marketCap: 0,
            volume24h: 0
          })
        }
      } finally {
        setLoading(false)
      }
    }

    fetchBitcoinStats()
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) {
      return `₹${(num / 1e12).toFixed(1)}T`
    } else if (num >= 1e9) {
      return `₹${(num / 1e9).toFixed(1)}B`
    } else if (num >= 1e6) {
      return `₹${(num / 1e6).toFixed(1)}M`
    } else if (num >= 1e3) {
      return `₹${(num / 1e3).toFixed(1)}K`
    }
    return `₹${num.toFixed(0)}`
  }

  const statsCards = [
    {
      icon: DollarSign,
      title: 'Current Bitcoin Price',
      value: loading ? '...' : formatPrice(stats?.price || 0),
      subtitle: 'Live in INR',
      color: 'text-primary-400'
    },
    {
      icon: TrendingUp,
      title: '24h Change',
      value: loading ? '...' : `${(stats?.changePercentage || 0) >= 0 ? '+' : ''}${(stats?.changePercentage || 0).toFixed(2)}%`,
      subtitle: 'Price movement',
      color: (stats?.changePercentage || 0) >= 0 ? 'text-green-400' : 'text-red-400'
    },
    {
      icon: Shield,
      title: 'Market Cap',
      value: loading ? '...' : formatLargeNumber(stats?.marketCap || 0),
      subtitle: 'Total value',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: '24h Volume',
      value: loading ? '...' : formatLargeNumber(stats?.volume24h || 0),
      subtitle: 'Trading activity',
      color: 'text-purple-400'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {statsCards.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 border-2 border-primary-400/20 rounded-2xl p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary-400/40"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <stat.icon className="text-white" size={24} />
            </div>
            <div className={`text-sm font-semibold ${stat.color}`}>
              {stat.subtitle}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
          <p className="text-gray-400 text-sm">{stat.title}</p>
        </motion.div>
      ))}
    </div>
  )
}
