import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Low-Poly Wireframe Data Globe / Sphere
function DataGlobe({ isDark }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={meshRef} position={[0, 0, 0]}>
        {/* Core distorted sphere */}
        <mesh>
          <sphereGeometry args={[1.8, 32, 32]} />
          <MeshDistortMaterial
            color={isDark ? "#06b6d4" : "#0284c7"}
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>
        
        {/* Inner solid glowing core */}
        <mesh scale={0.75}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color={isDark ? "#6366f1" : "#4f46e5"}
            roughness={0.3}
            metalness={0.9}
            wireframe={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Procedural Floating 3D Data Bars (Bar Chart Representation)
function FloatingDataBars({ isDark }) {
  const groupRef = useRef();

  const barData = [
    { pos: [-3.2, -0.5, -1], height: 2.2, color: "#06b6d4" },
    { pos: [-2.6, 0.2, -0.5], height: 3.5, color: "#38bdf8" },
    { pos: [-2.0, -0.2, -1.2], height: 2.8, color: "#6366f1" },
    { pos: [2.0, -0.4, -0.8], height: 3.0, color: "#a855f7" },
    { pos: [2.6, 0.4, -1.5], height: 4.0, color: "#38bdf8" },
    { pos: [3.2, -0.1, -0.5], height: 2.5, color: "#06b6d4" },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle parallax sway based on pointer
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.pointer.x * Math.PI) / 12,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (-state.pointer.y * Math.PI) / 24,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {barData.map((bar, idx) => (
        <Float key={idx} speed={1.2 + idx * 0.2} floatIntensity={0.6} rotationIntensity={0.2}>
          <mesh position={bar.pos}>
            <boxGeometry args={[0.35, bar.height, 0.35]} />
            <meshStandardMaterial
              color={bar.color}
              metalness={0.7}
              roughness={0.2}
              transparent
              opacity={isDark ? 0.85 : 0.75}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Floating Node Particles (Data Network)
function DataParticles({ count = 200, isDark }) {
  const pointsRef = useRef();

  // Generate random positions for data nodes
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={isDark ? "#38bdf8" : "#0284c7"}
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDark ? 0.7 : 0.5}
      />
    </Points>
  );
}

// Main 3D Canvas Container Component
export default function DataVizScene({ theme = 'dark' }) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.6 : 0.9} />
        <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.2 : 1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#a855f7" />

        <DataGlobe isDark={isDark} />
        <FloatingDataBars isDark={isDark} />
        <DataParticles isDark={isDark} />
      </Canvas>
    </div>
  );
}
