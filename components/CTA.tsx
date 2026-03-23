"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CTA() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 lg:p-20"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Redo att komma igång?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Följ med tusentals team som redan använder vår plattform för att
              bygga fantastiska produkter. Starta din kostnadsfria provperiod
              idag, inget kreditkort krävs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-10 py-5 bg-black text-white rounded-full font-medium shadow-xl hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Boka demo
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-sm mt-8"
            >
              ✓ Inget kreditkort krävs ✓ 14 dagars gratis provperiod ✓ Avsluta
              när som helst
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
