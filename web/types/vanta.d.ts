declare interface VantaEffect {
  destroy: () => void;
}

declare module 'vanta/dist/vanta.rings.min' {
  interface VantaRingsOptions {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
  }

  function RINGS(options: VantaRingsOptions): VantaEffect;
  export default RINGS;
} 