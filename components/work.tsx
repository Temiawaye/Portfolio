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
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Supabase', 'Postgre'],
    liveLink: 'https://realestate-4un36rcex-temis-projects-5cf1e031.vercel.app/',
    githubLink: '#',
  },

  {
    title: 'Kinetic Apex',
    description: 'A fitness website with a focus on the user experience and animations.',
    image: '/gymwrath/hero.png',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    liveLink: 'https://gymwarth.vercel.app/',
    githubLink: '#',
  },

  {
    title: 'Campus Buddy',
    description: 'A mobile app for university students to connect and share resources.',
    image: '/CampusBuddy/Campusbuddy.png',
    tags: ['React Native', 'TypeScript', 'Expo', 'Firebase'],
    liveLink: '#',
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
      className="py-15 px-5 md:px-10 lg:px-20 bg-bg-primary text-text-primary"
    >
      <div className=" max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="mb-20 flex flex-col items-center justify-center gap-2 text-center items-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">Projects</p>
          <div className=" flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-primary leading-tight mb-3">
              SHIPPED PROJECTS.
            </h2>
            <p className="text-text-secondary max-w-sm text-base leading-relaxed">
              A showcase of recent frontend engineering projects, highlighting modern architecture and interactive UI/UX.
            </p>
          </div>
        </motion.div>

        <div className=" flex flex-col gap-15">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group relative overflow-hidden rounded-3xl bg-bg-secondary border border-border-default card-lift cursor-pointer
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-code-bg text-text-secondary border border-border-default rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-1.5 group-hover:text-accent-hover transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline bg-button text-button-text text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-button-hover active:bg-button-active transition-colors"
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
