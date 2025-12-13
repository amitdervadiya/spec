import { useEffect } from "react";

import banner1 from "../assets/images/3.jpg";
import arrowr from "../assets/images/arright.svg";

export default function Hero() {
  useEffect(() => {
    let app;

    async function initLiquid() {
      const { default: LiquidBackground } = await import(
        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js"
      );

      const canvas = document.getElementById("hero-liquid-canvas");
      if (!canvas) return;

      // Init liquid background
      app = LiquidBackground(canvas);

      // ✅ YOUR IMAGE AS BACKGROUND
      app.loadImage(banner1);

      // Dark liquid look
      app.liquidPlane.material.metalness = 0.85;
      app.liquidPlane.material.roughness = 0.2;

      // Wave strength (same style as CodePen)
      app.liquidPlane.uniforms.displacementScale.value = 6;

      app.setRain(false);
    }

    initLiquid();

    return () => {
      if (app?.dispose) app.dispose();
    };
  }, []);

  return (
    <section className="relative h-[780px] max-sm:h-[700px] overflow-hidden">

      {/* LIQUID CANVAS */}
      <canvas
        id="hero-liquid-canvas"
        className="absolute inset-0 w-full h-full"
      />

      {/* DARK OVERLAY (same as before) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* CONTENT (UNCHANGED STYLE) */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h5 className="text-[70px] max-sm:text-[40px] leading-tight">
          Experience Luxury That
        </h5>

        <h4 className="font-bold tracking-tight text-[70px] max-sm:text-[45px] leading-tight">
          FLOWS WITH <br /> PERFECTION
        </h4>

        <button className="mt-[25px] flex gap-2 items-center text-[17px] bg-[var(--brown)] text-white font-bold h-[50px] px-[25px] rounded-full tracking-wide">
          GET FOUND
          <img src={arrowr} alt="" className="w-5 max-sm:w-[17px]" />
        </button>
      </div>
    </section>
  );
}
