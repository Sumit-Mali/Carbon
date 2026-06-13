import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Link
              to="/"
              className="flex items-center space-x-2 flex-shrink-0 min-w-0 group"
              data-testid="logo-link"
            >
              <div className="flex flex-col">
                <p className="text-2xl md:text-4xl font-black tracking-wider uppercase bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  CARBON
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed my-3">
              Hi-Tech Computers India,
              <br />
              60th Main Road,
              <br />
              Kubera Puram, Kusugal Rd,
              <br />
              Hubballi, Karnataka 580023
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold tracking-wider text-white uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  data-testid="footer-link-home"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  data-testid="footer-link-products"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  data-testid="footer-link-about"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  data-testid="footer-link-contact"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-white font-semibold text-sm">Carbon Hi-Tech</p>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+919XXXXXXXXX"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +91 91488 25040
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:person2@email.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  admin@hitechit.com
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-white font-semibold text-sm">Nihal</p>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+919663554608"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +91 96635 54608
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:nihal@hitechit.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  nihal@hitechit.com
                </a>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.1664443987966!2d75.1648529!3d15.367469499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d9471480c68f%3A0xceacc47ad8992565!2sCarbon%20Electronics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1779611282533!5m2!1sen!2sin"
              className="col-span-1 md:col-span-2 w-full h-40 rounded-lg mt-4 border border-slate-800"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} CARBON - Hi-Tech Computers India. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
