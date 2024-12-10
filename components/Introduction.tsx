"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useInView } from "@/hooks/UseInView";

export default function Introduction() {
  const router = useRouter();
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const handleExplore = () => {
    router.push("#projects");
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

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center z-10"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-4">
          John Doe
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl mb-4">
          Full Stack Developer & Tech Enthusiast
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg mb-8 max-w-2xl">
          Passionate about creating innovative web solutions and exploring
          cutting-edge technologies. With expertise in both front-end and
          back-end development, I bring ideas to life through clean, efficient,
          and scalable code.
        </motion.p>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
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
            className="absolute bg-purple-500 rounded-full"
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
