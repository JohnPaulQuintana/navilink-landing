import { motion } from "framer-motion";
import {
  Link,
  FolderKanban,
  Globe,
  Zap,
  Share2,
  Sparkles,
  ShieldCheck,
  LockKeyhole,
  AlertTriangle,
} from "lucide-react";

export default function FeaturedSection() {
  const features = [
    {
      icon: Link,
      title: "Save Any Online Link",
      description:
        "Store websites, articles, tools, and resources instantly into your workspace.",
    },
    {
      icon: FolderKanban,
      title: "Smart Organization",
      description:
        "Automatically structure all saved links into clean, searchable collections.",
    },
    {
      icon: Globe,
      title: "Access Anywhere",
      description:
        "Your workspace stays synced so you can access all links on any device.",
    },
    {
      icon: Zap,
      title: "Fast & Clean Experience",
      description:
        "Optimized for speed so saving and opening links feels instant.",
    },
    {
      icon: LockKeyhole,
      title: "Email OTP Authentication",
      description:
        "Secure login using Email OTP ensures only you can access your saved links.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Public Sharing",
      description:
        "Share collections while automatically hiding private or restricted links.",
    },
    {
      icon: AlertTriangle,
      title: "Malicious Link Detection",
      description:
        "Automatically detects unsafe or suspicious links to keep your workspace protected.",
    },
    {
      icon: Share2,
      title: "Share With Ease",
      description:
        "Send individual links or full collections in just one click.",
    },
    {
      icon: Sparkles,
      title: "Resume Where You Left Off",
      description:
        "Continue your browsing journey anytime with saved session history and last viewed links.",
    },
  ];

  return (
    <section id="features" className="w-full py-28 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -z-10 bottom-10 right-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm font-semibold text-primary tracking-widest uppercase">
            Features
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-extrabold text-text-primary leading-tight">
            Organize & secure{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              all your online links
            </span>
          </h2>

          <p className="mt-5 text-text-muted text-lg leading-7">
            NaviLink is a secure link organizer built for saving, structuring,
            protecting, and resuming any online content with Email OTP authentication
            and intelligent safety checks.
          </p>

          {/* SECURITY BADGE */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border border-white/40 shadow-glass backdrop-blur-xl">
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-sm text-text-primary">
              OTP secured • Safe link scanning • Session resume enabled
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="
                  relative group p-7 rounded-2xl
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
                  flex items-center justify-center
                  text-white shadow-md
                  group-hover:scale-110 transition
                ">
                  <Icon size={20} />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-text-muted leading-7 text-sm">
                  {item.description}
                </p>

                {/* GLOW */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}