import React from 'react'
import { motion } from "framer-motion";

const OnboardEcoSystem = () => {
  return (
    <div>
      <section className="py-16 md:py-20" data-testid="ecosystem-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                COMPLETE {/* Modern ambient glow effect behind the title */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-blue-500/30 blur-[50px] rounded-full -z-10 pointer-events-none" /> */}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                  ONBOARD ECOSYSTEM
                </span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                CARBON delivers an integrated ecosystem for infotainment,
                surveillance, power, and passenger engagement in modern buses
                and coaches.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                From entertainment displays and DVR systems to cameras,
                amplifiers, and power solutions - we provide everything needed
                for a complete onboard experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1653245426909-b16a2944a154?q=80&w=2070&auto=format&fit=crop"
                alt="Bus Interior"
                className="rounded-sm shadow-2xl border border-slate-800"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OnboardEcoSystem
