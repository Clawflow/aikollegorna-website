"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const workers = [
  {
    name: "Alice",
    subtitle: "Content Manager",
    description:
      "Alice förvandlar dina idéer till engagerande innehåll. Hon skapar, redigerar och optimerar innehåll över alla plattformar samtidigt som hon bibehåller ditt varumärkes röst.",
    image: "/images/workers/alice.jpg",
    cta: "Anställ Alice",
  },
  {
    name: "Emma",
    subtitle: "Social Media Manager",
    description:
      "Emma lär sig från varje inlägg, anpassar sig till din publik och höjer din sociala närvaro dygnet runt med datadrivna insikter.",
    image: "/images/workers/emma.jpg",
    cta: "Anställ Emma",
  },
  {
    name: "Axel",
    subtitle: "B2B Sales Person",
    description:
      "Axel engagerar prospects över kanaler, driver kvalificerade möten och bygger pipeline medan du fokuserar på att stänga affärer.",
    image: "/images/workers/axel.jpg",
    cta: "Anställ Axel",
  },
];

export function DigitalWorkers() {
  return (
    <div className="pt-6 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {workers.map((worker, index) => (
            <motion.div
              key={worker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Portrait Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[3/4] mb-6">
                <Image
                  src={worker.image}
                  alt={worker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Description Below Image */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {worker.name}{" "}
                  <span className="text-gray-400 font-normal">
                    – {worker.subtitle}
                  </span>
                </h3>
                <div className="h-px bg-gray-200" />
                <p className="text-gray-600 leading-relaxed">
                  {worker.description}
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {worker.cta} <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
