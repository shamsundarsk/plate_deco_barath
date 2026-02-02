import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onViewCollections?: () => void;
}

export function HeroSection({ onViewCollections }: HeroSectionProps) {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D39D55]/5 rounded-full blur-3xl -z-10"></div>

      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 -z-20">
        <img 
          alt="Beautifully arranged ceremonial plate with flowers and brass items" 
          className="w-full h-full object-cover opacity-15 pointer-events-none filter sepia-[0.3]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBASYKPphBz1sFBmBfXSZ1XUZWsNZmxnVPzzlHl_HCIeNWOALwAS0mAPl5yPl7-5Kp05aGkAcvVYlvGt_vKIQkyspbvRHePRVVUWvLuEIaiTzpqZ6BOgXmk982b8sqNDCJOYPDjjZwfQjbqc6N-sognJ1_95JxbeZiYspkbNDvPN0S0YTyCmAKZn0DOr5oIb0Wv0w9iiHgaK2vg1frWEKsJq7LmRdmuDcOsBBvSLNPDC7Jz04kF2vbRo3Co-wk_AecoGOyC9rQdkQ4" 
        />
        {/* Gradient overlay on the image to match next section background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8E6] via-[#FFF8E6]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 px-4 max-w-4xl mx-auto mt-16 md:mt-0">
        {/* Decorative icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto w-24 h-24 rounded-full border-2 border-[#D39D55]/30 flex items-center justify-center mb-8 bg-white/50 backdrop-blur-sm shadow-lg transform hover:scale-105 transition duration-500"
        >
          <div className="w-20 h-20 rounded-full border border-[#D39D55]/20 flex items-center justify-center">
            <Sparkles className="text-4xl text-[#D39D55]" />
          </div>
        </motion.div>

        {/* Main heading - Made bigger */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl text-[#8D0B41] mb-4 tracking-tight drop-shadow-sm font-bold"
        >
          Artisan Plates
        </motion.h1>

        {/* Subtitle - Made bigger and more visible */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="italic text-2xl md:text-3xl lg:text-4xl text-[#8D0B41] mb-12 font-light tracking-wide drop-shadow-sm"
        >
          Where Every Plate Tells a Festive Story
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16"
        >
          <Button 
            size="lg" 
            onClick={onViewCollections}
            className="px-8 py-3 bg-[#8D0B41] text-white rounded-full hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-wide text-sm uppercase"
          >
            View Designs
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-3 bg-transparent border border-[#D39D55] text-[#8D0B41] rounded-full hover:bg-[#D39D55] hover:text-white transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 tracking-wide text-sm uppercase"
          >
            Book a Plate
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70"
      >
        <span className="text-xs uppercase tracking-widest text-[#8D0B41]">Scroll</span>
        <div className="w-6 h-10 border border-[#8D0B41] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#8D0B41] rounded-full"
          />
        </div>
      </motion.div>
    </header>
  );
}
