'use client';

import { motion, AnimatePresence, Transition, Variants } from 'framer-motion';
import React, { useState, useEffect, Children } from 'react';

/**
 * Simple helper that joins classNames.
 * If you already have a similar function in /lib/utils.ts, you can import it instead.
 */
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export type TextLoopProps = {
  /** An array of React children (string spans, etc.) */
  children: React.ReactNode[];
  /** Additional tailwind or custom classNames */
  className?: string;
  /** Interval in seconds to hold each word before flipping to the next */
  interval?: number;
  /** Framer Motion transition props */
  transition?: Transition;
  /** Framer Motion variants for entry/exit animations */
  variants?: Variants;
  /** Callback whenever the text index changes */
  onIndexChange?: (index: number) => void;
  /** Whether to keep auto-rotating or pause */
  trigger?: boolean;
};

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
  trigger = true,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (!trigger) return;

    const intervalMs = interval * 1000;
    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange, trigger]);

  // Fallback basic variants if none provided
  const defaultVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div className={cn('relative inline-block whitespace-nowrap', className)}>
      <AnimatePresence mode='popLayout' initial={false}>
        <motion.div
          key={currentIndex}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={transition}
          variants={variants || defaultVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
