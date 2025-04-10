"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { starCanvas } from "@/styles/design/3d-object/complex-star.css";

interface ComplexStar3DProps {
  accretionDiskColor?: string;
  rotationSpeed?: number;
  tiltAngle?: number;
}

const ComplexStar3D: React.FC<ComplexStar3DProps> = ({
  accretionDiskColor = "#ff7b00",
  rotationSpeed = 0.2,
  tiltAngle = 0.3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    // Get canvas dimensions from parent element
    const container = canvas.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Main group for the entire blackhole system
    const blackholeGroup = new THREE.Group();
    scene.add(blackholeGroup);

    // Add initial tilt to the blackhole (similar to image)
    blackholeGroup.rotation.x = tiltAngle;
    blackholeGroup.rotation.z = -0.2;

    // Create the black hole (center sphere)
    const blackholeSphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const blackholeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
    const blackholeSphere = new THREE.Mesh(
      blackholeSphereGeometry,
      blackholeMaterial,
    );
    blackholeGroup.add(blackholeSphere);

    // Create event horizon glow effect
    const eventHorizonGeometry = new THREE.SphereGeometry(0.85, 32, 32);
    const eventHorizonMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    });
    const eventHorizon = new THREE.Mesh(
      eventHorizonGeometry,
      eventHorizonMaterial,
    );
    blackholeGroup.add(eventHorizon);

    // Create accretion disk (flat ring with gradient)
    const accretionDiskGeometry = new THREE.RingGeometry(0.9, 3, 64, 8);

    // Create custom shader material for the accretion disk
    const diskMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        color1: { value: new THREE.Color(accretionDiskColor) },
        color2: { value: new THREE.Color("#ffffff") },
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          // Calculate distance from center
          float distFromCenter = length(vUv - vec2(0.5, 0.5)) * 2.0;
          
          // Create gradient from inner to outer edge
          float innerGlow = smoothstep(0.3, 0.5, distFromCenter);
          float outerFade = smoothstep(1.0, 0.7, distFromCenter);
          
          // Add time-based rotation effect
          float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
          float wave = sin(angle * 6.0 + time * 2.0) * 0.3 + 0.7;
          
          // Mix colors based on distance
          vec3 finalColor = mix(color2, color1, innerGlow);
          
          // Apply opacity based on distance and wave
          float opacity = outerFade * wave * (1.0 - distFromCenter * 0.5);
          
          gl_FragColor = vec4(finalColor, opacity);
        }
      `,
    });

    const accretionDisk = new THREE.Mesh(accretionDiskGeometry, diskMaterial);
    accretionDisk.rotation.x = Math.PI / 2; // Make it flat
    blackholeGroup.add(accretionDisk);

    // Create light beam (gravitational lensing effect)
    const beamGeometry = new THREE.CylinderGeometry(0.05, 0.4, 10, 32, 1, true);
    const beamMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        color: { value: new THREE.Color("#ffffff") },
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          // Create a fade from center to edge
          float radialFade = 1.0 - abs(vUv.x - 0.5) * 2.0;
          
          // Fade based on distance from black hole
          float distFade = smoothstep(0.0, 0.7, vUv.y);
          
          // Add some turbulence
          float turbulence = sin(vUv.y * 40.0 + time) * 0.1 + 0.9;
          
          // Final opacity
          float opacity = radialFade * distFade * turbulence * 0.7;
          
          gl_FragColor = vec4(color, opacity);
        }
      `,
    });

    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.set(0, 0, -5);
    beam.rotation.x = Math.PI / 2;
    blackholeGroup.add(beam);

    // Create starfield background
    const starsCount = 2000;
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i += 3) {
      // Create stars in a spherical distribution
      const radius = 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i + 2] = radius * Math.cos(phi);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
    });

    const starfield = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starfield);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      // Update shader time uniforms
      if (diskMaterial.uniforms) {
        diskMaterial.uniforms.time.value = time;
      }

      if (beamMaterial.uniforms) {
        beamMaterial.uniforms.time.value = time;
      }

      // Rotate accretion disk
      accretionDisk.rotation.z += rotationSpeed * 0.01;

      // Rotate entire blackhole system slowly
      blackholeGroup.rotation.y += rotationSpeed * 0.002;

      // Add subtle wobble to the system
      blackholeGroup.rotation.x = tiltAngle + Math.sin(time * 0.2) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!container) return;

      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      // Clean up resources
      blackholeSphereGeometry.dispose();
      blackholeMaterial.dispose();
      eventHorizonGeometry.dispose();
      eventHorizonMaterial.dispose();
      accretionDiskGeometry.dispose();
      diskMaterial.dispose();
      beamGeometry.dispose();
      beamMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, [accretionDiskColor, rotationSpeed, tiltAngle]);

  return <canvas ref={canvasRef} className={starCanvas} />;
};

export default ComplexStar3D;
