"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Konsultation",
    description:
      "45 minuter, kostnadsfritt, inga förbindelser. Vi lyssnar och identifierar rätt use case.",
    badges: ["Kostnadsfritt", "45 min"],
  },
  {
    number: "02",
    title: "Installation",
    description:
      "Mac Mini installeras hos er. Data stannar on-premises. Aktiv inom 2 veckor.",
    badges: ["On-premises", "2 veckor"],
  },
  {
    number: "03",
    title: "Löpande optimering",
    description:
      "Fast månadsavgift. Human-in-the-loop. Ingen inlåsning efter 6 månader.",
    badges: ["Fast pris", "Ingen inlåsning"],
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div ref={containerRef} className="relative py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-wider text-gray-500 mb-6 uppercase"
            >
              Hur det fungerar
            </motion.p>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tre steg till din första AI kollega
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              En enkel process som tar dig från idé till fungerande AI-kollega
              på under en månad.
            </p>
          </motion.div>

          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Desert Landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-sm text-gray-400 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {step.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium shadow-lg transition-transform duration-200 transition-shadow"
          >
            Läs mer om processen
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
