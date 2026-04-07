import React, { useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

function NeonSciFiSneaker() {
  const meshRef = useRef();
  
  // Upper shoe profile
  const upperShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.9, 0.2); // Heel
    shape.lineTo(1.4, 0.2); // Toe
    shape.quadraticCurveTo(1.9, 0.3, 1.7, 0.6); // Toe curve
    shape.lineTo(1.0, 0.9); // Forefoot
    shape.quadraticCurveTo(0.6, 1.3, 0.1, 1.6); // Tongue
    shape.lineTo(-0.4, 1.6); // Ankle collar
    shape.lineTo(-0.7, 1.1); // Back collar
    shape.quadraticCurveTo(-1.1, 0.6, -0.9, 0.2); // Heel curve
    return shape;
  }, []);

  // Neon glowing sole shape
  const soleShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.0, 0);
    shape.lineTo(1.5, 0);
    shape.quadraticCurveTo(1.7, 0.1, 1.8, 0.25);
    shape.lineTo(1.4, 0.25);
    shape.lineTo(-0.9, 0.25);
    shape.quadraticCurveTo(-1.1, 0.1, -1.0, 0);
    return shape;
  }, []);

  const upperExtrude = { depth: 0.7, bevelEnabled: true, bevelSegments: 3, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };
  const soleExtrude = { depth: 0.75, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.05, bevelThickness: 0.05 };

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={1}>
      <group ref={meshRef} position={[-0.4, -0.2, -0.35]}>
        
        {/* Main Upper Body - Dark Grey Metallic */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <extrudeGeometry args={[upperShape, upperExtrude]} />
          <meshStandardMaterial color="#1a1c23" roughness={0.4} metalness={0.6} />
        </mesh>
        
        {/* Accent / Trim on the upper */}
        <mesh position={[0.2, 0.7, 0.75]} castShadow>
          <cylinderGeometry args={[0.4, 0.1, 0.05, 3]} />
          <meshStandardMaterial color="#2d333b" roughness={0.5} metalness={0.5} rotation={[0, 0, Math.PI / 2]} />
        </mesh>
        <mesh position={[0.2, 0.7, -0.05]} castShadow>
          <cylinderGeometry args={[0.4, 0.1, 0.05, 3]} />
          <meshStandardMaterial color="#2d333b" roughness={0.5} metalness={0.5} rotation={[0, 0, Math.PI / 2]} />
        </mesh>

        {/* Glowing Neon Lines (Side A) */}
        <mesh position={[0.4, 0.6, 0.72]}>
           <planeGeometry args={[1.5, 0.05]} />
           <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={3} toneMapped={false} />
        </mesh>
        <mesh position={[-0.2, 0.8, 0.72]} rotation={[0, 0, 0.5]}>
           <planeGeometry args={[0.8, 0.05]} />
           <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={3} toneMapped={false} />
        </mesh>

        {/* Glowing Neon Lines (Side B) */}
        <mesh position={[0.4, 0.6, -0.02]}>
           <planeGeometry args={[1.5, 0.05]} />
           <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={3} toneMapped={false} />
        </mesh>
        <mesh position={[-0.2, 0.8, -0.02]} rotation={[0, 0, -0.5]}>
           <planeGeometry args={[0.8, 0.05]} />
           <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={3} toneMapped={false} />
        </mesh>

        {/* Neon Glowing Sole */}
        <mesh castShadow position={[0, -0.05, -0.025]}>
          <extrudeGeometry args={[soleShape, soleExtrude]} />
          <meshStandardMaterial color="#00aaff" emissive="#00ffff" emissiveIntensity={2} roughness={0.1} metalness={0.8} toneMapped={false} />
        </mesh>

        {/* Sole Cutout pattern abstraction (adding dark contrast to the glowing sole to simulate lattice) */}
        {[0.8, 0.2, -0.4].map((x, i) => (
          <mesh key={`cutout-front-${i}`} position={[x, 0.08, 0.75]}>
            <boxGeometry args={[0.3, 0.2, 0.2]} />
            <meshStandardMaterial color="#050505" roughness={0.8} />
          </mesh>
        ))}
        {[0.8, 0.2, -0.4].map((x, i) => (
          <mesh key={`cutout-back-${i}`} position={[x, 0.08, -0.2]}>
            <boxGeometry args={[0.3, 0.2, 0.2]} />
            <meshStandardMaterial color="#050505" roughness={0.8} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function Sneaker3DViewer() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] bg-gradient-to-b from-[#1a1c23] to-[#0a0a0d] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing relative border border-gray-800 shadow-[0_0_50px_rgba(0,255,255,0.15)]">
      <Canvas shadows camera={{ position: [3, 1.5, 4], fov: 45 }}>
        <color attach="background" args={['#0a0a0d']} />
        
        {/* Dramatic Sci-Fi Lighting */}
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 10, 5]} angle={0.25} penumbra={1} intensity={2} castShadow color="#ffffff" shadow-bias={-0.0001} />
        <spotLight position={[-5, 2, -5]} angle={0.5} penumbra={1} intensity={3} color="#00ffff" />
        <pointLight position={[0, -1, 0]} intensity={2} color="#00ffff" />
        
        <NeonSciFiSneaker />
        
        <Environment preset="night" />
        
        {/* Glowing cyan shadow on the "floor" */}
        <ContactShadows position={[0, -0.8, 0]} opacity={0.6} scale={15} blur={3} far={4} color="#00ffff" />

        <OrbitControls enableZoom={true} minDistance={2} maxDistance={8} autoRotate autoRotateSpeed={1.5} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
}
