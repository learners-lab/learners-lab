"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced Learning Paths",
    description: "Customized learning trajectories designed for elite developers to push their boundaries.",
  },
  {
    icon: Users,
    title: "Exclusive Network",
    description: "Connect with the brightest minds in tech through our carefully curated community.",
  },
  {
    icon: Rocket,
    title: "Innovation Hub",
    description: "Access to cutting-edge projects and opportunities to shape the future of technology.",
  },
  {
    icon: Lock,
    title: "Elite Access",
    description: "Members-only resources, events, and collaboration opportunities with industry leaders.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Join Learners Lab?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Experience the pinnacle of technological excellence
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-lg border border-blue-900/50 bg-blue-950/20 p-6 transition-all hover:border-blue-500/50"
            >
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur transition-all group-hover:opacity-20" />
              <feature.icon className="h-8 w-8 text-blue-400" />
              <h3 className="mt-4 font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}