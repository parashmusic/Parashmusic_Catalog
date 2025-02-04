import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Image, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { ErrorBoundary } from "react-error-boundary";

function Album({ imageUrl }) {
  const imageRef = useRef(null);
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useFrame((state) => {
    if (imageRef.current) {
      imageRef.current.rotation.y = THREE.MathUtils.lerp(
        imageRef.current.rotation.y,
        (-state.mouse.x * Math.PI) / 14,
        0.1
      );
    }
  });

  return (
    <Float floatIntensity={3} rotationIntensity={0.5}>
      <mesh ref={imageRef}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} transparent opacity={1} />
      </mesh>
    </Float>
  );
}

export default function Scene3D({ imageUrl }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="h-full flex items-center justify-center">
          Error loading 3D scene
        </div>
      }
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Album imageUrl={imageUrl} />
        <Environment preset="night" />
      </Canvas>
    </ErrorBoundary>
  );
}