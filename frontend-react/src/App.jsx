import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import TamilBackdrop from './components/TamilBackdrop'
// Pages
import Landing from './pages/Landing'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Journey from './pages/Journey'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  
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
      <SpeedInsights />
    </>
    <div className="bg-iravu-indigo text-ilai-ivory min-h-screen overflow-x-hidden">
      {/* Global backgrounds */}
      <TamilBackdrop showOnLanding={isLanding} />
      <ScrollProgress hideOnLanding={isLanding} />
      
      {/* Navigation - hidden on landing */}
      {!isLanding && <Navbar />}
      
      {/* Main content with top padding for fixed navbar */}
      <main className={isLanding ? '' : 'pt-16 md:pt-20'}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* Footer - hidden on landing */}
      {!isLanding && <Footer />}
    </div>
  )
}

export default App
