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
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.45, delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
