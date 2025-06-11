"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import portfolioImg from "../public/portfolio.png"
import agencyImg from "../public/Agency.png"

import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiTypescript,
} from "react-icons/si"
import { ExternalLink, Code, Eye } from "lucide-react"

interface Project {
  title: string
  url: string
  github: string
  imageUrl: string | StaticImageData
  techStack: string[]
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"webdev" | "llm" | "fun">("webdev")
  const [, setHoveredIndex] = useState<number | null>(null)

  const projects: Record<"webdev" | "llm" | "fun", Project[]> = {
    webdev: [
      {
        title: "Paytm wallet",
        url: "",
        github: "",
        imageUrl: "https://moneymint.com/wp-content/uploads/2020/02/Screenshot_2020-02-05-14-05-22-790_net.one97.paytm-1.jpg",
        techStack: ["React", "Express", "Node.js", "MongoDB"],
      },
      {
        title: "Youtube-switch",
        url: "",
        github: "",
        imageUrl: "https://thetechupdates.com/wp-content/uploads/2020/07/Google-Chrome-Extensions.jpeg",
        techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
      },
      {
        title: "Portfolio",
        url: "",
        github: "",
        imageUrl: portfolioImg,
        techStack: ["Next.js", "React", "Tailwind CSS"],
      },
    ],
    llm: [
      {
        title: "Chat-with PDF",
        url: "",
        github: "",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1080/1*ef_1F5jYjTPNPQ-3wRJ5vg.jpeg",
        techStack: ["Next.js", "React", "Tailwind CSS"],
      },
    ],
    fun: [
      {
        title: "Modern-Web design Agency",
        url: "https://modern-web-design-eight.vercel.app/",
        github: "",
        imageUrl: agencyImg,
        techStack: ["HTML", "CSS", "Java-script"],
      },
    ],
  }

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js": return <SiNextdotjs className="text-white" />
      case "React": return <SiReact className="text-cyan-400" />
      case "Node.js": return <SiNodedotjs className="text-green-500" />
      case "Express": return <SiExpress className="text-white" />
      case "MongoDB": return <SiMongodb className="text-green-700" />
      case "Tailwind CSS": return <SiTailwindcss className="text-blue-500" />
      case "TypeScript": return <SiTypescript className="text-blue-600" />
      default: return <SiVercel className="text-white" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-black text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="text-4xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl text-white lg:text-6xl font-bold relative inline-block">
              My <span className="text-blue-500">Projects</span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            Showcasing my growth as a developer — from stylish frontends to smart apps powered by AI, chatbots, and full-stack solutions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center rounded-xl mb-10">
          <div className="inline-flex p-1 bg-gray-900/50 rounded-xl">
            {(["webdev", "llm", "fun"] as const).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg rounded-xl shadow-blue-500/20"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "webdev"
                  ? "Web Dev Projects"
                  : tab === "llm"
                  ? "LLM Projects"
                  : "Fun Projects"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  {typeof project.imageUrl === "string" ? (
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover"
                      fill
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-500 text-xs mb-3 truncate">{project.url.replace("http://", "")}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded-md text-xs font-medium text-gray-300">
                        <span className="text-base">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/karthikfron"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 text-sm"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
