import { Star } from "lucide-react";
import { motion } from "motion/react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

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

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section 
      className="pt-[134px] md:pt-[120px] lg:pt-[136px] pb-8 md:pb-8 lg:py-8 relative overflow-hidden mt-[-100px] z-[60] bg-transparent"
    >
      <div className="absolute inset-0 z-0 desktop-blend-top">
        <img 
          src="/homepage/third_section.webp" 
          alt="" 
          className="w-full h-full object-cover transition-opacity duration-1000" 
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          style={{ opacity: 0 }}
        />
      </div>

      <div className="relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center mb-6 md:mb-8 lg:mb-8 text-center max-w-7xl mx-auto px-6"
        >
          <span className="font-body text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase text-secondary opacity-60 mb-3 md:mb-4 lg:mb-4 leading-relaxed">Voice of the Collective</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-inverse-surface leading-snug">Patron <i className="text-secondary">Chronicles</i></h2>
        </motion.div>
        
        <div className="relative">
          <div className="absolute top-0 bottom-6 left-0 w-12 md:w-24 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-6 right-0 w-12 md:w-24 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none"></div>

          <motion.div 
            className="flex gap-4 w-max transition-[filter] duration-700 pb-6 cursor-grab active:cursor-grabbing"
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
                className="relative bg-[#fcf9f2] py-4 px-6 md:p-6 shadow-2xl transition-all duration-700 overflow-hidden group w-[260px] h-[325px] md:w-[335px] md:h-auto shrink-0 border-[0.5px] border-[#d4af37]/40 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
                
                <div className="absolute top-2 left-2 w-8 h-8 md:w-10 md:h-10 border-t-[1.5px] border-l-[1.5px] border-[#d4af37]/50 rounded-tl-[2px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-t-[0.5px] before:border-l-[0.5px] before:border-[#d4af37]/30 before:-m-[3px]">
                   <div className="absolute top-0 left-0 w-2 h-2 bg-[#d4af37] rounded-full -translate-x-1/2 -translate-y-1/2 scale-50" />
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 md:w-10 md:h-10 border-t-[1.5px] border-r-[1.5px] border-[#d4af37]/50 rounded-tr-[2px]">
                   <div className="absolute top-0 right-0 w-2 h-2 bg-[#d4af37] rounded-full translate-x-1/2 -translate-y-1/2 scale-50" />
                </div>
                <div className="absolute bottom-2 left-2 w-8 h-8 md:w-10 md:h-10 border-b-[1.5px] border-l-[1.5px] border-[#d4af37]/50 rounded-bl-[2px]">
                   <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#d4af37] rounded-full -translate-x-1/2 translate-y-1/2 scale-50" />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 md:w-10 md:h-10 border-b-[1.5px] border-r-[1.5px] border-[#d4af37]/50 rounded-br-[2px]">
                   <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#d4af37] rounded-full translate-x-1/2 translate-y-1/2 scale-50" />
                </div>

                <div className="relative z-10 flex flex-col items-center w-full h-full">
                  <div className="mb-1 md:mb-4 relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#b8860b] rounded-full shadow-lg border border-white/20 flex items-center justify-center relative z-20">
                      <Star className="w-6 h-6 text-[#5c4a1e] fill-[#5c4a1e]/10 stroke-[1.5]" />
                    </div>
                    <div className="absolute inset-0 bg-[#d4af37]/20 blur-xl rounded-full scale-150 -z-10 animate-pulse" />
                  </div>

                  <div className="flex-1 flex flex-col justify-center mb-2 md:mb-4">
                    <div className="text-[#d4af37]/40 text-xl md:text-2xl font-headline leading-none mb-0 md:mb-1">“</div>
                    <p className="font-headline font-light italic leading-relaxed text-[#4a4030] text-sm md:text-base lg:text-lg px-2 md:px-4">
                      {review.text}
                    </p>
                    <div className="text-[#d4af37]/40 text-xl md:text-2xl font-headline leading-none mt-0 md:mt-1 rotate-180">“</div>
                  </div>
                  
                  <div className="w-full mt-auto">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-2 md:mb-4" />
                    
                    <div className="flex items-center gap-3 md:flex-col md:items-center md:space-y-2 text-left md:text-center">
                      <div className="w-10 h-10 rounded-full border-[1.5px] border-[#d4af37]/60 p-0.5 bg-white shadow-inner flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full rounded-full bg-[#fdfaf5] flex items-center justify-center font-headline italic text-base text-[#b8860b]">
                          {review.initial}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start md:items-center">
                        <h4 className="font-body font-semibold text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#5c4a1e] mb-0.5">{review.name}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="w-2 h-2 text-[#d4af37] fill-[#d4af37]" />
                          ))}
                          <span className="font-body text-[7px] text-[#b8860b] tracking-widest uppercase ml-1">Verified Patron</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-2 md:inset-4 border-[0.5px] border-[#d4af37]/20 pointer-events-none z-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
