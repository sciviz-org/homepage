'use client';

import { useEffect, useRef, useState } from 'react';
import RINGS from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';

export default function VantaBackground({ children }: { children: React.ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      // Get the computed background color from CSS
      const computedStyle = getComputedStyle(document.documentElement);
      const backgroundColor = computedStyle.getPropertyValue('--background').trim();
      
      // Convert CSS rgb color to hex
      const rgb = backgroundColor.match(/\d+/g);
      const hexColor = rgb 
        ? parseInt(rgb[0]) << 16 | parseInt(rgb[1]) << 8 | parseInt(rgb[2])
        : 0xffffff;

      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: hexColor,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute inset-0 -z-10">
      {children}
    </div>
  );
} 