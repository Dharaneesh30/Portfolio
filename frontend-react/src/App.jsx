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
