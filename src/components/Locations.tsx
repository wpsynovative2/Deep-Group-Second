import { motion } from 'motion/react';

const locations = [
  { city: 'Miami', properties: '124 Properties', image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=2070' },
  { city: 'London', properties: '86 Properties', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2070' },
  { city: 'Dubai', properties: '210 Properties', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070' },
  { city: 'Singapore', properties: '54 Properties', image: 'https://images.unsplash.com/photo-1525625239513-9339031efbe5?auto=format&fit=crop&q=80&w=2070' },
  { city: 'Paris', properties: '92 Properties', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2073' },
  { city: 'New York', properties: '156 Properties', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2070' },
];

export default function Locations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            Worldwide Presence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl text-charcoal leading-tight"
          >
            Explore Properties by <span className="text-primary italic">Global Cities</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-80 rounded-[2.5rem] overflow-hidden luxury-shadow cursor-pointer"
            >
              <img src={item.image} alt={item.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">{item.city}</h3>
                <p className="text-white/70 font-medium tracking-wide group-hover:text-white transition-colors">{item.properties}</p>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
