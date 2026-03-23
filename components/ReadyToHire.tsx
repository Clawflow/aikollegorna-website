"use client";

import { motion } from "framer-motion";
import { Shield, FileCheck, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    text: "Data stannar hos dig",
  },
  {
    icon: FileCheck,
    text: "Svenskt bolag — GDPR-first",
  },
  {
    icon: Users,
    text: "Human-in-the-loop alltid",
  },
  {
    icon: Clock,
    text: "Aktiv inom 2 veckor",
  },
];

export function ReadyToHire() {
  return (
    <div className="py-24 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-full px-6 py-4 flex items-center gap-3 shadow-sm"
            >
              <feature.icon className="w-5 h-5 text-[#4a9d9c] flex-shrink-0" />
              <span className="text-gray-900">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-16 lg:p-24 shadow-xl text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Redo att anställa din första AI-kollega?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Boka en kostnadsfri konsultation. 45 minuter, inga förbindelser.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:bg-gray-800 transition-colors"
          >
            Kom igång
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
