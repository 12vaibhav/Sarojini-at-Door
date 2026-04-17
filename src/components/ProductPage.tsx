import React, { useState, useRef, useEffect } from "react";
import { 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Heart, 
  ShoppingBag, 
  Truck, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Minus,
  Check,
  Maximize2,
  Play,
  Share2,
  ThumbsUp,
  MapPin,
  Clock,
  RefreshCw,
  ScrollText,
  Ruler,
  Sparkles,
  Package,
  Ticket,
  ShieldCheck,
  Zap,
  CreditCard
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const productData = {
  id: "citrus-breeze-set",
  name: "Citrus Breeze Cotton Set",
  brand: "The Bazaar Edit",
  category: "Women • Co-ord Sets",
  breadcrumb: ["Home", "Women", "Co-ord Sets", "Citrus Breeze Cotton Set"],
  rating: 4.7,
  reviewCount: 318,
  price: 1599,
  oldPrice: 2499,
  discount: "37% off",
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRePtHf2iHqFMpO_qGNsOyYm6gFp2tqio1yBVuKOmehvCD7MvN8x-eRIBD7IAZlkUhpIdYDookAjkk73cWqen4uwISUM45ffKdlIsTNAIYfn2HpLH98RrRenz2pDH0vU1JQjXkGltmogxd9GvRjhV9HW8pt_nOl594kbc06s-Yzqg4x9Qb_bgXUMbhTQcoODsa-hJZe_7SMyydnhVQ8PylwjrUQn_BTIc_T8n83uWfFfIjPF6kJncEXWIn3l3vvXDSdmw7ZbS8Og",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDzrEz16n5zAQ4Y3glwWJEiVPKWj1OiPcszsr5GFCPS_W5_y0V2k-Xci4aY1cu47bxcqU_4-MGyZzQKC6pjEBAZNaoTnDGXcupuwvo51AX5jIX1yZpFDNMd-0OU4sb1CyF0H_EkCBAgXSAvSgn2p1d71Y1JZg7j6eZCwlq0wgNX-u6-hZXdNuZlXvCusN5YAzzrKPRFx8QxXWlbwf9IGsBU86aF_EFTYh664sSGZ_4OKWQCg0DsdO8ey8RqiFg9hom4ri7-pzzKIOg",
    "https://picsum.photos/seed/fashion1/800/1200",
    "https://picsum.photos/seed/fashion2/800/1200",
    "https://picsum.photos/seed/fashion3/800/1200"
  ],
  video: "https://v.ftcdn.net/05/98/05/94/700_F_598059489_Q6oYfF8K7Y1OqQWzB5A9N5s9Y9q7Qv0T_ST.mp4", // Mock video
  badge: "Best Seller",
  sizes: [
    { label: "XS", stock: 10 },
    { label: "S", stock: 12 },
    { label: "M", stock: 3 },
    { label: "L", stock: 0 },
    { label: "XL", stock: 8 },
    { label: "XXL", stock: 5 }
  ],
  colors: [
    { name: "Citrus Green", hex: "#d4efdf" },
    { name: "Sunset Yellow", hex: "#fcf3cf" },
    { name: "Bazaar Blue", hex: "#d6eaf8" }
  ]
};

const suggestedStyles = [
    {
      name: "Vintage Floral Chiffon Maxi",
      price: "₹1,299",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzrEz16n5zAQ4Y3glwWJEiVPKWj1OiPcszsr5GFCPS_W5_y0V2k-Xci4aY1cu47bxcqU_4-MGyZzQKC6pjEBAZNaoTnDGXcupuwvo51AX5jIX1yZpFDNMd-0OU4sb1CyF0H_EkCBAgXSAvSgn2p1d71Y1JZg7j6eZCwlq0wgNX-u6-hZXdNuZlXvCusN5YAzzrKPRFx8QxXWlbwf9IGsBU86aF_EFTYh664sSGZ_4OKWQCg0DsdO8ey8RqiFg9hom4ri7-pzzKIOg"
    },
    {
      name: "Artisan Linen Shirt",
      price: "₹899",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD57PD55TU6XqpG7XiNzMb-B3ZTSgKGX4b0kNkRGRDWKPRUSIBz4ga9GZGqvOYslw3ki5H9xI_zb07naRU963MOHEnIxcwPMihexNy0sWVfWLkKdxCQ42mXyQvk6DXG2pJVLo2Y6WZnAWmP5EZKicLeztqJmM3FgwrLpzxSq0enPsyfDu8_FEv89CyFFHjbL-pGuH-KRWRAAl0iimV5O1E3RLgPYvd2Jkt57bxjjbOK_Fhzg2Lxm87JAYvQ1bvDm9R-zvAWSvkqITI"
    },
    {
        name: "Urban Canvas Sneakers",
        price: "₹999",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0xOBg_jKgmeNUYAhsMVV8wn9S2zc0RbycOnrEBet9kNSgfsvqsw10tlaL1fZMwrTC15o7YqeMihf6RKMBw4JC95L5R8OuvOsCzfVqQndoc3VH-T6WvXyadEw8MADqUxl3Qsb2KqRT-2OdZj-bTgJwv1VSyQiKHsLBzEKpVuw-yeZACXJMLMf_rTF1bf0l_sOCtxQhpimRtafDWNR7OISNiwSMioIS3sNH6MYJToYVWbuOfrDC_6wdTP2UqELr6QmMPL4deetDs_Y"
    }
];

const reviews = [
    {
        name: "Ananya Sharma",
        city: "Mumbai",
        date: "12 Oct 2023",
        rating: 5,
        text: "The fabric is incredibly soft and the fit is perfect. Definitely worth the price! The color is exactly as shown in the pictures.",
        helpful: 24,
        avatar: "https://picsum.photos/seed/avatar1/100/100"
    },
    {
        name: "Priya Patel",
        city: "Delhi",
        date: "05 Oct 2023",
        rating: 4,
        text: "Great co-ord set. I wore it for a brunch and got so many compliments. The only minor issue was the shipping took 2 days extra.",
        helpful: 12,
        avatar: "https://picsum.photos/seed/avatar2/100/100"
    },
    {
        name: "Ipsita Rao",
        city: "Bangalore",
        date: "28 Sep 2023",
        rating: 5,
        text: "Love the 'Bazaar' vibe and the modern cut. This is exactly what I was looking for. 10/10 recommend!",
        helpful: 8,
        avatar: "https://picsum.photos/seed/avatar3/100/100"
    }
];

export default function ProductPage({ onBack }: { onBack: () => void }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [pincode, setPincode] = useState("");
  const [deliveryEstimation, setDeliveryEstimation] = useState("");
  
  const ctaRef = useRef<HTMLDivElement>(null);
  const mainImageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const ctaPosition = ctaRef.current.getBoundingClientRect().bottom;
        setIsStickyVisible(ctaPosition < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThumbnailClick = (index: number, isVideo = false) => {
    setIsVideoActive(isVideo);
    if (!isVideo) {
      setSelectedImage(index);
    }
  };

  const handlePincodeCheck = () => {
    if (pincode.length === 6) {
      setDeliveryEstimation("Estimated Delivery by Sat, 20 Oct");
    } else {
      setDeliveryEstimation("Invalid Pincode");
    }
  };

  const selectedSizeInfo = productData.sizes.find(s => s.label === selectedSize);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-container/10 via-surface to-secondary-container/10 pt-16 lg:pt-24 overflow-x-hidden">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-1 py-4 lg:py-12 mb-12 lg:mb-32">
        {/* 2. Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Left - Image Gallery */}
          <div className="space-y-6 pt-10 md:pt-0">
            <div className="relative group" ref={mainImageContainerRef}>
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white shadow-2xl shadow-on-surface/10 relative border border-on-surface/5">
                <AnimatePresence mode="wait">
                  {isVideoActive ? (
                    <motion.div
                      key="video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full"
                    >
                      <video 
                        src={productData.video} 
                        className="w-full h-full object-cover" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full cursor-zoom-in"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={productData.images[selectedImage]} 
                        alt={productData.name} 
                        className="w-full h-full object-cover rounded-sm" 
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Badge Container */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  <span className={`px-4 py-1.5 rounded-full font-body text-[10px] uppercase tracking-widest text-white shadow-lg ${
                    productData.badge === "Best Seller" ? "bg-secondary" : 
                    productData.badge === "New Arrival" ? "bg-primary" : "bg-error"
                  }`}>
                    {productData.badge}
                  </span>
                </div>
              </div>

              {/* Mobile Swipe Hint */}
              <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest pointer-events-none">
                Swipe to explore
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
              {productData.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className={`relative flex-shrink-0 w-16 md:w-20 aspect-[3/4] rounded-sm overflow-hidden border-2 transition-all ${
                    !isVideoActive && selectedImage === idx ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
              <button 
                onClick={() => handleThumbnailClick(0, true)}
                className={`relative flex-shrink-0 w-16 md:w-20 aspect-[3/4] rounded-sm overflow-hidden border-2 transition-all group ${
                  isVideoActive ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={productData.images[0]} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Right - Product Info Panel */}
          <div className="flex flex-col space-y-6 min-w-0 w-full">
            <div className="space-y-6">
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-on-surface/70 font-medium leading-normal">
                {productData.brand}
              </span>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-6xl font-light text-primary tracking-tight leading-[1.2] italic">
                {productData.name}
              </h1>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2 bg-surface-container px-2.5 py-1 rounded-sm">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="font-body text-sm font-semibold leading-normal">{productData.rating}</span>
                </div>
                <a href="#reviews" className="font-body text-xs text-on-surface/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30 leading-normal">
                  · {productData.reviewCount} reviews
                </a>
              </div>

              <div className="flex items-center gap-4 md:gap-6 pt-2">
                <span className="font-headline text-3xl md:text-4xl font-normal text-primary tracking-tight leading-none">₹{productData.price}</span>
                <span className="font-body text-base md:text-lg text-on-surface/70 line-through tracking-wider leading-normal">₹{productData.oldPrice}</span>
                <span className="font-body text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold text-error bg-error/5 px-3 py-1.5 md:px-4 md:py-2 rounded-sm border border-error/10 leading-normal">
                  {productData.discount}
                </span>
              </div>
            </div>

            <div className="h-px bg-on-surface/5 w-full" />

            {/* Selectors */}
            <div className="space-y-6 text-on-surface">
              {/* Size Selector */}
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-surface-container/50 p-3 rounded-sm">
                  <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 leading-normal">Select Size</label>
                  <button className="font-body text-[10px] uppercase tracking-widest font-bold text-primary hover:underline leading-normal">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {productData.sizes.map((size) => (
                    <button
                      key={size.label}
                      disabled={size.stock === 0}
                      onClick={() => setSelectedSize(size.label)}
                      className={`relative w-10 h-10 flex items-center justify-center rounded-sm font-body text-[11px] transition-all border ${
                        selectedSize === size.label 
                          ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                          : size.stock === 0 
                            ? "bg-surface-container text-on-surface/20 border-on-surface/5 cursor-not-allowed" 
                            : "bg-white text-on-surface border-on-surface/10 hover:border-primary"
                      }`}
                    >
                      {size.label}
                      {size.stock === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-px bg-on-surface/20 rotate-45" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {selectedSizeInfo && selectedSizeInfo.stock > 0 && selectedSizeInfo.stock < 5 && (
                  <p className="font-body text-[10px] text-error flex items-center gap-2">
                    <span className="w-1 h-1 bg-error rounded-full animate-pulse" />
                    Hurry! Only {selectedSizeInfo.stock} items left in stock.
                  </p>
                )}
              </div>

              {/* Color Selector */}
              <div className="space-y-6">
                <div className="bg-surface-container/50 p-3 rounded-sm">
                  <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 italic leading-normal">Select Colour</label>
                  <span className="ml-4 font-body text-[10px] uppercase tracking-widest text-on-surface/50 leading-normal">{productData.colors[selectedColor].name}</span>
                </div>
                <div className="flex gap-6">
                  {productData.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(idx)}
                      className={`w-12 h-12 rounded-full border-2 transition-all p-1.5 ${
                        selectedColor === idx ? "border-primary scale-110 shadow-lg" : "border-transparent"
                      }`}
                    >
                      <div className="w-full h-full rounded-full border border-on-surface/5 shadow-inner" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-6">
                <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 leading-normal">Quantity</label>
                <div className="flex items-center border border-on-surface/10 rounded-sm w-36 h-12 overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 h-full hover:bg-surface-container transition-colors flex items-center justify-center group"
                  >
                    <Minus className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </button>
                  <div className="w-12 text-center font-body text-base font-semibold border-x border-on-surface/5 leading-[48px]">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 h-full hover:bg-surface-container transition-colors flex items-center justify-center group"
                  >
                    <Plus className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4" ref={ctaRef}>
                <motion.button 
                  whileHover={{ scale: 1.01, backgroundColor: "#5f4496" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 bg-primary text-white font-body text-xs md:text-sm uppercase tracking-[0.4em] font-semibold rounded-sm shadow-xl shadow-primary/20 flex items-center justify-center gap-4 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                  Add to Bag
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.01, borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 border-2 border-on-surface/10 font-body text-xs md:text-sm uppercase tracking-[0.4em] font-semibold rounded-sm flex items-center justify-center gap-4 transition-all"
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  Add to Wishlist
                </motion.button>
              </div>

              {/* Redesigned Featured Highlights & Offers */}
              <div className="space-y-4 md:space-y-6 pt-6 md:pt-8 border-t border-on-surface/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Shipping & Delivery */}
                  <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-sm bg-primary/5 border border-primary/10 group hover:bg-primary transition-colors duration-500">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Truck className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/70 group-hover:text-white/80 transition-colors leading-normal">Free Delivery</p>
                      <p className="font-body text-[8px] md:text-[9px] text-on-surface/60 group-hover:text-white/60 truncate transition-colors leading-normal">Orders above ₹499</p>
                    </div>
                  </div>

                  {/* WhatsApp Support */}
                  <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-sm bg-[#25D366]/5 border border-[#25D366]/20 group hover:bg-[#25D366] transition-colors duration-500 cursor-pointer">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform text-[#25D366]">
                      <FaWhatsapp size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#25D366]/70 group-hover:text-white/80 transition-colors leading-normal">Bazaar Support</p>
                      <p className="font-body text-[8px] md:text-[9px] text-on-surface/60 group-hover:text-white/60 truncate transition-colors leading-normal">Real-time chat</p>
                    </div>
                  </div>
                </div>

                {/* Promotional Offers Strip */}
                <div className="relative overflow-hidden py-3 px-4 md:py-4 md:px-6 bg-secondary/5 rounded-sm border border-secondary/10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Ticket className="w-4 h-4 text-secondary" />
                      <span className="font-body text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-secondary leading-normal">BAZAAR5</span>
                    </div>
                    <span className="font-headline text-[10px] md:text-xs italic font-light text-secondary leading-normal">Extra 5% discount</span>
                  </div>
                </div>

                {/* Financial Highlights */}
                <div className="flex divide-x divide-on-surface/10 py-1 md:py-2">
                  <div className="flex-1 flex items-center justify-center gap-3 md:gap-4 group cursor-default">
                    <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
                    <span className="font-body text-[9px] md:text-[10px] uppercase tracking-widest font-semibold text-on-surface/70 group-hover:text-secondary transition-colors italic leading-normal">10% Cashback</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-3 md:gap-4 group cursor-default">
                    <CreditCard className="w-3.5 h-3.5 text-primary" />
                    <span className="font-body text-[9px] md:text-[10px] uppercase tracking-widest font-semibold text-on-surface/70 group-hover:text-primary transition-colors italic leading-normal">No Cost EMI</span>
                  </div>
                </div>
              </div>

              {/* Pincode Checker */}
              <div className="space-y-6 pt-8">
                <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 leading-normal">Check Delivery</label>
                <div className="flex h-12">
                  <input 
                    type="text" 
                    placeholder="Enter pincode" 
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="flex-1 px-4 bg-white border border-on-surface/10 rounded-l-sm font-body text-sm outline-none focus:border-primary transition-colors leading-normal"
                  />
                  <button 
                    onClick={handlePincodeCheck}
                    className="px-8 bg-primary text-white font-body text-[10px] uppercase tracking-widest font-bold rounded-r-sm hover:bg-on-primary-fixed transition-colors"
                  >
                    Check
                  </button>
                </div>
                {deliveryEstimation && (
                  <p className={`font-body text-[10px] uppercase tracking-widest leading-normal ${deliveryEstimation.includes('Invalid') ? 'text-error' : 'text-primary'}`}>
                    {deliveryEstimation}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Product Details - High-End Editorial Grid */}
        <div className="mt-12 md:mt-24 relative group">
          <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 -z-10" />
          <div className="relative overflow-hidden bg-surface rounded-sm border border-primary/10 shadow-2xl shadow-primary/5">
            {/* Brand Color Aura / Mesh Gradient (Consistency with Homepage Trust Badges) */}
            <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-primary-fixed/60 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/70 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 border-t border-[1.5px] border-primary/20 bg-primary-container/5">
            {[
              { 
                title: "The Narrative", 
                subtitle: "Curated Description",
                icon: <ScrollText className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                number: "01",
                content: (
                    <div className="space-y-4">
                        <p className="italic font-light leading-relaxed text-sm border-l-2 border-primary/20 pl-6 text-on-surface/90">Infuse our quirky ‘bazaar energy’ into your daytime style with the Citrus Breeze Set. Hand-loomed cotton designed for modern sophistication.</p>
                        <ul className="grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60">
                            <li className="flex gap-3 items-center leading-normal"><div className="w-1.5 h-1.5 bg-secondary rounded-full" /> GOTS Cotton</li>
                            <li className="flex gap-3 items-center leading-normal"><div className="w-1.5 h-1.5 bg-secondary rounded-full" /> Hand-Loomed</li>
                        </ul>
                    </div>
                )
              },
              { 
                title: "The Fit", 
                subtitle: "Conceptual Sizing",
                icon: <Ruler className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                number: "02",
                content: (
                    <div className="space-y-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-[10px] font-body">
                                <thead>
                                    <tr className="border-b border-on-surface/5">
                                        <th className="py-2 text-left font-bold uppercase tracking-widest text-on-surface/60 leading-normal">Size</th>
                                        <th className="py-2 text-left font-bold uppercase tracking-widest text-on-surface/60 leading-normal">Bust</th>
                                        <th className="py-2 text-left font-bold uppercase tracking-widest text-on-surface/60 leading-normal">Waist</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-on-surface/5">
                                    {["XS", "S", "M", "L"].map((size, i) => (
                                        <tr key={size} className="group/row">
                                            <td className="py-2 font-bold text-primary transition-transform leading-normal">{size}</td>
                                            <td className="py-2 text-on-surface/80 leading-normal">{30 + i * 2}"</td>
                                            <td className="py-2 text-on-surface/80 leading-normal">{24 + i * 2}"</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-[9px] text-on-surface/70 uppercase tracking-widest font-bold italic bg-surface-container/30 px-3 py-1.5 rounded-sm inline-block leading-normal">Model 5'7", size M</p>
                    </div>
                )
              },
              { 
                title: "The Soul", 
                subtitle: "Material Heritage",
                icon: <Sparkles className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                number: "03",
                content: (
                    <div className="space-y-6">
                        <p className="text-xs lg:text-sm font-light leading-relaxed italic text-on-surface/70">"Hand-loomed cotton with a breathable artisan weave. Every thread tells a story of the person who wove it."</p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Hand Wash", icon: "🧼" },
                                { label: "Steam Only", icon: "💨" }
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-4 p-4 border border-on-surface/5 rounded-sm hover:border-primary/20 transition-colors">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-primary/80 leading-normal">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )
              },
              { 
                title: "The Journey", 
                subtitle: "Exhibition Logistics",
                icon: <Package className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                number: "04",
                content: (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2 group/journey">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 text-primary/40 group-hover/journey:text-primary transition-colors leading-normal"><Clock className="w-4 h-4" /> Timelines</h4>
                                <div className="h-px bg-on-surface/5 w-full" />
                                <p className="text-[11px] font-medium text-on-surface/60 uppercase tracking-widest italic leading-normal">Metros: 2-3 Days • India: 5-7 Days</p>
                            </div>
                            <div className="space-y-2 group/return">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 text-primary/40 group-hover/return:text-primary transition-colors leading-normal"><RefreshCw className="w-4 h-4" /> Returns</h4>
                                <div className="h-px bg-on-surface/5 w-full" />
                                <p className="text-[11px] font-medium text-on-surface/60 uppercase tracking-widest italic leading-normal">Free returns within 7 days</p>
                            </div>
                        </div>
                    </div>
                )
              },
              { 
                title: "The Privilege", 
                subtitle: "Exclusive Perks",
                icon: <Ticket className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                number: "05",
                content: (
                    <div className="space-y-4">
                        {[
                            { code: "BAZAAR_ELITE", desc: "First-time 20% off" },
                            { code: "HERITAGE_15", desc: "15% off over ₹2999" }
                        ].map(offer => (
                            <div key={offer.code} className="flex items-center justify-between p-4 bg-surface-container/20 border border-on-surface/5 rounded-sm group/offer hover:shadow-lg transition-all duration-500">
                                <div className="space-y-0.5">
                                    <p className="text-[11px] font-bold text-primary tracking-[0.3em] uppercase leading-normal">{offer.code}</p>
                                    <p className="text-[9px] text-on-surface/30 uppercase tracking-widest italic leading-normal">{offer.desc}</p>
                                </div>
                                <button className="px-5 py-2.5 border border-primary/20 text-primary font-body text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-primary hover:text-white transition-all outline-none">Copy</button>
                            </div>
                        ))}
                    </div>
                )
              },
              { 
                title: "The Heritage", 
                subtitle: "Artisan Verification",
                icon: <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                number: "06",
                content: (
                    <div className="space-y-6">
                        <div className="flex flex-col gap-4">
                            <span className="text-2xl italic font-headline text-primary/20 leading-tight">"Sarojini at Door"</span>
                            <p className="text-sm font-light leading-relaxed text-on-surface/80 border-l-2 border-secondary/20 pl-6">Directly supports local weavers in our expansive Bazaar network. Hand-picked and authenticated.</p>
                        </div>
                        <div className="pt-2 flex items-center gap-4">
                             <div className="h-[1px] bg-primary/20 flex-1" />
                             <span className="px-4 py-1.5 border border-secondary text-secondary text-[9px] font-bold uppercase tracking-[0.3em] rounded-sm italic leading-normal">Authentic Bazaar Goods</span>
                             <div className="h-[1px] bg-primary/20 flex-1" />
                        </div>
                    </div>
                )
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden border-b-[1px] border-on-surface/5 p-5 lg:p-8 transition-all duration-700 hover:bg-white cursor-pointer ${
                  idx % 2 === 0 ? "md:border-r-[1px]" : ""
                } ${activeAccordion === idx ? "bg-gradient-to-br from-primary-container/40 via-surface to-primary/5 shadow-inner" : "bg-transparent"}`}
                onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
              >
                {/* Decorative Background Number */}
                <div className="absolute -bottom-4 -right-4 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                   <span className="text-outline text-[100px] font-headline font-black italic select-none leading-none">
                     {item.number}
                   </span>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="space-y-1">
                       <span className="font-body text-[9px] uppercase tracking-[0.4em] font-bold text-primary/40 group-hover:text-primary transition-colors duration-500 leading-normal">
                        {item.subtitle}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-primary/60 group-hover:text-primary transition-colors duration-500">
                          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6 lg:w-7 lg:h-7' })}
                        </span>
                        <h3 className={`font-headline text-xl lg:text-2xl italic tracking-tight transition-all duration-700 leading-[1.2] ${activeAccordion === idx ? 'text-primary translate-x-2' : 'text-on-surface group-hover:translate-x-1'}`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-full border border-on-surface/10 flex items-center justify-center transition-all duration-700 ${activeAccordion === idx ? 'bg-primary border-primary text-white scale-110' : 'text-on-surface/20 group-hover:text-primary group-hover:border-primary group-hover:scale-105'}`}>
                      <Plus className={`w-5 h-5 transition-transform duration-700 ${activeAccordion === idx ? 'rotate-45' : ''}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeAccordion === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-4 border-t border-on-surface/5">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* 4. Outfit Styling / Complete the Look */}
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-12">
            <div className="flex justify-between items-end border-b border-on-surface/5 pb-6 md:pb-8">
                <h3 className="font-headline text-2xl md:text-4xl italic font-light text-primary leading-tight">Style <i className="text-secondary">it with</i></h3>
                <button className="font-body text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-primary hover:underline underline-offset-8 leading-normal">Add all</button>
            </div>
            
            <div className="flex gap-4 md:gap-10 overflow-x-auto hide-scrollbar pb-6 -mx-4 px-4 md:mx-0 md:px-0">
                {suggestedStyles.map((item, idx) => (
                    <div key={idx} className="flex-shrink-0 w-64 md:w-72 group">
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-white mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                             <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                             <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-on-surface/5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 shadow-xl outline-none">
                                <Plus className="w-6 h-6 text-on-surface font-light" />
                             </button>
                        </div>
                        <h4 className="font-headline text-xl font-light italic leading-tight">{item.name}</h4>
                        <p className="font-body text-sm font-light mt-2 text-on-surface/60 leading-normal">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 5. Size Recommendation Widget */}
        <div className="mt-12 md:mt-24 p-8 md:p-16 bg-[#e8d5ff] rounded-sm relative overflow-hidden group">
            {/* Artistic Decorations */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 md:justify-between text-center md:text-left">
                <div className="space-y-4 md:space-y-6 max-w-md">
                    <h3 className="font-headline text-2xl md:text-5xl font-light text-primary italic leading-tight">Not sure about <i className="text-secondary">your size?</i></h3>
                    <p className="font-body text-[10px] md:text-base font-light text-primary/70 leading-relaxed uppercase tracking-widest">Our Bazaar concierge will find the perfect fit.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <button className="px-8 py-4 md:px-10 md:py-5 bg-primary text-white font-body text-[9px] md:text-[10px] uppercase font-bold tracking-widest rounded-full shadow-xl shadow-primary/30 hover:scale-105 transition-transform outline-none">Find My Size</button>
                    <button className="px-8 py-4 md:px-10 md:py-5 border border-primary text-primary font-body text-[9px] md:text-[10px] uppercase font-bold tracking-widest rounded-full hover:bg-primary/5 transition-colors outline-none">Size Chart</button>
                </div>
            </div>
        </div>

        {/* 6. Customer Reviews Section */}
        <div id="reviews" className="mt-12 md:mt-16 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-16 items-start">
                {/* Visual Rating Summary */}
                <div className="lg:col-span-4 space-y-4 md:space-y-8 sticky top-24 pr-0 md:pr-10">
                    <div className="space-y-2 md:space-y-4">
                         <div className="flex items-baseline gap-4 md:gap-8 mb-1 md:mb-2">
                             <span className="font-headline text-5xl md:text-8xl font-light italic text-primary leading-none">4.7</span>
                             <span className="font-body text-lg md:text-2xl font-light text-on-surface/40 leading-none">/ 5.0</span>
                         </div>
                         <div className="flex gap-1 md:gap-3 mb-1 md:mb-2">
                             {[1,2,3,4,5].map(i => <Star key={i} className={`w-5 h-5 md:w-8 md:h-8 ${i <= 4 ? "fill-secondary text-secondary" : "fill-surface-variant text-surface-variant"}`} />)}
                         </div>
                         <p className="font-body text-[9px] md:text-[10px] text-on-surface/40 uppercase tracking-[0.3em] leading-relaxed">Based on 318 Bazaar reviews</p>
                    </div>

                    <div className="space-y-3 md:space-y-6">
                        {[
                            { stars: 5, perc: 82 },
                            { stars: 4, perc: 12 },
                            { stars: 3, perc: 4 },
                            { stars: 2, perc: 1 },
                            { stars: 1, perc: 1 }
                        ].map(bar => (
                            <div key={bar.stars} className="flex items-center gap-4 md:gap-6 group">
                                <div className="flex items-center gap-1.5 w-10 md:w-12">
                                    <span className="font-body text-xs md:text-sm font-bold leading-none">{bar.stars}</span>
                                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-on-surface/20 text-on-surface/20" />
                                </div>
                                <div className="flex-1 h-2 md:h-4 bg-white border border-on-surface/5 rounded-full overflow-hidden shadow-inner">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${bar.perc}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full bg-primary" 
                                    />
                                </div>
                                <span className="font-body text-[11px] text-on-surface/40 w-10 text-right font-medium">{bar.perc}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-8 space-y-4 md:space-y-8">
                     <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-1 md:pb-8 sticky top-0 bg-surface/80 backdrop-blur-md z-10 py-1 md:py-6 -mt-1 md:-mt-6 -mx-4 px-4 md:mx-0 md:px-0">
                         {["All", "With photos", "Verified only", "5★", "4★"].map(filter => (
                             <button key={filter} className={`flex-shrink-0 px-8 py-3 rounded-full font-body text-[11px] font-bold tracking-widest uppercase transition-all whitespace-nowrap outline-none ${
                                filter === "All" ? "bg-primary text-white shadow-lg" : "bg-white border border-on-surface/5 text-on-surface/60 hover:border-primary/40"
                             }`}>
                                 {filter}
                             </button>
                         ))}
                     </div>

                     <div className="space-y-8 md:space-y-10">
                         {reviews.map((row, i) => (
                             <motion.div 
                                key={i}
                                variants={fadeUpVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-3 md:space-y-4 pb-8 md:pb-10 border-b border-on-surface/5 last:border-0"
                             >
                                 <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0">
                                     <div className="flex items-center gap-4 md:gap-6">
                                         <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden border border-on-surface/10 bg-white shrink-0">
                                             <img src={row.avatar} className="w-full h-full object-cover" />
                                         </div>
                                         <div className="space-y-1 md:space-y-2">
                                             <h4 className="font-headline text-lg md:text-xl font-bold italic leading-none">{row.name}</h4>
                                             <p className="font-body text-[8px] md:text-[10px] text-on-surface/70 uppercase tracking-widest leading-normal">{row.city} · {row.date}</p>
                                         </div>
                                     </div>
                                     <div className="flex gap-1 md:gap-1.5 sm:mt-0">
                                         {[1,2,3,4,5].map(it => <Star key={it} className={`w-3.5 h-3.5 md:w-4 md:h-4 ${it <= row.rating ? "fill-secondary text-secondary" : "fill-surface-variant text-surface-variant"}`} />)}
                                     </div>
                                 </div>
                                 
                                 <p className="font-body text-sm md:text-base lg:text-lg text-on-surface/90 leading-relaxed font-light italic">"{row.text}"</p>
                                 
                                 {i === 0 && (
                                     <div className="flex gap-3 md:gap-6">
                                         <div className="w-24 md:w-40 aspect-[3/4] rounded-sm overflow-hidden border border-on-surface/5 bg-white shadow-md">
                                             <img src="https://picsum.photos/seed/outfit1/400/600" className="w-full h-full object-cover" />
                                         </div>
                                         <div className="w-24 md:w-40 aspect-[3/4] rounded-sm overflow-hidden border border-on-surface/5 bg-white shadow-md">
                                             <img src="https://picsum.photos/seed/outfit2/400/600" className="w-full h-full object-cover" />
                                         </div>
                                     </div>
                                 )}

                                 <div className="flex items-center gap-6 md:gap-8 pt-2 md:pt-4">
                                     <button className="flex items-center gap-2 text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-on-surface/70 hover:text-primary transition-colors outline-none">
                                         <ThumbsUp size={14} className="md:size-4" /> Helpful? <span className="text-on-surface/90">{row.helpful}</span>
                                     </button>
                                     <button className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-on-surface/70 hover:text-primary transition-colors outline-none">Report</button>
                                 </div>
                             </motion.div>
                         ))}
                     </div>
                     
                     <div className="flex justify-center">
                         <button className="px-10 py-4 bg-white border border-on-surface/10 text-on-surface font-body text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-surface-container transition-all outline-none">Load More Reviews</button>
                     </div>
                </div>
            </div>
        </div>

        {/* 7. Recently Viewed */}
        <div className="mt-8 space-y-12">
            <h3 className="font-headline text-3xl font-light italic text-on-surface/70 tracking-widest uppercase leading-tight">You <i className="text-secondary/70">recently viewed</i></h3>
            <div className="flex gap-6 lg:gap-10 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0">
                {productData.images.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="flex-shrink-0 w-64 md:w-72 group cursor-pointer">
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-white mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                             <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                        </div>
                        <h4 className="font-headline text-xl font-light italic leading-tight text-on-surface/80">Similar Items</h4>
                    </div>
                ))}
            </div>
        </div>

        {/* 8. You May Also Like */}
        <div className="mt-12 md:mt-24 space-y-12 md:space-y-16">
            <div className="flex justify-between items-end border-b border-on-surface/5 pb-6 md:pb-8">
                <h3 className="font-headline text-2xl md:text-5xl font-light text-primary leading-tight">You may <i className="text-secondary">also like</i></h3>
                <a href="#" className="font-body text-[9px] md:text-[11px] uppercase font-bold tracking-[0.3em] text-primary group flex items-center gap-3 md:gap-4 leading-normal">
                    View All
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}><ChevronRight className="w-4 h-4 md:w-5 md:h-5" /></motion.div>
                </a>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
                {productData.images.slice(0, 4).map((img, idx) => (
                   <div key={idx} className="space-y-6 group cursor-pointer">
                       <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white relative shadow-sm group-hover:shadow-2xl transition-all duration-700">
                           <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                           <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-on-surface/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl outline-none">
                               <ShoppingBag size={20} className="text-on-surface" />
                           </button>
                       </div>
                       <div className="space-y-2">
                           <h4 className="font-headline text-xl font-light italic leading-tight">Similar Piece {idx + 1}</h4>
                           <p className="font-body text-sm font-light text-on-surface/60 leading-normal">₹1,299</p>
                       </div>
                   </div> 
                ))}
            </div>
        </div>
      </div>

      {/* 9. Sticky Add-to-Bag Bar */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-on-surface/5 px-1 md:px-6 lg:px-12 py-5 lg:py-6 flex items-center justify-between gap-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-8">
              <div className="hidden sm:block w-16 h-20 rounded-sm overflow-hidden bg-white border border-on-surface/5 shadow-sm">
                <img src={productData.images[0]} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h4 className="font-headline text-sm md:text-base lg:text-2xl italic truncate leading-tight">{productData.name}</h4>
                <div className="flex items-center gap-3 mt-1 md:mt-2">
                  <span className="font-body text-[9px] md:text-[11px] text-on-surface/60 uppercase tracking-widest leading-normal">{selectedSize || 'Size'}</span>
                  <div className="w-1 h-1 rounded-full bg-on-surface/10" />
                  <span className="font-body text-[9px] md:text-[11px] text-on-surface/60 uppercase tracking-widest leading-normal">{productData.colors[selectedColor].name}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex flex-col items-end">
                <span className="font-headline text-2xl md:text-4xl font-normal text-primary leading-none">₹{productData.price}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 md:px-16 h-12 md:h-16 bg-primary text-white font-body text-[9px] md:text-xs uppercase tracking-[0.4em] font-bold rounded-sm shadow-2xl shadow-primary/30 leading-none outline-none"
              >
                Add to Bag
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
