import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

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
    <section className="py-12 md:py-16 w-full mx-auto relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0 desktop-blend-bottom">
        <img 
          src="/homepage/first_section.webp" 
          alt="" 
          className="w-full h-full object-cover transition-opacity duration-1000" 
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          style={{ opacity: 0 }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-7xl mx-auto px-6 flex flex-col items-center mb-8 gap-4 relative z-10"
      >
        <div className="text-center">
          <p className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase text-secondary opacity-60 mb-2 leading-relaxed">Curated Categories</p>
          <h2 className="font-headline text-3xl md:text-6xl font-light tracking-tight text-inverse-surface leading-snug">Shop <i className="text-secondary">by vibe</i></h2>
        </div>
      </motion.div>

      <div className="relative w-full flex items-center justify-center z-10">
        <button
          onClick={scrollLeft}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 items-center justify-center p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-lg hover:bg-primary hover:border-primary text-white transition-all duration-300 shadow-xl cursor-pointer"
          aria-label="Previous category"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        <motion.div
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col lg:flex lg:flex-row justify-start lg:justify-start lg:items-center gap-4 md:gap-6 lg:gap-6 w-full overflow-x-auto hide-scrollbar pb-6 pt-2 px-4 lg:pl-20 lg:pr-6 snap-x snap-mandatory"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center group relative flex-shrink-0 w-[44vw] md:w-56 lg:w-60 aspect-[2/3] cursor-pointer rounded-b-lg will-change-transform"
            >
              <div className="relative h-full w-full bg-white/5 overflow-hidden rounded-t-full rounded-b-lg shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
                <img
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                  src={cat.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/80 opacity-90 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col items-center justify-end z-30">
                  <span className="text-white/60 font-body text-[8px] md:text-[10px] tracking-[0.4em] uppercase mb-1 opacity-100 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 ease-out leading-relaxed">Discover</span>
                  <span className="text-white font-headline text-lg md:text-3xl italic font-light capitalize tracking-wide drop-shadow-xl leading-snug">{cat.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
