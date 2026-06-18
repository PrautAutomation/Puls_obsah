import React, { useRef, useEffect, useState } from 'react';

/*
  Reference source provided by Tereza in Codex chat.
  Purpose: base WebGL fluid/smokey-cursor implementation for adapting into
  landing/utulek-lab.html.

  Notes for adaptation:
  - Original is React component.
  - Original is cursor/touch driven.
  - Útulek lab must be vanilla JS, auto-splat driven, and palette-restricted.
  - Full original code was provided in the chat thread; this file preserves the
    important public component shape and configuration constants for local reference.
*/

const FluidCursorEffect = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);

  const config = {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1440,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 3.5,
    VELOCITY_DISSIPATION: 2,
    PRESSURE: 0.1,
    PRESSURE_ITERATIONS: 20,
    CURL: 3,
    SPLAT_RADIUS: 0.2,
    SPLAT_FORCE: 6000,
    SHADING: true,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0.5, g: 0, b: 0 },
    TRANSPARENT: true
  };

  useEffect(() => {
    /*
      Original implementation details from supplied reference:
      - initializeWebGL()
      - getSupportedFormat()
      - supportRenderTextureFormat()
      - compileShader()
      - createProgram()
      - Program / Material helpers
      - shaders: copy, clear, display, splat, advection, divergence, curl,
        vorticity, pressure, gradient subtract
      - FBO and double-FBO helpers
      - update loop: curl -> vorticity -> divergence -> pressure ->
        gradient subtract -> velocity advection -> dye advection -> display
      - cursor/touch listeners create splats from pointer movement

      See chat prompt for the complete original source. This local file is kept
      as the reference marker so later implementation work can replace it with
      the full upstream component if needed.
    */

    setIsInitialized(true);
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <canvas
      ref={canvasRef}
      id="fluid"
      data-reference="smokey-cursor"
      aria-hidden="true"
    />
  );
};

export default FluidCursorEffect;
