"use client";

import { motion } from "framer-motion";
import { Experience } from "../types";

interface ExperienceProps {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900 dark:text-blue-100">
            Work Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 sm:pl-12 border-l-2 border-blue-200 dark:border-blue-800"
              >
                <div className="absolute w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 top-0 left-[-13px]" />
                
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200">
                      {experience.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {experience.duration}
                    </span>
                  </div>
                  
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                    {experience.company} • {experience.location}
                  </p>
                  
                  <ul className="space-y-2 mt-4">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}