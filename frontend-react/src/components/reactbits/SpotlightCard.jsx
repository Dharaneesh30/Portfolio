import React, { useRef } from 'react'
import { motion } from 'framer-motion'

export default function SpotlightCard({ as: Tag = 'div', className = '', children, whileHover, whileTap, transition, ...props }) {
  const elementRef = useRef(null)
  const frameRef = useRef(0)
  const pointRef = useRef({ x: 0, y: 0 })
  const MotionTag = typeof Tag === 'string' ? motion(Tag) : Tag
  const hoverMotion = whileHover ?? { scale: 1.04, y: -4, rotate: 1.2 }
  const tapMotion = whileTap ?? { scale: 0.98, rotate: -0.4 }
  const springTransition = transition ?? { type: 'spring', stiffness: 320, damping: 24 }

  const handleMouseMove = (event) => {
    const element = elementRef.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    pointRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }

    if (frameRef.current) return

    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty('--spotlight-x', `${pointRef.current.x}px`)
      element.style.setProperty('--spotlight-y', `${pointRef.current.y}px`)
      frameRef.current = 0
    })
  }

  return (
    <MotionTag
      ref={elementRef}
      className={`spotlight-card ${className}`.trim()}
      onMouseMove={handleMouseMove}
      whileHover={hoverMotion}
      whileTap={tapMotion}
      transition={springTransition}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
