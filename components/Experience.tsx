"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/UseInView";
import SectionBanner from "./SectionBanner";

const experiences = [
  {
    company: "Graphik AI",
    position: "AI Engineer | Full Stack Developer",
    duration: "October 2024 - Present",
    description: [
      {
        title:
          "Developed and launced the product YouTube Content Converter (yt-newsletter)",
        link: "https://yt-newsletter.com",
        points: [
          `Solely built and launched "YouTube Content Converter" (yt-newsletter.com), enabling YouTubers to transform their videos into Newsletters, Tweets or LinkedIn posts. Implemented the frontend (NextJS,
ReactJS), backend (NodeJS), and LLM integrations (OpenAI, Claude).`,
          "Implemented a credit-based pricing system supported by rich analytics for credits management.",
        ],
      },
      {
        title: "AI coloring page generator",
        link: "https://printablesforall.com/coloring-page-generator",
        points: [
          "Developed an innovative web application that transforms user prompts into child-friendly coloring pages using AI technology.",
          "Implemented image processing pipeline using Flux AI model to generate line art and ensure appropriate content filtering for children.",
          "Built responsive UI with NextJS and TailwindCSS, featuring an intuitive prompt interface and downloadable PDF generation.",
          "Integrated error handling and loading states to provide smooth user experience during AI image generation process.",
        ],
      },
    ],
  },
  {
    company: "Numans",
    position: "Software Engineer",
    duration: "June 2023 - February 2024",
    companyLink: "https://numanshq.com",
    description: [
      {
        title: "Core Development on Device History Feature",
        link: "",
        points: [
          "Designed and implemented a comprehensive 'Device History' feature to streamline device management for HR and IT teams.",
          "Used NextJS for frontend, NestJS, and MongoDB for the backend. This automated system captures actions such as device assignment to employees and complex tasks like servicing, and maintaining an accurate and accessible history.",
        ],
      },
      {
        title: "Automated Notification System",
        link: "",
        points: [
          "Engineered a refined Slack notification system using AWS Lambda, reducing order fulfillment Turnaround Time (TAT) by 30%.",
          "This streamlined communication and ensured timely updates to the operations team, leading to more efficient top-up and shipment processes.",
        ],
      },
      {
        title: "Performance Optimization Initiatives",
        link: "",
        points: [
          "Led efforts to boost product performance, achieving a 25% reduction in data retrieval times. Implemented the refinement of GraphQL queries and restructuring of API calls using NestJS and TypeScript.",
          "Introduced strategic caching mechanisms with Apollo client, seamlessly integrated with NextJS. This eliminated unnecessary API calls, achieving an impressive 20% reduction in page load latency, significantly contributing to a more responsive user experience.",
        ],
      },
    ],
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
    <section id="experience" ref={ref} className="py-12">
      <SectionBanner title="Experience" subtitle="My professional journey" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8 px-4"
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-white shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-700 transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">{exp.position}</p>
                <p className="text-sm text-blue-600 mb-2">{exp.duration}</p>
                {Array.isArray(exp.description) ? (
                  <div className="space-y-4">
                    {exp.description.map((section, idx) => (
                      <div key={idx} className="mb-3 text-start">
                        <strong className="text-purple-600 underline block mb-2">
                          {section.link ? (
                            <a
                              href={section.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-purple-700 transition-colors"
                            >
                              {section.title}
                            </a>
                          ) : (
                            section.title
                          )}
                        </strong>
                        <ul className="list-disc list-inside space-y-2">
                          {section.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="text-blue-800">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-blue-800">{exp.description}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
