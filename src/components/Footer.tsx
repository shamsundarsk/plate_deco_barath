import { motion } from "motion/react";
import { MapPin, Mail, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-br from-[#8D0B41] to-[#6d0832] text-white overflow-hidden">
      {/* Decorative border animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent origin-center"
      />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4">
              Artisan Plates
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Handcrafted traditional plate decorations that honor your sacred celebrations with artistry and devotion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D39D55] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D39D55] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#catalog" className="hover:text-[#D39D55] transition-colors">
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-[#D39D55] transition-colors">
                  Occasions
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D39D55] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-[#D39D55] transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D39D55] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Bangalore, Karnataka<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919999999999" className="hover:text-[#D39D55] transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@artisanplates.com" className="hover:text-[#D39D55] transition-colors">
                  info@artisanplates.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white/60 text-sm"
        >
          <div className="flex items-center justify-center gap-2">
            <span>Made by</span>
            <a
              href="https://porygonsol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#D39D55] transition-colors"
            >
              <img
                src="/icon.png"
                alt="Porygon"
                className="w-6 h-6"
              />
              <span>Porygon</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative closing animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D39D55] to-transparent origin-center"
      />
    </footer>
  );
}
