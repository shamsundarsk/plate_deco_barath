import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

// Sample data - you can replace these with your actual images from public folder
const collections = [
  {
    id: 1,
    title: "Varalakshmi Festival Collection",
    category: "Festival",
    price: "₹800 - ₹1500",
    images: [
      "/images/varalakshmi-1.jpg",
      "/images/varalakshmi-2.jpg",
      "/images/varalakshmi-3.jpg"
    ],
    description: "Traditional brass plates adorned with betel leaves, flowers, and sacred symbols for Varalakshmi Vratham celebrations.",
    features: ["Brass base plate", "Fresh flower arrangements", "Sacred symbols", "Betel leaf decoration"]
  },
  {
    id: 2,
    title: "Wedding Ceremony Collection",
    category: "Wedding",
    price: "₹1500 - ₹3000",
    images: [
      "/images/wedding-1.jpg",
      "/images/wedding-2.jpg",
      "/images/wedding-3.jpg"
    ],
    description: "Luxurious gold-themed plates with premium decorative elements perfect for wedding ceremonies and rituals.",
    features: ["Gold accents", "Premium flowers", "Intricate designs", "Luxury finish"]
  },
  {
    id: 3,
    title: "Diwali Special Collection",
    category: "Festival",
    price: "₹700 - ₹1400",
    images: [
      "/images/diwali-1.jpg",
      "/images/diwali-2.jpg",
      "/images/diwali-3.jpg"
    ],
    description: "Vibrant rangoli-inspired designs with diyas and colorful decorative patterns for Diwali celebrations.",
    features: ["Rangoli patterns", "Diya arrangements", "Vibrant colors", "Festival themes"]
  },
  {
    id: 4,
    title: "Traditional Pooja Collection",
    category: "Pooja",
    price: "₹600 - ₹1200",
    images: [
      "/images/pooja-1.jpg",
      "/images/pooja-2.jpg",
      "/images/pooja-3.jpg"
    ],
    description: "Elegant steel and brass thalis with kumkum, rice, flowers, and diya arrangements for daily prayers.",
    features: ["Steel/Brass base", "Kumkum & rice", "Fresh flowers", "Diya placement"]
  },
  {
    id: 5,
    title: "Ganesh Chaturthi Collection",
    category: "Festival",
    price: "₹900 - ₹1800",
    images: [
      "/images/ganesh-1.jpg",
      "/images/ganesh-2.jpg",
      "/images/ganesh-3.jpg"
    ],
    description: "Special decorative plates designed for Ganesh Chaturthi celebrations with traditional motifs.",
    features: ["Ganesh motifs", "Modak arrangements", "Traditional colors", "Sacred elements"]
  },
  {
    id: 6,
    title: "Custom Design Collection",
    category: "Custom",
    price: "₹500 - ₹2500",
    images: [
      "/images/custom-1.jpg",
      "/images/custom-2.jpg",
      "/images/custom-3.jpg"
    ],
    description: "Personalized plate decorations tailored to your specific requirements and occasions.",
    features: ["Custom designs", "Personal themes", "Flexible pricing", "Unique concepts"]
  }
];

const categories = ["All", "Festival", "Wedding", "Pooja", "Custom"];

interface CollectionsProps {
  onBack?: () => void;
}

export function Collections({ onBack }: CollectionsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCollection, setSelectedCollection] = useState<typeof collections[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredCollections = selectedCategory === "All" 
    ? collections 
    : collections.filter(item => item.category === selectedCategory);

  if (selectedCollection) {
    return (
      <div className="min-h-screen bg-[#FFF8E6] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Button
            onClick={() => setSelectedCollection(null)}
            variant="outline"
            className="mb-8 border-[#8D0B41] text-[#8D0B41] hover:bg-[#8D0B41] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collections
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={selectedCollection.images[selectedImageIndex]}
                  alt={selectedCollection.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = `https://images.unsplash.com/photo-1576470188240-c381bb6a8924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800`;
                  }}
                />
              </motion.div>

              {/* Thumbnail gallery */}
              <div className="flex gap-4">
                {selectedCollection.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-[#D39D55] scale-105' 
                        : 'border-transparent hover:border-[#D6CFB4]'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedCollection.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1576470188240-c381bb6a8924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200`;
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#D39D55] text-white px-3 py-1 rounded-full text-sm">
                    {selectedCollection.category}
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="p-2">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-[#8D0B41] mb-4">
                  {selectedCollection.title}
                </h1>

                <p className="text-2xl text-[#D39D55] font-semibold mb-6">
                  {selectedCollection.price}
                </p>

                <p className="text-lg text-[#8D0B41] leading-relaxed mb-8">
                  {selectedCollection.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-[#8D0B41] mb-4">Features</h3>
                <ul className="space-y-2">
                  {selectedCollection.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-[#8D0B41]">
                      <span className="w-2 h-2 bg-[#D39D55] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6">
                <Button className="w-full bg-[#8D0B41] hover:bg-[#6d0832] text-white py-3 text-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request This Design
                </Button>
                <Button variant="outline" className="w-full border-[#D39D55] text-[#D39D55] hover:bg-[#D39D55] hover:text-white py-3">
                  Customize Design
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8E6] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {onBack && (
            <Button
              onClick={onBack}
              variant="outline"
              className="mb-8 border-[#8D0B41] text-[#8D0B41] hover:bg-[#8D0B41] hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#8D0B41] mb-6">
              Our Collections
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent mx-auto mb-6" />
            <p className="text-xl text-[#8D0B41] opacity-80 max-w-3xl mx-auto">
              Discover our handcrafted plate decorations, each telling a unique story of tradition and artistry
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? 'bg-[#8D0B41] text-white shadow-lg scale-105'
                  : 'bg-white text-[#8D0B41] border-2 border-[#D6CFB4] hover:border-[#D39D55] hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCollection(collection)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#D39D55]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.images[0]}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = `https://images.unsplash.com/photo-1576470188240-c381bb6a8924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-[#D39D55] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {collection.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#8D0B41] group-hover:text-[#D39D55] transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-[#D39D55] font-semibold mb-3">
                    {collection.price}
                  </p>
                  <p className="text-sm text-[#8D0B41] opacity-70 line-clamp-2">
                    {collection.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}