import { motion } from "framer-motion";

export default function FloatingBlocks() {
  const blocks = [
    {
      size: { base: 280, md: 680 },
      left: { base: "-30%", md: "-10%" },
      top: { base: "-10%", md: "-15%" },
      delay: 0,
      className:
        "bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10",
      blur: { base: "blur-[60px]", md: "blur-[120px]" },
      opacity: "opacity-80",
    },
    {
      size: { base: 160, md: 340 },
      left: { base: "55%", md: "68%" },
      top: { base: "5%", md: "12%" },
      delay: 1,
      className:
        "bg-gradient-to-br from-secondary/25 via-primary/15 to-secondary/10",
      blur: { base: "blur-[50px]", md: "blur-[90px]" },
      opacity: "opacity-70",
    },
    {
      size: { base: 220, md: 600 },
      left: { base: "15%", md: "30%" },
      top: { base: "60%", md: "68%" },
      delay: 2,
      className:
        "bg-gradient-to-br from-primary/20 via-secondary/15 to-primary/5",
      blur: { base: "blur-[70px]", md: "blur-[110px]" },
      opacity: "opacity-60",
    },
    {
      size: { base: 140, md: 260 },
      left: { base: "70%", md: "82%" },
      top: { base: "75%", md: "72%" },
      delay: 3,
      className:
        "bg-gradient-to-br from-secondary/20 to-primary/10",
      blur: { base: "blur-[40px]", md: "blur-[80px]" },
      opacity: "opacity-50",
    },
  ];

  const get = (val: any) => (typeof val === "object" ? val.base : val);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 max-w-full">
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${block.className} ${
            typeof block.blur === "object" ? block.blur.base : block.blur
          } ${block.opacity}`}
          style={{
            width: get(block.size),
            height: get(block.size),
            left: get(block.left),
            top: get(block.top),
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 8, 0],
            scale: [1, 1.03, 1],
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