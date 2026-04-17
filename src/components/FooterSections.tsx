import { BadgeCheck, Play, Star, MessageCircle, Instagram, Facebook, Twitter, Youtube, CreditCard, Mail, MapPin, ArrowRight, Flower2, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

export function CuratorStory() {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Brand Color Aura / Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/40 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/50 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>
      
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
          className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 lg:gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-4 flex flex-col items-center justify-center order-2 lg:order-1">
            {/* Card 1 */}
            <div className="drop-shadow-md transition-transform duration-700 lg:hover:-translate-y-2 group cursor-pointer max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[380px] w-full">
              <div 
                className="aspect-[3/4] rounded-full overflow-hidden bg-white w-full h-full shadow-xl lg:shadow-2xl border-4 border-white"
              >
                <img
                  alt="High-fashion editorial look"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] lg:group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA96kCpLzHuBtEh_4vdOLMJZI0APGOveAuF2rQUWFNrjLopUj3P2vgOuIzGYzJL99G79_8aU3Y4oWxNdI_zXxUp5ZarPeQD0cdEJBoBi4ml6ENfkUGWDmPNmY4VRQTzY9-yjfLsuwIUW7RXF7mi7wba2i8w04zmiH7JauyC8OGzaFwZg_0OxeDbR4R-vK2jyfsoH2hutp8xUGvVn8mQZBtlrwntrS5BoLdAeZVNmim9nZDoBdsjNEQxnjdjtVGaYk6I1A43Ah5X1kI"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="col-span-2 lg:col-span-4 relative flex flex-col items-center justify-center text-center px-4 min-h-[300px] lg:min-h-[500px] order-1 lg:order-2">
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <span className="font-headline text-[28vw] lg:text-[20vw] font-light italic text-on-surface leading-none select-none tracking-tighter opacity-[0.04] lg:opacity-[0.02]">10k+</span>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <span className="font-body text-[8px] md:text-[10px] tracking-[0.4em] font-extralight uppercase text-on-surface/60 leading-relaxed">The Curator's Story</span>
                <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight text-primary">
                  We found your style in a <i className="text-secondary">hidden alley.</i>
                </h2>
              </div>
              <p className="font-body text-[13px] md:text-base text-on-surface/70 leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-md mx-auto font-light">
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
                className="aspect-[3/4] rounded-full overflow-hidden bg-white w-full h-full shadow-xl lg:shadow-2xl border-4 border-white"
              >
                <img
                  alt="Modern fashion rack curation"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] lg:group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdZdTQqlV2tf7S1YpeNHzxtf_h3R4tz3d1MYaFB2xsPidtKsjztvHszPGpxpxu2G_mJtav-ZXqADGNemqkPk7-FXZMKS7_MbVUrdoB34wk4clrUxQDAFAo8gd9zBpBjviwgKwJD_3NmneDauccFyrqKnokoDvVr0bmHGgxUMctRIgratK3C5d9kvKyHnHFJV9Em4PVcA1GBmffASYejJFrbbvPoFSYuDayqLUYO3gznUURUnTW-jsGw0t5bn8ML8J2pe0pNcdanGc"
                  referrerPolicy="no-referrer"
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
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDSkIoZkUW0SV7tA_KZJ_S7Crp82CFy6XBzlHw57FCt2WmCJyWn1hr9FUtn0W1JEnoEt5wSWOy-fQf-RI7TCwjKLrIzx0MKSzNkIAY4hCY4f9vpoY8ZkziY3hz_p_GqoIwl9SWbqViFubBAiX0Gqb671sXeiwoF6I_av8_7DSwcX5N79oHj9AEXctU6i2iJIPTMdRQJnrWW7w5_2Tyk8Z3VEN8S4xMtMcUI7zbM4zNbE6q_Md_z2O0ky9HqWTVLdRxE8PD1LinL6xc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDnfbdaqxTVsWTpIKAMIWiSw7JZNdzJSR2Cbz0jpF2GniKpkg-bMzxFIKHGxAck80gX3c4iIlgQBSbecIjLn8qGXeTYwB_NxxYS0qfKfJn_-W2c4xw-gqa2OK76KayGPelhn1HWN_deVi5cPq0tDJPWwdeApRFdpLejOwZzENomkznovMVDmDLiNPrx35QSUXPvoWCRWgwoAkMYua_mlPV9jxnamls6jRvJOrhVv7geQae0csyCPl4B0KMdcGnkT0BIcd4Dr3SxUjk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZHZCH2WdkA8mCJ6ZhTUf0bIy9pzSuHgLhbW03-8efRPH8_2oE05zvcFZ9mhQUGLtbLRZG9X0FflGPkEjXgY7WSodS9AK-6iPBrSt5c-q_dQnHtg-masWCg1ZAPFnDF4UT6-Dy-hP1N7GBF-NpTpB2-t2_snHRSwz4qBFVoIIMN9Kz7YoXxckHLHjZUDi45dBQDNZTL4_xPLVOOLDyIQINrfGKTh3zYglCqIZR0sW4X21C9JyDhUD0rc6jiHw2e7s4B158h8LhO4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mGfPmIAe4DyE_ZstCJWxjzethw6PYRn23uMljA4qNomVdqmX5EIMt4MkJ_8VaWvgMn1wBwHCDyPZWRBoFsF4SsfqiLE-vOwKy3n1bquR6JUx8smu4UC98XQWC3p-Z34HZKzYp_YdnziVJE2bLVBP4t9gG3jZtuIH59Y2bkAyvtnUmxiMzN_vLBiMiZzN-FN_1AKtb_xyY4znYh_7BHhuOuU6a3RecJ7CnUb5bXjhQgqJFgZOxjAFn70ujLQyT-KOE9r2loNDurM",
    "https://picsum.photos/seed/editorial-vibe/900/1600"
  ];

  return (
    <section className="py-12 relative bg-surface overflow-hidden border-t border-on-surface/5">
      {/* Brand Color Aura / Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/40 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/50 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-8 md:mb-12 text-center px-6"
        >
          <span className="font-body text-[9px] md:text-[10px] tracking-[0.4em] font-extralight uppercase text-on-surface/60 mb-4 md:mb-6 leading-relaxed">Cinematic Spotlight</span>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary mb-4 md:mb-6 leading-snug">#Wear<i className="text-secondary">TheBazaar</i></h2>
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
            className="grid grid-rows-2 grid-flow-col lg:flex lg:flex-row overflow-x-auto gap-4 md:gap-8 hide-scrollbar snap-x snap-mandatory pb-8 pt-4 px-4 md:px-12 scroll-pl-4 md:scroll-pl-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {posts.map((post, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpVariant}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative group flex-shrink-0 w-[44vw] md:w-[45vw] lg:w-[calc(25%-24px)] snap-start aspect-[9/16] overflow-hidden border border-on-surface/10 hover:shadow-xl shadow-sm cursor-pointer bg-white rounded-sm"
              >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                alt={`User styling ${i + 1}`}
                className="w-full h-full object-cover"
                src={post}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 mix-blend-multiply"></div>
              
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/10 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 flex items-center justify-center border border-white/20 shadow-sm z-30">
                <BadgeCheck className="w-2.5 h-2.5 md:w-3 md:h-3 text-white mr-1 md:mr-1.5" />
                <span className="font-body text-[6px] md:text-[8px] tracking-[0.3em] font-light uppercase text-white">Verified</span>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end items-center p-3 md:p-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-40">
                <button className="border border-white/40 bg-white/10 backdrop-blur-md text-white py-2 md:py-4 px-3 md:px-6 text-[8px] md:text-[10px] font-body font-medium uppercase tracking-[0.2em] shadow-lg hover:bg-white hover:text-on-surface transition-colors duration-500 w-full outline-none rounded-sm">
                  Shop this Look
                </button>
              </div>
              
              <div className="absolute bottom-16 md:bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 opacity-100 lg:group-hover:opacity-0 transition-opacity duration-500">
                <Play className="w-6 h-6 md:w-10 md:h-10 text-white stroke-[1] fill-white/20 drop-shadow-md" />
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
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
    <section className="py-10 relative bg-surface overflow-hidden">
      {/* Brand Color Aura / Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/40 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/50 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-8 md:mb-12 text-center max-w-7xl mx-auto px-6"
        >
          <span className="font-body text-[9px] md:text-[12px] tracking-[0.4em] font-extralight uppercase text-on-surface/60 mb-3 md:mb-4 leading-relaxed">Voice of the Collective</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-primary leading-snug">Patron <i className="text-secondary">Chronicles</i></h2>
        </motion.div>
        
        <div className="relative">
          {/* Gradient Fades for Smooth Edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none"></div>

          <motion.div 
            className="flex gap-4 w-max grayscale hover:grayscale-0 transition-[filter] duration-700 pb-6 cursor-grab active:cursor-grabbing"
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
                className="relative bg-white border border-on-surface/5 p-5 shadow-sm hover:shadow-xl transition-all duration-700 overflow-hidden group w-[260px] md:w-[340px] shrink-0 rounded-sm"
              >
                <div className="absolute top-0 left-3 text-[4rem] font-headline text-on-surface/5 select-none pointer-events-none group-hover:text-on-surface/10 transition-colors duration-500 leading-none">“</div>
                <div className="relative z-10 flex flex-col h-full space-y-4">
                  <div className="flex items-center gap-1.5 font-light text-on-surface tracking-widest text-sm">
                    <span>5.0</span>
                    <Star className="w-3 h-3 text-secondary fill-secondary opacity-80" />
                  </div>
                  <p className="font-headline font-light italic leading-relaxed text-on-surface/90 flex-1 text-sm lg:text-base">"{review.text}"</p>
                  <div className="pt-3 border-t border-on-surface/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-body font-medium text-[9px] tracking-[0.1em] uppercase text-on-surface">{review.name}</h4>
                      <p className="text-[7px] text-on-surface/50 font-light tracking-[0.2em] uppercase mt-0.5">Verified Patron</p>
                    </div>
                    <div className="w-8 h-8 border border-on-surface/20 flex items-center justify-center font-headline italic text-[12px] text-on-surface/70 shrink-0">{review.initial}</div>
                  </div>
                </div>
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
    <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Aura matching PromoBanner style but fitting the footer continuum */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-primary-fixed/30 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Elegant Invitation Box */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="border border-white/15 bg-white/5 backdrop-blur-sm p-6 sm:p-10 md:p-12 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12 rounded-sm"
        >
          
          {/* Left Side: Typography */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6">
               <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/70 stroke-[1.5]" />
               <p className="font-body text-[7px] md:text-[10px] text-white/70 tracking-[0.4em] uppercase font-extralight leading-relaxed">The Insider List</p>
            </div>
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 md:mb-6 leading-tight lg:leading-snug">
              Curated drops, to your <i className="text-secondary font-serif italic text-[1.05em]">sanctuary.</i>
            </h2>
            <p className="font-body text-[8px] md:text-xs text-white/60 font-light tracking-[0.2em] uppercase leading-relaxed max-w-[250px] mx-auto lg:mx-0">Join our private circle of 50k+ patrons.</p>
          </div>
          
          {/* Right Side: Form & Action */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end border-t lg:border-t-0 lg:border-l border-white/15 pt-8 lg:pt-0 lg:pl-12">
            
            <div className="w-full max-w-sm flex items-center border-b border-white/30 focus-within:border-white transition-colors duration-500 pb-3 md:pb-4 group/input mb-8 md:mb-10">
              <input 
                className="w-full bg-transparent px-2 text-white font-light focus:outline-none placeholder:text-white/40 text-[15px] md:text-lg lg:text-base placeholder:font-extralight text-center lg:text-left" 
                placeholder="Enter email destination" 
                type="email" 
              />
              <button className="shrink-0 flex items-center gap-4 text-[9px] md:text-[12px] lg:text-[10px] uppercase tracking-[0.2em] font-bold hover:text-primary-fixed transition-colors pr-4 text-white outline-none">
                Subscribe <ArrowRight className="w-4 h-4 transition-transform group-hover/input:translate-x-1" />
              </button>
            </div>

            <div className="flex flex-col items-center lg:items-end w-full">
              <p className="font-body text-[7px] md:text-[9px] text-white/60 tracking-[0.4em] uppercase font-extralight mb-4 md:mb-6 leading-relaxed">Also Available</p>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "#25D366", borderColor: "#25D366", color: "white" }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="flex items-center gap-4 md:gap-6 py-3 md:py-4 px-6 border border-[#25D366]/30 bg-white/5 transition-all duration-500 group/wa shadow-xl w-full sm:w-auto justify-center rounded-sm"
              >
                <span className="text-[#25D366] group-hover/wa:text-white transition-colors shrink-0 flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
                  <FaWhatsapp size={20} />
                </span>
                <div className="text-left">
                  <div className="text-[9px] md:text-[10px] font-headline tracking-widest uppercase text-white transition-colors">WhatsApp VIP</div>
                </div>
              </motion.a>
              <p className="font-body text-[7px] text-white/25 tracking-[0.3em] uppercase font-extralight mt-4 leading-relaxed">Flash alerts & priority access</p>
            </div>

          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-12 relative overflow-hidden border-t border-white/10">
      {/* Huge subtle atmospheric background typography */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center overflow-hidden pointer-events-none select-none flex items-center justify-center opacity-5">
        <h2 className="font-headline text-[25vw] leading-none tracking-tighter text-white italic whitespace-nowrap mt-8">SAROJINI</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 pb-12 border-b border-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Brand Column */}
          <motion.div variants={fadeUpVariant} className="col-span-2 lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="text-xl md:text-2xl font-bold text-white font-headline tracking-widest mb-4 md:mb-6 flex items-center gap-3 drop-shadow-lg">
                <Flower2 className="w-7 h-7 md:w-8 md:h-8 fill-white" />
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
          <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-2 lg:col-start-6 space-y-6 lg:space-y-8 mt-4 lg:mt-0">
            <h4 className="text-white font-body font-medium text-[8px] md:text-[9px] uppercase tracking-[0.3em] leading-relaxed">Bazaar</h4>
            <ul className="space-y-3 md:space-y-4 text-white/60 font-body text-[11px] md:text-xs font-light tracking-wide">
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

          <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-2 space-y-6 lg:space-y-8 mt-4 lg:mt-0">
            <h4 className="text-white font-body font-medium text-[8px] md:text-[9px] uppercase tracking-[0.3em] leading-relaxed">Support</h4>
            <ul className="space-y-3 md:space-y-4 text-white/60 font-body text-[11px] md:text-xs font-light tracking-wide">
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
          <motion.div variants={fadeUpVariant} className="col-span-2 lg:col-span-3 space-y-6 lg:space-y-8 mt-6 md:mt-10 lg:mt-0">
            <h4 className="text-white font-body font-medium text-[8px] md:text-[9px] uppercase tracking-[0.3em] leading-relaxed">Concierge</h4>
            <ul className="space-y-5 md:space-y-6 text-white/60 font-body text-[11px] md:text-xs font-light tracking-wide">
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
