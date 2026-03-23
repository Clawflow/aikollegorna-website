"use client";

import { motion } from "framer-motion";

export function MeetWorkers() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          Din nästa kollega
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Mänskliga resultat, allt on premise, kollegan som aldrig är sjuk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              scale: { type: "spring", stiffness: 400, damping: 10 },
            }}
          >
            Kom igång
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
