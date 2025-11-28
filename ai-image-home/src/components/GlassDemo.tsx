"use client";

import { useState } from "react";

export default function GlassDemo() {
  const [bgColor, setBgColor] = useState("#4F46E5");

  const backgrounds = [
    { name: "Indigo", color: "#4F46E5", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { name: "Orange", color: "#F97316", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { name: "Green", color: "#10B981", gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)" },
    { name: "Purple", color: "#8B5CF6", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { name: "Blue Sky", color: "#0EA5E9", gradient: "linear-gradient(135deg, #2af598 0%, #009efd 100%)" },
    { name: "Dark Navy", color: "#1e3a8a", gradient: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{ background: backgrounds.find(b => b.color === bgColor)?.gradient }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">
          Crystal Clear Liquid Glass
        </h2>
        <p className="text-center text-white/90 mb-12 text-lg">
        </p>

        {/* Background Color Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {backgrounds.map((bg) => (
            <button
              key={bg.name}
              onClick={() => setBgColor(bg.color)}
              className="px-6 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
              style={{ 
                background: bg.gradient,
                opacity: bgColor === bg.color ? 1 : 0.7,
                transform: bgColor === bg.color ? "scale(1.05)" : "scale(1)",
                boxShadow: bgColor === bg.color ? "0 8px 20px rgba(0,0,0,0.3)" : "none"
              }}
            >
              {bg.name}
            </button>
          ))}
        </div>

        {/* Glass Examples Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Crystal Clear Glass - The Perfect One */}
          <div className="flex flex-col items-center">
            <div className="glass-crystal w-full p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Liquid Glass</h3>
              <p className="text-white/80 text-sm">Crystal Clear</p>
            </div>
            <p className="mt-4 text-white text-sm font-medium">✨ Perfect Crystal Clear</p>
          </div>

          {/* Standard Glass Liquid */}
          <div className="flex flex-col items-center">
            <div className="glass-liquid w-full p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Liquid Glass</h3>
              <p className="text-white/80 text-sm">Standard Effect</p>
            </div>
            <p className="mt-4 text-white text-sm font-medium">Standard Glass</p>
          </div>

          {/* Pure Glass */}
          <div className="flex flex-col items-center">
            <div className="glass-pure w-full p-8 text-center rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Liquid Glass</h3>
              <p className="text-white/80 text-sm">Pure Effect</p>
            </div>
            <p className="mt-4 text-white text-sm font-medium">Pure Glass</p>
          </div>
        </div>

        {/* Large Showcase */}
        <div className="flex justify-center">
          <div className="glass-crystal px-16 py-12 text-center max-w-2xl">
            <h3 className="text-5xl font-bold text-white mb-4">Liquid Glass</h3>
            <p className="text-white/90 text-lg mb-6">
              A crystal clear glass effect that maintains perfect transparency
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition-all border border-white/30 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white hover:bg-white/90 rounded-full text-gray-900 font-medium transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 glass-crystal p-8">
          <h4 className="text-2xl font-bold text-white mb-4">Key Features</h4>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="text-white/90 flex items-start gap-2">
              <span className="text-xl">✓</span>
              <span><strong>Zero color bleed:</strong> saturate(0) removes all background colors</span>
            </li>
            <li className="text-white/90 flex items-start gap-2">
              <span className="text-xl">✓</span>
              <span><strong>Perfect clarity:</strong> Advanced backdrop-filter for crystal effect</span>
            </li>
            <li className="text-white/90 flex items-start gap-2">
              <span className="text-xl">✓</span>
              <span><strong>Realistic depth:</strong> Multi-layer shadows and highlights</span>
            </li>
            <li className="text-white/90 flex items-start gap-2">
              <span className="text-xl">✓</span>
              <span><strong>Soft glow:</strong> Subtle outer glow for liquid glass feel</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
