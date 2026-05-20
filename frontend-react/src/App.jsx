import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'

export default function App(){
  const location = useLocation()
  const isStartPage = location.pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <CustomCursor />
      <ParticleBackground isStartPage={isStartPage} />
      <div className="min-h-screen overflow-x-clip">
        <a href="#main" className="sr-only-focusable">Skip to content</a>
        {!isStartPage && <Navbar />}
        <main
          id="main"
          tabIndex={-1}
          className={isStartPage ? 'focus:outline-none' : 'pt-24 focus:outline-none'}
        >
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
        {!isStartPage && <Footer />}
      </div>
    </>
  )
}
