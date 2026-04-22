import { Zap, RefreshCw, BadgeCheck, Gem } from "lucide-react";
import { motion } from "motion/react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function TrustBadges() {
  const badges = [
    { icon: Zap, title: "Express Shipping", desc: "Complimentary over ₹499", color: "text-primary" },
    { icon: RefreshCw, title: "Easy Returns", desc: "Seamless 7-day exchange", color: "text-secondary" },
    { icon: BadgeCheck, title: "Quality Assured", desc: "100% authenticated", color: "text-tertiary" },
    { icon: Gem, title: "VIP Concierge", desc: "Dedicated Whatsapp", color: "text-on-secondary-fixed-variant" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative bg-surface overflow-hidden border-y border-on-surface/5 py-6 md:py-8 z-40 lg:-mt-10 will-change-[opacity]"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className={`flex flex-col items-center justify-center text-center group cursor-default px-2 ${index % 2 !== 1 ? 'border-r border-on-surface/5' : ''} lg:border-r lg:last:border-none lg:border-on-surface/5 will-change-transform`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-on-surface/10 bg-surface group-hover:bg-on-surface flex items-center justify-center mb-2 shadow-sm transition-all duration-500 ease-out flex-shrink-0 will-change-transform">
                <badge.icon className={`w-5 h-5 md:w-6 md:h-6 ${badge.color} group-hover:text-surface transition-colors duration-500 stroke-[1.5]`} />
              </div>
              <h3 className="font-headline text-[12px] md:text-base font-bold text-on-surface/90 tracking-tight leading-tight mb-1">
                {badge.title}
              </h3>
              <p className="font-body text-[8px] md:text-[10px] text-on-surface/40 font-medium tracking-widest uppercase">
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
