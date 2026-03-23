"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Heart, Eye } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Säkerhet först",
    description:
      "All data stannar on-premises hos kunden. Vi tar aldrig genvägar med datasäkerhet.",
  },
  {
    icon: Zap,
    title: "Mänskliga resultat",
    description:
      "Våra AI-kollegor levererar kvalitet som matchar — och ofta överträffar — mänskliga medarbetare.",
  },
  {
    icon: Heart,
    title: "Transparens",
    description:
      "Fast pris, ingen inlåsning, human-in-the-loop. Vi bygger förtroende genom öppenhet.",
  },
  {
    icon: Eye,
    title: "Kundfokus",
    description:
      "Varje AI-kollega anpassas efter just era behov. Vi lyssnar, anpassar och optimerar kontinuerligt.",
  },
];

export function ValuesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Våra värderingar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Principerna som guidar allt vi gör
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
