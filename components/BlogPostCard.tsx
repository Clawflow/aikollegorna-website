"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  delay?: number;
}

export function BlogPostCard({
  title,
  excerpt,
  date,
  category,
  image,
  delay = 0,
}: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer"
    >
      <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
            {category}
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{excerpt}</p>
        <motion.span
          className="inline-flex items-center gap-2 text-gray-900 font-medium text-sm"
          whileHover={{ x: 5 }}
        >
          Läs mer <ArrowRight className="w-4 h-4" />
        </motion.span>
      </div>
    </motion.article>
  );
}
