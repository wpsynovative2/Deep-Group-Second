import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Home } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: <Award className="w-6 h-6 text-secondary" /> },
    { label: 'Properties Sold', value: '500+', icon: <Home className="w-6 h-6 text-secondary" /> },
    { label: 'Happy Clients', value: '1200+', icon: <Users className="w-6 h-6 text-secondary" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">About Our Legacy</span>
            <h2 className="text-3xl md:text-5xl text-charcoal mb-8 leading-tight">
              Crafting Excellence in <br />
              <span className="text-primary italic">Luxury Real Estate</span> Since 2008
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At Elite Estate, we don't just sell properties; we curate lifestyles. With over 15 years of unparalleled expertise, our mission is to provide an elite, seamless experience for our discerning clientele. We combine deep market insights with a commitment to excellence, ensuring every transaction is a masterpiece.
            </p>
            
            <div className="space-y-4 mb-10">
              {['Premium Worldwide Properties', 'Exclusive Off-Market Deals', 'Expert Legal & Financial Consulting'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-charcoal">{item}</span>
                </div>
              ))}
            </div>

            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300">
              Read Our Full Story
            </button>
          </motion.div>

          {/* Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-luxury border-[12px] border-white aspect-[4/5] md:aspect-square">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" alt="About Luxury Real Estate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -left-10 lg:-left-16 z-20 bg-wine p-10 rounded-2xl shadow-luxury flex flex-col gap-8 min-w-[240px]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="serif text-3xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase text-white/50 font-bold tracking-[0.2em]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative Gold Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 premium-gradient-gold opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 premium-gradient-wine opacity-10 blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
