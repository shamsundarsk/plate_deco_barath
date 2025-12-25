import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function PaperLayerSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#FFF8E6] opacity-80" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238D0B41' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-[#D6CFB4] relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#D39D55] opacity-30 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#D39D55] opacity-30 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#D39D55] opacity-30 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#D39D55] opacity-30 rounded-br-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="text-[#D39D55] text-6xl">✦</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 text-[#8D0B41]">
              The Foundation
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent mx-auto mb-8" />
            
            <p className="text-lg md:text-xl text-[#8D0B41] leading-relaxed max-w-3xl mx-auto mb-8">
              Every masterpiece begins with intention. Our artisan plate decorations start with carefully selected bases—traditional brass, pristine steel, or elegant ceramic—each chosen to honor the sacred occasion it will serve.
            </p>

            <p className="text-lg md:text-xl text-[#8D0B41] leading-relaxed max-w-3xl mx-auto opacity-80">
              Like the decorative paper that cradles each element, we build layer by layer, ensuring every detail reflects the reverence and joy of your celebration.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
