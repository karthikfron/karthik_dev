"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss,
  SiTypescript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiNextdotjs
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    tech: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" }
    ]
  },
  {
    title: "Backend",
    tech: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" }
    ]
  },
  {
    title: "Database",
    tech: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" }
    ]
  }
];

const SkillsBar = () => {
  return (
    <section id="skills" className="bg-black py-16 px-4 text-white w-full    w-screen bg-grid-8-s-2-neutral-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Tech <span className="text-blue-500">Stack</span>
        </motion.h2>

        {categories.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-3 border-l-4 border-blue-500 pl-3">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.tech.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-full text-sm font-medium"
                >
                  <item.icon className={`text-lg ${item.color}`} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBar;
