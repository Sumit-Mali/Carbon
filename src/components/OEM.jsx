import { motion } from "framer-motion";
import React from "react";

const OEM = () => {
  // 1. Define Logos
  const oemLogos = [
    { name: "Volvo", url: "../../src/assets/volvo.webp" },
    { name: "Tata Motors", url: "../../src/assets/tatamotors.webp" },
    { name: "Ashok Leyland", url: "../../src/assets/ashokleyland.webp" },
    { name: "Scania", url: "../../src/assets/scania.webp" },
    { name: "MCV", url: "../../src/assets/mcvpr.webp" },
    { name: "MG Group, Belagavi", url: "" },
  ];

  // 2. Duplicate array 3x for seamless infinite loop without breaks
  const duplicatedLogos = [...oemLogos, ...oemLogos, ...oemLogos];

  return (
    <section
      className="py-10 md:py-20 bg-slate-950 overflow-hidden relative"
      data-testid="oem-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4 text-white"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            TRUSTED BY{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              LEADING OEMs
            </span>
          </h2>
        </motion.div>
      </div>

      {/* 3. The Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-20 md:w-32 bg-linear-to-r from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-20 md:w-32 bg-linear-to-l from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

        {/* 4. The Moving Track */}
        <motion.div
          className="flex items-center gap-4 sm:gap-8 md:gap-16 py-4 sm:py-6 md:py-8"
          animate={{ x: "-66.66%" }}
          initial={{ x: "0%" }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center"
              style={{ minWidth: "120px", height: "80px" }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OEM;
