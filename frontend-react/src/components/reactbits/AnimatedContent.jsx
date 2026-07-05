import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedContent({
  as: Tag = motion.div,
  children,
  className = '',
  delay = 0,
  y = 18,
  amount = 0.25,
  ...props
}) {
  const Component = Tag

  return (
    <Component
      initial={{ opacity: 0, y, scale: 0.95, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount }}
      transition={{ type: 'spring', stiffness: 320, damping: 24, delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
