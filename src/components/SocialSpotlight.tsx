import { BadgeCheck, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

const smoothFadeUp = {
  hidden: { opacity: 0, y: 20 },
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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function SpotlightVideo({ 
  post, 
  index, 
  isActive, 
  onPlay 
}: { 
  post: string, 
  index: number, 
  isActive: boolean,
  onPlay: (index: number) => void 
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isStalled, setIsStalled] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStartedLoading(true);
      },
      { 
        threshold: 0.01, 
        rootMargin: '1500px'
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

  // Handle active state changes
  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isActive) {
      onPlay(-1); // Pause if clicking active video
    } else {
      onPlay(index);
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      onClick={handleTogglePlay}
      variants={smoothFadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group flex-shrink-0 w-[calc(65vw-24px)] md:w-[32vw] lg:w-[calc(20%-20px)] snap-start aspect-[9/16] overflow-hidden border border-on-surface/10 hover:shadow-xl shadow-sm cursor-pointer bg-surface-container rounded-sm will-change-transform"
    >
      {/* Premium Shimmer Skeleton / Buffering Indicator */}
      {(!isReady || isStalled) && (
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container animate-shimmer z-20" 
             style={{ backgroundSize: '200% 100%' }} />
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translateZ(0)' }}
        onLoadedData={() => setIsReady(true)}
        onWaiting={() => setIsStalled(true)}
        onPlaying={() => setIsStalled(false)}
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList="nodownload"
        preload={index < 2 ? "auto" : "metadata"}
        src={hasStartedLoading ? `${post}#t=0.001` : undefined}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 mix-blend-multiply"></div>
      
      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/10 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 flex items-center justify-center border border-white/20 shadow-sm z-30">
        <BadgeCheck className="w-2.5 h-2.5 md:w-3 md:h-3 text-white mr-1 md:mr-1.5" />
        <span className="font-body text-[6px] md:text-[8px] tracking-[0.3em] font-light uppercase text-white">Verified</span>
      </div>
      
      <div className={`absolute inset-0 flex flex-col justify-end items-center p-3 md:p-6 transition-opacity duration-500 z-40 ${isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <button className="border border-white/40 bg-white/10 backdrop-blur-md text-white py-2 md:py-4 px-3 md:px-6 text-[8px] md:text-[10px] font-body font-medium uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-on-surface transition-colors duration-500 w-full outline-none rounded-sm">
          {isActive ? 'Pause Video' : 'Shop this Look'}
        </button>
      </div>
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-50 ${isActive ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl hover:bg-white/30 transition-all duration-300">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

export function SocialSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(-1);
  
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
              <SpotlightVideo 
                key={i} 
                post={post} 
                index={i} 
                isActive={activeVideoIndex === i}
                onPlay={(idx) => setActiveVideoIndex(idx)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
