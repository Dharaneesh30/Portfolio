import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import { useTheme } from '../contexts/ThemeContext'

function RotatingModel({ color, pointer }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const floatX = Math.sin(state.clock.elapsedTime * 0.55) * 0.18
      const floatZ = Math.cos(state.clock.elapsedTime * 0.45) * 0.14
      const followX = pointer.x * 0.16
      const followY = pointer.y * 0.16

      meshRef.current.rotation.y += 0.003 + pointer.x * 0.0004
      meshRef.current.rotation.x = meshRef.current.rotation.x * 0.86 + (floatX + followY) * 0.14
      meshRef.current.rotation.z = meshRef.current.rotation.z * 0.86 + (floatZ - followX) * 0.14
    }
  })

  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 12]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.65}
          roughness={0.18}
          metalness={0.5}
          distort={0.18}
          speed={1.4}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  )
}

function SceneShell({ accentColor, pointer }) {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 3, 2]} intensity={1.15} color={accentColor} />
      <pointLight position={[-4, 2, 4]} intensity={1.4} color={accentColor} />
      <RotatingModel color={accentColor} pointer={pointer} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </>
  )
}

export default function ThreeScene() {
  const { theme } = useTheme()
  const [reducedMotion, setReducedMotion] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const accentColor = useMemo(() => {
    if (typeof window === 'undefined') return '#8b5cf6'
    return getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#8b5cf6'
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  if (reducedMotion) {
    return <div className="hero-visual-fallback" />
  }

  return (
    <div
      className="hero-visual"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        setPointer({ x, y })
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 3.6], fov: 54 }}>
        <SceneShell accentColor={accentColor} pointer={pointer} />
      </Canvas>
    </div>
  )
}
