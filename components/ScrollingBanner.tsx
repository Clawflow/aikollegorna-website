"use client";

import { motion } from "framer-motion";

const features = [
  "Konsekvent varumärke",
  "Data stannar hos dig",
  "Alltid på 24/7",
  "GDPR-säkert",
  "Aldrig mer 2 veckor",
  "Fler siffror avslutade",
  "Uteie administrativa",
  "Skala utan att anställa",
  "Konsekvent varumärke",
  "Data stannar hos dig",
  "Alltid på 24/7",
  "GDPR-säkert",
];

export function ScrollingBanner() {
  return (
    <div className="w-full py-6 overflow-hidden absolute top-[85vh] left-0 right-0 z-10">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate the content to create seamless loop */}
        {[...features, ...features].map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-white text-lg font-medium drop-shadow-lg">
              {feature}
            </span>
            <span className="text-white/60">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
