import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Share2,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function CommunitySection() {
  const categories = [
    {
      icon: GraduationCap,
      title: "For Students",
      desc: "Save learning links, references, notes, and study resources in one organized space.",
      tags: ["Study Links", "Notes", "Research"],
    },
    {
      icon: Briefcase,
      title: "For Work",
      desc: "Organize dashboards, documents, tools, and important work-related links.",
      tags: ["Productivity", "Work Links", "Docs"],
    },
    {
      icon: Share2,
      title: "Social Saves",
      desc: "Save useful web posts, articles, and online resources.",
      tags: ["Articles", "Posts", "Web"],
    },
    {
      icon: Search,
      title: "Google & Research",
      desc: "Keep your important search results, guides, and references in one place.",
      tags: ["Search", "Google", "References"],
    },
  ];

  return (
    <section id="community" className="w-full py-28 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -z-10 bottom-20 right-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">
            Community Use Cases
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-extrabold text-text-primary leading-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              organized link saving
            </span>
          </h2>

          <p className="mt-5 text-text-muted text-lg leading-7">
            NaviLink is focused only on saving and organizing online links — no
            videos, no distractions, just clean structured saving.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="
                  relative p-6 rounded-2xl
                  bg-white/70 border border-white/40
                  backdrop-blur-xl shadow-glass
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

                {/* ICON */}
                <div className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-r from-primary to-secondary
                  flex items-center justify-center text-white
                  shadow-md
                ">
                  <Icon size={20} />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-text-muted text-sm leading-6">
                  {item.desc}
                </p>

                {/* TAGS */}
                {/* <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div> */}

                {/* SOFT GLOW */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </div>

        {/* FINAL MESSAGE */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 border border-white/40 backdrop-blur-xl shadow-glass">
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-sm text-text-primary font-medium">
              Secure • Organized • Links-only platform
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}