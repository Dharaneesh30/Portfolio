import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import MagnetButton from './reactbits/MagnetButton'
import ShinyText from './reactbits/ShinyText'

const NAV_ITEMS = [
  { to: '/home', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [easterEggCount, setEasterEggCount] = useState(0)
  const [easterEggMessage, setEasterEggMessage] = useState('')
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  const handleBrandClick = () => {
    const nextCount = easterEggCount + 1
    setEasterEggCount(nextCount)

    if (nextCount >= 5) {
      setEasterEggMessage('Curious mind engaged ✨')
      window.setTimeout(() => setEasterEggMessage(''), 1800)
      setEasterEggCount(0)
    }

    navigate('/home')
  }

  return (
    <motion.nav
      initial={{ y: -96, opacity: 0, scale: 0.985 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--soft-border)',
        backgroundColor: 'var(--nav-bg)',
        boxShadow: 'var(--nav-shadow)',
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          gap: '1rem',
        }}
      >
        <motion.div
          className="brand-lockup"
          whileHover={{ scale: 1.05, y: -2, rotate: -0.6 }}
          whileTap={{ scale: 0.95, rotate: 0.4 }}
          onClick={handleBrandClick}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'var(--font-display)',
            minWidth: 0,
          }}
        >
          <div
            className="brand-mark"
            style={{
              width: '40px',
              height: '40px',
              border: '1px solid var(--accent-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.5rem',
              color: 'var(--accent-color)',
              fontWeight: '700',
              boxShadow: 'none',
              flexShrink: 0,
            }}
          >
            DN
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <ShinyText className="brand-name" style={{ fontSize: '1.08rem', fontWeight: 700, letterSpacing: '0.01em' }}>Dharaneesh</ShinyText>
            {easterEggMessage && <span className="brand-egg">{easterEggMessage}</span>}
          </div>
        </motion.div>

        <div
          style={{
            display: 'none',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="desktop-menu"
        >
          {NAV_ITEMS.map((item) => (
            <MagnetButton key={item.to} as={motion.div} strength={0.18}>
              <NavLink
                to={item.to}
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--accent-contrast)' : 'var(--text-color)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  padding: '0.6rem 1rem',
                  borderRadius: '4px',
                  backgroundColor: isActive ? 'var(--accent-color)' : 'transparent',
                  border: `1px solid ${isActive ? 'var(--accent-color)' : 'transparent'}`,
                  transition: 'all 0.3s',
                  fontSize: '0.95rem',
                })}
              >
                {item.label}
              </NavLink>
            </MagnetButton>
          ))}
          <MagnetButton
            as={motion.button}
            type="button"
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Dark theme' : 'Light theme'}
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </MagnetButton>
        </div>

        <div className="mobile-actions">
          <MagnetButton
            as={motion.button}
            type="button"
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Dark theme' : 'Light theme'}
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </MagnetButton>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            background: 'var(--pill-bg)',
            border: '1px solid var(--soft-border)',
            color: 'var(--accent-color)',
            padding: '0.5rem 0.9rem',
            borderRadius: '0.5rem',
            fontSize: '0.95rem',
            cursor: 'pointer',
            boxShadow: 'none',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </motion.button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            backgroundColor: 'var(--mobile-menu-bg)',
            borderTop: '1px solid var(--accent-color)',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
          className="mobile-menu"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link"
              style={({ isActive }) => ({
                color: isActive ? 'var(--accent-contrast)' : 'var(--text-color)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                backgroundColor: isActive ? 'var(--accent-color)' : 'transparent',
                border: `1px solid ${isActive ? 'var(--accent-color)' : 'var(--soft-border)'}`,
                transition: 'all 0.3s',
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

          .mobile-actions {
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
