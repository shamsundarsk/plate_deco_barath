import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8D0B41 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated plate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 mx-auto w-64 h-64 md:w-80 md:h-80 relative"
        >
          {/* Outer glow */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px 10px rgba(211, 157, 85, 0.3)",
                "0 0 60px 20px rgba(211, 157, 85, 0.5)",
                "0 0 40px 10px rgba(211, 157, 85, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full"
          />
          
          {/* Plate circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-[#FFF8E6] border-8 border-[#D39D55] shadow-2xl">
            {/* Inner decorative ring */}
            <div className="absolute inset-4 rounded-full border-2 border-[#D39D55] opacity-40" />
            <div className="absolute inset-8 rounded-full border border-[#D39D55] opacity-20" />
            
            {/* Center ornament */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sparkles className="w-12 h-12 text-[#D39D55] opacity-30" />
            </motion.div>
          </div>

          {/* Shimmer effect */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/2 w-24 h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 blur-sm transform -translate-x-1/2 rotate-45" />
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 text-[#8D0B41] tracking-wide">
            Artisan Plates
          </h1>
          <p className="text-xl md:text-2xl text-[#8D0B41] opacity-80 mb-8 italic">
            Where Every Plate Tells a Festive Story
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#8D0B41] hover:bg-[#6d0832] text-[#FFF8E6] px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              View Designs
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#D39D55] text-[#8D0B41] hover:bg-[#D39D55] hover:text-[#FFF8E6] px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Book a Plate
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#D39D55] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#D39D55] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
