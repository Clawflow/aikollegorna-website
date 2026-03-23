"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-900"
    >
      {/* Full-width Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          src="https://images.unsplash.com/photo-1660194296630-705cd9c98a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Desert mountains landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        {/* Bottom shadow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </motion.div>

      {/* Animated gradient overlays for movement effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 mix-blend-overlay"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-32"
      >
        <div className="max-w-4xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Din nästa kollega,
              <span className="block">I en box.</span>
            </h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Mänskliga resultat, allt on premise, kollegan som aldrig är sjuk.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg transition-transform duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kom igång
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
