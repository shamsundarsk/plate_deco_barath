import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Calendar, Heart, Sparkles, Home } from "lucide-react";

const occasions = [
  {
    icon: Sparkles,
    title: "Festivals",
    description: "Varalakshmi Vratham, Navaratri, Diwali, Ganesh Chaturthi",
    color: "#D39D55"
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Engagement ceremonies, wedding rituals, reception decor",
    color: "#8D0B41"
  },
  {
    icon: Home,
    title: "Poojas",
    description: "Daily prayers, special ceremonies, housewarming rituals",
    color: "#D39D55"
  },
  {
    icon: Calendar,
    title: "Custom Requests",
    description: "Birthdays, anniversaries, corporate events, special occasions",
    color: "#8D0B41"
  },
];

export function ClothLayerSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Fabric texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D6CFB4] to-[#FFF8E6]" />
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #8D0B41,
            #8D0B41 2px,
            transparent 2px,
            transparent 20px
          ),
          repeating-linear-gradient(
            0deg,
            #8D0B41,
            #8D0B41 2px,
            transparent 2px,
            transparent 20px
          )`
        }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#8D0B41]">
            Occasions We Serve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent mx-auto mb-6" />
          <p className="text-lg text-[#8D0B41] opacity-80 max-w-2xl mx-auto">
            Like fabric draped with care, we tailor each creation to your celebration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => {
            const Icon = occasion.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#D39D55] relative overflow-hidden">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D39D55]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${occasion.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: occasion.color }} />
                    </motion.div>
                    
                    <h3 className="text-xl mb-3 text-[#8D0B41] text-center">
                      {occasion.title}
                    </h3>
                    
                    <p className="text-sm text-[#8D0B41] opacity-70 text-center leading-relaxed">
                      {occasion.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
