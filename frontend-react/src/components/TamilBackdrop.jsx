import React, { useMemo } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const DEFAULT_WORDS = [
  'வணக்கம்',
  'கனவு',
  'பயணம்',
  'வலிமை',
  'வாழ்வு',
  'விடுதலை',
  'புதுமை',
  'சக்தி',
  'அறிவு',
  'நம்பிக்கை',
  'கோடு',
  'பொருள்',
  'பரிணாமம்',
  'சிந்தனை',
  'உணர்வு',
  'முயற்சி',
  'வெற்றி',
  'ஒளி',
]

const makeGlyphs = (words) => (
  words.flatMap((word, wordIndex) =>
    Array.from(word).map((char, charIndex) => {
      const index = wordIndex * 12 + charIndex
      return {
        id: `${word}-${charIndex}`,
        char,
        top: 8 + ((wordIndex * 23 + charIndex * 7) % 82),
        left: 5 + ((wordIndex * 31 + charIndex * 13) % 88),
        size: 28 + ((wordIndex + charIndex) % 5) * 10,
        driftX: ((index % 5) - 2) * 14,
        driftY: (((index + 2) % 5) - 2) * 12,
        rotate: ((index * 19) % 50) - 25,
        delay: index * 0.035,
      }
    })
  )
)

export const TamilBackdrop = ({ customWords = null, showOnLanding = false }) => {
  const reduceMotion = useReducedMotion()
  const words = customWords || DEFAULT_WORDS
  const glyphs = useMemo(() => makeGlyphs(words), [words])
  const { scrollY } = useScroll()
  const containerY = useTransform(scrollY, [0, 1000], [0, -140])

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
      style={{ y: reduceMotion || showOnLanding ? 0 : containerY }}
    >
      {glyphs.map((glyph) => (
        <motion.span
          key={glyph.id}
          className="absolute tamil-display text-manjal-gold select-none"
          style={{
            top: `${glyph.top}%`,
            left: `${glyph.left}%`,
            fontSize: `${glyph.size}px`,
            opacity: 0.13,
            filter: 'blur(0.6px)',
          }}
          initial={{ opacity: 0, y: 28, rotate: glyph.rotate }}
          animate={reduceMotion ? { opacity: 0.1, y: 0 } : {
            opacity: [0.08, 0.18, 0.1],
            x: [0, glyph.driftX, 0],
            y: [0, glyph.driftY, 0],
            rotate: [glyph.rotate, glyph.rotate + 8, glyph.rotate],
          }}
          transition={{
            delay: glyph.delay,
            duration: reduceMotion ? 0.2 : 16 + (glyph.delay % 5),
            repeat: reduceMotion ? 0 : Infinity,
            repeatType: 'mirror',
            type: reduceMotion ? undefined : 'spring',
            stiffness: 120,
            damping: 14,
          }}
        >
          {glyph.char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default TamilBackdrop
