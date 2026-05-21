import React, { useEffect } from 'react'
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
          <Outlet />
        </main>
        {!isStartPage && <Footer />}
      </div>
    </>
  )
}
