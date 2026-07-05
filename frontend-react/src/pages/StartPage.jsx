import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ThreeScene from '../components/ThreeScene'
import MagnetButton from '../components/reactbits/MagnetButton'
import ShinyText from '../components/reactbits/ShinyText'
import SplitText from '../components/reactbits/SplitText'

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
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -24, scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
        className="start-card"
      >
        <div className="matrix-rain">
          {[...Array(20)].map((_, index) => '10'.repeat(12 + (index % 8) * 4)).join('\n')}
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 24, delay: 0.16 }}
          className="start-model"
        >
          <ThreeScene />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.28 }}
        >
          <SplitText as="h1" className="start-title" text={text || fullText} />
          {text.length < fullText.length && <span className="typing-caret">|</span>}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 24, delay: 0.72 }}
          className="start-tagline"
        >
          Dharaneesh N | Tech Enthusiast | Developer | Innovator
        </motion.p>

        <MagnetButton
          as={motion.button}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 1.05 }}
          whileHover={{ scale: 1.03, y: -3, rotate: 1 }}
          whileTap={{ scale: 0.97, rotate: -1 }}
          className="btn"
          onClick={() => navigate('/home')}
        >
          <ShinyText>Explore Portfolio</ShinyText>
        </MagnetButton>
      </motion.div>
    </div>
  )
}
