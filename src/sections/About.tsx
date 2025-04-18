"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SkillCategory } from "../types";

interface AboutProps {
  photo: string;
  skills: SkillCategory[];
}

export default function About({ photo, skills }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-blue-200 shadow-xl"
              >
                <Image
                  src={photo}
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">
                  Professional Background
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With over 5 years of experience in full-stack development, I specialize in 
                  building scalable web applications using modern JavaScript frameworks. My expertise 
                  spans from creating responsive frontends with React to designing microservices 
                  architecture on the backend. I am passionate about clean code, performance 
                  optimization, and creating exceptional user experiences.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((category) => (
                    <div key={category.name}>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                        {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}