"use client";
import { motion } from "framer-motion";

const section = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Sections() {
  return (
    <div className="bg-white">
      {/* Services */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Powerful image tools
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Edit images, remove backgrounds or objects, upscale, and generate new visuals with AI.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "AI Image Generation", desc: "Text-to-image with styles and prompts." },
            { title: "Background Remover", desc: "Instant, clean cut-outs with one click." },
            { title: "Object Eraser", desc: "Remove unwanted items with smart fill." },
            { title: "Super Resolution", desc: "Upscale without losing detail." },
            { title: "Color & Tone", desc: "Filters, LUTs, and adjustments." },
            { title: "Batch Process", desc: "Automate workflows for speed." },
          ].map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-semibold text-neutral-900">{f.title}</div>
              <p className="mt-2 text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section
        id="pricing"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Simple pricing
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Free", price: "$0", details: "50 credits / mo" },
            { name: "Pro", price: "$12", details: "1000 credits / mo" },
            { name: "Studio", price: "$29", details: "Unlimited editor, 8k output" },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-neutral-200 p-6">
              <div className="text-xl font-semibold">{p.name}</div>
              <div className="mt-2 text-3xl font-bold">{p.price}</div>
              <div className="mt-1 text-neutral-600">{p.details}</div>
              <button className="mt-6 w-full rounded-full bg-black px-4 py-2 text-white">
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl px-6 pb-24 lg:px-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">About</h2>
        <p className="mt-4 text-neutral-600">
          We build delightful tools that make visual creation accessible to everyone.
          Our editor combines real-time AI with precise manual controls so you get perfect results fast.
        </p>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-6 pb-28 lg:px-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Contact</h2>
        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <input placeholder="Name" className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-800 sm:col-span-1" />
          <input placeholder="Email" type="email" className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-800 sm:col-span-1" />
          <textarea placeholder="Message" className="min-h-32 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-800 sm:col-span-2"></textarea>
          <button className="rounded-full bg-black px-6 py-3 text-white sm:col-span-2">Send</button>
        </form>
      </motion.section>

      <section id="signup" className="mx-auto max-w-5xl px-6 pb-20 text-center lg:px-10">
        <div className="rounded-2xl bg-neutral-100 p-10">
          <h3 className="text-2xl font-bold">Ready to create?</h3>
          <p className="mt-2 text-neutral-600">Sign up now and start transforming your images.</p>
          <button className="mt-6 rounded-full bg-black px-6 py-3 text-white">Get Started</button>
        </div>
      </section>
    </div>
  );
}
