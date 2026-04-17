/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { TrustBadges, Categories } from "./components/Sections";
import { TrendingNow, MasterpieceCollection, PromoBanner } from "./components/ProductSections";
import { CuratorStory, SocialSpotlight, Testimonials, Newsletter, Footer } from "./components/FooterSections";
import ProductPage from "./components/ProductPage";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const [view, setView] = useState<'home' | 'product'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <Navbar onHomeClick={() => setView('home')} view={view} />
      
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <TrustBadges />
            <Categories />
            <TrendingNow onProductClick={() => setView('product')} />
            <MasterpieceCollection onProductClick={() => setView('product')} />
            <PromoBanner />
            <CuratorStory />
            <SocialSpotlight />
            <Testimonials />
            <Newsletter />
          </motion.main>
        ) : (
          <motion.main
            key="product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductPage onBack={() => setView('home')} />
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 cursor-pointer outline-none" 
        href="#"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-white flex items-center justify-center w-9 h-9">
          <FaWhatsapp size={36} />
        </span>
      </motion.a>
    </div>
  );
}
