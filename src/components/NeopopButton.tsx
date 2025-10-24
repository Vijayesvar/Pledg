import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface NeopopButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'neopop' | 'glow'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  loading?: boolean
}

export function NeopopButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  type = 'button',
  className,
  disabled = false,
  loading = false
}: NeopopButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-base rounded-2xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  }
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-400 to-primary-600 text-white shadow-lg hover:shadow-xl",
    secondary: "border-2 border-primary-400/30 text-primary-400 hover:bg-primary-400/10 hover:border-primary-400/60 backdrop-blur-sm",
    neopop: "bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-white shadow-xl hover:shadow-2xl",
    glow: "bg-gradient-to-r from-primary-400 to-primary-600 text-white shadow-2xl hover:shadow-2xl neopop-glow"
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </motion.button>
  )
}
