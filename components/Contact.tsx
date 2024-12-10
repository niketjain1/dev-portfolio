"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useInView } from "@/hooks/UseInView";
import SectionBanner from "./SectionBanner";

const socialLinks = [
  { icon: Github, href: "https://github.com/johndoe" },
  { icon: Linkedin, href: "https://linkedin.com/in/johndoe" },
  { icon: Twitter, href: "https://twitter.com/johndoe" },
  { icon: Instagram, href: "https://instagram.com/johndoe" },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-12">
      <SectionBanner
        title="Get in Touch"
        subtitle="Let's connect and collaborate"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex space-x-4 items-center justify-center"
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="text-blue-600 hover:text-blue-700 hover:border-blue-700"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 text-center text-blue-700"
      >
        Feel free to reach out for collaborations or just a friendly chat!
      </motion.p>
    </section>
  );
}
