// import { motion } from "framer-motion";
import { Download, Link2, ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden py-20 border-t border-white/20 bg-white/50 backdrop-blur-xl">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute -z-10 bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2">
              <Link2 className="text-primary" />
              <span className="text-xl font-bold text-text-primary">
                NaviLink
              </span>
            </div>

            <p className="mt-4 text-text-muted leading-7">
              A clean and simple way to save, organize, and access all your online links in one place.
            </p>

            {/* TRUST BADGE */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/40 shadow-glass">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-sm text-text-primary">
                Secure • Fast • Free App
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-text-muted">
              <li className="hover:text-primary cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Support
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Get Started
            </h3>

            <p className="mt-4 text-text-muted">
              NaviLink is completely free — start organizing your links now.
            </p>

            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-glass hover:scale-[1.03] transition"
            >
              <Download size={18} />
              Download Free App
            </a>

            <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
              <Mail size={14} />
              jpquintana01@gmail.app
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">

          <p>© {new Date().getFullYear()} NaviLink. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built for saving and organizing links only.
          </p>
        </div>
      </div>
    </footer>
  );
}