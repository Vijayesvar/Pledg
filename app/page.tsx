'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, TrendingUp, Lock, Clock, CheckCircle, ArrowRight, Coins, CreditCard, Star, Mail, Check } from "lucide-react"
import Link from "next/link"
import { useState } from 'react'
import { Input } from "@/components/ui/input"

export default function PledgLanding() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/public/pledg-logo.png" alt="Pledg Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pledg
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How it Works
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#security" className="text-gray-600 hover:text-blue-600 transition-colors">
              Security
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            🚀 Now in Development - Join the Waitlist
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Crypto-Backed INR Loans Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect directly with lenders and borrowers on India's first peer-to-peer platform for
            cryptocurrency-collateralized rupee loans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#waitlist">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              >
                Join as Borrower
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#waitlist">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700"
              >
                Become a Lender
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600">Platform Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600">Crypto Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">0%</div>
              <div className="text-gray-600">Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How Pledg Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive guide to crypto-backed INR lending on our peer-to-peer platform
            </p>
          </div>

          {/* Detailed Process Flow */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-4">For Borrowers – Step-by-Step Process</h3>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Get instant liquidity against your crypto assets
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  🔐
                </div>
                <h4 className="font-semibold text-lg mb-2">1. Sign Up & Verify</h4>
                <p className="text-gray-600">
                  Complete KYC with Aadhaar and PAN
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  💰
                </div>
                <h4 className="font-semibold text-lg mb-2">2. Deposit Crypto</h4>
                <p className="text-gray-600">
                  Choose supported assets (BTC, ETH, USDT)
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  🔗
                </div>
                <h4 className="font-semibold text-lg mb-2">3. Request a Loan</h4>
                <p className="text-gray-600">
                  Set desired loan amount (up to 50% LTV)
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  🔄
                </div>
                <h4 className="font-semibold text-lg mb-2">4. Get Funded</h4>
                <p className="text-gray-600">
                  Lender accepts your terms and funds are transferred
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* For Borrowers - Detailed */}
            <Card className="p-8 border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">For Borrowers – Get an INR Loan Using Crypto</CardTitle>
                <CardDescription className="text-lg">
                  Secure instant liquidity against your crypto assets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">1. Register & Verify</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Sign up and complete KYC (Aadhaar + PAN)</li>
                    <li>• Link your bank account for UPI transfers</li>
                    <li>• Enable 2FA for added security</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">2. Deposit Collateral</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Choose supported crypto (BTC, ETH, USDT)</li>
                    <li>• Deposit into a secure, smart contract wallet</li>
                    <li>• Get real-time collateral valuation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">3. Request a Loan</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Set desired INR amount (up to 50% of crypto value)</li>
                    <li>• Define interest rate and duration</li>
                    <li>• Submit loan request to the marketplace</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">4. Get Funded & Repay</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Lender accepts your terms and funds the loan</li>
                    <li>• INR is disbursed via UPI instantly</li>
                    <li>• Repay anytime via UPI to unlock your crypto</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* For Lenders - Detailed */}
            <Card className="p-8 border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-600">For Lenders – How to Start Lending</CardTitle>
                <CardDescription className="text-lg">
                  Earn passive income by funding crypto-backed loans
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">1. Join & Verify</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Complete KYC to enable lending</li>
                    <li>• Link bank account for INR transfers</li>
                    <li>• Set lending preferences (e.g., risk level, interest rate)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">2. Review Loan Requests</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Browse verified borrower requests</li>
                    <li>• View proposed terms and crypto collateral details</li>
                    <li>• Choose the ones that match your risk-return preference</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">3. Lend & Earn</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Accept a loan request</li>
                    <li>• Funds are transferred via UPI</li>
                    <li>• Loan is managed by smart contract, backed by crypto</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">4. Monitor & Withdraw</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Track repayments in your dashboard</li>
                    <li>• Reclaim capital + interest once borrower repays</li>
                    <li>• Funds are returned to your bank via UPI</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Details */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Technical Implementation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Smart Contracts</h4>
                <p className="text-gray-600 text-sm">
                  Ethereum-based smart contracts handle collateral management, loan execution, and automatic
                  liquidations. All contracts are audited by leading security firms and open-source for transparency.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Price Oracles</h4>
                <p className="text-gray-600 text-sm">
                  Multiple price feeds from Chainlink, Band Protocol, and major exchanges ensure accurate real-time
                  cryptocurrency valuations for collateral management and margin calls.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Security Infrastructure</h4>
                <p className="text-gray-600 text-sm">
                  Multi-signature wallets, hardware security modules, and cold storage protect user funds. Regular
                  penetration testing and bug bounty programs maintain security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Pledg?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for the modern Indian crypto ecosystem with security and transparency at its core
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">100% Collateralized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Every loan is backed by cryptocurrency collateral, ensuring lender protection and borrower
                  accountability.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Instant Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Smart contracts automate the entire process, from collateral verification to fund disbursement.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Peer-to-Peer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Direct connection between borrowers and lenders means better rates and terms for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Access your funds anytime, anywhere. Our platform operates round the clock for your convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Multi-Crypto Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Accept Bitcoin, Ethereum, and other major cryptocurrencies as collateral for maximum flexibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bank-Grade Security</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your assets and data are protected by industry-leading security measures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">All data transmission is encrypted using AES-256 encryption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Contract Audits</h3>
              <p className="text-gray-600">Regular security audits by leading blockchain security firms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">KYC Compliance</h3>
              <p className="text-gray-600">Full KYC verification for all users ensuring regulatory compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Insurance Coverage</h3>
              <p className="text-gray-600">Platform insurance protects against technical failures and hacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about crypto-backed INR loans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">What cryptocurrencies can I use as collateral?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We currently support Bitcoin (BTC), Ethereum (ETH), and USDT. More digital assets will be added soon. The complete list will be available at launch.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">How much can I borrow against my crypto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can typically borrow up to 50% of your crypto's current market value. The exact Loan-to-Value (LTV) ratio depends on the asset's volatility and market conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">What happens if my crypto value drops?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If your collateral value falls below the required threshold, you'll receive a margin call. To avoid liquidation, you can add more collateral or partially repay the loan.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">How fast can I get the loan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Once your crypto is securely deposited and verified, the loan is executed through a smart contract. INR is typically disbursed to your bank account instantly via UPI.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">Are there any hidden fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No hidden fees. All charges are transparently shown upfront before any transaction. You'll always know the total cost in advance.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">Is Pledg regulated and compliant?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes. Pledg follows all applicable Indian regulations and enforces strict KYC and AML checks for every user before enabling transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">What are the typical interest rates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Interest rates are proposed by borrowers and accepted by lenders. Rates usually range between 8% and 15% annually, based on loan terms and collateral type.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">Can I repay my loan early?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes. You can repay your loan anytime without prepayment penalties. Your crypto collateral will be released immediately upon full repayment.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">What happens if the borrower defaults?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If a borrower doesn't repay, the lender has the right to claim the crypto collateral via smart contract enforcement, ensuring their capital is protected.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">Is my crypto held by Pledg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No. Crypto is held in a secure, non-custodial smart contract escrow. Pledg never has access to your private keys or assets.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-left text-lg">Can I use UPI for both funding and repayment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes. All INR transactions on Pledg — including loan disbursal and repayment — are processed through UPI for instant, secure settlements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of users who are already benefiting from crypto-backed INR loans on Pledg
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="#waitlist" 
              className="text-xl md:text-2xl font-medium text-white hover:underline transition-colors self-center py-2 px-4"
            >
              Join Waitlist
            </a>
          </div>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Get Early Access</h3>
            <p className="text-white/80 mb-4">Be the first to know when we launch</p>
            
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-400/30 text-green-100 p-4 rounded-lg flex items-center justify-center space-x-2">
                <Check className="h-5 w-5" />
                <span>Thank you! We'll notify you when we launch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 pr-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white/50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-white text-blue-600 hover:bg-gray-100 py-6 px-6 whitespace-nowrap"
                  disabled={isSubmitting || !email}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Notify Me'
                  )}
                </Button>
              </form>
            )}
            <p className="text-xs text-white/50 mt-3 text-center">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/pledg-logo.png" alt="Pledg Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold">Pledg</span>
              </div>
              <p className="text-gray-400 mb-4">India's first peer-to-peer crypto-backed INR loan platform.</p>
              <div className="text-sm text-gray-500">© 2025 Pledg. All rights reserved.</div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#how-it-works" className="hover:text-white transition-colors">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span className="text-gray-500">Help Center - Coming Soon</span>
                </li>
                <li>
                  <span className="text-gray-500">Contact Us - Coming Soon</span>
                </li>
                <li>
                  <span className="text-gray-500">Status - Coming Soon</span>
                </li>
                <li>
                  <span className="text-gray-500">Bug Bounty - Coming Soon</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span className="text-gray-500">Privacy Policy - Coming Soon</span>
                </li>
                <li>
                  <span className="text-gray-500">Terms of Service - Coming Soon</span>
                </li>
                <li>
                  <span className="text-gray-500">Cookie Policy - Coming Soon</span>
                </li>
                <li>
                  <span className="text-gray-500">Compliance - Coming Soon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
