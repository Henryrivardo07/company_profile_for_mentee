"use client";

import { Slot } from "@radix-ui/react-slot";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface SkewMotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const SkewMotion: React.FC<SkewMotionProps> = ({
  children,
  duration,
  delay,
  asChild,
  ...motionProps
}) => {
  const Comp = asChild ? MotionSlot : MotionDiv;

  return (
    <Comp
      {...motionProps}
      transition={{ duration, delay }}
      animate={{ skewX: -7 }}
    >
      {children}
    </Comp>
  );
};

export default SkewMotion;
