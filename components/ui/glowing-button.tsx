"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type CombinedProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart'> & MotionProps;

interface GlowingButtonProps extends CombinedProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
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
);

GlowingButton.displayName = "GlowingButton";