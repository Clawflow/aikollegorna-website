"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hur lång är bindningstiden?",
    answer:
      "Vi har en initial period på 6 månader för att säkerställa att AI-kollegan levererar värde. Efter det finns ingen bindningstid — du kan avsluta när som helst med 30 dagars uppsägningstid.",
  },
  {
    question: "Var lagras vår data?",
    answer:
      "All data stannar hos er. Vi installerar en Mac Mini on-premises som hanterar all AI-bearbetning lokalt. Ingen data lämnar ert nätverk.",
  },
  {
    question: "Hur snabbt kan vi komma igång?",
    answer:
      "Vanligtvis är en AI-kollega aktiv inom 2 veckor från det att vi börjar installationen. Den första konsultationen bokas inom 1-2 arbetsdagar.",
  },
  {
    question: "Kan vi byta plan senare?",
    answer:
      "Absolut! Du kan uppgradera eller lägga till fler AI-kollegor när som helst. Vi anpassar oss efter era behov.",
  },
  {
    question: "Vad händer om AI:n gör fel?",
    answer:
      "Alla våra AI-kollegor arbetar med human-in-the-loop. Det betyder att viktiga beslut alltid verifieras av en människa innan de genomförs. Vi övervakar och optimerar kontinuerligt.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PricingFaq() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vanliga frågor
          </h2>
          <p className="text-xl text-gray-600">
            Här hittar du svar på de vanligaste frågorna
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
