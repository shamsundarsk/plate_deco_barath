import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, User, DollarSign, Phone, Check } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const occasions = [
  "Varalakshmi Vratham",
  "Navaratri",
  "Diwali",
  "Wedding",
  "Engagement",
  "Pooja",
  "Housewarming",
  "Birthday",
  "Other"
];

const budgetRanges = [
  "₹500 - ₹1000",
  "₹1000 - ₹2000",
  "₹2000 - ₹3000",
  "₹3000 - ₹5000",
  "₹5000+"
];

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    occasion: "",
    date: "",
    budget: "",
    whatsapp: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        occasion: "",
        date: "",
        budget: "",
        whatsapp: "",
        notes: ""
      });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'd like to book a plate decoration for ${formData.occasion || "an occasion"}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#FFF8E6] to-[#D6CFB4]/30">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #8D0B41 0px, #8D0B41 2px, transparent 2px, transparent 20px),
                           repeating-linear-gradient(-45deg, #D39D55 0px, #D39D55 2px, transparent 2px, transparent 20px)`
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#8D0B41]">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent mx-auto mb-6" />
          <p className="text-lg text-[#8D0B41] opacity-80">
            Let's create something beautiful for your special occasion
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#D6CFB4] relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#D39D55]/10 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#8D0B41]/10 to-transparent rounded-tl-full" />

          {submitted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6"
              >
                <Check className="w-12 h-12 text-green-600" />
              </motion.div>
              <h3 className="text-2xl mb-3 text-[#8D0B41]">
                Thank You!
              </h3>
              <p className="text-[#8D0B41] opacity-80 text-center">
                We've received your booking request. We'll contact you shortly via WhatsApp.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-2 text-[#8D0B41]">
                  <User className="w-4 h-4" />
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="border-2 border-[#D6CFB4] focus:border-[#D39D55] bg-[#FFF8E6] text-[#8D0B41]"
                />
              </div>

              {/* Occasion */}
              <div>
                <Label htmlFor="occasion" className="flex items-center gap-2 mb-2 text-[#8D0B41]">
                  <Calendar className="w-4 h-4" />
                  Occasion
                </Label>
                <select
                  id="occasion"
                  required
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#D6CFB4] rounded-lg focus:border-[#D39D55] focus:outline-none bg-[#FFF8E6] text-[#8D0B41]"
                >
                  <option value="">Select an occasion</option>
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>
                      {occasion}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <Label htmlFor="date" className="flex items-center gap-2 mb-2 text-[#8D0B41]">
                  <Calendar className="w-4 h-4" />
                  Event Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="border-2 border-[#D6CFB4] focus:border-[#D39D55] bg-[#FFF8E6] text-[#8D0B41]"
                />
              </div>

              {/* Budget */}
              <div>
                <Label htmlFor="budget" className="flex items-center gap-2 mb-2 text-[#8D0B41]">
                  <DollarSign className="w-4 h-4" />
                  Budget Range
                </Label>
                <select
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#D6CFB4] rounded-lg focus:border-[#D39D55] focus:outline-none bg-[#FFF8E6] text-[#8D0B41]"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* WhatsApp */}
              <div>
                <Label htmlFor="whatsapp" className="flex items-center gap-2 mb-2 text-[#8D0B41]">
                  <Phone className="w-4 h-4" />
                  WhatsApp Number
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+91 9876543210"
                  className="border-2 border-[#D6CFB4] focus:border-[#D39D55] bg-[#FFF8E6] text-[#8D0B41]"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <Label htmlFor="notes" className="mb-2 text-[#8D0B41]">
                  Additional Requirements (Optional)
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific requirements or preferences..."
                  rows={4}
                  className="border-2 border-[#D6CFB4] focus:border-[#D39D55] bg-[#FFF8E6] text-[#8D0B41] resize-none"
                />
              </div>

              {/* Submit buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-[#8D0B41] hover:bg-[#6d0832] text-white py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Book Appointment
                </Button>
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 text-[#8D0B41] opacity-80"
        >
          <p>
            Questions? Call us at <a href="tel:+919999999999" className="underline hover:text-[#D39D55]">+91 99999 99999</a>
          </p>
          <p className="text-sm mt-2">
            We typically respond within 2-3 hours during business hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
