import React, { useRef } from 'react'

export default function SpotlightCard({ as: Tag = 'div', className = '', children, ...props }) {
  const elementRef = useRef(null)
  const frameRef = useRef(0)
  const pointRef = useRef({ x: 0, y: 0 })

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
    <Tag
      ref={elementRef}
      className={`spotlight-card ${className}`.trim()}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </Tag>
  )
}
