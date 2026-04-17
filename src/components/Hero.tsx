import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax shifts as you scroll through the hero
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header ref={containerRef} className="relative h-screen min-h-[600px] md:min-h-[750px] max-h-[1000px] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          alt="High fashion editorial model"
          className="w-full h-full object-cover object-[center_25%] md:object-[center_15%] opacity-90"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0YwjAn9VhQvF9sG3470PvDZ6wL2NfmyhXAXV6NCc7m18hWkeUHZkaegBjbKGGL1IZX8zwyRriDuFlBJOjkazYC7CaC3fQg-G8k-4KkSWBx9SXnDDBcxIZdTcHwI-doo8v-VPtnMzbeCPHa3wOStIJ5_dccjyIKttJFAIpK_ylN_7oI0iZnnJr7GVpmHJGgHdxqTp4ZzMJ9hpRBPlie5LSzWPmKcERt2bduldGfM63q37kVPCo26Kf6YcscYsy6TOX_ATG144vtAc"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-black/98"></div>
      </div>
      <div className="relative z-10 w-full h-full flex flex-col px-6 md:px-10 lg:px-16 py-6 max-w-screen-2xl mx-auto">
        
        {/* Main Content Vertical Wrapper */}
        <div className="flex-1 w-full flex flex-col justify-end lg:justify-center pb-12 md:pb-8 pt-32 lg:pt-56">
          <motion.div style={{ opacity }} className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
          
          {/* Left Aligned Organized Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ y: yTitle }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left w-full lg:w-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="text-white font-body text-[8px] md:text-[10px] font-light uppercase tracking-[0.5em] mb-4 md:mb-6 select-none drop-shadow-md"
            >
              The Digital Bazaar Edition
            </motion.div>

            <h1 className="font-headline text-[13vw] md:text-[11vw] lg:text-[5.5vw] font-normal leading-[1] md:leading-[1.05] text-white flex flex-col items-start drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <span className="block font-light tracking-tight">The Bazaar</span>
              <span className="flex items-center justify-start gap-2 md:gap-3 w-full">
                <motion.span 
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                  className="italic text-primary-fixed font-light drop-shadow-2xl pr-1"
                >
                  Found,
                </motion.span>
                <span className="not-italic text-white font-light tracking-tight">Its Way</span>
              </span>
              <span className="block font-light tracking-tight">To Your Door</span>
            </h1>
          </motion.div>

          {/* Right Aligned Organized Subtitle & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ y: ySubtitle }}
            transition={{ delay: 1, duration: 1.2 }}
            className="flex flex-col items-start lg:items-end text-left lg:text-right gap-6 w-full max-w-[500px] lg:max-w-[400px]"
          >
            <p className="text-white/80 font-body text-[13px] md:text-[14px] tracking-[0.05em] md:tracking-[0.1em] font-extralight leading-relaxed drop-shadow-md max-w-sm lg:max-w-none">
              A curated journey through Delhi's secret alleys. Every piece is handpicked for its unique soul and enduring craft.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "black" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 md:px-6 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 text-[10px] md:text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-500 shadow-xl w-full sm:w-fit rounded-sm"
            >
              Explore Collection
            </motion.button>
          </motion.div>

        </motion.div>
        </div>
        
        {/* Organized Bottom Meta Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-full border-t border-white/20 py-6 md:py-8 flex flex-row justify-between items-center text-white/50 font-body text-[7px] md:text-[10px] uppercase tracking-widest select-none mb-4"
        >
            <span className="flex-shrink-0">Est. 1950s <span className="hidden sm:inline">— South Delhi</span></span>
            <div className="flex gap-2 md:gap-4 items-center whitespace-nowrap">
                <span>Vol. 01</span>
                <span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span>
                <span>Editorial Drop</span>
            </div>
        </motion.div>
      </div>
    </header>
  );
}
