"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlowingButton({ children, className, ...props }: GlowingButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[120%] w-[120%] animate-spin-slow rounded-full bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 scale-x-[2.0] scale-y-[2.0] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.button>
  );
}