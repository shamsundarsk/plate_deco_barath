import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

const catalogItems = [
  {
    id: 1,
    title: "Varalakshmi Festival Plate",
    category: "Festival",
    price: "₹800 - ₹1500",
    image: "https://images.unsplash.com/photo-1759591583288-9f5402d76469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZXN0aXZhbCUyMGRlY29yYXRpb24lMjBwbGF0ZXxlbnwxfHx8fDE3NjY1MTQ0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Traditional brass plate adorned with betel leaves, flowers, and sacred symbols"
  },
  {
    id: 2,
    title: "Traditional Pooja Thali",
    category: "Pooja",
    price: "₹600 - ₹1200",
    image: "https://images.unsplash.com/photo-1576470188240-c381bb6a8924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHBvb2phJTIwdGhhbGl8ZW58MXx8fHwxNzY2NTE0NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant steel thali with kumkum, rice, flowers, and diya arrangement"
  },
  {
    id: 3,
    title: "Wedding Ceremony Plate",
    category: "Wedding",
    price: "₹1500 - ₹3000",
    image: "https://images.unsplash.com/photo-1613665667184-81bb9b8605e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGdvbGR8ZW58MXx8fHwxNzY2NTE0NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Luxurious gold-themed plate with premium decorative elements and fresh flowers"
  },
  {
    id: 4,
    title: "Diwali Special Plate",
    category: "Festival",
    price: "₹700 - ₹1400",
    image: "https://images.unsplash.com/photo-1635186769388-b537282188b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByYW5nb2xpJTIwZGl3YWxpfGVufDF8fHx8MTc2NjUxNDQyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Vibrant rangoli-inspired design with diyas and colorful decorative patterns"
  },
  {
    id: 5,
    title: "Minimalist Pooja Plate",
    category: "Custom",
    price: "₹500 - ₹900",
    image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGZlc3RpdmFsJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjY1MTQ0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Simple yet elegant design with fresh flowers and natural elements"
  },
  {
    id: 6,
    title: "Grand Wedding Thali",
    category: "Wedding",
    price: "₹2000 - ₹4000",
    image: "https://images.unsplash.com/photo-1626784214765-754de4c5a77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY2NTE0NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium jewel-decorated plate with intricate detailing and luxury finish"
  },
];

const categories = ["All", "Festival", "Wedding", "Pooja", "Custom"];

export function CatalogSection() {
  const ref = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof catalogItems[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const filteredItems = selectedCategory === "All" 
    ? catalogItems 
    : catalogItems.filter(item => item.category === selectedCategory);

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden bg-[#FFF8E6]">
      {/* Decorative background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #D39D55 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#8D0B41]">
            Our Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent mx-auto mb-6" />
          <p className="text-lg text-[#8D0B41] opacity-80 max-w-2xl mx-auto mb-8">
            Each plate is a canvas of tradition, crafted with devotion
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#8D0B41] text-[#FFF8E6] shadow-lg'
                    : 'bg-white text-[#8D0B41] border-2 border-[#D6CFB4] hover:border-[#D39D55]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Catalog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#D39D55]">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-[#D39D55] text-[#FFF8E6] px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[#8D0B41]">
                    {item.title}
                  </h3>
                  <p className="text-[#D39D55] mb-3">
                    {item.price}
                  </p>
                  <p className="text-sm text-[#8D0B41] opacity-70 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
          >
            <div className="relative h-96">
              <ImageWithFallback
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#D39D55] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl text-[#8D0B41]">
                  {selectedItem.title}
                </h3>
                <span className="bg-[#D39D55] text-[#FFF8E6] px-4 py-2 rounded-full">
                  {selectedItem.category}
                </span>
              </div>
              
              <p className="text-2xl text-[#D39D55] mb-4">
                {selectedItem.price}
              </p>
              
              <p className="text-[#8D0B41] leading-relaxed mb-6">
                {selectedItem.description}
              </p>
              
              <button className="w-full bg-[#8D0B41] hover:bg-[#6d0832] text-[#FFF8E6] py-3 rounded-full transition-colors">
                Request This Design
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
