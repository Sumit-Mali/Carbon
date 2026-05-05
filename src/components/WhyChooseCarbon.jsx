import React from "react";
import { Monitor, HardDrive, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseCarbon = () => {
  // Why choose carbon data
  const whyChooseData = [
    {
      icon: Shield,
      title: "20+ Years Industry Legacy",
      description: "Decades of expertise in bus entertainment systems",
    },
    {
      icon: CheckCircle,
      title: "OEM-Grade Quality & Reliability",
      description: "Trusted by leading manufacturers worldwide",
    },
    {
      icon: Monitor,
      title: "Pan-India Sales & Support",
      description: "Comprehensive nationwide service network",
    },
    {
      icon: HardDrive,
      title: "Designed for Modern Transport",
      description: "Future-ready mobility technology solutions",
    },
  ];

  return (
    <section
      className="py-20 md:py-32 bg-slate-900/30"
      data-testid="why-choose-section"
    >
      {/* Modern ambient glow effect behind the title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            WHY{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              CHOOSE CARBON
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`why-choose-card-${index}`}
                className="p-8 bg-slate-900/30 border border-slate-800 hover:bg-slate-900/80 transition-all duration-300 rounded-sm text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCarbon;
