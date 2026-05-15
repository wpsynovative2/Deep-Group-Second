import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ShowcaseBanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=2070" 
          alt="Premium Property Showcase" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-6 block">Unlock Your Legacy</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
            Ready to Discover Your <br />
            <span className="text-secondary italic">Perfect Sanctuary?</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Our private collection includes off-market properties in the world's most exclusive districts. Connect with our senior consultants for a confidential session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="premium-gradient-wine hover:premium-gradient-gold text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 luxury-shadow">
              Browse Private Collection <ArrowRight size={22} />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300">
              Personal Concierge
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gold Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full premium-gradient-gold opacity-10 -skew-x-12 translate-x-24"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full premium-gradient-gold opacity-5 skew-x-12 -translate-x-24"></div>
    </section>
  );
}
