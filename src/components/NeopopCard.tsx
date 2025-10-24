import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface NeopopCardProps {
  children: ReactNode
  variant?: 'default' | 'glow' | 'glass' | 'gradient'
  className?: string
  hover?: boolean
  glow?: boolean
}

export function NeopopCard({ 
  children, 
  variant = 'default',
  className,
  hover = true,
  glow = false
}: NeopopCardProps) {
  const baseClasses = "transition-all duration-500 backdrop-blur-sm"
  
  const variantClasses = {
    default: "bg-gradient-to-br from-gray-800/40 to-gray-900/60 border-2 border-primary-400/20 rounded-2xl p-6 shadow-lg",
    glow: "bg-gradient-to-br from-primary-400/10 via-primary-500/5 to-primary-600/10 border-2 border-primary-400/30 rounded-2xl p-8 shadow-2xl",
    glass: "bg-white/5 border border-white/10 rounded-2xl p-6",
    gradient: "bg-gradient-to-br from-primary-400/20 via-primary-500/10 to-primary-600/20 border-2 border-primary-400/40 rounded-2xl p-6 shadow-xl"
  }

  const hoverClasses = hover ? "hover:-translate-y-1 hover:shadow-xl hover:border-primary-400/40" : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glow && "neopop-glow",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
