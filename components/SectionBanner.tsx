"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/UseInView";

interface SectionBannerProps {
  title: string;
  subtitle?: string;
}

export default function SectionBanner({ title, subtitle }: SectionBannerProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-400 p-8 mb-12 text-white"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-xl text-blue-100">{subtitle}</p>}
      </div>
    </motion.div>
  );
}
