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
            <img
              src="../assets/logo.svg"
              alt="CARBON Logo"
              className="lg:w-50 w-40"
            />

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
              src="https://www.google.com/maps?q=Trident+Tower+Hubli&output=embed"
              className="col-span-1 md:col-span-2 w-full h-40 rounded-lg mt-4 border border-slate-800"
              loading="lazy"
            />
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
