"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  intro: string;
}

export default function Hero({ name, title, tagline, intro }: HeroProps) {
  return (
    <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-900 dark:text-blue-100">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-300">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
            {tagline}
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            {intro}
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-blue-300 dark:border-blue-400"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}