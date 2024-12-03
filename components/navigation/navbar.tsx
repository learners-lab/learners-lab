"use client";

import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-blue-900/50 bg-black/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center space-x-8">
          <a href="#" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition-all group-hover:opacity-100" />
              <Code2 className="relative h-8 w-8 text-blue-500 transition-colors group-hover:text-white" />
            </div>
            <span className="text-xl font-bold text-white">Learners Lab</span>
          </a>
          <nav className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm text-gray-400 transition-colors hover:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button
              size="sm"
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 transition-transform hover:scale-105"
            >
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity hover:opacity-20" />
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 transition-colors hover:text-blue-400 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="space-y-4 px-6 pb-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-400 transition-colors hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Join Now
          </Button>
        </div>
      </motion.nav>
    </motion.header>
  );
}