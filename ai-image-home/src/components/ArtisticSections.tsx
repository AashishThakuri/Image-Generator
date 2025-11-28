"use client";
import { motion } from "framer-motion";
import { LiquidGlass } from "./LiquidGlass";

const section = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function ArtisticSections() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Background - Continuing the theme from Hero */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#ef8f11] to-[#d67000]" />
            <div
                className="absolute inset-0 -z-0 opacity-100 [--tile:200px] md:[--tile:280px] lg:[--tile:360px] xl:[--tile:460px] 2xl:[--tile:560px]"
                style={{
                    backgroundImage: "url('/pattern.png'), url('/pattern.png')",
                    backgroundRepeat: "round, round",
                    backgroundSize: "var(--tile) auto, var(--tile) auto",
                    backgroundPosition: "0 0, calc(var(--tile)/2) calc(var(--tile)/2)",
                }}
            />
            <div className="grain-overlay -z-0" />

            {/* AI Showcase */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 py-24 sm:py-32"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-sm">
                            Generated with AI
                        </h2>
                        <p className="mt-4 text-lg text-white/90 drop-shadow-sm">
                            Our advanced models can create stunning, photorealistic images from simple text descriptions.
                            Explore the possibilities of AI-driven creativity.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 flex flex-col gap-8 overflow-hidden py-4">
                    {/* Row 1 - Moving Left */}
                    <div className="relative flex -rotate-1 scale-110 gap-8 overflow-hidden py-4 opacity-90 mix-blend-overlay transition-opacity hover:opacity-100">
                        <motion.div
                            className="flex shrink-0 gap-8"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                        >
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={`row1-${i}`}
                                    className="relative h-64 w-96 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-xl backdrop-blur-sm transition-transform hover:scale-105"
                                    style={{
                                        transform: "perspective(1000px) rotateY(15deg)",
                                    }}
                                >
                                    <img
                                        src={`https://picsum.photos/seed/${i + 100}/800/600`}
                                        alt="AI Generated"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
                                        <div className="absolute bottom-4 left-4 text-sm font-medium text-white">
                                            Prompt: A futuristic city...
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={`row1-dup-${i}`}
                                    className="relative h-64 w-96 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-xl backdrop-blur-sm transition-transform hover:scale-105"
                                    style={{
                                        transform: "perspective(1000px) rotateY(15deg)",
                                    }}
                                >
                                    <img
                                        src={`https://picsum.photos/seed/${i + 100}/800/600`}
                                        alt="AI Generated"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
                                        <div className="absolute bottom-4 left-4 text-sm font-medium text-white">
                                            Prompt: A futuristic city...
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 - Moving Right */}
                    <div className="relative flex rotate-1 scale-110 gap-8 overflow-hidden py-4 opacity-90 mix-blend-overlay transition-opacity hover:opacity-100">
                        <motion.div
                            className="flex shrink-0 gap-8"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
                        >
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={`row2-${i}`}
                                    className="relative h-64 w-96 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-xl backdrop-blur-sm transition-transform hover:scale-105"
                                    style={{
                                        transform: "perspective(1000px) rotateY(-15deg)",
                                    }}
                                >
                                    <img
                                        src={`https://picsum.photos/seed/${i + 200}/800/600`}
                                        alt="AI Generated"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
                                        <div className="absolute bottom-4 left-4 text-sm font-medium text-white">
                                            Prompt: An astronaut in...
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={`row2-dup-${i}`}
                                    className="relative h-64 w-96 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-xl backdrop-blur-sm transition-transform hover:scale-105"
                                    style={{
                                        transform: "perspective(1000px) rotateY(-15deg)",
                                    }}
                                >
                                    <img
                                        src={`https://picsum.photos/seed/${i + 200}/800/600`}
                                        alt="AI Generated"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
                                        <div className="absolute bottom-4 left-4 text-sm font-medium text-white">
                                            Prompt: An astronaut in...
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
