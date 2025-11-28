"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "./LiquidGlass";
import FancyButton from "./FancyButton";
import AuthModal from "./AuthModal";

export default function Hero() {
  const [authOpen, setAuthOpen] = useState(false);
  return (
    <section id="home" className="relative min-h-[120svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f79a18] to-[#ef8f11]" />
      <div
        className="absolute inset-0 -z-0 opacity-100 [--tile:200px] md:[--tile:280px] lg:[--tile:360px] xl:[--tile:460px] 2xl:[--tile:560px]"
        style={{
          // Dual-layer, offset tiling to hide seams
          backgroundImage: "url('/pattern.png'), url('/pattern.png')",
          backgroundRepeat: "round, round",
          backgroundSize: "var(--tile) auto, var(--tile) auto",
          backgroundPosition: "0 0, calc(var(--tile)/2) calc(var(--tile)/2)",
        }}
      />
      <div className="grain-overlay -z-0" />

      <div className="relative mx-auto grid max-w-[1440px] 2xl:max-w-[1600px] grid-cols-1 items-center gap-10 px-6 pt-40 pb-24 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-balance text-4xl font-extrabold leading-tight drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl"
          >
            <span className="whitespace-nowrap">Generate Your</span>
            <br />
            Imagination
            <br />
            with AI.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 ml-1 flex items-center gap-4"
          >
            <FancyButton
              href="#services"
              text="Create Now"
              onClick={(e) => {
                e.preventDefault();
                setAuthOpen(true);
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 w-full max-w-lg"
          >
            <LiquidGlass
              blurIntensity="xl"
              shadowIntensity="md"
              glowIntensity="sm"
              className="p-6 text-sm text-white/90"
            >
              <div className="flex items-center gap-3">
                <img src="/icons/images_9291654.svg" alt="" className="h-4 w-4 shrink-0" />
                <div className="text-base font-semibold">AI Image Creation</div>
              </div>
              <p className="mt-3 leading-relaxed text-white/90">
                Create stunning <span className="font-semibold text-white">Thumbnails</span>, <span className="font-semibold text-white">Posters</span>, <span className="font-semibold text-white">Designs</span>, <span className="font-semibold text-white">Infographics</span>, <span className="font-semibold text-white">Banners</span>, <span className="font-semibold text-white">Logos</span>, <span className="font-semibold text-white">Social Media Content</span>, and much more!
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Supports Nepali, English, and multiple languages for text in your images.
              </p>
            </LiquidGlass>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/robot.png"
              alt="AI robot with flowers"
              width={820}
              height={820}
              priority
              className="hero-robot h-auto w-full max-w-[880px] select-none origin-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.3)] md:scale-[1.12] lg:scale-[1.22] xl:scale-[1.28] 2xl:scale-[1.34] md:translate-y-3 lg:translate-y-4 xl:translate-y-6 2xl:translate-y-7 xl:max-w-[1100px] 2xl:max-w-[1200px]"
            />
          </motion.div>
        </div>
      </div>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </section>
  );
}
