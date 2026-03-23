"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Anton Pernvik",
    role: "VD & Grundare",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "Entreprenör med passion för AI och svenska SME:er.",
  },
  {
    name: "Sara Lindqvist",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "15 års erfarenhet av AI och maskininlärning.",
  },
  {
    name: "Erik Johansson",
    role: "Head of Customer Success",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "Säkerställer att varje AI-kollega levererar mänskliga resultat.",
  },
];

export function TeamSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vårt team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Människorna bakom AI-kollegorna
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
