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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
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
      className="relative group flex-shrink-0 w-[calc(50vw-24px)] md:w-[32vw] lg:w-[calc(20%-20px)] snap-start aspect-[9/16] overflow-hidden border border-on-surface/10 hover:shadow-xl shadow-sm cursor-pointer bg-surface-container rounded-sm will-change-transform isolate"
    >
      {/* Premium Shimmer Skeleton */}
      {!isReady && (
        <div className="absolute inset-0 bg-surface-container animate-shimmer z-10" 
             style={{ backgroundSize: '200% 100%' }} />
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translateZ(0)' }}
        onLoadedData={() => {
          setIsReady(true);
          if (videoRef.current) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        }}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        src={hasStartedLoading ? `${post}#t=0.001` : undefined}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      
      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/40 px-2 md:px-3 py-1 md:py-1.5 flex items-center justify-center border border-white/10 shadow-sm z-30 pointer-events-none">
        <BadgeCheck className="w-2.5 h-2.5 md:w-3 md:h-3 text-white mr-1 md:mr-1.5" />
        <span className="font-body text-[6px] md:text-[8px] tracking-[0.3em] font-light uppercase text-white">Verified</span>
      </div>
      
      <div className={`absolute inset-0 flex flex-col justify-end items-center p-3 md:p-6 transition-opacity duration-500 z-40 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="border border-white/20 bg-black/60 text-white py-2 md:py-4 px-3 md:px-6 text-[8px] md:text-[10px] font-body font-medium uppercase tracking-[0.2em] shadow-lg text-center w-full rounded-sm pointer-events-none">
          {isPlaying ? 'Pause Video' : 'Shop this Look'}
        </div>
      </div>
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-50 pointer-events-none ${isPlaying ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 border border-white/20 flex items-center justify-center shadow-2xl">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-0.5" />
        </div>
      </div>
    </motion.div>
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
      transition={{ duration: 1 }}
      className="pt-[40px] md:pt-[80px] lg:pt-[120px] pb-8 md:pb-8 lg:pb-8 relative overflow-hidden mt-[-100px] md:mt-[-150px] lg:mt-[-180px] z-50 bg-transparent"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Standard CSS Gradient for high-performance blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-transparent z-10 h-[180px]" />
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
