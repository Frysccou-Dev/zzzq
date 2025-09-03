'use client';

import type React from 'react';

import { useEffect, useRef } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

interface ShaderBackgroundProps {
  children?: React.ReactNode;
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {};
    const handleMouseLeave = () => {};

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='h-[100dvh] w-full relative overflow-hidden'
    >
      <svg className='absolute inset-0 w-0 h-0 -z-20 pointer-events-none'>
        <defs>
          <filter
            id='glass-effect'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feTurbulence baseFrequency='0.005' numOctaves='1' result='noise' />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='0.3' />
            <feColorMatrix
              type='matrix'
              values='1 0 0 0 0.02 0 1 0 0 0.02 0 0 1 0 0.05 0 0 0 0.9 0'
              result='tint'
            />
          </filter>
          <filter
            id='gooey-filter'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feGaussianBlur in='SourceGraphic' stdDeviation='4' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='gooey'
            />
            <feComposite in='SourceGraphic' in2='gooey' operator='atop' />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className='absolute inset-0 w-full h-full -z-10 pointer-events-none'
        colors={['#f2d8eb', '#b26dc8', '#65c375', '#688bc9', '#d99090']}
        speed={0.3}
      />
      <MeshGradient
        className='absolute inset-0 w-full h-full opacity-60 -z-10 pointer-events-none'
        colors={['#d2be77', '#c6d6ec', '#e2c6ec', '#40a752']}
        speed={0.2}
      />

      <div className='relative z-10'>{children}</div>
    </div>
  );
}
