"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useInView } from "@/hooks/UseInView";
import Avatar from "./Avatar";

export default function Introduction() {
  const router = useRouter();
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const handleExplore = () => {
    router.push("#experience");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-16 pb-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center z-10 flex flex-col items-center justify-center"
      >
        <motion.div variants={avatarVariants} transition={{ duration: 0.6 }}>
          <Avatar />
        </motion.div>
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Niket Jain
        </motion.h1>
        <motion.p 
          variants={itemVariants} 
          className="text-lg sm:text-xl mb-4"
        >
          Software Engineer & Tech Enthusiast
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg mb-8 max-w-2xl">
          Passionate about creating innovative web solutions and exploring
          cutting-edge technologies. With expertise in both front-end and
          back-end development, and AI tech, I bring ideas to life through
          clean, efficient, and scalable code.
        </motion.p>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
          onClick={handleExplore}
        >
          Explore My Work
        </motion.button>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full"
            style={{
              width: Math.random() * 5 + "px",
              height: Math.random() * 5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
