import { motion } from 'motion/react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Architectural Marvel',
    price: '$8,500,000',
    location: 'Beverly Hills, CA',
    beds: 6,
    baths: 8,
    area: '12,400 sq.ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075',
    tag: 'Exclusive'
  },
  {
    id: 2,
    title: 'The Sky-High Penthouse',
    price: '$12,200,000',
    location: 'Manhattan, NY',
    beds: 4,
    baths: 5,
    area: '6,800 sq.ft',
    image: 'https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=2070',
    tag: 'Sold Fast'
  },
  {
    id: 3,
    title: 'Oceanfront Glass Villa',
    price: '$15,000,000',
    location: 'Malibu, CA',
    beds: 5,
    baths: 6,
    area: '9,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=2070',
    tag: 'New Listing'
  },
  {
    id: 4,
    title: 'Lake Zurich Estate',
    price: '$10,800,000',
    location: 'Zurich, Switzerland',
    beds: 7,
    baths: 7,
    area: '15,000 sq.ft',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=2070',
    tag: 'Premium'
  },
  {
    id: 5,
    title: 'Mediterranean Masterpiece',
    price: '$7,900,000',
    location: 'Nice, France',
    beds: 6,
    baths: 6,
    area: '11,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600585154526-990dcea42e49?auto=format&fit=crop&q=80&w=2070',
    tag: 'Reduced'
  },
  {
    id: 6,
    title: 'High-Tech Urban Oasis',
    price: '$9,100,000',
    location: 'Tokyo, Japan',
    beds: 4,
    baths: 4,
    area: '5,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=2092',
    tag: 'Smart Home'
  }
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">Our Collection</span>
            <h2 className="text-3xl md:text-5xl text-charcoal leading-tight">
              Explore Featured <span className="text-primary italic">Luxury Estates</span>
            </h2>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary/20 hover:border-primary transition-all pb-1 h-fit"
          >
            View All Properties
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden luxury-shadow luxury-shadow-hover transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-700 z-10"></div>
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                
                {/* Badges */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm shadow-md">
                    {prop.tag}
                  </span>
                </div>
                <button className="absolute top-5 right-5 z-20 p-2.5 bg-white shadow-lg rounded-full text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                  <Heart size={18} />
                </button>
              </div>

              {/* Details */}
              <div className="p-10">
                <div className="flex items-center gap-1 text-secondary mb-4">
                  <MapPin size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{prop.location}</span>
                </div>
                <h3 className="text-2xl text-charcoal mb-6 group-hover:text-primary transition-colors duration-300 font-serif font-bold">
                  {prop.title}
                </h3>
                <div className="flex items-center justify-between py-6 border-y border-gray-50 mb-8">
                  <div className="flex items-center gap-2">
                    <Bed size={16} className="text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">{prop.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} className="text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">{prop.baths}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={16} className="text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">{prop.area}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Guide Price</p>
                    <p className="text-2xl font-serif font-bold text-wine">{prop.price}</p>
                  </div>
                  <button className="bg-wine text-white p-3 px-8 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-wine/90 transition-all shadow-md">
                    View Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
