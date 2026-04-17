import { motion } from "motion/react";

export default function AnnouncementBar() {
  const notices = [
    "FESTIVE SALE: UP TO 50% OFF ARCHIVES",
    "FREE EXPRESS SHIPPING ON ORDERS OVER ₹499",
    "NEW DROP: THE SUMMER CO-ORD COLLECTION IS LIVE",
    "JOIN THE VIP WHATSAPP FOR EARLY ACCESS"
  ];

  /* Repeating the notices to ensure seamless infinite scroll */
  const repeatedNotices = [...notices, ...notices, ...notices, ...notices];

  return (
    <div className="bg-on-surface text-surface py-2 overflow-hidden flex items-center relative z-[60] w-full h-10 drop-shadow-md">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
      >
        <div className="flex items-center">
          {repeatedNotices.map((text, i) => (
            <div key={`a-${i}`} className="flex items-center">
              <span className="font-body text-[8px] md:text-[9px] font-medium tracking-[0.25em] uppercase px-6 lg:px-10">
                {text}
              </span>
              <div className="w-1 h-1 rounded-full bg-surface/30" />
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {repeatedNotices.map((text, i) => (
            <div key={`b-${i}`} className="flex items-center">
              <span className="font-body text-[8px] md:text-[9px] font-medium tracking-[0.25em] uppercase px-6 lg:px-10">
                {text}
              </span>
              <div className="w-1 h-1 rounded-full bg-surface/30" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
