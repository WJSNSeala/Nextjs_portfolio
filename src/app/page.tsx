"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  bioText,
  canvas,
  glassCard,
  heroContainer,
  bentoGrid,
  nameText,
  titleText,
} from "@/styles/design/hero-page.css";
import {
  objectGridItem,
  project1GridItem,
  project2GridItem,
  bio1GridItem,
  bio2GridItem,
  animTextRow1,
  animTextRow2,
  mouseFollow3DCharacter,
} from "@/styles/design/hero-grid-item.css";
import ComplexStar3D from "@/components/3d-assets/ComplexStar3D";

// 키네틱 타이포그래피 애니메이션 컴포넌트
const KineticTypography = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll("span");

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      letters.forEach((letter, index) => {
        const moveX = (x - 0.5) * 20 * Math.sin(index * 0.1);
        const moveY = (y - 0.5) * 20 * Math.cos(index * 0.1);
        letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
        letter.style.transition = "transform 0.1s ease";
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((letter) => {
        letter.style.transform = "translate(0, 0)";
        letter.style.transition = "transform 0.5s ease";
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={nameText}>
      {text.split("").map((letter, index) => (
        <span key={index} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
};

// 기본 Glass Card 컴포넌트
const GlassCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={`${glassCard} ${className}`}>{children}</div>;
};

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js 설정
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 파티클 시스템 생성
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;

    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      // 위치 (큰 구체 형태로)
      posArray[i] = (Math.random() - 0.5) * 5;

      // 색상 (푸른색/보라색 계열)
      colorsArray[i * 3] = 0.1 + Math.random() * 0.2; // R
      colorsArray[i * 3 + 1] = 0.3 + Math.random() * 0.4; // G
      colorsArray[i * 3 + 2] = 0.5 + Math.random() * 0.5; // B
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorsArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 3;

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // 반응형 조정
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={heroContainer}>
      <canvas ref={canvasRef} className={canvas} />

      <div className={bentoGrid}>
        {/* 3D Object 영역 (2x2 크기) */}
        <GlassCard className={objectGridItem}>
          <ComplexStar3D />
        </GlassCard>

        {/* Project 영역 */}
        <GlassCard className={project1GridItem}>
          <h3>Project 1</h3>
        </GlassCard>

        <GlassCard className={project2GridItem}>
          <h3>Project 2</h3>
        </GlassCard>

        {/* Bio 영역 */}
        <GlassCard className={bio1GridItem}>
          <KineticTypography text="홍길동" />
          <h2 className={titleText}>프론트엔드 개발자</h2>
          <p className={bioText}>
            사용자 중심적 사고와 최신 웹 기술을 활용하여 아름답고 기능적인 웹
            경험을 만듭니다.
          </p>
        </GlassCard>

        <GlassCard className={bio2GridItem}>
          <p className={bioText}>
            React, Next.js, Three.js 및 모던 CSS 기술을 활용한 창의적인 솔루션을
            제공합니다.
          </p>
        </GlassCard>

        {/* 애니메이션  텍스트 영역 */}
        <GlassCard className={animTextRow1}>
          <h3>애니메이션</h3>
        </GlassCard>
        <GlassCard className={animTextRow2}>
          <h3>애니메이션</h3>
        </GlassCard>

        {/* 마우스 따라다니는 캐릭터 영역 */}
        <GlassCard className={mouseFollow3DCharacter}>
          <h3>마우스 따라다니는 캐릭터</h3>
        </GlassCard>
      </div>
    </div>
  );
};

export default HeroSection;
