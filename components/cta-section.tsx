"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-blue-900/50 bg-blue-950/20 p-8 sm:p-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Join the Elite?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Take the challenge and prove you're among the top 0.1% of developers.
              Your journey to excellence starts here.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group w-full bg-blue-600 hover:bg-blue-500 sm:w-auto"
              >
                Start Application
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-blue-500 text-blue-400 hover:bg-blue-950 sm:w-auto"
              >
                View Requirements
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}