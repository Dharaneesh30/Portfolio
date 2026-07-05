import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let frameId = 0
    let ringFrameId = 0
    let lastPoint = { x: 0, y: 0 }

    const handleMouseMove = (event) => {
      lastPoint = { x: event.clientX, y: event.clientY }

      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          setDotPosition({ x: lastPoint.x - 6, y: lastPoint.y - 6 })
          frameId = 0
        })
      }

      if (!ringFrameId) {
        ringFrameId = requestAnimationFrame(() => {
          setRingPosition((currentPosition) => ({
            x: currentPosition.x + (lastPoint.x - 12 - currentPosition.x) * 0.32,
            y: currentPosition.y + (lastPoint.y - 12 - currentPosition.y) * 0.32,
          }))
          ringFrameId = 0
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
      cancelAnimationFrame(ringFrameId)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }} />
      <div className="cursor-ring" style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }} />
    </>
  )
}
