import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  Link,
  Globe,
  AlertTriangle,
} from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "What is NaviLink used for?",
      a: "NaviLink is a secure workspace to save, organize, and manage all your online links in one place.",
      icon: Link,
    },
    {
      q: "Can I save any type of link?",
      a: "Yes — you can save websites, articles, tools, documentation, and any valid online URL.",
      icon: Globe,
    },
    {
      q: "How secure is my account?",
      a: "Your account is protected using Email OTP authentication, ensuring only you can access your saved links.",
      icon: LockKeyhole,
    },
    {
      q: "Does NaviLink show ads or videos?",
      a: "No. NaviLink is strictly focused on saving and organizing links — no ads, no videos, no distractions.",
      icon: ShieldCheck,
    },
    {
      q: "What happens with unsafe links?",
      a: "NaviLink detects suspicious or malicious links and automatically flags or hides them to keep your workspace safe.",
      icon: AlertTriangle,
    },
    {
      q: "Can I share my saved links?",
      a: "Yes — you can share collections, and private or restricted links are automatically hidden when sharing publicly.",
      icon: Globe,
    },
  ];

  return (
    <section id="faq" className="w-full py-28 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -z-10 bottom-10 right-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-extrabold text-text-primary leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-text-muted text-lg leading-7">
            Everything you need to know about how NaviLink works as a secure,
            links-only organizer.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-14 space-y-4">

          {faqs.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="
                  group p-6 rounded-2xl
                  bg-white/70 border border-white/40
                  backdrop-blur-xl shadow-glass
                  hover:bg-white/80 transition shrink-0
                "
              >
                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="
                    w-10 h-10 rounded-xl
                    bg-gradient-to-r from-primary to-secondary
                    flex items-center justify-center text-white
                    flex-shrink-0
                  ">
                    <Icon size={18} className="shrink-0" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {item.q}
                    </h3>

                    <p className="mt-2 text-text-muted leading-7 text-sm">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST FOOTER */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 border border-white/40 shadow-glass backdrop-blur-xl">
            <ShieldCheck size={16} className="text-primary shrink-0" />
            <span className="text-sm text-text-primary font-medium">
              Secure • OTP Protected • Links-only Platform • No distractions
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}