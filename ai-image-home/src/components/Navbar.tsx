"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "./LiquidGlass";
import AuthModal from "./AuthModal";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <motion.div
      suppressHydrationWarning
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <LiquidGlass
        borderRadius="100px"
        blurIntensity="xl"
        shadowIntensity="sm"
        glowIntensity="xs"
        className="text-white"
      >
        <div
          className="flex items-center gap-1 px-2 py-1.5"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              onMouseEnter={() => setHoveredPath(item.href)}
            >
              <span className="relative z-10">{item.label}</span>
              {hoveredPath === item.href && (
                <div className="absolute inset-0 -z-0">
                  <motion.div
                    layoutId="glass-pill"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className="h-full w-full"
                  >
                    <LiquidGlass
                      borderRadius="100px"
                      blurIntensity="md"
                      shadowIntensity="sm"
                      glowIntensity="xs"
                      className="h-full w-full"
                    >
                      <span />
                    </LiquidGlass>
                  </motion.div>
                </div>
              )}
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 relative"
            onMouseEnter={() => setHoveredPath('signup')}
          >
            <Link
              href="#signup"
              className="relative block px-5 py-2 text-sm font-semibold text-white"
              onClick={(e) => { e.preventDefault(); setAuthOpen(true); }}
            >
              <span className="relative z-10">Sign Up</span>
              {(hoveredPath === null || hoveredPath === 'signup') && (
                <div className="absolute inset-0 -z-0">
                  <motion.div
                    layoutId="glass-pill"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className="h-full w-full"
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
                </div>
              )}
            </Link>
          </motion.div>
        </div>
      </LiquidGlass>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </motion.div>
  );
}
