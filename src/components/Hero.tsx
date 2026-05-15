import { motion } from 'motion/react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax effect simulation via Framer Motion */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          // src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071"
          // src="/hero-section-1.jpeg"
          src="https://raw.githubusercontent.com/wpsynovative2/Deep-Group-Second/refs/heads/main/public/hero-section-1.jpeg"
          alt="Luxury Property Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-secondary tracking-widest uppercase font-semibold mb-4 block">
            Exquisite Living Spaces
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold max-w-5xl leading-[1.1] mb-8">
            Discover the Art of{" "}
            <span className="text-secondary italic">Luxury Living.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-14 font-light tracking-wide">
            Exclusive access to the world's most prestigious properties,
            designed for those who seek perfection in every detail.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl bg-white rounded-2xl p-4 shadow-2xl luxury-shadow flex flex-col md:flex-row items-center gap-4 border border-cream"
        >
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-soft-gray rounded-xl">
            <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">
                Location
              </p>
              <input
                type="text"
                placeholder="Where are you looking?"
                className="w-full bg-transparent text-charcoal font-medium text-sm focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-soft-gray rounded-xl">
            <Home className="text-primary w-5 h-5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">
                Property Type
              </p>
              <select className="w-full bg-transparent text-charcoal font-medium text-sm focus:outline-none cursor-pointer">
                <option>Residential Villa</option>
                <option>Luxury Apartment</option>
                <option>Commercial Space</option>
                <option>Vacation Home</option>
              </select>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-soft-gray rounded-xl">
            <DollarSign className="text-primary w-5 h-5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">
                Budget
              </p>
              <select className="w-full bg-transparent text-charcoal font-medium text-sm focus:outline-none cursor-pointer">
                <option>$500k - $1M</option>
                <option>$1M - $5M</option>
                <option>$5M - $10M</option>
                <option>$10M+</option>
              </select>
            </div>
          </div>

          <button className="w-full md:w-auto bg-primary text-white p-4 px-12 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-md">
            <Search className="w-4 h-4" />
            Search Properties
          </button>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
