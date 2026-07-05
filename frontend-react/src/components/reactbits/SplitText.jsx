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
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount }}
            transition={{ duration: 0.42, delay: delay + index * perCharDelay }}
            style={{ display: 'inline-block', whiteSpace: character === ' ' ? 'pre' : 'normal' }}
          >
            {character}
          </motion.span>
        ))}
      </span>
    </Tag>
  )
}
