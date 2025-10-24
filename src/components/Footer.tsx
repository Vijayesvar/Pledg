import { PledgLogo } from './PledgLogo'
import { Twitter, MessageCircle, Users } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PledgLogo className="h-8 w-8" />
              <span className="text-xl font-bold">Pledg</span>
            </div>
            <p className="text-gray-400 mb-4">
              Unlock the value of your Bitcoin without selling. Secure, flexible loans backed by your crypto assets.
            </p>
            <p className="text-gray-300 mb-4">
              Contact:{' '}
              <a
                href="mailto:contact@pledg.in"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                contact@pledg.in
              </a>
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://wa.me/919994619773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <Users size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pledg. All rights reserved. | Made for Indian crypto holders</p>
        </div>
      </div>
    </footer>
  )
}
