"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/UseInView";
import SectionBanner from "./SectionBanner";

const blogPosts = [
  {
    title: "Mastering React Hooks",
    description: "A deep dive into React's most powerful feature.",
    platform: "dev.to",
    link: "https://dev.to/johndoe/mastering-react-hooks",
  },
  {
    title: "Building Scalable Node.js Applications",
    description: "Best practices for creating enterprise-level Node.js apps.",
    platform: "Medium",
    link: "https://medium.com/@johndoe/building-scalable-nodejs-applications",
  },
  {
    title: "The Future of Web Development",
    description: "Exploring upcoming trends and technologies in web dev.",
    platform: "personal blog",
    link: "https://johndoe.com/blog/future-of-web-development",
  },
  // Add more blog posts as needed
];

export default function Blog() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="blog" ref={ref} className="py-12">
      <SectionBanner
        title="Blog Posts"
        subtitle="Sharing my thoughts and knowledge"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {blogPosts.map((post, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-white shadow-lg border-blue-200 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-600">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.platform}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-blue-800">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
