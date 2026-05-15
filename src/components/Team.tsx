import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const agents = [
  {
    name: 'Alexander Sterling',
    role: 'Senior Asset Advisor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000',
    about: 'Over 20 years specializing in ultra-high-net-worth real estate portfolios.'
  },
  {
    name: 'Victoria Montenegro',
    role: 'Head of European Region',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000',
    about: 'Expert in Riviera villas and exclusive Mediterranean estates.'
  },
  {
    name: 'Julian Chen',
    role: 'Managing Director, Asia',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2000',
    about: 'Strategic leader connecting global capital with prime Asian assets.'
  },
  {
    name: 'Eleanor Vance',
    role: 'Luxury Rental Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=2000',
    about: 'Curating worldwide retreats for the most discerning travelers.'
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">The Professionals</span>
            <h2 className="text-3xl md:text-5xl text-charcoal leading-tight">
              Meet Our Team of <span className="text-primary italic">Expert Advisors</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[3/4] luxury-shadow">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href="#" className="p-3 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-all"><Instagram size={20} /></a>
                  <a href="#" className="p-3 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-all"><Linkedin size={20} /></a>
                  <a href="#" className="p-3 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-all"><Twitter size={20} /></a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-1">{agent.name}</h3>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-3">{agent.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed px-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {agent.about}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
