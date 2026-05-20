import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ThreeScene from '../components/ThreeScene'

export default function StartPage() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const fullText = 'Welcome to My Portfolio'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', position: 'relative', zIndex: 10 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', width: '100%', maxWidth: '800px', padding: '2rem' }}
      >
        {/* Matrix Rain Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          fontSize: '20px',
          lineHeight: '1.2',
          fontFamily: 'Fira Code',
          color: '#00FF41',
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          zIndex: 0
        }}>
          {[...Array(20)].map((_, i) => '█'.repeat(Math.random() * 50)).join('\n')}
        </div>

        {/* 3D Model */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ height: '300px', marginBottom: '2rem', position: 'relative', zIndex: 5 }}
        >
          <ThreeScene />
        </motion.div>

        {/* Typewriter Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ fontFamily: 'Orbitron', fontSize: '3.5rem', color: '#00FF41', marginBottom: '1rem', letterSpacing: '0.08em', textShadow: '0 0 20px rgba(0, 255, 65, 0.4)' }}
        >
          {text}
          {text.length < fullText.length && <span style={{ animation: 'blink 0.7s infinite' }}>|</span>}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          style={{ fontSize: '1.2rem', color: '#e0e0e0', marginBottom: '2rem', fontFamily: 'Rajdhani' }}
        >
          Dharaneesh N — Tech Enthusiast | Developer | Innovator
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
          onClick={() => navigate('/home')}
          style={{ marginTop: '2rem', fontSize: '1.1rem', padding: '0.8rem 2rem' }}
        >
          Explore Now →
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ marginTop: '4rem', color: '#00FF41', fontSize: '2rem' }}
        >
          ↓
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
