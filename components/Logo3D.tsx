'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

function LogoModel() {
  const { scene } = useGLTF('/logo_animacja/base_basic_shaded.glb')
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <primitive 
      ref={meshRef} 
      object={scene} 
      scale={1.8} 
      position={[0, -0.8, 0]}
    />
  )
}

export default function Logo3D() {
  return (
    <div className="w-12 h-12">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <Suspense fallback={null}>
          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/logo_animacja/base_basic_shaded.glb')

