import React from 'react'
import { motion } from 'framer-motion'

export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  perCharDelay = 0.028,
  y = 18,
  once = true,
  amount = 0.35,
}) {
  const characters = Array.from(text)

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true" style={{ perspective: 400 }}>
        {characters.map((character, index) => (
          <motion.span
            key={`${character}-${index}`}
            initial={{ opacity: 0, y, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once, amount }}
            transition={{ type: 'spring', stiffness: 320, damping: 24, delay: delay + index * perCharDelay }}
            style={{ display: 'inline-block', whiteSpace: character === ' ' ? 'pre' : 'normal' }}
          >
            {character}
          </motion.span>
        ))}
      </span>
    </Tag>
  )
}
