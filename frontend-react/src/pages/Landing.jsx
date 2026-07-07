import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CharacterReveal = ({ text, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, type: 'spring', stiffness: 120, damping: 14 }}>
    {Array.from(text).map((char, index) => (
      <motion.span
        key={`${char}-${index}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay + index * 0.035,
          type: 'spring',
          stiffness: 120,
          damping: 14,
        }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.div>
)

const Landing = () => {
  const tamilQuote = 'யாதென அறியாமல் தொட்டு யாதுமாகி அழிந்து யாம் யாரென மீண்டெழுந்து வாழ்'
  const englishGloss = 'Not knowing what we are, we touch everything, become everything, fade - then rise again knowing who we are, and live.'

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-iravu-indigo via-sandal-ash to-iravu-indigo">
      <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
          className="mb-10 md:mb-12"
        >
          <p className="text-manjal-gold text-sm md:text-base tracking-widest uppercase font-mono mb-2">
            வரவேற்கிறோம்
          </p>
          <p className="text-ilai-ivory text-opacity-65 text-sm md:text-base font-light">
            Student. Developer. Builder of creative web experiences.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.5 }}
        >
          <div className="text-3xl md:text-5xl lg:text-6xl tamil-display font-black leading-tight mb-6">
            <CharacterReveal text={tamilQuote} delay={0.65} />
          </div>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-transparent via-kumkum-vermilion to-transparent mx-auto my-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.6, type: 'spring', stiffness: 120, damping: 14 }}
          />

          <motion.p
            className="text-ilai-ivory text-opacity-70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light italic"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, type: 'spring', stiffness: 120, damping: 14 }}
          >
            {englishGloss}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, type: 'spring', stiffness: 120, damping: 14 }}
          className="mt-12"
        >
          <Link to="/home">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(193, 68, 46, 0.35)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="px-8 md:px-12 py-3 md:py-4 bg-kumkum-vermilion text-ilai-ivory font-semibold rounded-lg text-base md:text-lg border border-kumkum-vermilion hover:bg-opacity-90"
            >
              தொடங்குவோம் (Enter)
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Landing
