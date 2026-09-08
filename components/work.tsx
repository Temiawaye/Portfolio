"use client"

import { easeOut, motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
}

const projects = [
  {
    title: 'SRS Studio',
    description: 'An AI-powered tool to generate structured Software Requirements Specifications (SRS) with deterministic evaluation metrics.',
    image: '/srs-studio.png',
    tags: ['Next.js', 'LLM', 'TypeScript', 'Framer Motion', 'Supabase'],
    liveLink: 'https://srs-studio.vercel.app/',
    githubLink: '#',
    featured: true,
  },

  {
    title: 'Luxe Realty',
    description: '',
    image: '/realestate/hero.png',
    tags: ['Next.js', 'Framer Motion', 'Supabase', 'Postgre'],
    liveLink: 'https://realestate-4un36rcex-temis-projects-5cf1e031.vercel.app/',
    githubLink: '#',
  },

];

export function Work() {
  return (
    <motion.section
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.05 }}
      className="py-28 px-5 md:px-10 lg:px-20 bg-white"
    >
      <div className=" max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="mb-20 flex flex-col items-center justify-center gap-2 text-center items-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-4">Projects</p>
          <div className=" flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 leading-tight mb-3">
              SHIPPED PROJECTS.
            </h2>
            <p className="text-neutral-500 max-w-sm text-base leading-relaxed">
              A showcase of recent frontend engineering projects, highlighting modern architecture and interactive UI/UX.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className=" flex flex-col gap-15">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group relative overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 card-lift cursor-pointer 
                ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`
              }
            >
              {/* Image */}
              <div className=" overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300" />

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1.5 group-hover:text-neutral-600 transition-colors">{project.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Visit links */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:shadow-sm"
                  >
                    Code
                  </a>
                )} */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="bg-neutral-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-neutral-800 hover:shadow-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
