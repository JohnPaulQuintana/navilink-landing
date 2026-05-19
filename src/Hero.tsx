import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  const screens = [
    {
      image: "/images/img1.jpg",
      title: "Save Links Instantly",
      description:
        "Quickly save websites, tools, and resources into your personal workspace.",
    },
    {
      image: "/images/img2.jpg",
      title: "Organized Categories",
      description:
        "Keep everything clean and easy to find with smart organization.",
    },
    {
      image: "/images/img3.jpg",
      title: "Beautiful Workspace",
      description:
        "Enjoy a clean and distraction-free experience built for focus.",
    },
    {
      image: "/images/img4.jpg",
      title: "Public Collections",
      description: "Discover useful collections shared by the community.",
    },
    {
      image: "/images/img5.jpg",
      title: "Fast Access Anywhere",
      description: "Access your saved links anytime across your devices.",
    },
    {
      image: "/images/img6.jpg",
      title: "Minimal Experience",
      description: "Designed to feel lightweight, modern, and simple to use.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % screens.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <section id="hero" className="w-full pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl flex flex-col items-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 border border-white/40 backdrop-blur-xl shadow-sm">
            {/* PULSE DOT */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>

            {/* TEXT */}
            <span className="text-text-primary text-sm md:text-base font-semibold tracking-wide">
              Available Soon on Android
            </span>

            {/* OPTIONAL TAG */}
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              v1.0
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mt-7 text-5xl md:text-7xl font-extrabold leading-[1.05] text-text-primary">
            Organize Everything with{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NaviLink
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 text-text-muted text-lg md:text-xl leading-8 max-w-3xl">
            Stop losing important links, websites, and resources across tabs and
            chats. NaviLink helps you save, organize, and access everything in
            one clean workspace built for speed and simplicity.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-glass hover:scale-[1.03] transition-all"
            >
              <Download size={18} />
              Download on Google Play
            </a>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            A cleaner way to keep all your important links in one place.
          </p>
        </motion.div>

        {/* SLIDER HEADER */}
        <div className="text-center max-w-3xl mx-auto mt-24">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">
            App Preview
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
            See how{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NaviLink
            </span>{" "}
            works
          </h2>

          <p className="mt-5 text-text-muted text-lg leading-7">
            A simple, fast, and secure way to save and organize all your online
            links in one place.
          </p>
        </div>

        {/* SLIDER SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 w-full flex flex-col lg:flex-row items-center lg:items-center justify-center gap-20"
        >
          {/* LEFT - PHONE */}
          <div className="relative w-[290px] md:w-[340px] flex-shrink-0">
            <div className="relative rounded-[3.5rem] bg-gradient-to-b from-slate-900/10 to-slate-900/5 p-3 shadow-2xl border border-white/10 backdrop-blur-2xl">
              <div className="rounded-[3rem] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={screens[index].image}
                    src={screens[index].image}
                    alt={screens[index].title}
                    className="w-full h-[610px] object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* NOTCH */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/20 opacity-50 rounded-full backdrop-blur-md" />
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <motion.div
            key={screens[index].title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="
      max-w-xl w-full
      text-center lg:text-left
      min-h-[260px]
      flex flex-col justify-center
    "
          >
            {/* BIG TITLE */}
            <h3 className="text-5xl md:text-7xl font-extrabold leading-[1.05] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {screens[index].title}
            </h3>

            {/* BIG DESCRIPTION */}
            <p className="mt-6 text-text-muted text-lg md:text-xl leading-8">
              {screens[index].description}
            </p>

            {/* DOTS */}
            <div className="flex justify-start gap-2 mt-5">
              {screens.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-12 h-2 bg-gradient-to-r from-primary to-secondary"
                      : "w-8 h-2 bg-slate-300/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* GLOWS */}
          <div className="absolute -z-10 top-20 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -z-10 bottom-10 right-0 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
