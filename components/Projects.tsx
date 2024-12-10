"use client";

import { useState, Fragment } from "react";
import { motion } from "framer-motion";
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
import { Dialog, Transition } from "@headlessui/react";

const projects = [
  {
    title: "TubeSage - Youtube Video Q&A Chatbot",
    description:
      "TubeSage is a Youtube Video Q&A Chatbot that allows users to ask questions about a Youtube video and get answers in real-time.",
    details: `Built a Chrome Extension in JavaScript that allows users to ask questions on Youtube videos and get
summaries, key highlights, and related topics to understand them better.`,
    github: "https://github.com/niketjain1/TubeSage",
    tech: ["JavaScript", "Youtube API", "OpenAI"],
  },
  {
    title: "GmailGenie",
    description:
      "Automated email processing application using NestJS, Gmail API, OpenAI, and BullMQ with Redis",
    details:
      "GmailGenie is a robust backend application designed to leverage the power of NestJS, Google's Gmail API, OpenAI, and BullMQ with Redis to automate email processing. This application simplifies managing and responding to emails for professionals and businesses, featuring automatic authentication via Google, retrieval of recent emails, and AI-driven response generation. The scheduler, powered by BullMQ, runs tasks every minute, ensuring prompt email interactions and operations.",
    github: "https://github.com/niketjain1/GmailGenie",
    tech: ["NestJS", "Gmail API", "OpenAI", "Redis", "BullMQ"],
  },
  {
    title: "Bloggerly",
    description: "Full-stack blogging platform with React and Spring Boot",
    details:
      "Built a user-friendly web application that allows users to publish, view, update, delete their blog posts, and browse blog posts published by others. Features include Facebook-style blog feed, trending blogs, following system, and tagging mechanism. Implemented secure user authentication using JWT.",
    github: "https://github.com/niketjain1/Bloggerly",
    tech: ["React", "Spring Boot", "JWT", "MySQL"],
  },
  {
    title: "Image Segmentation Algorithm",
    description:
      "Novel biomedical image segmentation algorithm for Diabetic Retinopathy diagnosis",
    details:
      "Designed a new general-purpose image segmentation algorithm that helps with early diagnosis of Diabetic Retinopathy disease, achieving 84% accuracy matching state-of-the-art models. Implemented as a plugin for ImageJ software.",
    live: "https://drive.google.com/file/d/1OlORNd70pdxSC9VceFVNjmWhURjeJ5gK/view?usp=sharing",
    tech: ["Java", "ImageJ", "Image Processing"],
  },
  {
    title: "DadGPT",
    description: "AI-powered Twitter bot for generating unique dad jokes",
    details:
      "A Twitter bot that generates and posts unique dad jokes using OpenAI's ChatGPT APIs and tweepy. Features customizable posting frequency and subject matter preferences.",
    github: "https://github.com/niketjain1/DadGPT",
    live: "https://twitter.com/Dad_GPT",
    tech: ["Python", "OpenAI API", "Twitter API"],
  },
  {
    title: "Cinephile",
    description: "RESTful API for managing personal movie watchlists",
    details:
      "Developed a RESTful API using Spring Boot and MySQL that allows users to create and manage lists of watched movies. Includes comprehensive CRUD operations and integration tests.",
    github: "https://github.com/niketjain1/Movies-database-api",
    tech: ["Spring Boot", "MySQL", "REST API"],
  },
  {
    title: "Human Activity Recognition",
    description:
      "ML model for recognizing human activities using smartphone sensor data",
    details:
      "Developed machine learning models to recognize activities like standing, sitting, and walking based on smartphone sensor data. Implemented using Logistic Regression, KNN, and Decision tree algorithms.",
    github:
      "https://github.com/niketjain1/Human-Activities-of-daily-living-Recognition-model",
    tech: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Techno Farm",
    description: "Autonomous agricultural robot with crop quality detection",
    details:
      "Programmed Arduino-based autonomous obstacle-avoiding robot with ultrasonic sensors. Implemented neural network-based crop quality detection system using image processing.",
    github: "https://github.com/niketjain1/technofarm",
    tech: ["Arduino", "Neural Networks", "Image Processing"],
  },
];

export default function Projects() {
  const [modalProject, setModalProject] = useState<number | null>(null);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const closeModal = () => setModalProject(null);

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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8"
      >
        {projects.map((project, index) => (
          <Fragment key={index}>
            <motion.div variants={itemVariants}>
              <Card className="bg-white shadow-lg border-blue-200 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setModalProject(index)}
                  >
                    More Info
                  </Button>
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>

            <Transition appear show={modalProject === index} as={Fragment}>
              <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-bold text-blue-600 mb-4"
                        >
                          {project.title}
                        </Dialog.Title>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-2">
                          <p className="mt-4 text-gray-800">
                            {project.details}
                          </p>
                        </div>

                        <div className="mt-6 flex justify-end space-x-3">
                          {project.github && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Github className="h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.live && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          <Button variant="outline" onClick={closeModal}>
                            Close
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
