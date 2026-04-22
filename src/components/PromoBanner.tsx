import { motion } from "motion/react";

export function PromoBanner() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full relative overflow-hidden bg-surface will-change-opacity"
    >
      <picture className="w-full">
        <source media="(min-width: 768px)" srcSet="/homepage/second_banner.webp" />
        <img
          src="/homepage/mobile_banner.webp"
          alt="Promo Banner"
          className="w-full h-auto object-cover transition-opacity duration-700"
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          style={{ opacity: 0 }}
          loading="lazy"
        />
      </picture>
    </motion.section>
  );
}
