import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        borderTop: '1px solid #00FF41',
        backgroundColor: '#000000',
        padding: '2rem',
        marginTop: '4rem'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.8rem',
          letterSpacing: '0.08em',
          color: '#00FF41',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}>
          Matrix Portfolio © 2024
        </p>
        <p style={{
          color: '#888888',
          fontSize: '0.9rem',
          marginBottom: '1rem'
        }}>
          Built with React, Vite, TailwindCSS, Three.js, and Framer Motion
        </p>
        <p style={{
          color: '#888888',
          fontSize: '0.85rem'
        }}>
          📝 TODO: Update with your personal links and information
        </p>
      </div>
    </motion.footer>
  )
}

