import React, { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function CoreModel({ pointer }){
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.35
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.current.y * 0.22, 0.06)
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, pointer.current.x * 0.18, 0.06)
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.8} floatIntensity={1.1} rotationIntensity={0.3}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1.5, 30]} />
          <MeshDistortMaterial
            color="#22c55e"
            emissive="#16a34a"
            emissiveIntensity={1.6}
            roughness={0.18}
            metalness={0.7}
            distort={0.25}
            speed={1.8}
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.35, 0.05, 16, 120]} />
        <meshStandardMaterial color="#4ade80" emissive="#15803d" emissiveIntensity={1.3} metalness={0.8} roughness={0.24} />
      </mesh>

      <mesh rotation={[0.8, 0.9, 0]}>
        <torusGeometry args={[2.95, 0.035, 16, 120]} />
        <meshStandardMaterial color="#86efac" emissive="#22c55e" emissiveIntensity={1} metalness={0.7} roughness={0.28} />
      </mesh>
    </group>
  )
}

function ParticleField(){
  const ref = useRef()
  const positions = useMemo(() => {
    const values = new Float32Array(180 * 3)
    for (let i = 0; i < values.length; i += 3) {
      values[i] = (Math.random() - 0.5) * 16
      values[i + 1] = (Math.random() - 0.5) * 10
      values[i + 2] = (Math.random() - 0.5) * 10
    }
    return values
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.06
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#4ade80" size={0.04} transparent opacity={0.8} />
    </points>
  )
}

export default function ThreeHero({ className = '' }){
  const pointer = useRef({ x: 0, y: 0 })

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-emerald-500/18 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18),transparent_28%),linear-gradient(180deg,#020403,#000000)] ${className}`}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        pointer.current.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
        pointer.current.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -2
      }}
    >
      <Canvas shadows dpr={[1, 1.75]} camera={{ position: [0, 0, 8], fov: 40 }}>
        <color attach="background" args={['#010201']} />
        <fog attach="fog" args={['#010201', 8, 18]} />
        <ambientLight intensity={0.55} />
        <spotLight position={[4, 6, 5]} angle={0.45} penumbra={1} intensity={80} color="#86efac" castShadow />
        <pointLight position={[-4, -2, 3]} intensity={12} color="#22c55e" />
        <Suspense fallback={null}>
          <ParticleField />
          <CoreModel pointer={pointer} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>
  )
}
