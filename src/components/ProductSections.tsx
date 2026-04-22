import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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

const masterpieceProducts = [
  {
    name: "Beautiful Premium Pink Saree",
    tag: "Best Seller",
    price: "₹499",
    image: "/Product%20Images/Masterpiece%20Collection/Beautiful%20Premium%20Pink%20Saree.webp"
  },
  {
    name: "Goegeous Floral Skirt",
    tag: "Limited Drop",
    price: "₹349",
    image: "/Product%20Images/Masterpiece%20Collection/Goegeous%20Floral%20Skirt.webp"
  },
  {
    name: "Modern Shirt top Women",
    tag: "Essentials",
    price: "₹799",
    image: "/Product%20Images/Masterpiece%20Collection/Modern%20Shirt%20top%20Women.webp"
  },
  {
    name: "Multicolor Printed A Line Dress",
    tag: "Bazaar Choice",
    price: "₹999",
    image: "/Product%20Images/Masterpiece%20Collection/Multicolor%20Printed%20A%20Line%20Dress.webp"
  },
  {
    name: "Plain Fitted Gray Shirt",
    tag: "Signature",
    price: "₹2,499",
    image: "/Product%20Images/Masterpiece%20Collection/Plain%20Fitted%20Gray%20Shirt.webp"
  },
  {
    name: "White Printed Bodycon Dress",
    tag: "Limited Drop",
    price: "₹3,299",
    image: "/Product%20Images/Masterpiece%20Collection/White%20Printed%20Bodycon%20Dress.webp"
  },
  {
    name: "Short Kurta Men",
    tag: "Bazaar Choice",
    price: "₹1,899",
    image: "/Product%20Images/Masterpiece%20Collection/Short%20Kurta%20Men.webp"
  },
  {
    name: "Women's Midi Fit Flare Dresse",
    tag: "Best Seller",
    price: "₹2,199",
    image: "/Product%20Images/Masterpiece%20Collection/Women's%20Midi%20Fit%20Flare%20Dresse.webp"
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
    <section
      className="pt-[134px] md:pt-[120px] lg:pt-[136px] pb-[29px] md:pb-20 lg:pb-24 relative overflow-hidden mt-[-100px] z-30 bg-surface desktop-blend-bottom"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/second_section.webp" 
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-6 md:mb-8 lg:mb-8 text-center"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase opacity-60 mb-4 md:mb-6 lg:mb-4 text-secondary leading-relaxed">Curated Selection</span>
          <h2 className="font-headline text-4xl md:text-6xl font-light tracking-tight text-inverse-surface leading-snug">Trending <i className="text-secondary">Now</i></h2>
        </motion.div>

        <div className="relative isolate">
          {/* Chevron Navigation - Hidden on mobile/tablet */}
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
            className="grid grid-rows-2 grid-flow-col lg:flex lg:flex-row overflow-x-auto gap-4 md:gap-6 lg:gap-6 hide-scrollbar snap-x snap-mandatory pb-6 md:pb-6 lg:pb-6 pt-2 md:pt-4 lg:pt-4 px-4 md:px-12 scroll-pl-4 md:scroll-pl-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {trendingProducts.map((product, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex-shrink-0 w-[44vw] sm:w-[45vw] lg:w-[calc(25%-24px)] snap-start aspect-[3/4] overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-xl transition-shadow duration-700 rounded-sm"
                onClick={onProductClick}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  src={product.image}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>

                {/* Floating Actions */}
                <div className="absolute top-3 right-3 md:top-6 md:right-6 flex flex-col gap-2 md:gap-3 opacity-100 lg:translate-x-8 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out z-40">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-on-surface flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 font-light" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-on-surface flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 font-light" />
                  </motion.button>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <p className="font-body text-[7px] md:text-[9px] text-white/70 font-extralight uppercase tracking-[0.4em] mb-1 md:mb-3 leading-relaxed">{product.category}</p>
                  <h3 className="font-headline text-base md:text-2xl font-light text-white mb-2 md:mb-6 italic tracking-wide leading-snug">{product.name}</h3>
                  <div className="flex items-baseline justify-between border-t border-white/20 pt-2 md:pt-4">
                    <div className="flex items-center gap-2 md:gap-4">
                      <span className="font-body text-xs md:text-sm font-light text-white tracking-[0.1em]">{product.price}</span>
                      {product.oldPrice && <span className="font-body text-[8px] md:text-[10px] text-white/50 line-through tracking-wider">{product.oldPrice}</span>}
                    </div>
                    {product.discount && <span className="font-body text-[7px] md:text-[9px] font-light text-primary-fixed tracking-[0.2em] uppercase">{product.discount}</span>}
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

export function MasterpieceCollection({ onProductClick }: { onProductClick?: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-[54px] md:pt-[70px] lg:pt-[86px] pb-4 md:pb-6 lg:pb-7 relative overflow-hidden mt-[-100px] z-40 bg-surface desktop-blend-top"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/third_section.webp" 
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-4 md:mb-4 lg:mb-6 text-center"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase opacity-60 mt-[80px] md:mt-[50px] mb-4 md:mb-6 lg:mb-4 text-secondary leading-relaxed block">The Hall of Fame</span>
          <h2 className="font-headline text-3xl md:text-5xl font-light tracking-tight text-inverse-surface leading-snug">Masterpiece <i className="text-secondary">Collection</i></h2>
        </motion.div>

        <div className="relative isolate">
          {/* Chevron Navigation */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-[40%] -translate-y-1/2 z-30 hidden lg:flex items-center justify-center p-4 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl cursor-pointer group/nav"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[1.5] group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-[40%] -translate-y-1/2 z-30 hidden lg:flex items-center justify-center p-4 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl cursor-pointer group/nav"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6 stroke-[1.5] group-hover/nav:translate-x-0.5 transition-transform" />
          </button>

          <motion.div
            ref={scrollRef}
            className="grid grid-rows-1 grid-flow-col lg:flex lg:flex-row overflow-x-auto gap-4 md:gap-6 lg:gap-[18px] hide-scrollbar snap-x snap-mandatory pb-[18px] md:pb-16 lg:pb-20 pt-2 md:pt-4 lg:pt-4 px-6 md:px-16 scroll-pl-6 md:scroll-pl-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {masterpieceProducts.map((product, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                onClick={onProductClick}
                className="group relative flex-shrink-0 w-[70vw] sm:w-[40vw] lg:w-[calc(20%-15px)] snap-start cursor-pointer"
              >
                {/* Product Image Container */}
                <div className="aspect-[4/5] overflow-hidden bg-white relative shadow-sm group-hover:shadow-xl transition-all duration-700 rounded-sm border border-black/5">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    src={product.image}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

                  {/* Floating Wishlist Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center justify-center text-on-surface z-20"
                    onClick={(e) => { e.stopPropagation(); }}
                  >
                    <Heart className="w-4 h-4 font-light" />
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="pt-5 px-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      {/* Price */}
                      <span className="font-body font-semibold text-lg md:text-xl tracking-tight text-on-surface/90">
                        {product.price}
                      </span>

                      {/* 3D Tag - Moved to right end */}
                      <div className="flex-shrink-0 origin-right">
                        {product.tag?.toLowerCase().includes('limited') ? (
                          <div className="relative px-4 py-1 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#064e3b] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.4)] rounded-full border border-[#065f46]"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-60"></div>
                            <span className="relative z-10 font-body text-[10px] font-bold text-[#ecfdf5] uppercase tracking-[0.1em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                              {product.tag}
                            </span>
                          </div>
                        ) : product.tag?.toLowerCase().includes('essential') ? (
                          <div className="px-4 py-1 rounded-sm bg-gradient-to-b from-[#f3f4f6] via-[#d1d5db] to-[#9ca3af] border border-[#9ca3af] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center">
                            <span className="font-body text-[10px] font-bold text-[#374151] uppercase tracking-[0.1em]">
                              {product.tag}
                            </span>
                          </div>
                        ) : product.tag?.toLowerCase().includes('best') ? (
                          <div className="relative px-4 py-1 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#7f1d1d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.4)] rounded-full border border-[#991b1b]"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-60"></div>
                            <span className="relative z-10 font-body text-[10px] font-bold text-[#fee2e2] uppercase tracking-[0.1em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                              {product.tag}
                            </span>
                          </div>
                        ) : product.tag?.toLowerCase().includes('signature') ? (
                          <div className="relative px-4 py-1 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#1e3a8a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.4)] rounded-full border border-[#1e40af]"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-60"></div>
                            <span className="relative z-10 font-body text-[10px] font-bold text-[#dbeafe] uppercase tracking-[0.1em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                              {product.tag}
                            </span>
                          </div>
                        ) : (
                          <div className="relative px-4 py-1 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#92400e] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.4)] rounded-full border border-[#b45309]"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-60"></div>
                            <span className="relative z-10 font-body text-[10px] font-bold text-[#fef3c7] uppercase tracking-[0.1em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                              {product.tag}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Product Name */}
                    <h4 className="font-headline text-xl md:text-2xl font-light italic tracking-tight text-on-surface leading-snug group-hover:text-primary transition-colors duration-500 line-clamp-1">
                      {product.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}

export function PromoBanner() {
  return (
    <section className="w-full relative overflow-hidden bg-surface">
      <picture className="w-full">
        <source media="(min-width: 768px)" srcSet="/homepage/second_banner.webp" />
        <img
          src="/homepage/mobile_banner.webp"
          alt="Promo Banner"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </picture>
    </section>
  );
}
