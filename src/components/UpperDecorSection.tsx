import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Leaf, Gem, Flower2, Sparkle } from "lucide-react";

const materials = [
  {
    icon: Flower2,
    title: "Fresh Flowers",
    description: "Marigolds, roses, jasmine sourced daily for vibrant arrangements"
  },
  {
    icon: Leaf,
    title: "Natural Elements",
    description: "Betel leaves, mango leaves, sacred tulsi for traditional authenticity"
  },
  {
    icon: Gem,
    title: "Premium Decoratives",
    description: "Handpicked beads, mirrors, stones, and ornamental accents"
  },
  {
    icon: Sparkle,
    title: "Artisan Touch",
    description: "Every element placed by hand with care and ceremonial intention"
  },
];

export function UpperDecorSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Floating petals animation data
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 8 + Math.random() * 4,
    x: Math.random() * 100,
  }));

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E6] via-[#D6CFB4]/30 to-[#FFF8E6]" />

      {/* Floating petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: "100vh", x: `${petal.x}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.6, 0.8, 0.6, 0],
            rotate: 360,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#D39D55] to-[#8D0B41] blur-sm"
          style={{ left: 0 }}
        />
      ))}

      {/* Sparkle effects */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D39D55] rounded-full blur-sm" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#D39D55] rounded-full blur-sm" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#D39D55] rounded-full blur-sm" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#D39D55] rounded-full blur-sm" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <span className="text-6xl">✿</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-[#8D0B41]">
            The Final Flourish
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent mx-auto mb-6" />
          
          <p className="text-lg text-[#8D0B41] opacity-80 max-w-2xl mx-auto">
            The crowning touches that transform a decorated plate into a sacred offering
          </p>
        </motion.div>

        {/* Materials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#D39D55] relative overflow-hidden">
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D39D55]/10 to-transparent"
                  />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D39D55] to-[#8D0B41] flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 text-[#8D0B41]">
                        {material.title}
                      </h3>
                      <p className="text-[#8D0B41] opacity-70 leading-relaxed">
                        {material.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Handmade assurance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#8D0B41] to-[#6d0832] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 20%, rgba(255,255,255,0.2) 21%, transparent 21%),
                             radial-gradient(circle at 80% 50%, transparent 20%, rgba(255,255,255,0.2) 21%, transparent 21%)`
          }} />
          
          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Sparkle className="w-12 h-12 text-[#D39D55]" />
            </motion.div>
            
            <h3 className="text-3xl mb-4">
              100% Handcrafted with Devotion
            </h3>
            
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              No two plates are identical. Each creation is lovingly assembled by hand, 
              infused with the sacred intention of honoring your celebration. 
              We pour care into every detail, ensuring your offering reflects the reverence it deserves.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
