import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function FinalCtaBanner() {
  return (
    <section className="w-full py-24 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -z-10 bottom-10 right-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          max-w-5xl mx-auto px-6
          rounded-[2.5rem]
          bg-white/70 border border-white/40
          backdrop-blur-2xl shadow-glass
          p-12 md:p-16
          text-center
          relative overflow-hidden
        "
      >

        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm bg-white/40 backdrop-blur-md">
            <img
              src="/logo-colored.png"
              alt="NaviLink Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-2xl font-bold text-text-primary">
            NaviLink
          </span>
        </div>

        {/* HEADLINE */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
          Start organizing your{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            links smarter today
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-8">
          Save any online link, organize everything in one place, and access it
          anytime with secure Email OTP authentication.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="#download"
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-2xl
              bg-gradient-to-r from-primary to-secondary
              text-white font-semibold
              shadow-glass
              hover:scale-[1.04]
              transition-all duration-200
            "
          >
            <Download size={18} />
            Download Navilink
          </a>

          
        </div>

        {/* TRUST LINE */}
        <p className="mt-8 text-sm text-text-muted">
          Free to use • Built for fast and simple link management
        </p>
      </motion.div>
    </section>
  );
}