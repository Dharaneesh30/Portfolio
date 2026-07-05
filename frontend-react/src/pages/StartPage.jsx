import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ThreeScene from '../components/ThreeScene'
import MagnetButton from '../components/reactbits/MagnetButton'
import ShinyText from '../components/reactbits/ShinyText'

export default function StartPage() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const fullText = 'Welcome to My Portfolio'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index += 1
      } else {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="start-shell">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="start-card"
      >
        <div className="matrix-rain">
          {[...Array(20)].map((_, index) => '10'.repeat(12 + (index % 8) * 4)).join('\n')}
        </div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="start-model"
        >
          <ThreeScene />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="start-title"
        >
          {text}
          {text.length < fullText.length && <span className="typing-caret">|</span>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="start-tagline"
        >
          Dharaneesh N | Tech Enthusiast | Developer | Innovator
        </motion.p>

        <MagnetButton
          as={motion.button}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="btn"
          onClick={() => navigate('/home')}
        >
          <ShinyText>Explore Portfolio</ShinyText>
        </MagnetButton>
      </motion.div>
    </div>
  )
}
