import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah de Villiers',
    role: 'Tech Entrepreneur',
    text: 'The experience of finding our home with Elite Estate was nothing short of perfection. Their attention to detail and ability to source off-market gems is truly unparalleled.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000'
  },
  {
    name: 'Marcus Thorne',
    role: 'Investment Banker',
    text: ' Julian and his team provided strategic advice that went far beyond typical real estate services. They understand luxury assets as a component of wealth.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2000'
  },
  {
    name: 'Elena Rossi',
    role: 'Art Collector',
    text: 'Elite Estate found me a sanctuary that perfectly balances privacy with architectural grandeur. Their discretion and professional standard are exemplary.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2000'
  },
  {
    name: 'David Chen',
    role: 'CEO, Global Logistics',
    text: 'Working with the Sterling team was the best real estate decision I have made. They handled everything with absolute precision and grace.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=2000'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <Quote className="w-[800px] h-[800px] absolute -top-40 -left-40 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl text-charcoal leading-tight"
          >
            Trusted by the World's Most <br />
            <span className="text-primary italic">Sophisticated Portfolio Holders</span>
          </motion.h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-cream rounded-[3rem] p-10 md:p-14 border border-cream/50 luxury-shadow h-full flex flex-col"
              >
                <Quote className="text-secondary w-12 h-12 mb-8 opacity-40" />
                <p className="text-xl md:text-2xl font-serif text-charcoal mb-10 italic leading-relaxed flex-grow">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-serif font-bold text-primary">{item.name}</p>
                    <p className="text-sm font-bold text-secondary uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
