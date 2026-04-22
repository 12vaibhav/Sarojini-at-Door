import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
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
      className="py-16 md:py-24 relative overflow-hidden mt-[-100px] z-40 bg-surface"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 150px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px)'
      }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/third_section.webp" 
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
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-8 text-center pt-20"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase opacity-60 mb-2 text-secondary leading-relaxed block">The Hall of Fame</span>
          <h2 className="font-headline text-3xl md:text-5xl font-light tracking-tight text-inverse-surface leading-snug">Masterpiece <i className="text-secondary">Collection</i></h2>
        </motion.div>

        <div className="relative isolate">
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-[40%] -translate-y-1/2 z-30 hidden lg:flex items-center justify-center p-4 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl cursor-pointer group/nav"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-[40%] -translate-y-1/2 z-30 hidden lg:flex items-center justify-center p-4 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl cursor-pointer group/nav"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6 stroke-[1.5]" />
          </button>

          <motion.div
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-4 md:gap-6 hide-scrollbar snap-x snap-mandatory pb-12 pt-2 px-6 md:px-16 scroll-pl-6 md:scroll-pl-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {masterpieceProducts.map((product, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                onClick={onProductClick}
                className="group relative flex-shrink-0 w-[75vw] sm:w-[40vw] lg:w-[calc(20%-15px)] snap-start cursor-pointer will-change-transform"
              >
                <div className="aspect-[4/5] overflow-hidden bg-white/5 relative shadow-sm group-hover:shadow-xl transition-all duration-700 rounded-sm border border-black/5">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                    src={product.image}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30"></div>
                  <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-center text-on-surface z-20">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-5 px-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-body font-semibold text-lg md:text-xl tracking-tight text-on-surface/90">{product.price}</span>
                      <div className="flex-shrink-0 origin-right">
                        <div className="px-3 py-1 rounded-full bg-on-surface/5 border border-on-surface/10">
                          <span className="font-body text-[8px] font-bold text-on-surface/60 uppercase tracking-widest">{product.tag}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-headline text-xl md:text-2xl font-light italic tracking-tight text-on-surface leading-snug group-hover:text-primary transition-colors duration-500 line-clamp-1">{product.name}</h4>
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
