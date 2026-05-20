import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      
      // Dot follows exactly
      setDotPosition({ x: x - 6, y: y - 6 })
      
      // Ring follows with lag
      setTimeout(() => {
        setRingPosition({ x: x - 12, y: y - 12 })
      }, 50)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="cursor-dot" style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }} />
      <div className="cursor-ring" style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }} />
    </>
  )
}
