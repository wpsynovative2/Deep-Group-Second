import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Gavel, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: 'Trusted Quality',
    desc: 'Every property in our portfolio undergoes a rigorous vetting process to ensure only the highest standards of luxury and structural integrity.',
    icon: <ShieldCheck className="w-12 h-12 text-secondary" />
  },
  {
    title: 'Expert Agents',
    desc: 'Our team comprises elite market veterans who bring decades of combined experience and deep local insights to every consultation.',
    icon: <UserCheck className="w-12 h-12 text-secondary" />
  },
  {
    title: 'Legal Assistance',
    desc: 'We provide comprehensive legal coordination, handling complex documentation and regulatory requirements so you can focus on your legacy.',
    icon: <Gavel className="w-12 h-12 text-secondary" />
  },
  {
    title: 'Strategic Investment',
    desc: 'We identify properties with high appreciation potential, ensuring your real estate acquisitions serve as powerful pillars in your overall portfolio.',
    icon: <TrendingUp className="w-12 h-12 text-secondary" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block"
            >
              The Elite Advantage
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif mb-8 leading-tight"
            >
              Why Discerning <br />
              <span className="text-secondary italic">Clients Choose Us</span>
            </motion.h2>
            <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-xl">
              We understand that luxury real estate is more than a transaction; it's the acquisition of an experience and an investment in your future. Our bespoke approach ensures every detail is perfect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold mb-2 font-serif">{reason.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square luxury-shadow">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2074" alt="Luxury Living" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-0 animate-spin-slow"></div>
            
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl text-charcoal max-w-[280px]">
              <p className="text-4xl font-serif font-bold text-primary mb-2">98%</p>
              <p className="font-bold text-lg mb-1 leading-tight text-charcoal">Client Retention</p>
              <p className="text-sm text-gray-500">Building lifelong relationships through excellence.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
