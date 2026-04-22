/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { TrustBadges, Categories } from "./components/Sections";
import { TrendingNow, MasterpieceCollection, PromoBanner } from "./components/ProductSections";
import { CuratorStory, SocialSpotlight, Testimonials, Newsletter } from "./components/FooterSections";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, lazy, Suspense } from "react";

// Only lazy load the ProductPage and Footer (heavy assets)
const Footer = lazy(() => import("./components/FooterSections").then(module => ({ default: module.Footer })));
const ProductPage = lazy(() => import("./components/ProductPage"));

// Loading fallback
const SectionLoader = () => <div className="h-40 w-full flex items-center justify-center opacity-20">Loading...</div>;

export default function App() {
  const [view, setView] = useState<'home' | 'product'>('home');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
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
            <Suspense fallback={<div className="min-h-screen pt-20 text-center">Loading Product...</div>}>
              <ProductPage onBack={() => setView('home')} />
            </Suspense>
          </motion.main>
        )}
      </AnimatePresence>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* WhatsApp Floating Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-[1100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 cursor-pointer outline-none" 
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
