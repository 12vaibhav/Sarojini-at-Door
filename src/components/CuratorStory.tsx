import { motion } from "motion/react";

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
    <section className="pt-[47px] pb-[120px] md:py-[82px] lg:py-[92px] relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0">
        <img 
          src="/homepage/first_section.webp" 
          alt="" 
          className="w-full h-full object-cover transition-opacity duration-1000" 
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          style={{ opacity: 0 }}
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
