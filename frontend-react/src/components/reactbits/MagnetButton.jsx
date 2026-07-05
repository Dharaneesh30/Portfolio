import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagnetButton({
  as: Component = motion.button,
  strength = 0.24,
  children,
  style,
  onMouseMove,
  onMouseLeave,
  ...props
}) {
  const ref = useRef(null)
  const frameRef = useRef(0)
  const pointRef = useRef({ x: 0, y: 0 })
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 14 })
  const springY = useSpring(y, { stiffness: 200, damping: 14 })
  const MotionComponent = Component

  const handleMouseMove = (event) => {
    onMouseMove?.(event)

    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    pointRef.current = {
      x: (event.clientX - rect.left - rect.width / 2) * strength,
      y: (event.clientY - rect.top - rect.height / 2) * strength,
    }

    if (frameRef.current) return

    frameRef.current = requestAnimationFrame(() => {
      x.set(pointRef.current.x)
      y.set(pointRef.current.y)
      frameRef.current = 0
    })
  }

  const handleMouseLeave = (event) => {
    onMouseLeave?.(event)
    x.set(0)
    y.set(0)
  }

  return (
    <MotionComponent
      ref={ref}
      style={{ ...style, x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
