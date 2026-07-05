import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const lastUpdated = 'May 21, 2026'

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        style={{
          borderTop: '1px solid var(--soft-border)',
          backgroundColor: 'var(--footer-bg)',
          padding: '2.5rem 2rem',
          marginTop: '4rem',
        }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div className="footer-layout">
          <div>
            <p className="footer-copy">Created by Dharaneesh N | {lastUpdated} | React, Vite, Three.js</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
