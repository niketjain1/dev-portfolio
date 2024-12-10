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
    title: "Reply in thread using NestJS and Gmail API",
    description:
      "A comprehensive guide on implementing email thread replies in NestJS applications using Gmail API, covering the importance of email threading, handling References and In-Reply-To headers, and practical implementation details with code examples.",
    platform: "Multiple Platforms",
    links: {
      medium:
        "https://medium.com/@niketj2000/reply-in-thread-using-nestjs-and-gmail-api-c4b33354cfb7",
      devto:
        "https://dev.to/devnik/reply-in-thread-using-nestjs-and-gmail-api-47ec",
      linkedin:
        "https://www.linkedin.com/posts/niket-j_webdev-nestjs-openai-activity-7190249126754713600-BIHt?utm_source=share&utm_medium=member_desktop",
    },
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8"
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
              <CardFooter className="flex flex-col gap-2">
                {post.links ? (
                  <div className="flex flex-wrap gap-2 w-full">
                    {post.links.medium && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={post.links.medium}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read on Medium
                        </a>
                      </Button>
                    )}
                    {post.links.devto && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={post.links.devto}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read on Dev.to
                        </a>
                      </Button>
                    )}
                    {post.links.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={post.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read on LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button variant="outline" className="w-full" asChild>
                    <div>
                      Read Post <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
