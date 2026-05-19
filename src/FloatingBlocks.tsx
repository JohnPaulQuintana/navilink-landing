import { motion } from "framer-motion";

export default function FloatingBlocks() {
  const blocks = [
    {
      size: 680,
      left: "-10%",
      top: "-15%",
      delay: 0,
      className:
        "bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10",
      blur: "blur-[120px]",
      opacity: "opacity-80",
    },
    {
      size: 340,
      left: "68%",
      top: "12%",
      delay: 1,
      className:
        "bg-gradient-to-br from-secondary/25 via-primary/15 to-secondary/10",
      blur: "blur-[90px]",
      opacity: "opacity-70",
    },
    {
      size: 600,
      left: "30%",
      top: "68%",
      delay: 2,
      className:
        "bg-gradient-to-br from-primary/20 via-secondary/15 to-primary/5",
      blur: "blur-[110px]",
      opacity: "opacity-60",
    },
    {
      size: 260,
      left: "82%",
      top: "72%",
      delay: 3,
      className:
        "bg-gradient-to-br from-secondary/20 to-primary/10",
      blur: "blur-[80px]",
      opacity: "opacity-50",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${block.className} ${block.blur} ${block.opacity}`}
          style={{
            width: block.size,
            height: block.size,
            left: block.left,
            top: block.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 14,
            delay: block.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}