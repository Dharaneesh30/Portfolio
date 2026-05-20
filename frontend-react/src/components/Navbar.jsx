import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { to: '/home', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #00FF41',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/home')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'Orbitron'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '2px solid #00FF41',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            color: '#00FF41',
            fontWeight: 'bold',
            boxShadow: '0 0 15px rgba(0, 255, 65, 0.3)'
          }}>
            DN
          </div>
          <span style={{ color: '#00FF41', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em' }}>Dharaneesh</span>
        </motion.div>

        {/* Desktop Menu */}
        <div style={{
          display: 'none',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-menu">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                color: isActive ? '#000000' : '#00FF41',
                textDecoration: 'none',
                fontFamily: 'Rajdhani',
                fontWeight: 600,
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                backgroundColor: isActive ? '#00FF41' : 'transparent',
                border: `1px solid ${isActive ? '#00FF41' : 'transparent'}`,
                transition: 'all 0.3s',
                fontSize: '0.95rem'
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: '1px solid #00FF41',
            color: '#00FF41',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(0, 255, 65, 0.2)'
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderTop: '1px solid #00FF41',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
          className="mobile-menu"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#000000' : '#00FF41',
                textDecoration: 'none',
                fontFamily: 'Rajdhani',
                fontWeight: 600,
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                backgroundColor: isActive ? '#00FF41' : 'transparent',
                border: `1px solid ${isActive ? '#00FF41' : 'rgba(0, 255, 65, 0.3)'}`,
                transition: 'all 0.3s'
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}

