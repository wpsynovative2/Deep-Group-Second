import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white pt-24 pb-12 overflow-hidden border-t border-wine/20"
      style={{ backgroundColor: "#650727" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Newsletter & Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-12 pb-20 border-b border-white/10">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6 gap-3">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center font-bold text-wine text-lg">
                E
              </div>
              <span className="text-3xl font-serif font-bold text-white tracking-tight">
                ELITE<span className="text-gold italic">ESTATE</span>
              </span>
            </div>
            <p className="text-white/50 max-w-sm font-light tracking-wide">
              Global excellence in luxury real estate. Redefining property
              acquisition with discretion and unmatched expertise.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            <h4 className="text-xl font-serif font-bold mb-6 text-center lg:text-left">
              Subscribe to Our Private Catalog
            </h4>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-8 focus:outline-none focus:border-gold transition-all placeholder:text-white/30"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-gold text-white p-2.5 rounded-sm hover:bg-secondary-light transition-all"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h5 className="text-secondary font-bold uppercase tracking-widest text-sm mb-8">
              Corporate
            </h5>
            <ul className="space-y-4">
              {[
                "Our Legacy",
                "Global Presence",
                "Senior Leadership",
                "Investors",
                "Press Relations",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-secondary transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-secondary font-bold uppercase tracking-widest text-sm mb-8">
              Services
            </h5>
            <ul className="space-y-4">
              {[
                "Acquisitions",
                "Asset Disposition",
                "Staging Design",
                "Portfolio Management",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-secondary transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-secondary font-bold uppercase tracking-widest text-sm mb-8">
              Regions
            </h5>
            <ul className="space-y-4">
              {[
                "North America",
                "European Union",
                "Middle East",
                "Asia Pacific",
                "Latin America",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-secondary transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-secondary font-bold uppercase tracking-widest text-sm mb-8">
              Concierge
            </h5>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Headquarters: One World Trade Center, Suite 85, New York, NY
                  10007
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-secondary w-5 h-5 flex-shrink-0" />
                <p className="text-white/50 text-sm tracking-widest hover:text-white transition-colors">
                  +1 (800) 555-ELITE
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-secondary w-5 h-5 flex-shrink-0" />
                <p className="text-white/50 text-sm hover:text-white transition-colors">
                  inquiries@eliteestate.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-white/30 text-xs mb-6 md:mb-0">
            &copy; {currentYear} Elite Estate Global. All Rights Reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Terms of Registry
            </a>
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-white/40 hover:text-secondary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-secondary transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-secondary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-secondary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line at top */}
      <div className="absolute top-0 left-0 w-full h-[2px] premium-gradient-gold opacity-30"></div>
    </footer>
  );
}
