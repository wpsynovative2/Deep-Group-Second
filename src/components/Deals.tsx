import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const deals = [
  {
    title: 'The Riviera Sunrise Estate',
    location: 'Cote d’Azur, France',
    oldPrice: '$11.5M',
    newPrice: '$9.2M',
    deadline: 'Limited Time Offer',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070',
    desc: 'Unprecedented value for a frontline coastal estate with private beach access and helipad.'
  },
  {
    title: 'Aspen Winter Sanctuary',
    location: 'Aspen, Colorado',
    oldPrice: '$14.0M',
    newPrice: '$12.5M',
    deadline: 'End of Season Deal',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2070',
    desc: 'Bespoke mountain retreat with ski-in/ski-out capability. Custom-built for the entertainer.'
  }
];

export default function Deals() {
  return (
    <section className="py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">Limited Opportunities</span>
            <h2 className="text-3xl md:text-5xl text-charcoal leading-tight">
              Curated <span className="text-primary italic">Deals of the Month</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-12">
          {deals.map((deal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[3rem] overflow-hidden luxury-shadow border border-cream h-full lg:h-[450px] group`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 h-80 lg:h-full relative overflow-hidden">
                <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
                  <Calendar size={18} className="text-secondary" />
                  {deal.deadline}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-4">
                  <Tag size={16} />
                  Special Acquisition Deal
                </div>
                <h3 className="text-3xl md:text-4xl text-charcoal mb-4 font-serif leading-tight">{deal.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-lg max-w-lg">{deal.desc}</p>
                
                <div className="flex items-end gap-6 mb-10">
                  <div>
                    <p className="text-sm text-gray-400 line-through font-bold mb-1">{deal.oldPrice}</p>
                    <p className="text-4xl font-serif font-bold text-primary">{deal.newPrice}</p>
                  </div>
                  <div className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-lg text-sm font-bold h-fit mb-1 border border-secondary/20">
                    SAVE {Math.round((1 - 9.2/11.5) * 100)}%
                  </div>
                </div>

                <button className="premium-gradient-wine text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 w-fit hover:scale-105 transition-transform luxury-shadow">
                  Inquire Now <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
