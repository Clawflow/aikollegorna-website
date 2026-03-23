"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Medarbetare", href: "/medarbetare" },
  { label: "Hur det fungerar", href: "/hur-det-fungerar" },
  { label: "Priser", href: "/priser" },
];
const aboutDropdown = [
  { label: "Blogg", href: "/blogg" },
  { label: "Kundcase", href: "/kundcase" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(229, 231, 235, 0)", "rgba(229, 231, 235, 1)"]
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(17, 24, 39, 1)"]
  );

  const buttonBgColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(17, 24, 39, 1)"]
  );

  const buttonTextColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(17, 24, 39, 1)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
    >
      <motion.div style={{ borderColor }} className="border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <motion.span
                  style={{ color: textColor }}
                  className="text-2xl font-bold whitespace-nowrap"
                >
                  AI kollegorna
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors relative group"
                  >
                    <motion.span
                      style={{ color: textColor }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.05,
                      }}
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <Link
                  href="/om-oss"
                  className="transition-colors relative group flex items-center gap-1"
                >
                  <motion.span
                    style={{ color: textColor }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + navItems.length * 0.05,
                    }}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1"
                  >
                    Om oss
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Dropdown Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: isAboutOpen ? 1 : 0,
                    y: isAboutOpen ? 0 : -10,
                    pointerEvents: isAboutOpen ? ("auto" as const) : ("none" as const),
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                >
                  {aboutDropdown.map((item, index) => (
                    <motion.div key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: isAboutOpen ? 1 : 0,
                            x: isAboutOpen ? 0 : -10,
                          }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          {item.label}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.nav>

            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <motion.button
                style={{
                  backgroundColor: buttonBgColor,
                  color: buttonTextColor,
                }}
                className="px-6 py-3 rounded-full transition-colors relative overflow-hidden"
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
                <span className="relative z-10">Kom igång</span>
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <motion.div style={{ color: textColor }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div style={{ color: textColor }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.div key={item.label}>
              <Link
                href={item.href}
                className="block py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}

          {/* Mobile About Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              Om oss
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <motion.div
              initial={false}
              animate={{
                height: isAboutOpen ? "auto" : 0,
                opacity: isAboutOpen ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pl-4"
            >
              <Link
                href="/om-oss"
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Om oss
              </Link>
              {aboutDropdown.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.button
            className="w-full px-6 py-3 bg-gray-900 text-white rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileTap={{ scale: 0.95 }}
          >
            Kom igång
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
}
