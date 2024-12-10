"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/UseInView";
import SectionBanner from "./SectionBanner";

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary AI-powered task management system.",
    details:
      "Project Alpha utilizes cutting-edge machine learning algorithms to prioritize and manage tasks efficiently. Built with React, Node.js, and TensorFlow.js.",
    github: "https://github.com/johndoe/project-alpha",
    live: "https://project-alpha.com",
  },
  {
    title: "Beta App",
    description: "Cross-platform mobile app for health tracking.",
    details:
      "Beta App is a comprehensive health tracking solution developed using React Native. It integrates with various wearable devices and provides insightful health analytics.",
    github: "https://github.com/johndoe/beta-app",
    live: "https://beta-app.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" ref={ref} className="py-12">
      <SectionBanner title="Projects" subtitle="Showcasing my best work" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-white shadow-lg border-blue-200 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-800"
                    >
                      {project.details}
                    </motion.p>
                  )}
                </AnimatePresence>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() =>
                    setExpandedProject(expandedProject === index ? null : index)
                  }
                >
                  {expandedProject === index ? "Less Info" : "More Info"}
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
