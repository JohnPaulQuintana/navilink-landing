import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Link } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "pt-2" : "pt-4"
      }`}
    >
      {/* GLASS CONTAINER */}
      <div
        className="
          max-w-6xl mx-auto px-6 h-16
          flex items-center justify-between
          rounded-2xl
          border border-white/40
          bg-white/40
          backdrop-blur-xl
          shadow-[0_8px_30px_rgb(0,0,0,0.06)]
        "
      >
        {/* LEFT - LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm bg-white/40 backdrop-blur-md">
            <img
              src="/logo-colored.png"
              alt="NaviLink Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="-ms-2 text-text-primary font-semibold text-lg tracking-wide">
            NaviLink
          </span>
        </div>

        {/* CENTER NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {["Features", "Community", "FAQ"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-text-muted hover:text-primary transition font-medium"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* RIGHT CTA */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#download"
            className="
              px-5 py-2
              rounded-xl
              bg-gradient-to-r from-primary to-secondary
              text-white text-sm font-semibold
              shadow-md hover:shadow-lg
              transition
            "
          >
            Download on Google
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}
