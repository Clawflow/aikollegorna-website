"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cases = [
  {
    id: 1,
    title: "Leads som aldrig följs upp",
    description: "Affärer som rinner igenom fingrarna.",
    number: "01",
    backContent:
      "TeamAI:s AI-kollegor hjälper dig att systematiskt följa upp varje lead och säkerställa att inga affärsmöjligheter går förlorade.",
  },
  {
    id: 2,
    title: "Hemsidan och innehållet uppdateras inte",
    description: "Företaget syns inte när det gäller.",
    number: "02",
    backContent:
      "Med våra AI-kollegor kan du hålla ditt innehåll aktuellt och relevant, vilket ökar din synlighet när det verkligen räknas.",
  },
  {
    id: 3,
    title: "Teamet springer på för många bollar",
    description: "Det viktiga trängs undan av det brådskande.",
    number: "03",
    backContent:
      "Låt AI-kollegor hantera de brådskande uppgifterna så ditt team kan fokusera på det som verkligen driver verksamheten framåt.",
  },
  {
    id: 4,
    title: "Man vet att AI kan hjälpa",
    description: "Men inte hur man sätter upp det säkert och strukturerat.",
    number: "04",
    backContent:
      "Vi guidar dig genom hela processen och säkerställer att AI implementeras på ett säkert och strukturerat sätt i din organisation.",
  },
];

function FlipCard({ caseStudy }: { caseStudy: (typeof cases)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full p-8 flex flex-col justify-between">
            <div>
              <div className="text-sm text-gray-900 opacity-40 mb-4">
                {caseStudy.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {caseStudy.title}
              </h3>
              <p className="text-sm text-gray-900 opacity-60">
                {caseStudy.description}
              </p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Lösning
            </div>
            <p className="text-base leading-relaxed">
              {caseStudy.backContent}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <div className="py-24 bg-white" id="kundcase">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Kundcase</h2>
            <p className="text-xl text-gray-500">
              Se hur ledande företag använder våra AI-kollegor för att
              transformera sina team
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap"
          >
            Boka demo
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[240px]">
          {cases.map((caseStudy) => (
            <FlipCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </div>
  );
}
