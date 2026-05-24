import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NavLinks
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Download catalogue
  const handleDownloadCatalogue = () => {
    window.open(
      "https://customer-assets.emergentagent.com/job_fe25a906-82a7-43f5-b45e-da422e0f14d7/artifacts/vzzgnbi2_hitech%20CAT%2025_rearrange.pdf",
      "_blank",
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="flex items-center justify-between h-20 min-w-0">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 flex-shrink-0 min-w-0 group"
              data-testid="logo-link"
            >
              <div className="flex flex-col">
                <p className="text-xl md:text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  CARBON
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Button to download the catalogue */}
              <button
                onClick={handleDownloadCatalogue}
                data-testid="download-catalogue-btn"
                className="bg-transparent border border-blue-600/50 text-blue-400 hover:bg-blue-600/10 hover:border-blue-500 font-semibold py-2 px-6 rounded-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Catalogue</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-btn"
              className="md:hidden text-white p-1 flex-shrink-0 ml-auto"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-lg pt-20"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center space-y-6 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                  className={`text-2xl font-bold uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleDownloadCatalogue();
                  setMobileMenuOpen(false);
                }}
                data-testid="mobile-download-catalogue-btn"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center space-x-2 mt-4"
              >
                <Download className="w-5 h-5" />
                <span>Download Catalogue</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
