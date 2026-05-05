import React from "react";
import { Link } from "react-router-dom";
import { productCategories } from "../data/products";
import {
  Monitor,
  Radio,
  Camera,
  HardDrive,
  Speaker,
  PlugZap,
  Zap,
  Volume2,
  Cable,
  Usb,
  Mic2,
  Package,
  Clock1,
  Tv,
} from "lucide-react";
import { motion } from "framer-motion";

// Icons for the products category
const iconMap = {
  Monitor: Monitor,
  Radio: Radio,
  Camera: Camera,
  Zap: Zap,
  Volume2: Volume2,
  Cable: Cable,
  Usb: Usb,
  HardDrive: HardDrive,
  Speaker: Speaker,
  Power: PlugZap,
  Mic: Mic2,
  Package: Package,
  Clock: Clock1,
  Tv: Tv,
};

// Images for the products category
const categoryImages = {
  "Roof Monitors": "../../src/assets/monitor.jpg",
  Cameras: "../../src/assets/cameras.jpg",
  "Head Units": "../../src/assets/head_units.jpg",
  Convertors: "../../src/assets/converters.jpg",
  "Power Inverters": "../../src/assets/inverters.jpg",
  DVRs: "../../src/assets/dvrs.jpg",
  Amplifiers: "../../src/assets/amplifiers.jpg",
  Speakers: "../../src/assets/speakers.jpg",
  Cables: "../../src/assets/cables.jpg",
  "USB Chargers": "../../src/assets/usb_charger.webp",
  "Mic & Parking Sensors": "../../src/assets/mic.jpg",
  "Bus Clocks": "../../src/assets/clock.jpg",
};

const ProductCategories = () => {
  return (
    <section
      className="py-24 md:py-32 bg-slate-950 relative overflow-hidden"
      data-testid="product-categories-section"
    >
      {/* Modern ambient glow effect behind the title */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6 text-white"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Complete{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Product Range
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive onboard solutions designed for the future of bus and
            coach systems
          </p>
        </motion.div>

        {/* Grid of Modern Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.slice(0, 8).map((category, index) => {
            const IconComponent = iconMap[category.icon] || Monitor;
            // Lookup image based on name, fallback to a placeholder if not found
            const categoryImage = categoryImages[category.name] || "";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  to={`/products?category=${category.id}`}
                  data-testid={`category-card-${category.id}`}
                  className="group relative flex flex-col justify-end h-72 w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-blue-900/20"
                >
                  {/* Background Image with Zoom Effect */}
                  {/* <div className="absolute inset-0 w-full h-full">
                    <img
                      src={categoryImage}
                      alt={category.name}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                    /> */}
                    {/* Gradient Overlay for Readability */}
                    {/* <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  </div> */}

                  {/* Content Layer */}
                  <div className="relative z-10 p-6 flex flex-col items-center text-center">
                    {/* Floating Icon */}
                    <div className="mb-4 p-3 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                      <IconComponent className="w-36 h-36 text-blue-300 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1">
                      {category.name}
                    </h3>

                    {/* Decorative Line that expands on hover */}
                    <div className="w-8 h-1 bg-blue-500 rounded-full mt-2 transition-all duration-300 group-hover:w-16" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/products"
            data-testid="view-all-products-btn"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-blue-600/10 rounded-full transition-all duration-300"
          >
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm group-hover:text-blue-300">
              View All Products
            </span>
            <svg
              className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
