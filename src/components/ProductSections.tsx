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
    name: "Vintage Floral Chiffon Maxi",
    category: "Women • Dresses",
    price: "₹1,299",
    oldPrice: "₹2,499",
    discount: "45% OFF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzrEz16n5zAQ4Y3glwWJEiVPKWj1OiPcszsr5GFCPS_W5_y0V2k-Xci4aY1cu47bxcqU_4-MGyZzQKC6pjEBAZNaoTnDGXcupuwvo51AX5jIX1yZpFDNMd-0OU4sb1CyF0H_EkCBAgXSAvSgn2p1d71Y1JZg7j6eZCwlq0wgNX-u6-hZXdNuZlXvCusN5YAzzrKPRFx8QxXWlbwf9IGsBU86aF_EFTYh664sSGZ_4OKWQCg0DsdO8ey8RqiFg9hom4ri7-pzzKIOg"
  },
  {
    name: "Artisan Linen Oversized Shirt",
    category: "Men • Shirts",
    price: "₹899",
    oldPrice: "₹1,599",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD57PD55TU6XqpG7XiNzMb-B3ZTSgKGX4b0kNkRGRDWKPRUSIBz4ga9GZGqvOYslw3ki5H9xI_zb07naRU963MOHEnIxcwPMihexNy0sWVfWLkKdxCQ42mXyQvk6DXG2pJVLo2Y6WZnAWmP5EZKicLeztqJmM3FgwrLpzxSq0enPsyfDu8_FEv89CyFFHjbL-pGuH-KRWRAAl0iimV5O1E3RLgPYvd2Jkt57bxjjbOK_Fhzg2Lxm87JAYvQ1bvDm9R-zvAWSvkqITI"
  },
  {
    name: "Citrus Breeze Cotton Set",
    category: "Women • Co-ords",
    price: "₹1,599",
    oldPrice: "₹2,999",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRePtHf2iHqFMpO_qGNsOyYm6gFp2tqio1yBVuKOmehvCD7MvN8x-eRIBD7IAZlkUhpIdYDookAjkk73cWqen4uwISUM45ffKdlIsTNAIYfn2HpLH98RrRenz2pDH0vU1JQjXkGltmogxd9GvRjhV9HW8pt_nOl594kbc06s-Yzqg4x9Qb_bgXUMbhTQcoODsa-hJZe_7SMyydnhVQ8PylwjrUQn_BTIc_T8n83uWfFfIjPF6kJncEXWIn3l3vvXDSdmw7ZbS8Og"
  },
  {
    name: "The 'Sarojini' Baggy Denims",
    category: "Women • Denim",
    price: "₹1,199",
    oldPrice: "₹2,299",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaEApvXbGixc1IcN1po82XjSC5b3IEORn7FpScWzNqTeYSRY2MaA82Pbm6P5mKIqNIBzOhfOIbCJpdQDbG6YkMow3qgz_r69dBgQAt0YyPoNn0xD3Efo2-_5llm8wRnpYhjO88eJPx8L296Qyr-A06VDybffqmLaznGEhsDIl4MuJ7w9obnTMmLJ0ELbwjB6TE5GDVKnqWZFBzpc_6Noqt4Z_ULd57N8HAqeFo5_MAYewMM_AIHzveCJ80saWTc51c4_xF01CBDU4"
  },
  {
    name: "Minimalist Oversized Blazer",
    category: "Women • Outerwear",
    price: "₹2,199",
    oldPrice: "₹3,999",
    discount: "45% OFF",
    image: "https://picsum.photos/seed/chic-blazer/800/1200"
  }
];

const masterpieceProducts = [
  {
    name: "Essential White Tee",
    tag: "Best Seller",
    price: "₹499",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl9QLncHkBN7yTfFXF2CAqsguy-IIfnzhsdST3rtDq0zopCoEhkTjfTWPNVdSR4Pu57XXf53XPa2LtJb3P6JjnBX_HJocmfHHlbcjrx1eLuHw-vdJjjfQPH3yFUCXBItd8Ap8L-FFc8FSjTK4mU0WQ_4TuUfcxMxVVSDFGoH1k3Z2-O-xHmaMEOwcBl8DnCHs-yDW0dPF6QyOdCs5tdbnzTPM3iSWOD86dSsj5zbLgGk_i-ii-hZl6wUJSuH-RAqThdVa1xSRZ-tI"
  },
  {
    name: "Boho Silk Scarf",
    tag: "Limited Drop",
    price: "₹349",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO19hmtGSqvQIvlY4-2oNSjQTOTRdQnYZZWmbrcj2U8rYMgaaVs4yYAb3JKRgyaIRIzojPSNPSNRau0xkF6-XD7CjTlqv8mjO-y5tJRzwrA7rbCdqJJ5IZHXvRahFh7V_ZLJG1V_JEZ8aNgu0jKzXOlJ0Jd9P1Gb43Lo0eUhJ_Ol5LyWwV6I4cHStPfuwpr4lOht9lLmmCi6XTkFVPcQQWbqrfxONkqatuGbIxf-f0kFzvnyGuD0EluTBpCqUJSIh5w7S1u1N8MZA"
  },
  {
    name: "Summer Denim Shorts",
    tag: "Essentials",
    price: "₹799",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKIg1p-iAR16mHKyVIwYGT0SJrfbK1QENDEGmMWcTmT2U04F1ilXnqsetsNo3ymeuGEistqd0NBa4DWe4OgIBStVFEwrBQIxHi1mdXvN-Ko3rsWlPEJTXzm7B1Q9-hueMf3X0DN9NzY1-lMbsx072I8Zd3K2XPsTMKbbuzkavd714DPREzkVishj31RsL_c8Ztmpbtz5kEoDdhz_7H8nq8AnvG669a5Mx3FyeVSGLykolIKTgY0gfhGQblH3vhXMIiGzt2Frgfz4c"
  },
  {
    name: "Urban Canvas Sneakers",
    tag: "Bazaar Choice",
    price: "₹999",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0xOBg_jKgmeNUYAhsMVV8wn9S2zc0RbycOnrEBet9kNSgfsvqsw10tlaL1fZMwrTC15o7YqeMihf6RKMBw4JC95L5R8OuvOsCzfVqQndoc3VH-T6WvXyadEw8MADqUxl3Qsb2KqRT-2OdZj-bTgJwv1VSyQiKHsLBzEKpVuw-yeZACXJMLMf_rTF1bf0l_sOCtxQhpimRtafDWNR7OISNiwSMioIS3sNH6MYJToYVWbuOfrDC_6wdTP2UqELr6QmMPL4deetDs_Y"
  },
  {
    name: "Handcrafted Leather Tote",
    tag: "Signature",
    price: "₹2,499",
    image: "https://picsum.photos/seed/leather-bag/800/1000"
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
    <section className="py-12 relative bg-surface overflow-hidden">
      {/* Brand Color Aura / Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/40 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/50 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-8 md:mb-12 text-center"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-extralight uppercase opacity-60 mb-4 md:mb-6 text-secondary leading-relaxed">Curated Selection</span>
          <h2 className="font-headline text-4xl md:text-6xl font-light tracking-tight text-primary leading-snug">Trending <i className="text-secondary">Now</i></h2>
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
            className="grid grid-rows-2 grid-flow-col lg:flex lg:flex-row overflow-x-auto gap-4 md:gap-8 hide-scrollbar snap-x snap-mandatory pb-8 pt-4 px-4 md:px-12 scroll-pl-4 md:scroll-pl-12"
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
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <p className="font-body text-[7px] md:text-[9px] text-white/70 font-extralight uppercase tracking-[0.4em] mb-2 md:mb-3 leading-relaxed">{product.category}</p>
                <h3 className="font-headline text-base md:text-2xl font-light text-white mb-4 md:mb-6 italic tracking-wide leading-snug">{product.name}</h3>
                <div className="flex items-baseline justify-between border-t border-white/20 pt-3 md:pt-4">
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
    <section className="py-12 relative bg-surface overflow-hidden">
      {/* Brand Color Aura / Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/40 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/50 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-8 md:mb-12 text-center"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-extralight uppercase opacity-60 mb-4 md:mb-6 text-secondary leading-relaxed">The Hall of Fame</span>
          <h2 className="font-headline text-4xl md:text-6xl font-light tracking-tight text-primary leading-snug">Masterpiece <i className="text-secondary">Collection</i></h2>
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
            className="grid grid-rows-2 grid-flow-col lg:flex lg:flex-row overflow-x-auto gap-4 md:gap-8 hide-scrollbar snap-x snap-mandatory pb-8 pt-4 px-4 md:px-12 scroll-pl-4 md:scroll-pl-12"
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
                className="group relative flex-shrink-0 w-[44vw] sm:w-[45vw] lg:w-[calc(25%-24px)] snap-start cursor-pointer"
              >
              <div className="aspect-[4/5] overflow-hidden bg-white relative shadow-sm group-hover:shadow-xl transition-shadow duration-700 rounded-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/5 lg:bg-black/0 lg:group-hover:bg-black/10 transition-colors duration-700"></div>
                
                {/* Mobile optimization: make details always visible on smaller screens */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  <p className="text-white/70 font-body text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-light mb-1 md:mb-2">{product.tag || 'New Collection'}</p>
                  <h4 className="text-white font-headline text-sm md:text-xl italic font-light leading-snug">{product.name}</h4>
                  <p className="text-white font-body text-xs md:text-sm mt-2 font-light tracking-wide">{product.price}</p>
                </div>
                
                {/* Floating Action */}
                <motion.button 
                  whileHover={{ scale: 1.2, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-black/5 shadow-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center justify-center text-on-surface"
                >
                  <Heart className="w-4 h-4 font-light" />
                </motion.button>
              </div>
              
              <div className="hidden lg:block pt-6 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-body text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-medium text-on-surface bg-white shadow-sm border border-on-surface/10 px-3 py-1.5 rounded-sm">{product.tag}</span>
                  <span className="font-body font-light text-sm tracking-widest text-on-surface/90 mt-1">{product.price}</span>
                </div>
                <h4 className="font-headline text-2xl font-light italic tracking-wide text-on-surface mt-3 leading-snug">{product.name}</h4>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PromoBanner() {
  return (
    <section className="editorial-gradient text-white py-10 lg:py-14 relative overflow-hidden">
      {/* Subtle Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-primary-fixed/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
        
        {/* Left Side: Editorial Image Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block w-1/4 h-[420px] overflow-hidden rounded-sm border border-white/10 shadow-2xl relative group"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDGIBw8Vw-R-hNpqrs5_Dks4fa0M8RgTaoripmulD307RC2Bfn7efgc__JRnKUr2LJxYwgYBPWCK7e0k7vs9jMmnyUHSdzOGKISrf3s7-AbYbdKi2x8xOqiJyCA6Eooi5lZM8OkU3WbSRMf91WWfHDAO1BvSFnnejdTl13GgOPwHF5QGNKOgkK9_u9LC3vbEyenRwxbbGsE1xukr1Nf8k8dc-1kKVne6AS9TC9NX8WUpw0ic2fOzMcylGhtgYe0ql6YQAe3PLIFfA"
            alt="Editorial Feature Left"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </motion.div>

        {/* Decentered Invitation Content (Open Layout) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="lg:flex-1 w-full max-w-[900px] py-4 md:py-8 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16"
        >
          
          {/* Left Side: Typography */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <p className="font-body text-[8px] md:text-[10px] text-white/40 tracking-[0.5em] uppercase font-light leading-relaxed">The Masterpiece Drop</p>
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.2] lg:leading-[1.1]">
              Enjoy <i className="text-primary-fixed font-light">30% Off</i> Everything
            </h2>
            <p className="font-body text-[9px] md:text-xs text-secondary-fixed/70 font-light tracking-[0.25em] uppercase leading-relaxed max-w-md mx-auto lg:mx-0">Curated High-Fashion Editorial Sale.</p>
          </div>
          
          {/* Right Side: Privilege Code (Integrated Design) */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end lg:border-l border-white/10 lg:pl-16">
            <div className="flex flex-col items-center lg:items-end space-y-8">
              <div className="text-center lg:text-right">
                <p className="font-body text-[8px] md:text-[9px] text-white/30 tracking-[0.4em] uppercase font-light mb-4 leading-relaxed">Privilege Code</p>
                <div className="overflow-hidden mb-2">
                  <motion.p 
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                    className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] lg:tracking-widest text-white leading-none font-light"
                  >
                    BAZAAR30
                  </motion.p>
                </div>
              </div>
              
              <div className="flex flex-col items-center lg:items-end space-y-4 w-full">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary-fixed)", color: "black", borderColor: "var(--color-primary-fixed)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 w-full sm:w-auto border border-white/30 text-white font-body text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 rounded-sm"
                >
                  Claim Privilege
                </motion.button>
                <p className="font-body text-[7px] text-white/20 tracking-[0.4em] uppercase font-light leading-relaxed">Limited to 24 Hours</p>
              </div>
            </div>
          </div>
          
        </motion.div>

        {/* Right Side: Editorial Image Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block w-1/4 h-[420px] overflow-hidden rounded-sm border border-white/10 shadow-2xl relative group"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsuVthmPeCOc3as3GvZaEQjH_zLXdWyRWMjXR_gQ5hmBsW0vcMfFz2t4-T4Tv2pHg63xxcMblMZStV7qHIyotVjOsQ91OOxXfMk5BtnXFQ0cAHDUc7u1tLzjk4H_y3CNHHqEu9kwy_6O5uybRGdLN5avxPsdDNTCFk32CcY2UnS2yWPYqhylGJesnJAj0aUYRe0lobwx7aWJGhAhfHDvYmlutFk-ONyrmwr6BFT7cWBr2polqjfz0wyEEMWdjnObN1twWdOK_pJVU"
            alt="Editorial Feature Right"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </motion.div>

      </div>
    </section>
  );
}
