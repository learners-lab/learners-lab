"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Security Engineer at Xenithub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Learners Lab pushed me beyond what I thought was possible. The community here represents true excellence in coding.",
  },
  {
    name: "Raju Rastogi",
    role: "Tech Lead at InFutureo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Being part of the top 0.1% means constantly evolving. Learners Lab provides the perfect environment for that growth.",
  },
  {
    name: "Alex Kumar",
    role: "Blockchain Architect",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
    content: "The caliber of talent here is unmatched. Every interaction pushes you to elevate your skills.",
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Voices of Excellence
        </motion.h2>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative h-full overflow-hidden border-blue-900/50 bg-blue-950/20 p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{testimonial.content}</p>
                <div className="absolute -right-2 -top-2 h-24 w-24 opacity-10">
                  <div className="h-full w-full rotate-12 bg-gradient-to-br from-blue-500 to-purple-500" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}