'use client';

import React, { Suspense, useRef, useState, Component, useMemo } from 'react';
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
import { RotateCw, Sparkles, Eye, Link as LinkIcon, Check, Settings, X, ExternalLink, RefreshCw } from 'lucide-react';

// Preset curated public Sketchfab 3D models for instant demo
export const SKETCHFAB_FOOD_PRESETS = [
  {
    id: 'ba40c1157fbe4fecab76f82ea10fe40e',
    name: 'Tô Phở Bò Bốc Khói (Pho Bowl)',
    author: 'Sketchfab Public'
  },
  {
    id: 'f94dbfae099646b5a32ec6940f9e1e91',
    name: 'Tô Mì Ramen Thập Cẩm (Ramen Bowl)',
    author: 'Sketchfab Public'
  },
  {
    id: '1a31952e3e5746b19a16f2c38da97e55',
    name: 'Đĩa Sushi & Maki Thượng Hạng',
    author: 'Sketchfab Public'
  },
  {
    id: '45d4c82b988f4dc7b878347f7d1a2cb5',
    name: 'Bánh Mì Kẹp Thịt Giòn Rụm',
    author: 'Sketchfab Public'
  }
];

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
    console.warn('Local .glb model not found, falling back to stylized 3D procedural food mesh.', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 1. Component to load local user GLTF / GLB model via Three.js
function GLTFModel({ modelPath = '/models/food-item.glb' }: { modelPath?: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.8} position={[0, -0.4, 0]} />;
}

// 2. Stylized Procedural Food Model using MeshTransmissionMaterial
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

      {/* Stylized Floating Broth/Noodle Layer using MeshTransmissionMaterial */}
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

      {/* Meat Slices */}
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

      {/* Fresh Green Herbs & Scallions */}
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

      {/* Steaming Floating Particles */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.35} roughness={1} />
        </mesh>
        <mesh position={[0.2, 1.2, -0.1]}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.25} roughness={1} />
        </mesh>
        <mesh position={[-0.15, 1.5, 0.1]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.15} roughness={1} />
        </mesh>
      </Float>
    </group>
  );
}

// Helper to parse Sketchfab IDs from any URL, embed code, or raw ID
function extractSketchfabId(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  // Check iframe src
  const iframeMatch = trimmed.match(/src=["']https?:\/\/sketchfab\.com\/models\/([a-f0-9]{32})\/embed/i);
  if (iframeMatch) return iframeMatch[1];
  // Check standard models/ or 3d-models/ url
  const urlMatch = trimmed.match(/sketchfab\.com\/(?:models\/|3d-models\/[^?#]*?-)([a-f0-9]{32})/i);
  if (urlMatch) return urlMatch[1];
  // Check raw 32-char hex ID
  const hexMatch = trimmed.match(/^[a-f0-9]{32}$/i);
  if (hexMatch) return hexMatch[0];
  return null;
}

export interface FoodModel3DProps {
  modelPath?: string;
  sketchfabId?: string;
  className?: string;
  dishName?: string;
  autoRotate?: boolean;
}

export default function FoodModel3D({
  modelPath = '/models/food-item.glb',
  sketchfabId: initialSketchfabId,
  className = 'w-full h-80 sm:h-96',
  dishName = 'Món Ăn 3D',
  autoRotate: defaultAutoRotate = true
}: FoodModel3DProps) {
  const [autoRotate, setAutoRotate] = useState(defaultAutoRotate);
  const [activeSketchfabId, setActiveSketchfabId] = useState<string | null>(initialSketchfabId || null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [inputEmbedText, setInputEmbedText] = useState('');
  const [inputError, setInputError] = useState('');

  const handleApplySketchfab = () => {
    setInputError('');
    if (!inputEmbedText.trim()) {
      setActiveSketchfabId(null);
      setShowSettingsModal(false);
      return;
    }
    const parsedId = extractSketchfabId(inputEmbedText);
    if (!parsedId) {
      setInputError('Link hoặc mã nhúng không đúng định dạng Sketchfab (cần chứa ID 32 ký tự).');
      return;
    }
    setActiveSketchfabId(parsedId);
    setShowSettingsModal(false);
    setInputEmbedText('');
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border border-stone-800 shadow-2xl select-none group ${className}`}>
      {/* View 1: If Sketchfab Embed ID is active */}
      {activeSketchfabId ? (
        <div className="w-full h-full relative bg-black">
          <iframe
            title={dishName}
            src={`https://sketchfab.com/models/${activeSketchfabId}/embed?autostart=1&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=0&ui_stop=0&ui_theatre=1&ui_watermark=0`}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
          />
        </div>
      ) : (
        /* View 2: Native Three.js WebGL Canvas */
        <Canvas
          camera={{ position: [0, 2.2, 3.8], fov: 42 }}
          shadows
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Lights */}
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

          {/* Environment and Shadows */}
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -0.65, 0]} 
            opacity={0.7} 
            scale={7} 
            blur={2} 
            far={3} 
            color="#000000" 
          />

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
      )}

      {/* Floating Header Bar */}
      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <div className="flex items-center gap-2 bg-stone-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/80 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[11px] font-bold text-white tracking-wide uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {activeSketchfabId ? 'Sketchfab 3D Embed' : 'Three.js WebGL Canvas'}
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Change Model / Embed Link button */}
          <button
            type="button"
            onClick={() => setShowSettingsModal(true)}
            className="inline-flex items-center gap-1.5 bg-stone-900/90 hover:bg-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold border border-stone-700 hover:border-orange-500 shadow-md backdrop-blur-md transition-all cursor-pointer"
            title="Dán link Sketchfab hoặc chọn mẫu 3D"
          >
            <LinkIcon className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Dán Link Sketchfab</span>
          </button>
        </div>
      </div>

      {/* Floating Bottom Bar */}
      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between pointer-events-auto z-20">
        <div className="text-[11px] text-stone-300 bg-stone-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-800 hidden sm:flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-orange-400" />
          <span>Kéo chuột để xoay 360° • Cuộn chuột để phóng to</span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {!activeSketchfabId && (
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
          )}

          {activeSketchfabId && (
            <button
              type="button"
              onClick={() => setActiveSketchfabId(null)}
              className="bg-stone-800/90 hover:bg-stone-700 text-stone-300 px-3 py-2 rounded-xl text-xs font-semibold border border-stone-700 backdrop-blur-md transition-all cursor-pointer flex items-center gap-1"
              title="Quay lại Canvas 3D gốc"
            >
              <RefreshCw className="w-3.5 h-3.5 text-orange-400" />
              <span>Canvas Three.js</span>
            </button>
          )}
        </div>
      </div>

      {/* Modal: Paste Sketchfab Embed or Choose Preset */}
      {showSettingsModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowSettingsModal(false)}
        >
          <div 
            className="bg-stone-900 border border-stone-700 rounded-3xl max-w-lg w-full p-6 text-white shadow-2xl space-y-5 animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <LinkIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">Nhúng Mô Hình 3D Sketchfab</h3>
                  <p className="text-[11px] text-stone-400">Không cần tải file .glb — Chỉ cần dán link hoặc mã nhúng</p>
                </div>
              </div>
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Input Box */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-300 block">
                Dán link Sketchfab hoặc mã &lt;iframe&gt; embed:
              </label>
              <textarea
                value={inputEmbedText}
                onChange={(e) => {
                  setInputEmbedText(e.target.value);
                  setInputError('');
                }}
                placeholder="Ví dụ: https://sketchfab.com/3d-models/vietnamese-pho-... hoặc mã nhúng iframe"
                rows={3}
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl p-3 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
              />
              {inputError && (
                <p className="text-xs text-red-400 font-medium">{inputError}</p>
              )}
            </div>

            {/* Quick Demo Presets */}
            <div>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">
                Hoặc chọn nhanh mô hình mẫu Sketchfab:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SKETCHFAB_FOOD_PRESETS.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setActiveSketchfabId(preset.id);
                      setShowSettingsModal(false);
                    }}
                    className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      activeSketchfabId === preset.id
                        ? 'bg-orange-600/20 border-orange-500 text-orange-300'
                        : 'bg-stone-800/80 border-stone-700/80 text-stone-200 hover:bg-stone-800 hover:border-orange-400'
                    }`}
                  >
                    <div className="truncate">{preset.name}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">Click để xem ngay 3D</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-stone-800">
              <button
                type="button"
                onClick={() => {
                  setActiveSketchfabId(null);
                  setShowSettingsModal(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                Dùng Canvas 3D gốc
              </button>
              <button
                type="button"
                onClick={handleApplySketchfab}
                className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-orange-600/30"
              >
                Áp Dụng Ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
