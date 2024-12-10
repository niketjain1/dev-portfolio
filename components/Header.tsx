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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);

      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
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

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex space-x-6"
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
                <a
                  href="https://drive.google.com/file/d/1bHN0ei9G00ARmjfeZZQSVGhoXuZe1bAv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? "mt-4" : ""}`}
        >
          <div className="flex flex-col space-y-4">
            {sections.map(({ name, id }) => (
              <button
                key={id}
                onClick={() => {
                  handleClick(id);
                  setIsMenuOpen(false);
                }}
                className={`text-lg font-medium ${
                  activeSection === id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {name}
              </button>
            ))}
            <Button
              variant="outline"
              size="default"
              asChild
              className="rounded-full shadow-2xl w-full"
            >
              <a
                href="https://drive.google.com/file/d/1bHN0ei9G00ARmjfeZZQSVGhoXuZe1bAv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}
