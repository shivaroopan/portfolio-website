"use client";

import { motion } from "framer-motion";
import { Certification } from "../types";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900 dark:text-blue-100">
            Certifications & Courses
          </h2>
          
          <div className="space-y-8">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap justify-between">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
                    {certification.name}
                  </h3>
                  {certification.date && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {certification.date}
                    </span>
                  )}
                </div>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {certification.issuer}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {certification.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}