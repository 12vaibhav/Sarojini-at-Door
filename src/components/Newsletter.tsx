import { Mail, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export function Newsletter() {
  return (
    <section 
      className="pt-[144px] md:pt-[160px] lg:pt-[176px] pb-12 relative overflow-hidden mt-[-100px] z-[70] bg-surface"
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 150px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px)'
      }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/first_section.webp" 
          alt="" 
          className="w-full h-full object-cover transition-opacity duration-1000" 
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          style={{ opacity: 0 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="border border-secondary/20 bg-secondary-fixed/40 backdrop-blur-3xl p-6 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 rounded-sm shadow-2xl will-change-transform"
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
               <Mail className="w-4 h-4 text-on-surface/70" />
               <p className="font-body text-[8px] md:text-[10px] text-on-surface/70 tracking-[0.4em] uppercase font-bold leading-relaxed">The Insider List</p>
            </div>
            <h2 className="font-headline text-2xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 text-on-surface leading-tight">
              Curated drops, to your <i className="text-secondary italic">sanctuary.</i>
            </h2>
            <p className="font-body text-[9px] md:text-xs text-on-surface/50 font-medium tracking-widest uppercase max-w-[280px] mx-auto lg:mx-0">Join our private circle of 50k+ patrons.</p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end border-t lg:border-t-0 lg:border-l border-on-surface/10 pt-8 lg:pt-0 lg:pl-12">
            <div className="w-full max-w-sm relative group mb-6">
              <div className="flex items-center bg-white/50 border border-on-surface/10 focus-within:border-secondary transition-all duration-300 rounded-sm">
                <input 
                  className="w-full bg-transparent px-4 py-3 text-on-surface font-medium focus:outline-none placeholder:text-on-surface/30 text-xs" 
                  placeholder="Enter email destination" 
                  type="email" 
                />
                <button className="shrink-0 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold pr-6 text-on-surface">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end w-full">
              <p className="font-body text-[8px] md:text-[9px] text-on-surface/60 tracking-[0.4em] uppercase font-bold mb-4">Also Available</p>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#" 
                className="flex items-center gap-4 py-3 px-6 border border-[#25D366]/30 bg-[#DCF8C6]/60 backdrop-blur-md transition-all shadow-lg w-full sm:w-auto justify-center rounded-sm"
              >
                <FaWhatsapp className="text-[#25D366] text-xl" />
                <span className="text-[10px] font-headline tracking-widest uppercase text-on-surface">WhatsApp VIP</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
