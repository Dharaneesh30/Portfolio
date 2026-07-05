import React from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'

export default function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1.4,
  className = '',
}) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.55 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`)

  React.useEffect(() => {
    if (!isInView) return undefined

    const controls = animate(count, value, { duration, ease: 'easeOut' })
    return controls.stop
  }, [count, duration, isInView, value])

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>
}
