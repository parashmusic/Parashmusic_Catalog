import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WrapEffect({ imageUrl }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Texture loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageUrl);

    // Shader material for liquid distortion
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.4);
      }
    `;

    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        uv.x += sin(uv.y * 10.0 + uTime) * 0.01; // Horizontal distortion
        uv.y += cos(uv.x * 10.0 + uTime) * 0.01; // Vertical distortion
        vec4 color = texture2D(uTexture, uv);
        gl_FragColor = color;
      }
    `;

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0.0 },
      },
      vertexShader,
      fragmentShader,
    });

    // Plane geometry
    const geometry = new THREE.PlaneGeometry(5, 5);
    const plane = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(plane);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      shaderMaterial.uniforms.uTime.value = elapsedTime;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [imageUrl]);

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -10 }} />;
}