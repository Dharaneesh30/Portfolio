import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTheme } from '../contexts/ThemeContext'

function RotatingModel({ color }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x += 0.002
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshPhongMaterial color={color} wireframe={true} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )
}

export default function ThreeScene() {
  const { theme } = useTheme()
  const accentColor = useMemo(() => {
    if (typeof window === 'undefined') return '#00FF41'
    return getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#00FF41'
  }, [theme])

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color={accentColor} />
      <RotatingModel color={accentColor} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  )
}
