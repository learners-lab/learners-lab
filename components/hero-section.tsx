"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Shield, Braces } from "lucide-react";
import { GlowingButton } from "@/components/ui/glowing-button";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-16">
      {/* Interactive gradient background */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.2), transparent 25%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-500/10"
          >
            <Code2 className="h-12 w-12 text-blue-400" />
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Learners Lab
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Where the top 0.1% of developers collaborate, innovate, and shape the future of code.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <GlowingButton>
              Apply Now
            </GlowingButton>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg border border-blue-500 bg-transparent px-8 py-3 text-blue-400 transition-colors hover:bg-blue-950"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { icon: Code2, label: "Elite Coding" },
            { icon: Terminal, label: "Ethical Hacking" },
            { icon: Shield, label: "Cybersecurity" },
            { icon: Braces, label: "Full Stack" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="group relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 p-4 transition-all hover:border-blue-500/50"
            >
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur transition-all group-hover:opacity-20" />
              <item.icon className="h-8 w-8 text-blue-400" />
              <span className="mt-2 block text-sm font-medium text-gray-300">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}