import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
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

const trendingProducts = [
  {
    name: "Modern Floral Skirt Women",
    category: "Women • Dresses",
    price: "₹1,299",
    oldPrice: "₹2,499",
    discount: "45% OFF",
    image: "/Product%20Images/Trending%20Now/Modern%20Floral%20Skirt%20Women.webp"
  },
  {
    name: "Modern Fit Dress",
    category: "Women • Dresses",
    price: "₹899",
    oldPrice: "₹1,599",
    image: "/Product%20Images/Trending%20Now/Modern%20Fit%20Dress.webp"
  },
  {
    name: "Cute Tshirt Women",
    category: "Women • Tshirts",
    price: "₹1,599",
    oldPrice: "₹2,999",
    image: "/Product%20Images/Trending%20Now/Cute%20Tshirt%20Women.webp"
  },
  {
    name: "Gorgeous Premium Saree",
    category: "Women • Sarees",
    price: "₹1,199",
    oldPrice: "₹2,299",
    image: "/Product%20Images/Trending%20Now/Gorgeous%20Premium%20Saree.webp"
  },
  {
    name: "Blue Denim Shirt Men",
    category: "Men • Shirts",
    price: "₹2,199",
    oldPrice: "₹3,999",
    discount: "45% OFF",
    image: "/Product%20Images/Trending%20Now/Blue%20Denim%20Shirt%20Men.webp"
  }
];

export function TrendingNow({ onProductClick }: { onProductClick?: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-[134px] md:pt-[120px] lg:pt-[136px] pb-12 relative overflow-hidden mt-[-100px] z-30 bg-transparent">
      <div className="absolute inset-0 z-0 desktop-blend-top desktop-blend-bottom">
        <img 
          src="/homepage/second_section.webp" 
          alt="" 
          className="w-full h-full object-cover transition-opacity duration-1000" 
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          style={{ opacity: 0 }}
        />
      </div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-8 text-center"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase opacity-60 mb-2 text-secondary leading-relaxed">Curated Selection</span>
          <h2 className="font-headline text-4xl md:text-6xl font-light tracking-tight text-inverse-surface leading-snug">Trending <i className="text-secondary">Now</i></h2>
        </motion.div>

        <div className="relative isolate">
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-lg hover:bg-primary hover:border-primary text-white transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-lg hover:bg-primary hover:border-primary text-white transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6 stroke-[1.5]" />
          </button>

          <motion.div
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-4 md:gap-6 hide-scrollbar snap-x snap-mandatory pb-6 pt-2 px-4 md:px-12 scroll-pl-4 md:scroll-pl-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {trendingProducts.map((product, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex-shrink-0 w-[65vw] sm:w-[45vw] lg:w-[calc(25%-24px)] snap-start aspect-[3/4] overflow-hidden cursor-pointer bg-white/5 shadow-sm hover:shadow-xl transition-shadow duration-700 rounded-sm will-change-transform"
                onClick={onProductClick}
              >
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                  src={product.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-40">
                  <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-on-surface flex items-center justify-center shadow-sm">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className="font-body text-[8px] md:text-[9px] text-white/70 font-extralight uppercase tracking-[0.4em] mb-1 leading-relaxed">{product.category}</p>
                  <h3 className="font-headline text-lg md:text-2xl font-light text-white mb-2 italic tracking-wide leading-snug">{product.name}</h3>
                  <div className="flex items-baseline justify-between border-t border-white/20 pt-3">
                    <div className="flex items-center gap-3">
                      <span className="font-body text-xs md:text-sm font-light text-white tracking-[0.1em]">{product.price}</span>
                      {product.oldPrice && <span className="font-body text-[9px] md:text-[10px] text-white/40 line-through tracking-wider">{product.oldPrice}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
