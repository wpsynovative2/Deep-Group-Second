import { motion } from 'motion/react';
import { Apple, PlayCircle, Smartphone, Wifi, Bell } from 'lucide-react';

export default function MobileApp() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 relative z-20 text-white text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.2em] uppercase mb-6 block"
            >
              Technology Meets Luxury
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Manage Your Portfolio <br />
              <span className="text-secondary italic">On The Go.</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Download the Elite Estate mobile application for immediate notifications on new listings, private viewings scheduling, and real-time portfolio tracking. Experience luxury at your fingertips.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-secondary hover:text-white transition-all w-full sm:w-auto">
                <Apple size={24} />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase leading-none opacity-60">Download on</p>
                  <p className="text-lg leading-tight">App Store</p>
                </div>
              </button>
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-secondary hover:text-white transition-all w-full sm:w-auto">
                <PlayCircle size={24} />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase leading-none opacity-60">Get it on</p>
                  <p className="text-lg leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Visuals - Floating Mockups */}
          <div className="lg:w-1/2 relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
             {/* Decorative Background Circles */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/5 rounded-full blur-[100px] -z-10"></div>
             
             {/* Phone Mockups Placeholder Divs */}
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative z-10 w-64 md:w-80 h-[500px] md:h-[600px] bg-charcoal rounded-[3rem] border-[10px] border-black shadow-2xl luxury-shadow flex flex-col p-6 overflow-hidden"
             >
                <div className="w-20 h-6 bg-black rounded-full mb-8 self-center"></div>
                <div className="space-y-6">
                  <div className="h-40 bg-white/10 rounded-2xl animate-pulse"></div>
                  <div className="h-8 bg-white/10 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-8 bg-white/10 rounded-full w-1/2 animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/10 rounded-2xl animate-pulse"></div>
                    <div className="h-24 bg-white/10 rounded-2xl animate-pulse"></div>
                  </div>
                </div>
                <div className="mt-auto h-20 bg-primary-dark rounded-2xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-xs">ELITE APP</span>
                </div>
             </motion.div>

             {/* Secondary Floating Elements */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 right-0 md:right-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
             >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Bell size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Alert</p>
                  <p className="text-xs font-bold text-charcoal">New Listing in Dubai</p>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-20 left-0 md:left-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
             >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Live Tracking</p>
                  <p className="text-xs font-bold text-charcoal">Meeting with Agent</p>
                </div>
             </motion.div>
          </div>

          {/* BG Ornament */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
