"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/UseInView";

const experiences = [
  {
    company: "Tech Innovators Inc.",
    position: "Senior Full Stack Developer",
    duration: "2021 - Present",
    description: "Leading development of cutting-edge web applications.",
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "2018 - 2021",
    description: "Developed and maintained multiple client projects.",
  },
  {
    company: "StartUp Ventures",
    position: "Junior Developer",
    duration: "2016 - 2018",
    description: "Assisted in the development of innovative startup products.",
  },
];

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12"
      >
        Experience
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-gray-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-400">
                  {exp.company}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">{exp.position}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
