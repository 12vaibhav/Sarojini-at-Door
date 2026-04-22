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

// CuratorStory has been moved to its own file for performance optimization


// SocialSpotlight and Testimonials have been moved to their own files for performance optimization


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
