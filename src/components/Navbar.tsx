import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Heart, ShoppingBag, Flower2, Menu, X } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";

const NavLink = ({ href, children, isActive = false, onClick }: { href: string; children: React.ReactNode; isActive?: boolean; onClick?: (e: React.MouseEvent) => void }) => {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      className={`relative py-1 group rounded-sm ${isActive ? 'font-semibold' : 'font-light'}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white/80">
        {children}
      </span>
      {/* Animated Underline */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left"
        variants={{
          rest: { scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 },
          hover: { scaleX: 1, opacity: 1 }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Extra glow effect on hover */}
      <motion.div
        className="absolute inset-x-0 -bottom-1 h-[4px] bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.a>
  );
};

export default function Navbar({ onHomeClick, view = 'home' }: { onHomeClick?: () => void, view?: 'home' | 'product' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onHomeClick) onHomeClick();
    setIsMobileMenuOpen(false);
  };

  const isSolid = view === 'product' || scrolled;

  return (
    <div className="fixed top-0 w-full z-[1000] flex flex-col transition-all duration-500">
      <AnnouncementBar />
      <nav className={`w-full transition-all duration-500 ${isSolid ? 'bg-black/80 backdrop-blur-md py-[18px] md:py-4' : 'bg-transparent py-[34px] md:py-8'}`}>
        <div className="flex justify-between items-center px-6 md:px-10 lg:px-16 max-w-screen-2xl mx-auto">
          
          {/* Mobile Menu Button - Left on mobile */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Logo with interactive icon */}
          <motion.div 
            whileHover="hover"
            onClick={handleHomeClick}
            className="text-xl md:text-2xl font-bold text-white flex items-center gap-3 md:gap-4 font-headline drop-shadow-lg cursor-pointer group"
          >
            <motion.div
              variants={{
                hover: { rotate: 180, scale: 1.1 }
              }}
              transition={{ duration: 0.8, ease: "anticipate" }}
            >
              <Flower2 className="w-7 h-7 md:w-9 md:h-9 fill-white group-hover:fill-primary-fixed transition-colors duration-500" />
            </motion.div>
            <span className="transition-all duration-500 hidden sm:block">
              Sarojini at Door
            </span>
            <span className="transition-all duration-500 sm:hidden">
              Sarojini
            </span>
          </motion.div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex gap-8 lg:gap-10 items-center font-headline tracking-wide text-base lg:text-lg text-white drop-shadow-md">
            <NavLink href="#" onClick={handleHomeClick} isActive>Home</NavLink>
            <NavLink href="#">Women</NavLink>
            <NavLink href="#">Men</NavLink>
            <NavLink href="#">New Arrivals</NavLink>
            <NavLink href="#">Sale</NavLink>
          </div>

          {/* Action Icons */}
          <div className="flex gap-4 md:gap-8 items-center text-white drop-shadow-md">
            <motion.button 
              whileHover={{ scale: 1.2, y: -2 }} 
              whileTap={{ scale: 0.9 }} 
              className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300 outline-none hidden sm:block"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.2, y: -2, color: "#ff8888" }} 
              whileTap={{ scale: 0.9 }} 
              className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300 outline-none"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.2, y: -2 }} 
              whileTap={{ scale: 0.9 }} 
              className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300 outline-none"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <motion.span 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="absolute top-0 right-0 bg-white text-primary text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-lg z-20"
              >
                3
              </motion.span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col p-8 sm:p-12 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-xl font-bold text-white flex items-center gap-3 font-headline">
                <Flower2 className="w-7 h-7 fill-white" />
                <span>Sarojini</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close Mobile Menu"
              >
                <X className="w-8 h-8" />
              </motion.button>
            </div>

            <div className="flex flex-col gap-8 text-3xl font-headline text-white/90">
              <NavLink href="#" isActive onClick={handleHomeClick}>Home</NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Women</NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Men</NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Sale</NavLink>
            </div>

            <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-6">
              <a href="#" className="flex items-center gap-4 text-white/60 font-body text-sm uppercase tracking-widest">
                <Search className="w-5 h-5" />
                <span>Search Store</span>
              </a>
              <div className="flex gap-6 items-center">
                <p className="text-white/30 font-body text-[10px] uppercase tracking-widest">Est. 1950s — New Delhi</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
