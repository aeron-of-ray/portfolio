import type { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212', color: '#e8e8e8' }}>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-20">
        {children}
      </main>
      <footer className="text-center pb-8 text-xs" style={{ color: '#555' }}>
        <span>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#888] transition-colors"
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          2024-PRESENT © Aeron Ray Manriza
        </span>
      </footer>
    </div>
  )
}
