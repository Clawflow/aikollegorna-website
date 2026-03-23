"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-3xl p-8 lg:p-10 ${
        highlighted
          ? "bg-gray-900 text-white shadow-2xl scale-105 border-2 border-blue-500/30"
          : "bg-white text-gray-900 shadow-lg border border-gray-200"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm text-white font-medium">
          Populärast
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-500"}`}>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-5xl font-bold">{price}</span>
        <span className={`text-sm ml-2 ${highlighted ? "text-gray-300" : "text-gray-500"}`}>
          {period}
        </span>
      </div>

      <ul className="space-y-4 mb-10">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-blue-400" : "text-green-500"
              }`}
            />
            <span className={`text-sm ${highlighted ? "text-gray-200" : "text-gray-600"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-4 rounded-xl font-medium transition-colors ${
          highlighted
            ? "bg-white text-gray-900 transition-transform duration-200"
            : "bg-gray-900 text-white transition-transform duration-200"
        }`}
      >
        Kom igång
      </motion.button>
    </motion.div>
  );
}
