"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";

const icons = [
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCode,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
];

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)];
        return (
          <motion.div
            key={i}
            className="absolute text-blue-200 opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
}
