import { BadgeCheck, Play, Star, MessageCircle, Instagram, Facebook, Twitter, Youtube, CreditCard, Mail, MapPin, ArrowRight, Flower2, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export function CuratorStory() {
  return (
    <section className="py-[47px] md:py-[82px] lg:py-[92px] relative overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/first_section.webp" 
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>
      
      {/* Invisible SVG definition for the Vintage Frame shape */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="vintage-frame" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0 Q 0.65,0 0.7,0.08 Q 0.85,0.08 0.85,0.22 Q 1.15,0.5 0.85,0.78 Q 0.85,0.92 0.7,0.92 Q 0.65,1 0.5,1 Q 0.35,1 0.3,0.92 Q 0.15,0.92 0.15,0.78 Q -0.15,0.5 0.15,0.22 Q 0.15,0.08 0.3,0.08 Q 0.35,0 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 md:gap-x-8 lg:gap-x-6 gap-y-8 md:gap-y-8 lg:gap-y-8 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-4 flex flex-col items-center justify-center order-2 lg:order-1">
            {/* Card 1 */}
            <div className="drop-shadow-md transition-transform duration-700 lg:hover:-translate-y-2 group cursor-pointer max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[380px] w-full">
              <div 
                className="aspect-[3/4] rounded-[48px] overflow-hidden bg-white w-full h-full shadow-xl lg:shadow-2xl border-2 border-[#d4af37]/30"
              >
                <img
                  alt="High-fashion editorial look"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] lg:group-hover:scale-105"
                  src="/Product%20Images/S1.webp"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="col-span-2 lg:col-span-4 relative flex flex-col items-center justify-center text-center px-4 min-h-[300px] lg:min-h-[500px] order-1 lg:order-2">
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <span className="font-headline text-[28vw] lg:text-[20vw] font-light italic text-on-surface leading-none select-none tracking-tighter opacity-[0.04] lg:opacity-[0.02]">10k+</span>
            </div>
            <div className="space-y-5 md:space-y-8 lg:space-y-6">
              <div className="space-y-3 md:space-y-6 lg:space-y-4">
                <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase text-secondary opacity-60 leading-relaxed">The Curator's Story</span>
                <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight text-inverse-surface">
                  We found your style in a <i className="text-secondary">hidden alley.</i>
                </h2>
              </div>
              <p className="font-body text-[15px] md:text-lg text-on-surface/70 leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-md mx-auto font-light">
                Born from the love of the hunt, we navigate the maze of Delhi's most iconic market to find gems you'd otherwise miss. Each piece is curated for its soul, quality, and trend-setting potential.
              </p>
              <div className="w-full pt-4 md:pt-6">
                <button className="px-8 py-5 md:px-6 md:py-4 border border-on-surface/20 text-on-surface font-body text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-on-surface hover:text-surface transition-all duration-500 ease-out shadow-sm outline-none w-full sm:w-auto rounded-sm">
                  Read Our Journey
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-4 flex flex-col items-center justify-center order-3">
            {/* Card 3 */}
            <div className="drop-shadow-md transition-transform duration-700 lg:hover:-translate-y-2 group cursor-pointer max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[380px] w-full">
              <div 
                className="aspect-[3/4] rounded-[48px] overflow-hidden bg-white w-full h-full shadow-xl lg:shadow-2xl border-2 border-[#d4af37]/30"
              >
                <img
                  alt="Modern fashion rack curation"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] lg:group-hover:scale-105"
                  src="/Product%20Images/S2.webp"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function SocialSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const posts = [
    "/Product%20Images/Videos/Video-1.mp4",
    "/Product%20Images/Videos/Video-2.mp4",
    "/Product%20Images/Videos/Video-3.mp4",
    "/Product%20Images/Videos/Video-4.mp4",
    "/Product%20Images/Videos/Video-5.mp4",
    "/Product%20Images/Videos/Video-6.mp4"
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="pt-[134px] md:pt-[120px] lg:pt-[136px] pb-8 md:pb-8 lg:pb-8 relative overflow-hidden mt-[-100px] z-50 bg-transparent"
    >
      <div className="absolute inset-0 z-0 desktop-blend-top">
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
          viewport={{ once: true, margin: "-100px" }}
          variants={smoothFadeUp}
          className="flex flex-col items-center mb-6 md:mb-8 lg:mb-8 text-center px-6 will-change-transform"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase text-secondary mb-4 md:mb-6 lg:mb-4 leading-relaxed">Cinematic Spotlight</span>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-inverse-surface mb-4 md:mb-6 lg:mb-4 leading-snug">#Wear<i className="text-secondary">TheBazaar</i></h2>
          <p className="font-body text-xs md:text-base text-on-surface/70 leading-relaxed max-w-sm md:max-w-md font-light">Discover professional-grade styling from our collective. High-street soul meets editorial standards.</p>
        </motion.div>
        
        <div className="relative isolate text-on-surface">
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
            className="flex flex-row overflow-x-auto gap-4 md:gap-6 lg:gap-6 hide-scrollbar snap-x snap-mandatory pb-6 md:pb-6 lg:pb-6 pt-2 md:pt-4 lg:pt-4 px-4 md:px-12 scroll-pl-4 md:scroll-pl-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {posts.map((post, i) => (
              <SpotlightVideo key={i} post={post} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Optimized variants for performance
const smoothFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Efficient quintic ease
    }
  }
};

function SpotlightVideo({ post, index }: { post: string, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStartedLoading(true);
      },
      { 
        threshold: 0.01, 
        rootMargin: '800px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      onClick={handleTogglePlay}
      variants={smoothFadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group flex-shrink-0 w-[calc(50vw-24px)] md:w-[32vw] lg:w-[calc(20%-20px)] snap-start aspect-[9/16] overflow-hidden border border-on-surface/10 hover:shadow-xl shadow-sm cursor-pointer bg-surface-container rounded-sm will-change-transform"
    >
      {/* Premium Shimmer Skeleton */}
      {!isReady && (
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translateZ(0)' }}
        onLoadedData={() => setIsReady(true)}
        muted
        loop
        playsInline
        preload="metadata"
        src={hasStartedLoading ? `${post}#t=0.001` : undefined}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 mix-blend-multiply"></div>
      
      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/10 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 flex items-center justify-center border border-white/20 shadow-sm z-30">
        <BadgeCheck className="w-2.5 h-2.5 md:w-3 md:h-3 text-white mr-1 md:mr-1.5" />
        <span className="font-body text-[6px] md:text-[8px] tracking-[0.3em] font-light uppercase text-white">Verified</span>
      </div>
      
      <div className={`absolute inset-0 flex flex-col justify-end items-center p-3 md:p-6 transition-opacity duration-500 z-40 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <button className="border border-white/40 bg-white/10 backdrop-blur-md text-white py-2 md:py-4 px-3 md:px-6 text-[8px] md:text-[10px] font-body font-medium uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-on-surface transition-colors duration-500 w-full outline-none rounded-sm">
          {isPlaying ? 'Pause Video' : 'Shop this Look'}
        </button>
      </div>
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-50 ${isPlaying ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl hover:bg-white/30 transition-all duration-300">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const reviews = [
    { name: "Priya K.", initial: "PK", text: "I'm obsessed with the co-ord sets. The cotton is so breathable and the prints are exactly like the pictures. Finally, Sarojini style without the Delhi heat!", color: "primary" },
    { name: "Aryan R.", initial: "AR", text: "Delivery was super fast. The packaging felt like a luxury boutique. Such a great initiative to bring local markets online. Highly recommend!", color: "secondary" },
    { name: "Sneha M.", initial: "SM", text: "The fitting is perfect. I was worried about sizes but their guide is very accurate. Already placed my second order for the sale!", color: "primary" },
    { name: "Kabir S.", initial: "KS", text: "Found the exact vintage jacket I've been looking for. The curated collections are top-tier. Definitive proof you don't need to spend lakhs to look like a million bucks.", color: "secondary" },
    { name: "Ananya V.", initial: "AV", text: "The Masterpiece Collection is breathtaking. Each piece feels like a work of art. I wore the embroidered silk blouse for a gala and received so many compliments!", color: "primary" },
    { name: "Rohan D.", initial: "RD", text: "Great quality and even better prices. The Social Spotlight section gave me so many ideas for my next brunch outfit.", color: "secondary" },
    { name: "Meera T.", initial: "MT", text: "I love the sustainability focus. Knowing that my purchases support local artisans while getting trendy pieces is a win-win. Five stars for sure!", color: "primary" }
  ];

  // Double the reviews for seamless looping
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section 
      className="pt-[134px] md:pt-[120px] lg:pt-[136px] pb-8 md:pb-8 lg:py-8 relative overflow-hidden mt-[-100px] z-[60] bg-surface"
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 150px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px)'
      }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/third_section.webp" 
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>

      <div className="relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-6 md:mb-8 lg:mb-8 text-center max-w-7xl mx-auto px-6"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase text-secondary opacity-60 mb-3 md:mb-4 lg:mb-4 leading-relaxed">Voice of the Collective</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-inverse-surface leading-snug">Patron <i className="text-secondary">Chronicles</i></h2>
        </motion.div>
        
        <div className="relative">
          {/* Gradient Fades for Smooth Edges */}
          <div className="absolute top-0 bottom-6 left-0 w-12 md:w-24 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-6 right-0 w-12 md:w-24 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none"></div>

          <motion.div 
            className="flex gap-4 w-max transition-[filter] duration-700 pb-6 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedReviews.map((review, i) => (
              <div 
                key={i} 
                className="relative bg-[#fcf9f2] py-4 px-6 md:p-6 shadow-2xl transition-all duration-700 overflow-hidden group w-[260px] h-[325px] md:w-[335px] md:h-auto shrink-0 border-[0.5px] border-[#d4af37]/40 flex flex-col items-center text-center"
              >
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
                
                {/* Ornate Gold Corners */}
                <div className="absolute top-2 left-2 w-8 h-8 md:w-10 md:h-10 border-t-[1.5px] border-l-[1.5px] border-[#d4af37]/50 rounded-tl-[2px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-t-[0.5px] before:border-l-[0.5px] before:border-[#d4af37]/30 before:-m-[3px]">
                   <div className="absolute top-0 left-0 w-2 h-2 bg-[#d4af37] rounded-full -translate-x-1/2 -translate-y-1/2 scale-50" />
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 md:w-10 md:h-10 border-t-[1.5px] border-r-[1.5px] border-[#d4af37]/50 rounded-tr-[2px]">
                   <div className="absolute top-0 right-0 w-2 h-2 bg-[#d4af37] rounded-full translate-x-1/2 -translate-y-1/2 scale-50" />
                </div>
                <div className="absolute bottom-2 left-2 w-8 h-8 md:w-10 md:h-10 border-b-[1.5px] border-l-[1.5px] border-[#d4af37]/50 rounded-bl-[2px]">
                   <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#d4af37] rounded-full -translate-x-1/2 translate-y-1/2 scale-50" />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 md:w-10 md:h-10 border-b-[1.5px] border-r-[1.5px] border-[#d4af37]/50 rounded-br-[2px]">
                   <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#d4af37] rounded-full translate-x-1/2 translate-y-1/2 scale-50" />
                </div>

                {/* Main Content Layout */}
                <div className="relative z-10 flex flex-col items-center w-full h-full">
                  {/* Top Golden Seal */}
                  <div className="mb-1 md:mb-4 relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#b8860b] rounded-full shadow-lg border border-white/20 flex items-center justify-center relative z-20">
                      <Star className="w-6 h-6 text-[#5c4a1e] fill-[#5c4a1e]/10 stroke-[1.5]" />
                    </div>
                    {/* Seal Rays/Aura */}
                    <div className="absolute inset-0 bg-[#d4af37]/20 blur-xl rounded-full scale-150 -z-10 animate-pulse" />
                  </div>

                  {/* Review Text */}
                  <div className="flex-1 flex flex-col justify-center mb-2 md:mb-4">
                    <div className="text-[#d4af37]/40 text-xl md:text-2xl font-headline leading-none mb-0 md:mb-1">“</div>
                    <p className="font-headline font-light italic leading-relaxed text-[#4a4030] text-sm md:text-base lg:text-lg px-2 md:px-4">
                      {review.text}
                    </p>
                    <div className="text-[#d4af37]/40 text-xl md:text-2xl font-headline leading-none mt-0 md:mt-1 rotate-180">“</div>
                  </div>
                  
                  {/* Bottom Info Section */}
                  <div className="w-full mt-auto">
                    {/* Decorative Ribbon/Bar */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-2 md:mb-4" />
                    
                    <div className="flex items-center gap-3 md:flex-col md:items-center md:space-y-2 text-left md:text-center">
                      {/* Portrait Seal */}
                      <div className="w-10 h-10 rounded-full border-[1.5px] border-[#d4af37]/60 p-0.5 bg-white shadow-inner flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full rounded-full bg-[#fdfaf5] flex items-center justify-center font-headline italic text-base text-[#b8860b]">
                          {review.initial}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start md:items-center">
                        <h4 className="font-body font-semibold text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#5c4a1e] mb-0.5">{review.name}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="w-2 h-2 text-[#d4af37] fill-[#d4af37]" />
                          ))}
                          <span className="font-body text-[7px] text-[#b8860b] tracking-widest uppercase ml-1">Verified Patron</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inner Fine Gold Border */}
                <div className="absolute inset-2 md:inset-4 border-[0.5px] border-[#d4af37]/20 pointer-events-none z-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section 
      className="pt-[144px] md:pt-[160px] lg:pt-[176px] pb-[37px] md:pb-[72px] relative overflow-hidden mt-[-100px] z-[70] bg-surface"
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 150px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px)'
      }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/first_section.webp" 
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Elegant Invitation Box */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="border border-secondary/20 bg-secondary-fixed/40 backdrop-blur-3xl p-5 md:p-12 lg:p-8 flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-10 lg:gap-8 rounded-sm shadow-2xl"
        >
          
          {/* Left Side: Typography */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6 lg:mb-4">
               <Mail className="w-4 h-4 md:w-5 md:h-5 text-on-surface/70 stroke-[1.5]" />
               <p className="font-body text-[7px] md:text-[10px] text-on-surface/70 tracking-[0.4em] uppercase font-bold leading-relaxed">The Insider List</p>
            </div>
            <h2 className="font-headline text-2xl md:text-5xl lg:text-6xl font-light tracking-tight mb-3 md:mb-6 lg:mb-4 leading-tight lg:leading-snug text-on-surface">
              Curated drops, to your <i className="text-secondary font-serif italic text-[1.05em]">sanctuary.</i>
            </h2>
            <p className="font-body text-[8px] md:text-xs text-on-surface/60 font-medium tracking-[0.2em] uppercase leading-relaxed max-w-[250px] mx-auto lg:mx-0">Join our private circle of 50k+ patrons.</p>
          </div>
          
          {/* Right Side: Form & Action */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end border-t lg:border-t-0 lg:border-l border-on-surface/10 pt-6 lg:pt-0 lg:pl-12">
            
            <div className="w-full max-w-sm relative group/input mb-8 md:mb-8 lg:mb-6">
              <div className="flex items-center bg-white/50 border border-on-surface/10 focus-within:border-secondary/50 focus-within:bg-white/80 transition-all duration-500 rounded-sm shadow-inner">
                <input 
                  className="w-full bg-transparent px-4 md:px-6 py-3 md:py-4 text-on-surface font-medium focus:outline-none placeholder:text-on-surface/30 text-xs md:text-base lg:text-sm placeholder:font-light" 
                  placeholder="Enter email destination" 
                  type="email" 
                />
                <button className="shrink-0 flex items-center gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold hover:text-secondary transition-colors pr-6 text-on-surface outline-none">
                  Subscribe <ArrowRight className="w-4 h-4 transition-transform group-hover/input:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end w-full">
              <p className="font-body text-[7px] md:text-[9px] text-on-surface/60 tracking-[0.4em] uppercase font-bold mb-4 md:mb-6 leading-relaxed">Also Available</p>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "#25D366", borderColor: "#25D366", color: "white" }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="flex items-center gap-4 md:gap-6 py-2.5 md:py-4 px-6 border border-[#25D366]/30 bg-[#DCF8C6]/60 backdrop-blur-md transition-all duration-500 group/wa shadow-xl w-full sm:w-auto justify-center rounded-sm"
              >
                <span className="text-[#25D366] group-hover/wa:text-white transition-colors shrink-0 flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
                  <FaWhatsapp size={20} />
                </span>
                <div className="text-left">
                  <div className="text-[9px] md:text-[10px] font-headline tracking-widest uppercase text-on-surface group-hover/wa:text-white transition-colors">WhatsApp VIP</div>
                </div>
              </motion.a>
              <p className="font-body text-[9px] text-on-surface/40 tracking-[0.3em] uppercase font-bold mt-4 leading-relaxed">Flash alerts & priority access</p>
            </div>

          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-12 lg:py-8 relative overflow-hidden border-t border-white/10">
      {/* Huge subtle atmospheric background typography */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center overflow-hidden pointer-events-none select-none flex items-center justify-center opacity-5">
        <h2 className="font-headline text-[25vw] leading-none tracking-tighter text-white italic whitespace-nowrap mt-8">SAROJINI</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 lg:gap-y-8 pb-12 lg:pb-8 border-b border-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Brand Column */}
          <motion.div variants={fadeUpVariant} className="col-span-2 lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="text-xl md:text-2xl font-bold text-white font-headline tracking-widest mb-4 md:mb-6 lg:mb-4 flex items-center gap-4 drop-shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-2xl border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-500">
                  <img 
                    src="/Logo_T.svg" 
                    className="w-7 h-7 md:w-9 md:h-9 object-contain brightness-[1.5] contrast-[1.2] drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" 
                    alt="Logo" 
                    loading="lazy"
                  />
                </div>
                <span>Sarojini at Door</span>
              </div>
              <p className="text-white/60 font-body font-light leading-relaxed text-xs md:text-sm max-w-sm">
                Bringing the world's most vibrant street market experience to your fingertips. Curated, authenticated, and delivered.
              </p>
            </div>
            
            {/* Social Icons - Sleeker style */}
            <div className="flex gap-4 pt-2">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "Youtube" }
              ].map((social, i) => (
                <a key={i} href="#" aria-label={social.label} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-500 ease-out group outline-none">
                  <social.Icon className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-2 lg:col-start-6 space-y-6 md:space-y-6 lg:space-y-6 mt-4 lg:mt-0">
            <h4 className="text-white font-body font-medium text-[8px] md:text-[9px] uppercase tracking-[0.3em] leading-relaxed">Bazaar</h4>
            <ul className="space-y-3 md:space-y-4 lg:space-y-3 text-white/60 font-body text-[11px] md:text-xs font-light tracking-wide">
              {["Women's Archive", "Men's Wardrobe", "Summer Edit", "Accessories", "The Sale Room"].map(item => (
                <li key={item}>
                  <a className="hover:text-white transition-colors duration-300 flex items-center gap-3 group w-fit outline-none" href="#">
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-2 space-y-6 md:space-y-6 lg:space-y-6 mt-4 lg:mt-0">
            <h4 className="text-white font-body font-medium text-[8px] md:text-[9px] uppercase tracking-[0.3em] leading-relaxed">Support</h4>
            <ul className="space-y-3 md:space-y-4 lg:space-y-3 text-white/60 font-body text-[11px] md:text-xs font-light tracking-wide">
              {["Track Order", "Shipping Rules", "Returns", "Size Guide", "Contact Us"].map(item => (
                <li key={item}>
                  <a className="hover:text-white transition-colors duration-300 flex items-center gap-3 group w-fit outline-none" href="#">
                    <span className="w-0 h-px bg-secondary transition-all duration-300 group-hover:w-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact / Location Column */}
          <motion.div variants={fadeUpVariant} className="col-span-2 lg:col-span-3 space-y-6 lg:space-y-6 mt-6 md:mt-10 lg:mt-0">
            <h4 className="text-white font-body font-medium text-[8px] md:text-[9px] uppercase tracking-[0.3em] leading-relaxed">Concierge</h4>
            <ul className="space-y-5 md:space-y-6 lg:space-y-4 text-white/60 font-body text-[11px] md:text-xs font-light tracking-wide">
              <li className="flex items-start gap-3 md:gap-4 group cursor-pointer w-fit">
                <MapPin className="w-4 h-4 stroke-[1.5] text-white/60 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="leading-relaxed group-hover:text-white transition-colors">Studio 42, Hauz Khas Village,<br/>New Delhi, 110016</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group w-fit">
                <Mail className="w-4 h-4 stroke-[1.5] text-white/60 shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:curator@sarojini.com" className="hover:text-white transition-colors outline-none">curator@sarojini.com</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <p className="font-body text-[9px] font-medium tracking-[0.2em] text-white/50 uppercase text-center md:text-left leading-relaxed">
              © {new Date().getFullYear()} Sarojini. Patrons of street culture.
            </p>
            <div className="hidden md:flex items-center gap-6 text-[9px] tracking-[0.2em] text-white/40 uppercase">
              <a href="#" className="hover:text-white/80 transition-colors leading-relaxed outline-none">Privacy</a>
              <a href="#" className="hover:text-white/80 transition-colors leading-relaxed outline-none">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 py-2 px-4 rounded-full border border-white/10 bg-white/5 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-3 pr-4 border-r border-white/20">
                <CreditCard className="w-4 h-4 text-white" strokeWidth={1} />
                <span className="font-body text-[8px] text-white tracking-widest font-medium uppercase leading-relaxed">Secured</span>
              </div>
              <div className="flex gap-4 text-[10px] text-white tracking-widest font-bold font-headline italic leading-relaxed">
                <span>VISA</span>
                <span>UPI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
