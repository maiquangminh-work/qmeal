'use client';

import React, { Suspense, useRef, useState, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  useGLTF, 
  OrbitControls, 
  Environment, 
  ContactShadows, 
  Float,
  MeshTransmissionMaterial
} from '@react-three/drei';
import * as THREE from 'three';
import { RotateCw, ZoomIn, Eye, Sparkles } from 'lucide-react';

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('3D Model could not be loaded from path, falling back to stylized procedural 3D meal model.', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 1. Component to load user GLTF / GLB model
function GLTFModel({ modelPath = '/models/food-item.glb' }: { modelPath?: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.8} position={[0, -0.4, 0]} />;
}

// 2. Stylized Procedural Food Model (Renders when .glb file is not yet in /public/models/ or is loading)
function StylizedFoodFallback() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* Ceramic Soup/Noodle Bowl */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[1.35, 0.85, 0.9, 48, 1, true]} />
        <meshPhysicalMaterial 
          color="#fdfbf7" 
          roughness={0.15} 
          metalness={0.05} 
          clearcoat={1.0} 
          clearcoatRoughness={0.1} 
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bowl Bottom Base */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[0.9, 0.75, 0.2, 48]} />
        <meshStandardMaterial color="#ebe6df" roughness={0.3} />
      </mesh>

      {/* Rich Golden Broth Surface */}
      <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.22, 48]} />
        <meshStandardMaterial 
          color="#c2782b" 
          roughness={0.05} 
          metalness={0.3} 
          emissive="#783d0c" 
          emissiveIntensity={0.25} 
        />
      </mesh>

      {/* Stylized Floating Noodles & Broth Layer using MeshTransmissionMaterial */}
      <mesh position={[0, 0.14, 0]}>
        <cylinderGeometry args={[1.15, 1.15, 0.12, 36]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.6}
          roughness={0.1}
          chromaticAberration={0.08}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#fbbf24"
        />
      </mesh>

      {/* Meat Slices Topping */}
      <group position={[-0.35, 0.22, -0.15]} rotation={[0.2, 0.4, -0.1]}>
        <mesh castShadow>
          <boxGeometry args={[0.7, 0.08, 0.45]} />
          <meshStandardMaterial color="#882828" roughness={0.4} />
        </mesh>
      </group>

      <group position={[-0.15, 0.23, 0.2]} rotation={[0.1, -0.3, 0.05]}>
        <mesh castShadow>
          <boxGeometry args={[0.65, 0.08, 0.4]} />
          <meshStandardMaterial color="#741e1e" roughness={0.4} />
        </mesh>
      </group>

      {/* Fresh Green Herbs & Scallions Topping */}
      <group position={[0.4, 0.22, 0.15]}>
        <mesh castShadow>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color="#16a34a" roughness={0.3} />
        </mesh>
        <mesh position={[0.18, 0.03, -0.1]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#22c55e" roughness={0.3} />
        </mesh>
      </group>

      {/* Red Chili Slices */}
      <mesh position={[0.05, 0.25, -0.3]} rotation={[0.5, 0.2, 0]}>
        <torusGeometry args={[0.12, 0.04, 12, 24]} />
        <meshStandardMaterial color="#dc2626" roughness={0.2} />
      </mesh>
      <mesh position={[0.25, 0.24, -0.15]} rotation={[0.3, -0.4, 0.2]}>
        <torusGeometry args={[0.1, 0.035, 12, 24]} />
        <meshStandardMaterial color="#ef4444" roughness={0.2} />
      </mesh>

      {/* Stylized Steaming Aromatic Particles */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.35} 
            roughness={1} 
          />
        </mesh>
        <mesh position={[0.2, 1.2, -0.1]}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.25} 
            roughness={1} 
          />
        </mesh>
        <mesh position={[-0.15, 1.5, 0.1]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.15} 
            roughness={1} 
          />
        </mesh>
      </Float>
    </group>
  );
}

export interface FoodModel3DProps {
  modelPath?: string;
  className?: string;
  dishName?: string;
  autoRotate?: boolean;
}

export default function FoodModel3D({
  modelPath = '/models/food-item.glb',
  className = 'w-full h-80 sm:h-96',
  dishName = 'Món Ăn 3D',
  autoRotate: defaultAutoRotate = true
}: FoodModel3DProps) {
  const [autoRotate, setAutoRotate] = useState(defaultAutoRotate);
  const [isUsingCustomModel, setIsUsingCustomModel] = useState(false);

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border border-stone-800 shadow-2xl select-none group ${className}`}>
      {/* WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 2.2, 3.8], fov: 42 }}
        shadows
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        {/* Lights & Atmosphere */}
        <ambientLight intensity={0.8} />
        <directionalLight 
          position={[5, 8, 4]} 
          intensity={1.8} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <pointLight position={[-4, 3, -3]} intensity={0.6} color="#fb923c" />

        {/* 3D Model with Graceful Fallback */}
        <Suspense fallback={<StylizedFoodFallback />}>
          <ModelErrorBoundary fallback={<StylizedFoodFallback />}>
            <GLTFModel modelPath={modelPath} />
          </ModelErrorBoundary>
        </Suspense>

        {/* Professional Studio Lighting & Contact Shadows */}
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -0.65, 0]} 
          opacity={0.7} 
          scale={7} 
          blur={2} 
          far={3} 
          color="#000000" 
        />

        {/* Orbit Controls for 360 Inspection */}
        <OrbitControls 
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.05}
          minDistance={2.2}
          maxDistance={6.0}
          autoRotate={autoRotate}
          autoRotateSpeed={1.8}
        />
      </Canvas>

      {/* Floating Header UI */}
      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/80 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[11px] font-bold text-white tracking-wide uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            3D WebGL Canvas
          </span>
        </div>

        <div className="bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/80 text-[11px] font-medium text-stone-300">
          {dishName}
        </div>
      </div>

      {/* Floating Bottom Controls */}
      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between pointer-events-auto">
        <div className="text-[11px] text-stone-400 bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-xl border border-stone-800 hidden sm:flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-stone-400" />
          <span>Kéo chuột để xoay 360° • Cuộn để phóng to</span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-2 rounded-xl text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-1.5 border shadow-md cursor-pointer ${
              autoRotate 
                ? 'bg-orange-600/90 text-white border-orange-500 shadow-orange-600/20' 
                : 'bg-stone-800/90 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
            title={autoRotate ? 'Dừng tự xoay' : 'Bật tự xoay 360°'}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span className="text-[11px]">{autoRotate ? 'Đang xoay' : 'Tự xoay'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Preload helper so user can call useGLTF.preload('/models/food-item.glb')
try {
  useGLTF.preload('/models/food-item.glb');
} catch {}
