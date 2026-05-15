import { motion } from 'motion/react';
import { Home, Key, ShieldCheck, PieChart, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Property Buying',
    desc: 'Expert guidance through the entire property acquisition process, from identification to closing.',
    icon: <Home className="w-10 h-10" />
  },
  {
    title: 'Property Selling',
    desc: 'Bespoke marketing strategies to showcase your elite property to the most qualified global buyers.',
    icon: <ArrowUpRight className="w-10 h-10" />
  },
  {
    title: 'Rental Services',
    desc: 'Curated selection of premium rentals for short-term stays or long-term luxury living requirements.',
    icon: <Key className="w-10 h-10" />
  },
  {
    title: 'Property Management',
    desc: 'Comprehensive management solutions ensuring your valuable assets are maintained to perfection.',
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: 'Investment Consulting',
    desc: 'Data-driven insights and strategic advice for maximizing returns on your real estate portfolio.',
    icon: <PieChart className="w-10 h-10" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl text-charcoal leading-tight"
          >
            Comprehensive <span className="text-primary italic">Real Estate Solutions</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-10 bg-cream rounded-[2.5rem] hover:bg-primary transition-all duration-500 cursor-pointer luxury-shadow border border-cream/50 overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:text-secondary group-hover:bg-primary-dark transition-all duration-500 mb-8 shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl text-charcoal group-hover:text-white mb-4 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 mb-8 leading-relaxed transition-colors duration-500">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-primary group-hover:text-secondary font-bold transition-colors duration-500">
                  Learn More <ArrowUpRight size={20} />
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
