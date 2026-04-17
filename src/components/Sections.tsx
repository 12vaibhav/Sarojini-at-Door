import { Zap, RefreshCw, BadgeCheck, Gem, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export function TrustBadges() {
  const badges = [
    { icon: Zap, title: "Express Shipping", desc: "Complimentary over ₹499" },
    { icon: RefreshCw, title: "Easy Returns", desc: "Seamless 7-day exchange" },
    { icon: BadgeCheck, title: "Quality Assured", desc: "100% authenticated" },
    { icon: Gem, title: "VIP Concierge", desc: "Dedicated Whatsapp" },
  ];

  return (
    <motion.section 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-surface overflow-hidden border-y border-on-surface/5 py-6 md:py-8 z-40 lg:-mt-10"
    >
      {/* Brand Color Aura / Mesh Gradient (Theme Consistent) */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/60 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/70 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-10 gap-x-4 md:gap-x-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {badges.map((badge, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant}
              className={`flex flex-col items-center justify-center text-center group cursor-default px-2 md:px-6 ${index % 2 !== 1 ? 'border-r border-on-surface/10' : ''} ${index === 2 ? 'lg:border-r lg:border-on-surface/10' : ''} lg:flex-col lg:text-center`}
            >
              <div 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-on-surface/10 bg-surface group-hover:bg-on-surface flex items-center justify-center mb-3 lg:mb-4 shadow-sm group-hover:shadow-md lg:group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0"
              >
                <badge.icon className="w-5 h-5 md:w-7 md:h-7 text-on-surface/40 group-hover:text-surface transition-colors duration-500 stroke-[1.2]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline text-sm md:text-lg lg:text-xl font-light text-on-surface mb-0.5 md:mb-3 tracking-wide leading-snug">{badge.title}</h3>
                <p className="font-body text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-medium text-on-surface/50 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const categories = [
    { name: "Women", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS5rIJlUlCnDueRce62Nbbo4QbhvTdOC3O2zk0b6gRVv8PdasUTqacQ8PbeHRpuUI6mc-FdkivTZ-FNBdKbPDiky2LhXWn-m6bYnmaXEsB78YPZssZ-AEAMjLPH56nGxV7kGuQBDa_hq3hrv5l4oYqh1X-4LhMhmI1-hqyNRZOL_K-178eyLAcL1x6TTmKfcruRtclp6-u7UvWqWQ71INVYzt1wqiQgoKP0Zd2N8yHjGH40kwzjYT6w0NhQanbJ4EZSBaxxDBAg0k", color: "primary" },
    { name: "Men", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mGfPmIAe4DyE_ZstCJWxjzethw6PYRn23uMljA4qNomVdqmX5EIMt4MkJ_8VaWvgMn1wBwHCDyPZWRBoFsF4SsfqiLE-vOwKy3n1bquR6JUx8smu4UC98XQWC3p-Z34HZKzYp_YdnziVJE2bLVBP4t9gG3jZtuIH59Y2bkAyvtnUmxiMzN_vLBiMiZzN-FN_1AKtb_xyY4znYh_7BHhuOuU6a3RecJ7CnUb5bXjhQgqJFgZOxjAFn70ujLQyT-KOE9r2loNDurM", color: "secondary" },
    { name: "Co-ords", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDGIBw8Vw-R-hNpqrs5_Dks4fa0M8RgTaoripmulD307RC2Bfn7efgc__JRnKUr2LJxYwgYBPWCK7e0k7vs9jMmnyUHSdzOGKISrf3s7-AbYbdKi2x8xOqiJyCA6Eooi5lZM8OkU3WbSRMf91WWfHDAO1BvSFnnejdTl13GgOPwHF5QGNKOgkK9_u9LC3vbEyenRwxbbGsE1xukr1Nf8k8dc-1kKVne6AS9TC9NX8WUpw0ic2fOzMcylGhtgYe0ql6YQAe3PLIFfA", color: "tertiary" },
    { name: "Basics", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsuVthmPeCOc3as3GvZaEQjH_zLXdWyRWMjXR_gQ5hmBsW0vcMfFz2t4-T4Tv2pHg63xxcMblMZStV7qHIyotVjOsQ91OOxXfMk5BtnXFQ0cAHDUc7u1tLzjk4H_y3CNHHqEu9kwy_6O5uybRGdLN5avxPsdDNTCFk32CcY2UnS2yWPYqhylGJesnJAj0aUYRe0lobwx7aWJGhAhfHDvYmlutFk-ONyrmwr6BFT7cWBr2polqjfz0wyEEMWdjnObN1twWdOK_pJVU", color: "primary-dim" },
    { name: "Accs.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3M8g52t4aL9tUa2GZJ3qFhLmVZksT-N-15D39L-fZbL_u0kI7F1q23x0iXXFk7H2pBf2392M21T_Vf2_F0Z_kO79F32X9d40w2nKVq6vD8Lh3z2q67s3nN_R1Q8zL_dD4g9rY1rQ5tH9aC0R1r2_C0_a2N_vL-x4H9k_P4W3L7D1r8m_Y4D1M3f_", color: "secondary" },
    { name: "Outerwear", image: "https://picsum.photos/seed/outerwear-fashion/500/700", color: "primary" },
    { name: "Sustainable", image: "https://picsum.photos/seed/sustainable-fashion/500/700", color: "tertiary" },
    { name: "Vintage", image: "https://picsum.photos/seed/vintage-style/500/700", color: "secondary" },
  ];

  return (
    <section className="py-12 w-full mx-auto relative bg-surface overflow-hidden">
      {/* Brand Color Aura / Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/40 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/50 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-7xl mx-auto px-6 flex flex-col items-center mb-8 gap-6 relative z-10"
      >
        <div className="text-center">
          <p className="font-body text-[10px] md:text-sm tracking-[0.3em] font-extralight uppercase opacity-60 mb-4 md:mb-6 leading-relaxed">Curated Selections</p>
          <h2 className="font-headline text-3xl md:text-6xl font-light tracking-tight text-primary leading-snug">Shop <i className="text-secondary">by vibe</i></h2>
        </div>
      </motion.div>
      
      <div className="relative w-full flex items-center justify-center">
        {/* Scroll Buttons - Desktop only */}
        <button 
          onClick={scrollLeft}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 items-center justify-center p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-lg hover:bg-primary hover:border-primary text-white transition-all duration-300 shadow-xl cursor-pointer"
          aria-label="Previous category"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        <motion.div 
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col lg:flex lg:flex-row justify-start lg:justify-start lg:items-center gap-4 md:gap-6 lg:gap-10 w-full overflow-x-auto hide-scrollbar pb-8 lg:pb-6 pt-4 px-4 lg:pl-20 lg:pr-6 snap-x snap-mandatory"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center group relative flex-shrink-0 w-[44vw] md:w-56 lg:w-60 aspect-[2/3] cursor-pointer rounded-b-lg"
            >
              
              <div className="relative h-full w-full bg-white overflow-hidden rounded-t-full rounded-b-lg shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  src={cat.image}
                  referrerPolicy="no-referrer"
                />
                
                {/* Cinematic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Inner Fine Border */}
                <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none transition-all duration-700 group-hover:inset-6 group-hover:border-white/40 rounded-t-full rounded-b-lg"></div>
                
                {/* Text Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col items-center justify-end z-30">
                  <span className="text-white/60 font-body text-[7px] md:text-[9px] tracking-[0.4em] uppercase mb-4 md:mb-6 opacity-100 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 ease-out leading-relaxed">Discover</span>
                  <span className="text-white font-headline text-xl md:text-4xl italic font-light capitalize tracking-wide drop-shadow-xl leading-snug">{cat.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Scroll Button Right */}
        <button 
          onClick={scrollRight}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 items-center justify-center p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-lg hover:bg-primary hover:border-primary text-white transition-all duration-300 shadow-xl cursor-pointer"
          aria-label="Next category"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>
    </section>
  );
}
