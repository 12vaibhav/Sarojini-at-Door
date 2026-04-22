import { Zap, RefreshCw, BadgeCheck, Gem, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// High-performance animation variants
const smoothFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export function TrustBadges() {
  const badges = [
    { icon: Zap, title: "Express Shipping", desc: "Complimentary over ₹499", color: "text-primary" },
    { icon: RefreshCw, title: "Easy Returns", desc: "Seamless 7-day exchange", color: "text-secondary" },
    { icon: BadgeCheck, title: "Quality Assured", desc: "100% authenticated", color: "text-tertiary" },
    { icon: Gem, title: "VIP Concierge", desc: "Dedicated Whatsapp", color: "text-on-secondary-fixed-variant" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="relative bg-surface overflow-hidden border-y border-on-surface/5 py-[27px] md:py-[27px] z-40 lg:-mt-10 will-change-transform"
    >
      {/* Brand Color Aura / Mesh Gradient (Optimized for GPU) */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/60 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4" style={{ transform: 'translateZ(0)' }}></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/70 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4" style={{ transform: 'translateZ(0)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-4 lg:gap-y-4 gap-x-4 md:gap-x-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={smoothFadeUp}
              className={`flex flex-col items-center justify-center text-center group cursor-default px-2 md:px-6 ${index % 2 !== 1 ? 'border-r border-on-surface/10' : ''} ${index === 2 ? 'lg:border-r lg:border-on-surface/10' : ''} lg:flex-col lg:text-center will-change-transform`}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-on-surface/10 bg-surface group-hover:bg-on-surface flex items-center justify-center mb-1 lg:mb-1.5 shadow-sm group-hover:shadow-md lg:group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0"
              >
                <badge.icon className={`w-6 h-6 md:w-7 md:h-7 ${badge.color} group-hover:text-surface transition-colors duration-500 stroke-[1.2]`} />
              </motion.div>
              <div className="flex flex-col">
                <h3 className="font-headline text-xs md:text-sm lg:text-base font-light text-on-surface mb-0 md:mb-0.5 lg:mb-0.5 tracking-wide leading-snug">{badge.title}</h3>
                <p className="font-body text-[6px] md:text-[7px] uppercase tracking-[0.2em] font-medium text-on-surface/50 leading-relaxed">
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
    { name: "Women", image: "/Product%20Images/Shop%20by%20vibe/Women.webp", color: "primary" },
    { name: "Men", image: "/Product%20Images/Shop%20by%20vibe/Men.webp", color: "secondary" },
    { name: "Co-ords", image: "/Product%20Images/Shop%20by%20vibe/Co-ord.webp", color: "tertiary" },
    { name: "Skirts", image: "/Product%20Images/Shop%20by%20vibe/Skirts.webp", color: "primary-dim" },
    { name: "Accs.", image: "/Product%20Images/Shop%20by%20vibe/Accs..webp", color: "secondary" },
    { name: "Ethnic Wear", image: "/Product%20Images/Shop%20by%20vibe/Ethnic%20wear.webp", color: "primary" },
    { name: "Sleepwear", image: "/Product%20Images/Shop%20by%20vibe/Sleep%20wear.webp", color: "tertiary" },
    { name: "Dresses", image: "/Product%20Images/Shop%20by%20vibe/Dress.webp", color: "secondary" },
  ];

  return (
    <section className="py-8 md:py-8 lg:py-8 w-full mx-auto relative overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/first_section.webp" 
          alt="" 
          className="w-full h-full object-cover opacity-100" 
          loading="lazy" 
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-7xl mx-auto px-6 flex flex-col items-center mb-6 md:mb-8 lg:mb-8 gap-4 md:gap-6 lg:gap-6 relative z-10"
      >
        <div className="text-center">
          <p className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase text-secondary opacity-60 mb-4 md:mb-6 lg:mb-4 leading-relaxed">Curated Categories</p>
          <h2 className="font-headline text-3xl md:text-6xl font-light tracking-tight text-inverse-surface leading-snug">Shop <i className="text-secondary">by vibe</i></h2>
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
          className="grid grid-rows-2 grid-flow-col lg:flex lg:flex-row justify-start lg:justify-start lg:items-center gap-4 md:gap-6 lg:gap-6 w-full overflow-x-auto hide-scrollbar pb-6 md:pb-6 lg:pb-6 pt-2 md:pt-4 lg:pt-4 px-4 lg:pl-20 lg:pr-6 snap-x snap-mandatory"
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
                  loading="lazy"
                />

                {/* Cinematic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Inner Fine Border */}
                <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none transition-all duration-700 group-hover:inset-6 group-hover:border-white/40 rounded-t-full rounded-b-lg"></div>

                {/* Text Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-8 flex flex-col items-center justify-end z-30">
                  <span className="text-white/60 font-body text-[7px] md:text-[9px] tracking-[0.4em] uppercase mb-2 md:mb-6 opacity-100 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 ease-out leading-relaxed">Discover</span>
                  <span className="text-white font-headline text-lg md:text-3xl italic font-light capitalize tracking-wide drop-shadow-xl leading-snug">{cat.name}</span>
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
