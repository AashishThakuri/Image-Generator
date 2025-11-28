"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "./LiquidGlass";

export default function CrazyToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (on) root.classList.add("crazy");
    else root.classList.remove("crazy");
  }, [on]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 select-none"
    >
      <LiquidGlass
        borderRadius="100px"
        blurIntensity="xl"
        shadowIntensity="sm"
        glowIntensity="xs"
        className="text-sm text-neutral-900"
      >
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="font-medium text-white">Crazy mode</span>
          <button
            aria-label="Toggle crazy mode"
            onClick={() => setOn((v) => !v)}
            className="relative h-8 w-24 overflow-hidden rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
          >
            <div className="absolute inset-0 grid grid-cols-2 text-xs font-semibold">
              <span className={`grid place-items-center transition-colors duration-300 ${on ? "text-neutral-900" : "text-white"}`}>On</span>
              <span className={`grid place-items-center transition-colors duration-300 ${!on ? "text-neutral-900" : "text-white"}`}>Off</span>
            </div>
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className={`absolute top-0.5 bottom-0.5 w-11 rounded-full ${on ? "left-0.5" : "left-[calc(100%-2.875rem)]"}`}
            >
              <LiquidGlass
                borderRadius="100px"
                blurIntensity="lg"
                shadowIntensity="md"
                glowIntensity="md"
                className="h-full w-full"
              >
                <span />
              </LiquidGlass>
            </motion.div>
          </button>
        </div>
      </LiquidGlass>
    </motion.div>
  );
}
