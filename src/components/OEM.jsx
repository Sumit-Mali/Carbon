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
    { name: "MG Group, Belagavi", url: ""},
    
  ];

  // 2. Duplicate the array to create the infinite loop effect
  const duplicatedLogos = [...oemLogos, ...oemLogos];

  return (
    <section
      className="py-20 md:py-28 bg-slate-950 overflow-hidden"
      data-testid="oem-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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
      <div className="relative w-full">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-linear-to-r from-slate-950 to-transparent pointer-events-none" />

        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-linear-to-l from-slate-950 to-transparent pointer-events-none" />

        {/* 4. The Moving Track */}
        <motion.div
          className="flex items-center"
          // Move left by 50% (the width of the original list)
          animate={{ x: "-50%" }}
          initial={{ x: "0%" }}
          transition={{
            ease: "linear",
            duration: 10, // Control Speed: Higher number = Slower
            repeat: Infinity,
          }}
          // Pause animation when user hovers over logos
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 mx-8 md:mx-16 transition-all duration-500"
              style={{ width: "150px" }} // Ensure consistent width for smoothness
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-24 w-full object-contain"
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
