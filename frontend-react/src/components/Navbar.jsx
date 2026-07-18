import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Journey', path: '/journey' },
    { name: 'Contact', path: '/contact' },
  ]
  
  const isActive = (path) => location.pathname === path
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block border-b border-manjal-gold border-opacity-20 bg-iravu-indigo bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-catamaran text-ilai-ivory hover:text-kumkum-vermilion transition">
            DHARA
          </Link>
          
          <motion.div 
            className="flex gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  to={item.path}
                  className={`font-mono text-sm uppercase tracking-wider transition ${
                    isActive(item.path)
                      ? 'text-kumkum-vermilion'
                      : 'text-ilai-ivory hover:text-kumkum-vermilion'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-iravu-indigo bg-opacity-95 border-b border-manjal-gold border-opacity-20 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold font-catamaran text-ilai-ivory">
          DHARA
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-ilai-ivory hover:text-kumkum-vermilion text-2xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-14 left-0 right-0 z-30 md:hidden bg-sandal-ash border-b border-manjal-gold border-opacity-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-sm uppercase tracking-wider transition ${
                    isActive(item.path)
                      ? 'text-kumkum-vermilion'
                      : 'text-ilai-ivory hover:text-kumkum-vermilion'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
