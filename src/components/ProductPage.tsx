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
  id: "georgette-anarkali-set",
  name: "Coral Handwork Georgette Anarkali Set",
  brand: "The Bazaar Edit",
  category: "Women • Ethnic Wear",
  breadcrumb: ["Home", "Women", "Ethnic Wear", "Coral Handwork Georgette Anarkali Set"],
  rating: 4.7,
  reviewCount: 318,
  price: 1599,
  oldPrice: 2499,
  discount: "37% off",
  images: [
    "/Product%20Images/Product%20Gallery/P1.webp",
    "/Product%20Images/Product%20Gallery/P2.webp",
    "/Product%20Images/Product%20Gallery/P3.webp",
    "/Product%20Images/Product%20Gallery/P4.webp",
    "/Product%20Images/Product%20Gallery/P5.webp"
  ],
  video: "/Product%20Images/Product%20Gallery/Video.mp4",
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
    { name: "Vibrant Lime", hex: "#32CD32" },
    { name: "Royal Gold", hex: "#FFD700" },
    { name: "Electric Indigo", hex: "#4F46E5" },
    { name: "Neon Magenta", hex: "#FF00FF" },
    { name: "Sunset Orange", hex: "#FF4500" },
    { name: "Emerald Glaze", hex: "#00A36C" },
    { name: "Electric Cyan", hex: "#00FFFF" }
  ]
};

const suggestedStyles = [
  {
    name: "Modern Floral Skirt Women",
    price: "₹1,299",
    image: "/Product%20Images/Trending%20Now/Modern%20Floral%20Skirt%20Women.webp"
  },
  {
    name: "Modern Fit Dress",
    price: "₹899",
    image: "/Product%20Images/Trending%20Now/Modern%20Fit%20Dress.webp"
  },
  {
    name: "Gorgeous Premium Saree",
    price: "₹999",
    image: "/Product%20Images/Trending%20Now/Gorgeous%20Premium%20Saree.webp"
  },
  {
    name: "Cute Tshirt Women",
    price: "₹349",
    image: "/Product%20Images/Trending%20Now/Cute%20Tshirt%20Women.webp"
  },
  {
    name: "Blue Denim Shirt Men",
    price: "₹199",
    image: "/Product%20Images/Trending%20Now/Blue%20Denim%20Shirt%20Men.webp"
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
    avatar: "https://picsum.photos/seed/avatar1/100/100",
    images: ["/Product%20Images/Trending%20Now/Modern%20Floral%20Skirt%20Women.webp", "/Product%20Images/Trending%20Now/Modern%20Fit%20Dress.webp"]
  },
  {
    name: "Priya Patel",
    city: "Delhi",
    date: "05 Oct 2023",
    rating: 4,
    text: "Great co-ord set. I wore it for a brunch and got so many compliments. The only minor issue was the shipping took 2 days extra.",
    helpful: 12,
    avatar: "https://picsum.photos/seed/avatar2/100/100",
    images: ["/Product%20Images/Trending%20Now/Cute%20Tshirt%20Women.webp"]
  },
  {
    name: "Ipsita Rao",
    city: "Bangalore",
    date: "28 Sep 2023",
    rating: 5,
    text: "Love the 'Bazaar' vibe and the modern cut. This is exactly what I was looking for. 10/10 recommend!",
    helpful: 8,
    avatar: "https://picsum.photos/seed/avatar3/100/100",
    images: ["/Product%20Images/Trending%20Now/Gorgeous%20Premium%20Saree.webp", "/Product%20Images/Trending%20Now/Blue%20Denim%20Shirt%20Men.webp"]
  }
];
const recentlyViewedProducts = [
  { name: "Beautiful Premium Pink Saree", price: "₹1,899", image: "/Product%20Images/Masterpiece%20Collection/Beautiful%20Premium%20Pink%20Saree.webp" },
  { name: "Goegeous Floral Skirt", price: "₹2,499", image: "/Product%20Images/Masterpiece%20Collection/Goegeous%20Floral%20Skirt.webp" },
  { name: "Modern Shirt top Women", price: "₹3,999", image: "/Product%20Images/Masterpiece%20Collection/Modern%20Shirt%20top%20Women.webp" },
  { name: "Multicolor Printed A Line Dress", price: "₹1,599", image: "/Product%20Images/Masterpiece%20Collection/Multicolor%20Printed%20A%20Line%20Dress.webp" }
];

const recommendedProducts = [
  { name: "Women's Midi Fit Flare Dresse", price: "₹1,499", image: "/Product%20Images/Masterpiece%20Collection/Women's%20Midi%20Fit%20Flare%20Dresse.webp" },
  { name: "White Printed Bodycon Dress", price: "₹2,899", image: "/Product%20Images/Masterpiece%20Collection/White%20Printed%20Bodycon%20Dress.webp" },
  { name: "Short Kurta Men", price: "₹5,499", image: "/Product%20Images/Masterpiece%20Collection/Short%20Kurta%20Men.webp" },
  { name: "Plain Fitted Gray Shirt", price: "₹4,299", image: "/Product%20Images/Masterpiece%20Collection/Plain%20Fitted%20Gray%20Shirt.webp" }
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

  const stylingScrollRef = useRef<HTMLDivElement>(null);

  const scrollStyling = (direction: 'left' | 'right') => {
    if (stylingScrollRef.current) {
      const { scrollLeft, clientWidth } = stylingScrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      stylingScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const ctaRef = useRef<HTMLDivElement>(null);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const { scrollLeft, clientWidth } = reviewsScrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      reviewsScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  const mainImageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger as soon as the page is scrolled slightly
      setIsStickyVisible(window.scrollY > 100);
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
    <div className="min-h-screen bg-background relative overflow-hidden pt-16 lg:pt-24">
      {/* Dynamic Mesh Gradient Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right - Lavender/Primary */}
        <div className="absolute top-[-10%] right-[-10%] w-[70%] md:w-[50%] aspect-square bg-primary-fixed/50 rounded-full blur-[80px] md:blur-[180px] animate-pulse" />

        {/* Middle Left - Peach/Secondary */}
        <div className="absolute top-[20%] left-[-20%] w-[80%] md:w-[45%] aspect-square bg-secondary-fixed/60 rounded-full blur-[80px] md:blur-[180px]"
          style={{ animation: 'float 20s infinite alternate' }} />

        {/* Bottom Right - Pink/Tertiary */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] md:w-[40%] aspect-square bg-tertiary-fixed/40 rounded-full blur-[80px] md:blur-[180px]" />

        {/* Center-ish - Soft Surface Tint */}
        <div className="absolute top-[60%] left-[10%] w-[50%] md:w-[35%] aspect-square bg-primary/30 rounded-full blur-[80px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8 lg:px-1 py-4 lg:py-12 mb-4 lg:mb-10">
        {/* 2. Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

          {/* Left - Image Gallery */}
          <div className="space-y-3 md:space-y-6 pt-[43px] md:pt-0">
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
                  <span className={`px-4 py-1.5 rounded-full font-body text-[10px] uppercase tracking-widest text-white shadow-lg ${productData.badge === "Best Seller" ? "bg-secondary" :
                    productData.badge === "New Arrival" ? "bg-secondary" : "bg-error"
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
                  className={`relative flex-shrink-0 w-16 md:w-20 aspect-[3/4] rounded-sm overflow-hidden border-2 transition-all ${!isVideoActive && selectedImage === idx ? "border-secondary" : "border-transparent"
                    }`}
                >
                  <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
              <button
                onClick={() => handleThumbnailClick(0, true)}
                className={`relative flex-shrink-0 w-16 md:w-20 aspect-[3/4] rounded-sm overflow-hidden border-2 transition-all group ${isVideoActive ? "border-secondary" : "border-transparent"
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
          <div className="flex flex-col space-y-4 md:space-y-6 min-w-0 w-full">
            <div className="space-y-2 md:space-y-4">
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-on-surface/70 font-medium leading-normal">
                {productData.brand}
              </span>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-6xl font-light text-inverse-surface tracking-tight leading-[1.1] italic">
                {productData.name}
              </h1>

              <div className="flex items-center gap-3 md:gap-6 pt-0.5 md:pt-1">
                <div className="flex items-center gap-2 bg-surface-container px-2.5 py-1 rounded-sm">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="font-body text-sm font-semibold leading-normal">{productData.rating}</span>
                </div>
                <a href="#reviews" className="font-body text-xs text-on-surface/80 hover:text-secondary transition-colors underline underline-offset-4 decoration-secondary/30 leading-normal">
                  · {productData.reviewCount} reviews
                </a>
              </div>

              <div className="flex items-center gap-3 md:gap-6 pt-0.5 md:pt-1">
                <span className="font-headline text-3xl md:text-4xl font-normal text-inverse-surface tracking-tight leading-none">₹{productData.price}</span>
                <span className="font-body text-base md:text-lg text-on-surface/70 line-through tracking-wider leading-normal">₹{productData.oldPrice}</span>
                <span className="font-body text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold text-error bg-error/5 px-3 py-1.5 md:px-4 md:py-2 rounded-sm border border-error/10 leading-normal">
                  {productData.discount}
                </span>
              </div>
            </div>

            <div className="h-px bg-on-surface/5 w-full" />

            {/* Selectors */}
            <div className="space-y-4 md:space-y-6 text-on-surface">
              {/* Size Selector */}
              <div className="space-y-3 md:space-y-6">
                <div className="flex justify-between items-center bg-surface-container/50 px-3 py-2 md:p-3 rounded-sm">
                  <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 leading-normal">Select Size</label>
                  <button className="font-body text-[10px] uppercase tracking-widest font-bold text-secondary hover:underline leading-normal">Size Guide</button>
                </div>
                <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-3 -mx-4 px-4 py-2 md:mx-0 md:px-0 md:flex-wrap md:py-0">
                  {productData.sizes.map((size, idx) => (
                    <button
                      key={size.label}
                      disabled={size.stock === 0}
                      onClick={() => setSelectedSize(size.label)}
                      className={`relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm font-body text-[13px] transition-all border ${selectedSize === size.label
                        ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20 scale-105"
                        : size.stock === 0
                          ? "bg-surface-container text-on-surface/20 border-on-surface/5 cursor-not-allowed"
                          : "bg-white text-on-surface border-on-surface/10 hover:border-secondary"
                        } ${idx === 0 ? "ml-0.5" : ""}`}
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
              <div className="space-y-0.5 md:space-y-3.5">
                <div className="bg-surface-container/50 px-3 py-2 md:p-3 rounded-sm">
                  <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 italic leading-normal">Select Colour</label>
                  <span className="ml-4 font-body text-[10px] uppercase tracking-widest text-on-surface/50 leading-normal">{productData.colors[selectedColor].name}</span>
                </div>
                <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-3 -mx-4 px-4 py-2 md:mx-0 md:px-0">
                  {productData.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(idx)}
                      className={`flex-shrink-0 w-10 h-10 rounded-full border transition-all p-1 ${selectedColor === idx ? "border-secondary scale-105 shadow-md" : "border-transparent"
                        } ${idx === 0 ? "ml-0.5" : ""}`}
                    >
                      <div className="w-full h-full rounded-full border border-on-surface/5 shadow-inner" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-start">
                {/* Quantity Selector */}
                <div className="space-y-3 md:space-y-6 pl-0 md:pl-2 shrink-0">
                  <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 leading-normal block mb-1.5 md:mb-[10px]">Quantity</label>
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

                {/* Pincode Checker (Check Delivery) */}
                <div className="space-y-3 md:space-y-6 flex-1 w-full max-w-sm">
                  <label className="font-body text-xs uppercase tracking-widest font-semibold opacity-70 leading-normal block mb-1.5 md:mb-[10px]">Check Delivery</label>
                  <div className="flex h-12">
                    <div className="relative flex-1 group">
                      <input
                        type="text"
                        placeholder="Enter pincode"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => {
                          setPincode(e.target.value);
                          if (deliveryEstimation === "Invalid Pincode") setDeliveryEstimation("");
                        }}
                        className={`w-full h-full px-4 bg-white border ${deliveryEstimation === "Invalid Pincode" ? 'border-error/40 text-error' : 'border-on-surface/10'} rounded-l-sm font-body text-sm outline-none focus:border-secondary transition-colors leading-normal`}
                      />
                      {deliveryEstimation === "Invalid Pincode" && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-error text-[8px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none animate-pulse">
                          Invalid
                        </span>
                      )}
                    </div>
                    <button
                      onClick={handlePincodeCheck}
                      className="px-8 bg-secondary text-white font-body text-[10px] uppercase tracking-widest font-bold rounded-r-sm hover:bg-on-secondary-fixed transition-colors"
                    >
                      Check
                    </button>
                  </div>
                  {deliveryEstimation && deliveryEstimation !== "Invalid Pincode" && (
                    <p className="font-body text-[10px] uppercase tracking-widest text-secondary leading-normal">
                      {deliveryEstimation}
                    </p>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 pt-2 md:pt-4" ref={ctaRef}>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.01, backgroundColor: "#7a4600" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 md:py-3.5 px-6 bg-secondary text-white font-body text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] font-semibold rounded-sm shadow-xl shadow-secondary/20 flex items-center justify-center gap-2 md:gap-4 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                    Add to Bag
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01, backgroundColor: "#0E0E0C" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 md:py-3.5 px-6 bg-inverse-surface text-white font-body text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] font-semibold rounded-sm shadow-xl shadow-on-surface/20 flex items-center justify-center gap-2 md:gap-4 transition-all"
                  >
                    <Zap className="w-4 h-4 md:w-5 md:h-5" />
                    Buy Now
                  </motion.button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01, borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 md:py-3.5 px-6 border-2 border-on-surface/10 font-body text-xs md:text-sm uppercase tracking-[0.4em] font-semibold rounded-sm flex items-center justify-center gap-4 transition-all"
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  Add to Wishlist
                </motion.button>
              </div>

              {/* Redesigned Bazaar Privileges Section */}
              <div className="pt-6 md:pt-12 border-t border-on-surface/5 space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-secondary/40" />
                  <h5 className="font-headline text-lg italic text-inverse-surface">Bazaar <i className="text-secondary">Privileges</i></h5>
                </div>

                {/* Main Offer Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden p-4 md:p-8 bg-secondary text-white rounded-md shadow-xl shadow-secondary/20 group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-white/70" />
                        <span className="font-body text-[10px] uppercase font-bold tracking-[0.2em] text-white/80 leading-normal">Code: BAZAAR5</span>
                      </div>
                      <h4 className="font-headline text-xl md:text-3xl italic font-light leading-tight">Extra 5% <i className="text-white/70">Instant Discount</i></h4>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Perks Grid - Single Row on Desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { icon: <Truck className="w-4 h-4 md:w-5 md:h-5" />, label: "Free Delivery", sub: "Above ₹499", color: "text-secondary", bg: "bg-secondary/10", hoverBg: "hover:bg-secondary/25", border: "border-secondary/10" },
                    { icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, label: "10% Cashback", sub: "Prepaid orders", color: "text-primary", bg: "bg-primary/10", hoverBg: "hover:bg-primary/25", border: "border-primary/10" },
                    { icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5" />, label: "No Cost EMI", sub: "Up to 6 mos", color: "text-tertiary", bg: "bg-tertiary/10", hoverBg: "hover:bg-tertiary/25", border: "border-tertiary/10" },
                    { icon: <FaWhatsapp size={18} />, label: "Expert Help", sub: "24/7 Care", color: "text-[#25D366]", bg: "bg-[#25D366]/10", hoverBg: "hover:bg-[#25D366]/25", border: "border-[#25D366]/10" }
                  ].map((perk, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                      className={`p-2.5 md:p-4 rounded-[40px_12px_40px_12px] md:rounded-[50px_15px_50px_15px] ${perk.bg} ${perk.hoverBg} border ${perk.border} flex flex-col items-center text-center gap-2 transition-all duration-500 cursor-default shadow-sm hover:shadow-xl hover:shadow-on-surface/5`}
                    >
                      <div className={`${perk.color} shrink-0 p-1.5 md:p-3 bg-white rounded-full shadow-sm`}>{perk.icon}</div>
                      <div className="min-w-0">
                        <p className="font-body text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-inverse-surface leading-tight truncate">{perk.label}</p>
                        <p className="font-body text-[7px] md:text-[8px] text-on-surface/50 font-medium leading-tight mt-0.5">{perk.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Brand Banner Section */}
        <div className="mt-8 md:mt-16 w-full">
          <img
            src="/Product%20Images/Brand_banner.webp"
            alt="Brand Banner"
            className="hidden md:block w-full h-auto object-cover rounded-sm shadow-xl"
          />
          <img
            src="/Product%20Images/Brand_banner_m.webp"
            alt="Brand Banner"
            className="block md:hidden w-full h-auto object-cover rounded-sm shadow-xl"
          />
        </div>

        {/* 3. Product Details - High-End Editorial Grid */}
        <div className="mt-6 md:mt-14 relative group">
          <div className="absolute inset-0 bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 -z-10" />
          <div className="relative overflow-hidden bg-surface rounded-sm border border-secondary/10 shadow-2xl shadow-secondary/5">
            {/* Brand Color Aura / Mesh Gradient (Consistency with Homepage Trust Badges) */}
            <div className="absolute top-0 left-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/60 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 right-0 w-full md:w-3/4 max-w-[800px] aspect-square bg-secondary-fixed/70 rounded-full blur-[100px] md:blur-[140px] opacity-90 mix-blend-multiply pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>

            {/* Section Heading */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 px-4 md:px-8 pt-6 md:pt-10 pb-4 md:pb-6 border-b border-secondary/10">
              <div className="space-y-1">
                <span className="font-body text-[9px] uppercase tracking-[0.35em] font-bold text-secondary/60 leading-normal">Crafted with intention</span>
                <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-light italic text-inverse-surface leading-tight">
                  The <i className="text-secondary">Story</i> Behind the Piece
                </h2>
              </div>
              <p className="font-body text-[10px] md:text-xs text-on-surface/40 uppercase tracking-widest font-medium leading-relaxed max-w-[200px] text-left sm:text-right">
                Every detail,<br className="hidden sm:block" /> thoughtfully told.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 border-t border-[1.5px] border-secondary/20">
              {[
                {
                  title: "The Narrative",
                  subtitle: "Curated Description",
                  icon: <ScrollText className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                  number: "01",
                  bgColor: "bg-secondary/5",
                  content: (
                    <div className="space-y-4">
                      <p className="italic font-light leading-relaxed text-sm border-l-2 border-[#955500]/20 pl-6 text-[#0E0E0C]">Infuse our quirky ‘bazaar energy’ into your daytime style with the Citrus Breeze Set. Hand-loomed cotton designed for modern sophistication.</p>
                      <ul className="grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#955500]">
                        <li className="flex gap-3 items-center leading-normal"><div className="w-1.5 h-1.5 bg-[#955500] rounded-full" /> GOTS Cotton</li>
                        <li className="flex gap-3 items-center leading-normal"><div className="w-1.5 h-1.5 bg-[#955500] rounded-full" /> Hand-Loomed</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "The Fit",
                  subtitle: "Conceptual Sizing",
                  icon: <Ruler className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                  number: "02",
                  bgColor: "bg-primary/5",
                  content: (
                    <div className="space-y-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-[10px] font-body">
                          <thead>
                            <tr className="border-b border-[#0E0E0C]/5">
                              <th className="py-2 text-left font-bold uppercase tracking-widest text-[#0E0E0C]/60 leading-normal">Size</th>
                              <th className="py-2 text-left font-bold uppercase tracking-widest text-[#0E0E0C]/60 leading-normal">Bust</th>
                              <th className="py-2 text-left font-bold uppercase tracking-widest text-[#0E0E0C]/60 leading-normal">Waist</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-on-surface/5">
                            {["XS", "S", "M", "L"].map((size, i) => (
                              <tr key={size} className="group/row border-b border-[#0E0E0C]/5 last:border-0">
                                <td className="py-2 font-bold text-[#955500] transition-transform leading-normal">{size}</td>
                                <td className="py-2 text-[#0E0E0C] leading-normal">{30 + i * 2}"</td>
                                <td className="py-2 text-[#0E0E0C] leading-normal">{24 + i * 2}"</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[9px] text-[#955500] uppercase tracking-widest font-bold italic bg-[#955500]/5 px-3 py-1.5 rounded-sm inline-block leading-normal">Model 5'7", size M</p>
                    </div>
                  )
                },
                {
                  title: "The Soul",
                  subtitle: "Material Heritage",
                  icon: <Sparkles className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />,
                  number: "03",
                  bgColor: "bg-tertiary/5",
                  content: (
                    <div className="space-y-6">
                      <p className="text-xs lg:text-sm font-light leading-relaxed italic text-[#0E0E0C]/70">"Hand-loomed cotton with a breathable artisan weave. Every thread tells a story of the person who weaved it."</p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Hand Wash", icon: "🧼" },
                          { label: "Steam Only", icon: "💨" }
                        ].map(item => (
                          <div key={item.label} className="flex items-center gap-4 p-4 border border-[#0E0E0C]/5 rounded-sm hover:border-[#955500]/20 transition-colors">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#955500] leading-normal">{item.label}</span>
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
                  bgColor: "bg-secondary-container/5",
                  content: (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 text-[#955500] leading-normal"><Clock className="w-4 h-4" /> Timelines</h4>
                          <div className="h-px bg-[#0E0E0C]/5 w-full" />
                          <p className="text-[11px] font-medium text-[#0E0E0C] uppercase tracking-widest italic leading-normal">Metros: 2-3 Days • India: 5-7 Days</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 text-[#955500] leading-normal"><RefreshCw className="w-4 h-4" /> Returns</h4>
                          <div className="h-px bg-[#0E0E0C]/5 w-full" />
                          <p className="text-[11px] font-medium text-[#0E0E0C] uppercase tracking-widest italic leading-normal">Free returns within 7 days</p>
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
                  bgColor: "bg-primary-container/10",
                  content: (
                    <div className="space-y-4">
                      {[
                        { code: "BAZAAR_ELITE", desc: "First-time 20% off" },
                        { code: "HERITAGE_15", desc: "15% off over ₹2999" }
                      ].map(offer => (
                        <div key={offer.code} className="flex items-center justify-between p-4 bg-white/60 border border-[#0E0E0C]/5 rounded-sm group/offer hover:shadow-lg transition-all duration-500">
                          <div className="space-y-0.5">
                            <p className="text-[11px] font-bold text-[#955500] tracking-[0.3em] uppercase leading-normal">{offer.code}</p>
                            <p className="text-[9px] text-[#0E0E0C]/70 uppercase tracking-widest italic leading-normal">{offer.desc}</p>
                          </div>
                          <button className="px-5 py-2.5 border border-[#955500]/20 text-[#955500] font-body text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#955500] hover:text-white transition-all outline-none">Copy</button>
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
                  bgColor: "bg-surface-container/15",
                  content: (
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex flex-col gap-3 md:gap-4">
                        <span className="text-xl md:text-2xl italic font-headline text-[#955500] leading-tight">"Sarojini at Door"</span>
                        <p className="text-sm font-light leading-relaxed text-[#0E0E0C] border-l-2 border-[#955500]/40 pl-4 md:pl-6">Directly supports local weavers in our expansive Bazaar network. Hand-picked and authenticated.</p>
                      </div>
                      <div className="pt-2 flex items-center gap-4">
                        <div className="h-[1px] bg-[#955500]/40 flex-1" />
                        <span className="px-4 py-1.5 border border-[#955500] text-[#955500] text-[9px] font-bold uppercase tracking-[0.3em] rounded-sm italic leading-normal">Authentic Bazaar Goods</span>
                        <div className="h-[1px] bg-[#955500]/40 flex-1" />
                      </div>
                    </div>
                  )
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden border-b-[1px] border-on-surface/5 p-4 lg:p-8 transition-all duration-700 cursor-pointer ${idx % 2 === 0 ? "md:border-r-[1px]" : ""
                    } ${item.bgColor} ${activeAccordion === idx ? "shadow-inner" : ""}`}
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                >
                  {/* Decorative Background Number */}
                  <div className="absolute -bottom-4 -right-4 pointer-events-none opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-1000">
                    <span className="text-outline text-[100px] font-headline font-black italic select-none leading-none text-[#0E0E0C]">
                      {item.number}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2 md:mb-3">
                      <div className="space-y-1">
                        <span className="font-body text-[9px] uppercase tracking-[0.4em] font-bold text-[#955500]/80 transition-colors duration-500 leading-normal">
                          {item.subtitle}
                        </span>
                        <div className="flex items-center gap-3 md:gap-4">
                          <span className="text-[#955500] transition-colors duration-500">
                            {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6 lg:w-7 lg:h-7' })}
                          </span>
                          <h3 className={`font-headline text-lg lg:text-2xl italic tracking-tight transition-all duration-700 leading-[1.2] ${activeAccordion === idx ? 'text-[#0E0E0C] translate-x-1.5 md:translate-x-2' : 'text-[#0E0E0C]'}`}>
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className={`w-8 h-8 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center transition-all duration-700 ${activeAccordion === idx ? 'bg-[#955500] border-[#955500] text-white scale-110' : 'text-[#955500] border-[#955500]/20 group-hover:scale-105'}`}>
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
        <div className="mt-[46px] md:mt-14 space-y-3 md:space-y-6">
          <div className="flex justify-between items-end border-b border-on-surface/5 pb-6 md:pb-8">
            <h3 className="font-headline text-2xl md:text-4xl italic font-light text-inverse-surface leading-tight">Style <i className="text-secondary">it with</i></h3>
            <button className="font-body text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-secondary hover:underline underline-offset-8 leading-normal">Add all</button>
          </div>

          <div className="relative group/styling">
            {/* Navigation Buttons - Hidden on mobile */}
            <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
              <button
                onClick={() => scrollStyling('left')}
                className="w-12 h-12 rounded-full bg-white/90 border border-on-surface/10 flex items-center justify-center text-on-surface shadow-xl hover:bg-secondary hover:text-white transition-all duration-300 backdrop-blur-sm outline-none"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={() => scrollStyling('right')}
                className="w-12 h-12 rounded-full bg-white/90 border border-on-surface/10 flex items-center justify-center text-on-surface shadow-xl hover:bg-secondary hover:text-white transition-all duration-300 backdrop-blur-sm outline-none"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div
              ref={stylingScrollRef}
              className="flex gap-4 md:gap-10 overflow-x-auto hide-scrollbar pb-6 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
            >
              {suggestedStyles.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-64 md:w-72 group snap-start">
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-white mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                    <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-on-surface/5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-3 lg:group-hover:translate-y-0 transition-all duration-500 shadow-xl outline-none">
                      <Plus className="w-6 h-6 text-on-surface font-light" />
                    </button>
                  </div>
                  <h4 className="font-headline text-xl font-light italic leading-tight">{item.name}</h4>
                  <p className="font-body text-sm font-light mt-2 text-on-surface/60 leading-normal">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="mt-2 md:mt-14 w-full">
          <img
            src="/homepage/third_banner.webp"
            alt="Product Banner"
            className="hidden md:block w-full h-auto object-cover rounded-sm shadow-2xl"
          />
          <img
            src="/homepage/mobile_banner1.webp"
            alt="Product Banner"
            className="block md:hidden w-full h-auto object-cover rounded-sm shadow-2xl"
          />
        </div>

        {/* 6. Customer Reviews Section */}
        <div id="reviews" className="mt-12 md:mt-16 space-y-12 md:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-16 items-start">
            {/* Visual Rating Summary */}
            <div className="lg:col-span-4 space-y-4 md:space-y-8 sticky top-24 pr-0 md:pr-10">
              <div className="space-y-2 md:space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-4 md:gap-8 mb-1 md:mb-2">
                  <span className="font-headline text-5xl md:text-8xl font-light italic text-inverse-surface leading-none">4.7</span>
                  <span className="font-body text-lg md:text-2xl font-light text-on-surface/40 leading-none">/ 5.0</span>
                </div>
                <div className="flex justify-center md:justify-start gap-1 md:gap-3 mb-1 md:mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`w-5 h-5 md:w-8 md:h-8 ${i <= 4 ? "fill-secondary text-secondary" : "fill-surface-variant text-surface-variant"}`} />)}
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
                        className="h-full bg-secondary"
                      />
                    </div>
                    <span className="font-body text-[11px] text-on-surface/40 w-10 text-right font-medium">{bar.perc}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-8 space-y-2 md:space-y-4">
              <div className="flex gap-2 md:gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar pb-2 md:pb-4 sticky top-0 z-20 py-1 md:py-3 -mt-2 md:-mt-6 -mx-4 px-4 md:mx-0 md:px-0">
                {["All", "With photos", "Verified", "5★", "4★"].map(filter => (
                  <button
                    key={filter}
                    className={`flex-shrink-0 px-4 md:px-8 py-2 md:py-3 rounded-sm font-body text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap outline-none ${filter === "All"
                      ? "bg-secondary text-white shadow-md shadow-secondary/20"
                      : "bg-surface-container/50 border border-on-surface/5 text-on-surface/50 hover:border-secondary/30 hover:text-secondary"
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="relative group/reviews">
                {/* Navigation Buttons - Hidden on mobile */}
                <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
                  <button
                    onClick={() => scrollReviews('left')}
                    className="w-12 h-12 rounded-full bg-white/90 border border-on-surface/10 flex items-center justify-center text-on-surface shadow-xl hover:bg-secondary hover:text-white transition-all duration-300 backdrop-blur-sm outline-none"
                  >
                    <ChevronLeft size={20} />
                  </button>
                </div>
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                  <button
                    onClick={() => scrollReviews('right')}
                    className="w-12 h-12 rounded-full bg-white/90 border border-on-surface/10 flex items-center justify-center text-on-surface shadow-xl hover:bg-secondary hover:text-white transition-all duration-300 backdrop-blur-sm outline-none"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div
                  ref={reviewsScrollRef}
                  className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar gap-4 md:gap-8 pb-4 -mx-4 px-4 md:mx-0 md:px-0 scroll-pl-4 md:scroll-pl-0"
                >
                  {reviews.map((row, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUpVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-[85%] md:w-[calc(50%-1rem)] snap-start space-y-3 md:space-y-4 p-6 md:p-8 border border-on-surface/5 rounded-sm bg-white/40 hover:bg-white/60 transition-colors"
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
                          {[1, 2, 3, 4, 5].map(it => <Star key={it} className={`w-3.5 h-3.5 md:w-4 md:h-4 ${it <= row.rating ? "fill-secondary text-secondary" : "fill-surface-variant text-surface-variant"}`} />)}
                        </div>
                      </div>

                      <p className="font-body text-sm md:text-base lg:text-lg text-on-surface/90 leading-relaxed font-light italic">"{row.text}"</p>

                      {row.images && row.images.length > 0 && (
                        <div className="flex gap-3 md:gap-6">
                          {row.images.map((img, imgIdx) => (
                            <div key={imgIdx} className="w-24 md:w-40 aspect-[3/4] rounded-sm overflow-hidden border border-on-surface/5 bg-white shadow-md">
                              <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-6 md:gap-8 pt-2 md:pt-4">
                        <button className="flex items-center gap-2 text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-on-surface/70 hover:text-secondary transition-colors outline-none">
                          <ThumbsUp size={14} className="md:size-4" /> Helpful? <span className="text-on-surface/90">{row.helpful}</span>
                        </button>
                        <button className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-on-surface/70 hover:text-secondary transition-colors outline-none">Report</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3 md:space-y-6">
          <h3 className="font-headline text-2xl md:text-5xl font-light text-inverse-surface leading-tight">You <i className="text-secondary">recently viewed</i></h3>
          <div className="flex gap-6 lg:gap-10 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0">
            {recentlyViewedProducts.map((product, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 md:w-72 group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-white mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-headline text-xl font-light italic leading-tight text-inverse-surface">{product.name}</h4>
                  <p className="font-body text-sm font-light text-on-surface/60">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. You May Also Like */}
        <div className="mt-0 md:mt-4 space-y-3 md:space-y-6">
          <div className="flex justify-between items-end border-b border-on-surface/5 pb-6 md:pb-8">
            <h3 className="font-headline text-2xl md:text-5xl font-light text-inverse-surface leading-tight">You may <i className="text-secondary">also like</i></h3>
            <a href="#" className="font-body text-[9px] md:text-[11px] uppercase font-bold tracking-[0.3em] text-secondary group flex items-center gap-3 md:gap-4 leading-normal">
              View All
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}><ChevronRight className="w-4 h-4 md:w-5 md:h-5" /></motion.div>
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            {recommendedProducts.map((product, idx) => (
              <div key={idx} className="space-y-6 group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white relative shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-on-surface/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl outline-none">
                    <ShoppingBag size={20} className="text-on-surface" />
                  </button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-xl font-light italic leading-tight text-inverse-surface">{product.name}</h4>
                  <p className="font-body text-sm font-light text-on-surface/60 leading-normal">{product.price}</p>
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
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-on-surface/5 px-4 md:px-6 lg:px-12 py-4 lg:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8"
          >
            {/* Mobile Top Row / Desktop Info */}
            <div className="flex items-center justify-between md:justify-start gap-4 md:gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-12 md:w-12 md:h-14 rounded-sm overflow-hidden bg-white border border-on-surface/5 shadow-sm shrink-0">
                  <img src={productData.images[0]} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-headline text-sm md:text-base lg:text-xl italic truncate leading-tight text-inverse-surface">{productData.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5 md:mt-2">
                    <span className="font-body text-[10px] md:text-[11px] text-on-surface/60 uppercase tracking-widest leading-normal">{selectedSize || 'Size'}</span>
                    <div className="w-1 h-1 rounded-full bg-on-surface/10" />
                    <span className="font-body text-[10px] md:text-[11px] text-on-surface/60 uppercase tracking-widest leading-normal">{productData.colors[selectedColor].name}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Price */}
              <div className="md:hidden flex flex-col items-end">
                <span className="font-headline text-lg font-normal text-inverse-surface leading-none">₹{productData.price}</span>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <div className="hidden md:flex flex-col items-end mr-4">
                <span className="font-headline text-xl md:text-2xl font-normal text-inverse-surface leading-none">₹{productData.price}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#b36b00" }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 md:flex-none px-4 md:px-10 h-11 md:h-12 bg-secondary text-white font-body text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold rounded-sm shadow-lg shadow-secondary/20 leading-none outline-none whitespace-nowrap"
              >
                Add to Bag
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 md:flex-none px-4 md:px-10 h-11 md:h-12 bg-on-surface text-white font-body text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold rounded-sm shadow-lg shadow-on-surface/20 leading-none outline-none whitespace-nowrap"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
