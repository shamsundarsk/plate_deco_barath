import { motion } from "motion/react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    username: "priya_celebrations",
    userImage: "https://images.unsplash.com/photo-1635564981692-857482d9325f?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1759591583288-9f5402d76469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZXN0aXZhbCUyMGRlY29yYXRpb24lMjBwbGF0ZXxlbnwxfHx8fDE3NjY1MTQ0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Absolutely stunning Varalakshmi plate! The attention to detail is incredible. Thank you for making our pooja so special! 🙏✨ #VaralakshmiVratham #HandmadeWithLove",
    likes: "247",
    comments: "18",
    timeAgo: "2 days ago"
  },
  {
    id: 2,
    username: "wedding_decor_bangalore",
    userImage: "https://images.unsplash.com/photo-1613665667184-81bb9b8605e2?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1613665667184-81bb9b8605e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGdvbGR8ZW58MXx8fHwxNzY2NTE0NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "The wedding ceremony plates were beyond our expectations! Such intricate work and beautiful presentation. Highly recommended! 💍🌸 #WeddingDecor #TraditionalArt",
    likes: "412",
    comments: "35",
    timeAgo: "5 days ago"
  },
  {
    id: 3,
    username: "festive_home_chennai",
    userImage: "https://images.unsplash.com/photo-1635186769388-b537282188b0?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1635186769388-b537282188b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByYW5nb2xpJTIwZGl3YWxpfGVufDF8fHx8MTc2NjUxNDQyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Our Diwali was extra special with these gorgeous plates. The rangoli-inspired design is just WOW! 🪔✨ #DiwaliDecor #FestiveVibes",
    likes: "328",
    comments: "24",
    timeAgo: "1 week ago"
  },
  {
    id: 4,
    username: "traditions_by_lakshmi",
    userImage: "https://images.unsplash.com/photo-1576470188240-c381bb6a8924?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1576470188240-c381bb6a8924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHBvb2phJTIwdGhhbGl8ZW58MXx8fHwxNzY2NTE0NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Perfect pooja thali for our daily prayers. Love how fresh and traditional it looks! Worth every penny 🌺🙏 #PoojaThali #Blessed",
    likes: "189",
    comments: "12",
    timeAgo: "3 days ago"
  },
  {
    id: 5,
    username: "mehandi_and_more",
    userImage: "https://images.unsplash.com/photo-1678372283341-d0e48d21615d?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1678372283341-d0e48d21615d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpZ29sZCUyMGZsb3dlcnMlMjBpbmRpYXxlbnwxfHx8fDE3NjY1MTQ0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "The flowers were so fresh and the arrangement was exquisite! Used for our engagement ceremony. Everyone loved it! 💐💕 #EngagementDecor #Marigolds",
    likes: "295",
    comments: "21",
    timeAgo: "4 days ago"
  }
];

export function InstagramReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-[#FFF8E6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#8D0B41]">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent mx-auto mb-6" />
          <p className="text-lg text-[#8D0B41] opacity-80">
            Celebrating together on Instagram
          </p>
        </motion.div>

        {/* Instagram-style reel container */}
        <div className="max-w-md mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#D6CFB4]"
          >
            {/* Instagram header */}
            <div className="flex items-center justify-between p-4 border-b border-[#D6CFB4]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D39D55] to-[#8D0B41] p-0.5">
                  <div className="w-full h-full rounded-full bg-white p-0.5">
                    <ImageWithFallback
                      src={currentReview.userImage}
                      alt={currentReview.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#8D0B41]">
                    {currentReview.username}
                  </p>
                  <p className="text-xs text-[#8D0B41] opacity-60">
                    {currentReview.timeAgo}
                  </p>
                </div>
              </div>
              <button className="text-[#8D0B41]">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Instagram image */}
            <div className="relative aspect-square bg-black">
              <ImageWithFallback
                src={currentReview.image}
                alt="Customer review"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Instagram actions */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <Heart className="w-7 h-7 text-[#8D0B41] cursor-pointer hover:scale-110 transition-transform" />
                  <MessageCircle className="w-7 h-7 text-[#8D0B41] cursor-pointer hover:scale-110 transition-transform" />
                  <Send className="w-7 h-7 text-[#8D0B41] cursor-pointer hover:scale-110 transition-transform" />
                </div>
                <Bookmark className="w-6 h-6 text-[#8D0B41] cursor-pointer hover:scale-110 transition-transform" />
              </div>

              <p className="text-sm mb-2 text-[#8D0B41]">
                <span className="font-semibold">{currentReview.likes} likes</span>
              </p>

              <p className="text-sm text-[#8D0B41] mb-2">
                <span className="font-semibold mr-2">{currentReview.username}</span>
                {currentReview.caption}
              </p>

              <p className="text-sm text-[#8D0B41] opacity-60 cursor-pointer hover:opacity-100">
                View all {currentReview.comments} comments
              </p>
            </div>
          </motion.div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#D39D55] text-[#8D0B41] hover:bg-[#D39D55] hover:text-white transition-colors flex items-center justify-center shadow-lg"
              aria-label="Previous review"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-[#8D0B41]'
                      : 'w-2 bg-[#D6CFB4] hover:bg-[#D39D55]'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#D39D55] text-[#8D0B41] hover:bg-[#D39D55] hover:text-white transition-colors flex items-center justify-center shadow-lg"
              aria-label="Next review"
            >
              →
            </button>
          </div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8D0B41] to-[#6d0832] text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow us on Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
