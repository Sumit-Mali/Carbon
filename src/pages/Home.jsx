import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseCarbon from "@/components/WhyChooseCarbon";
import OEM from "@/components/OEM";
import OnboardEcoSystem from "@/components/OnboardEcoSystem";

export default function Home() {
  // Download Catalogue
  const handleDownloadCatalogue = () => {
    window.open(
      "https://customer-assets.emergentagent.com/job_fe25a906-82a7-43f5-b45e-da422e0f14d7/artifacts/vzzgnbi2_hitech%20CAT%2025_rearrange.pdf",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        data-testid="hero-section"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzfGVufDB8fDB8fHww)",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl"
          >
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6 leading-tight"
              data-testid="hero-title"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              ADVANCED ONBOARD{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                ENTERTAINMENT
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                SECURITY SOLUTIONS
              </span>{" "}
              FOR BUSES AND COACHES
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-4xl">
              Trusted by leading OEMs worldwide for reliable, future-ready
              mobility technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                data-testid="explore-solutions-btn"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] text-center"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                data-testid="contact-sales-btn"
                className="bg-transparent border border-blue-600/50 text-blue-400 hover:bg-blue-600/10 hover:border-blue-500 font-semibold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 text-center"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Showcase */}
      <ProductCategories />

      {/* Complete Onboard Ecosystem */}
      <OnboardEcoSystem/>

      {/* Why Choose CARBON */}
      <WhyChooseCarbon />

      {/* Trusted by Leading OEMs */}
      <OEM />

      {/* Download Catalogue CTA */}
      <section
        className="py-20 md:py-32 bg-slate-900/30"
        data-testid="download-section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 bg-slate-900/50 border border-slate-800 rounded-sm"
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              DOWNLOAD OUR PRODUCT CATALOGUE (PDF)
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get detailed specifications and information about our complete
              product range
            </p>
            <button
              onClick={handleDownloadCatalogue}
              data-testid="download-now-btn"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] inline-flex items-center space-x-3"
            >
              <Download className="w-5 h-5" />
              <span>Download Now</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
