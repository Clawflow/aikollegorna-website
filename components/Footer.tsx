"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "Medarbetare", href: "/medarbetare" },
  { label: "Hur det fungerar", href: "/hur-det-fungerar" },
  { label: "Priser", href: "/priser" },
];

const companyLinks = [
  { label: "Om oss", href: "/om-oss" },
  { label: "Blogg", href: "/blogg" },
  { label: "Kundcase", href: "/kundcase" },
];

const workers = ["Alice", "Emma", "Axel"];

const legalLinks = ["Integritetspolicy", "Användarvillkor", "Cookies"];

const policyLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Website Tracking Policy",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1660194296630-705cd9c98a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-40 mb-10">
          {/* Left Side */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Logo and Workers */}
            <div className="flex flex-col gap-8">
              {/* Logo Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 w-fit h-fit"
              >
                <h3 className="text-3xl font-bold text-gray-900 whitespace-nowrap">
                  AI kollegorna
                </h3>
              </motion.div>

              {/* Workers Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 w-fit h-fit"
              >
                <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">
                  Workers
                </h4>
                <div className="space-y-3">
                  {workers.map((worker) => (
                    <div key={worker}>
                      <Link
                        href="/medarbetare"
                        className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                      >
                        {worker}
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Center Column - Quicklinks */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 w-fit h-fit"
              >
                <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">
                  Quicklinks
                </h4>
                <div className="space-y-3">
                  {[...productLinks, ...companyLinks].map((link) => (
                    <div key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Policies Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 w-fit h-fit"
              >
                <div className="space-y-3">
                  {policyLinks.map((link) => (
                    <div key={link}>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 w-fit h-fit"
              >
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-300/80 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-300/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-300/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row gap-8 justify-end">
          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 w-fit h-fit"
          >
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              {legalLinks.map((link, index) => (
                <span key={link}>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="ml-6">·</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 w-fit h-fit flex items-center"
          >
            <p className="text-sm text-gray-500">
              © All rights reserved 2026 AI kollegorna
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
