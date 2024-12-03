"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Trophy, Rocket } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    title: "Application",
    description: "Submit your application and showcase your expertise through our rigorous testing process.",
  },
  {
    icon: Trophy,
    title: "Assessment",
    description: "Complete technical challenges designed to identify the top 0.1% of developers.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our exclusive network of elite developers and start collaborating.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Access premium resources and opportunities to accelerate your career.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-400">Your journey to excellence</p>
        </motion.div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 md:block" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-950/50">
                    <step.icon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-center text-sm text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}