import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function Blob({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.x = position[0] + Math.sin(t * 0.3) * 0.5;
    ref.current.position.y = position[1] + Math.cos(t * 0.4) * 0.4;
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial color={color} distort={0.5} speed={2} roughness={0.1} metalness={0.2} transparent opacity={0.55} />
      </mesh>
    </Float>
  );
}

function Particles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    ref.current.rotation.x = state.mouse.y * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#f4c2c2" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color="#f4c2c2" />
      <pointLight position={[-5, -3, 2]} intensity={1} color="#b794f4" />
      <Blob position={[-3, 1, -2]} color="#f4c2c2" scale={1.8} speed={0.8} />
      <Blob position={[3, -1, -3]} color="#e8a4b8" scale={2.2} speed={0.6} />
      <Blob position={[0, 2, -4]} color="#b794f4" scale={1.4} speed={1.1} />
      <Particles />
    </>
  );
}

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 aurora-bg animate-aurora">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
          <Scene />
        </Canvas>
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60 pointer-events-none" />
    </div>
  );
}
