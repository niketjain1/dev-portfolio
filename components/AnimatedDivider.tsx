"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/UseInView";

export default function AnimatedDivider() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center space-x-4">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-purple-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
