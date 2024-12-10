"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useInView } from "@/hooks/UseInView";
import SectionBanner from "./SectionBanner";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/niketjain1" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/niket-j/" },
  { icon: FaTwitter, href: "https://x.com/niketj2000" },
  { icon: FaInstagram, href: "https://www.instagram.com/niket._.j" },
  { icon: IoMail, href: "mailto:niketj2000@gmail.com" },
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
        className="flex space-x-8 items-center justify-center"
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className=" hover:cursor-pointer hover:text-red-600"
            >
              <link.icon className="h-8 w-8" />
            </a>
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
