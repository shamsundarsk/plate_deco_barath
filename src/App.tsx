import { HeroSection } from "./components/HeroSection";
import { PaperLayerSection } from "./components/PaperLayerSection";
import { ClothLayerSection } from "./components/ClothLayerSection";
import { CatalogSection } from "./components/CatalogSection";
import { UpperDecorSection } from "./components/UpperDecorSection";
import { InstagramReviewsSection } from "./components/InstagramReviewsSection";
import { AppointmentSection } from "./components/AppointmentSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section - The Plate (Base Layer) */}
      <HeroSection />

      {/* Paper Layer Section */}
      <PaperLayerSection />

      {/* Cloth Layer Section - Occasions */}
      <ClothLayerSection />

      {/* Decorative Items Layer - Catalog */}
      <CatalogSection />

      {/* Upper Decorations Layer */}
      <UpperDecorSection />

      {/* Instagram Reviews Section */}
      <InstagramReviewsSection />

      {/* Appointment & Contact Section */}
      <AppointmentSection />

      {/* Footer - Closing the Plate */}
      <Footer />
    </div>
  );
}
