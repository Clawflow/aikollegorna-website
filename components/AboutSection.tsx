"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Vi bygger framtidens
              <br />
              arbetskraft
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              AI kollegorna grundades med en enkel vision: att ge svenska små och
              medelstora företag tillgång till samma AI-kapacitet som storbolagen
              — utan komplexitet, utan molntjänster, utan risk.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Vi tror att framtidens team är en blandning av människor och
              AI-kollegor som arbetar sida vid sida. Varje AI-kollega är tränad
              för en specifik roll och levererar mänskliga resultat — dygnet
              runt, utan sjukdagar, med all data kvar hos er.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "50+", label: "Aktiva AI-kollegor" },
              { number: "98%", label: "Kundnöjdhet" },
              { number: "<2v", label: "Till aktiv AI-kollega" },
              { number: "100%", label: "On-premise" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
