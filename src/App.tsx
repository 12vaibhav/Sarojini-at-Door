/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { TrustBadges, Categories } from "./components/Sections";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, lazy, Suspense } from "react";

// Lazy load heavy components
const TrendingNow = lazy(() => import("./components/ProductSections").then(module => ({ default: module.TrendingNow })));
const MasterpieceCollection = lazy(() => import("./components/ProductSections").then(module => ({ default: module.MasterpieceCollection })));
const PromoBanner = lazy(() => import("./components/ProductSections").then(module => ({ default: module.PromoBanner })));

const CuratorStory = lazy(() => import("./components/CuratorStory").then(module => ({ default: module.CuratorStory })));
const SocialSpotlight = lazy(() => import("./components/SocialSpotlight").then(module => ({ default: module.SocialSpotlight })));
const Testimonials = lazy(() => import("./components/Testimonials").then(module => ({ default: module.Testimonials })));
const Newsletter = lazy(() => import("./components/FooterSections").then(module => ({ default: module.Newsletter })));
const Footer = lazy(() => import("./components/FooterSections").then(module => ({ default: module.Footer })));

const ProductPage = lazy(() => import("./components/ProductPage"));

// Premium Skeleton Loaders for specialized sections
const SectionSkeleton = () => (
  <div className="w-full py-20 md:py-24 animate-pulse px-6 md:px-12 max-w-7xl mx-auto">
    <div className="h-4 w-32 bg-on-surface/5 mb-6" />
    <div className="h-12 w-full md:w-2/3 bg-on-surface/5 mb-8" />
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 h-[400px]">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-on-surface/5 rounded-sm h-full w-full hidden md:block" />
      ))}
      <div className="bg-on-surface/5 rounded-sm h-full w-full col-span-2 md:hidden" />
    </div>
  </div>
);

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
            
            <Suspense fallback={<SectionSkeleton />}>
              <TrendingNow onProductClick={() => setView('product')} />
            </Suspense>
            
            <Suspense fallback={<SectionSkeleton />}>
              <MasterpieceCollection onProductClick={() => setView('product')} />
            </Suspense>
            
            <Suspense fallback={<SectionSkeleton />}>
              <PromoBanner />
            </Suspense>
            
            <Suspense fallback={<SectionSkeleton />}>
              <CuratorStory />
            </Suspense>
            
            <Suspense fallback={<SectionSkeleton />}>
              <SocialSpotlight />
            </Suspense>
            
            <Suspense fallback={<SectionSkeleton />}>
              <Testimonials />
            </Suspense>
            
            <Suspense fallback={<SectionSkeleton />}>
              <Newsletter />
            </Suspense>
          </motion.main>
        ) : (
          <motion.main
            key="product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<SectionSkeleton />}>
              <ProductPage onBack={() => setView('home')} />
            </Suspense>
          </motion.main>
        )}
      </AnimatePresence>

      <Suspense fallback={<div className="h-20 bg-black" />}>
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
