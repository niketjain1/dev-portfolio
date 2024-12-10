"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const sections = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-blue-400">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="object-fill rounded-full"
            />
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="flex space-x-4"
        >
          {sections.map(({ name, id }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleClick(id)}
                className={`text-lg font-medium ${
                  activeSection === id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {name}
              </button>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="outline"
            size="default"
            asChild
            className="rounded-full shadow-2xl"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </motion.div>
      </nav>
    </header>
  );
}
