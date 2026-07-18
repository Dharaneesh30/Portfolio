import React from 'react'
import { motion, useScroll } from 'framer-motion'

export const ScrollProgress = ({ hideOnLanding = false }) => {
  const { scrollYProgress } = useScroll()
  
  if (hideOnLanding) {
    return null
  }
  
  return (
    <motion.div
      className="fixed left-8 top-0 w-1 bg-gradient-to-b from-manjal-gold to-kumkum-vermilion pointer-events-none z-50 hidden md:block"
      style={{
        height: '100vh',
        scaleY: scrollYProgress,
        transformOrigin: 'top',
      }}
    />
  )
}

export default ScrollProgress
