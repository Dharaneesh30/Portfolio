import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
          style={{ paddingTop: isStartPage ? 0 : '96px' }}
          className="focus:outline-none"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.985 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        {!isStartPage && <Footer />}
      </div>
    </>
  )
}
