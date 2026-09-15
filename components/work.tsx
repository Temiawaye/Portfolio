"use client"

import Image from 'next/image';
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
    description: 'An AI-powered requirements engineering platform that generates structured SRS and PRD documents, then evaluates requirements for ambiguity, atomicity, completeness, and verifiability.',
    image: '/srs-studio.png',
    tags: ['Next.js', 'LLM', 'TypeScript', 'Framer Motion', 'Supabase'],
    liveLink: 'https://srs-studio.vercel.app/',
    githubLink: '#',
    featured: true,
  },

  {
    title: 'Luxe Realty',
    description: 'A real-estate platform featuring advanced property search, detailed listings, image galleries, agent information, and inspection booking.',
    image: '/realestate/hero.png',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Supabase', 'Postgre'],
    liveLink: 'https://realestate-4un36rcex-temis-projects-5cf1e031.vercel.app/',
    githubLink: '#',
  },

  {
    title: 'Kinetic Apex',
    description: 'A fitness and performance-coaching brand website featuring private, hybrid, and remote training programs, athlete progress tracking, client testimonials, and seamless consultation bookings.',
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
      className="py-10 px-5 md:px-10 lg:px-20 bg-bg-primary text-text-primary"
    >
      <div className=" max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="mb-15 flex flex-col gap-2">
          <h2 className="mb-4 flex flex-wrap text-base font-semibold tracking-tight" aria-label="Projects">
            <span className="text-electric-lavender" aria-hidden="true">~/</span>
            <span className="text-text-primary">projects</span>
          </h2>
          <div className=" flex flex-col">
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-text-primary leading-tight mb-3">
              SHIPPED PROJECTS.
            </h3>
            <p className="text-text-secondary max-w-sm text-base leading-relaxed">
              A showcase of my recent projects, highlighting modern architecture and interactive UI/UX.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-14">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group grid overflow-hidden rounded-3xl bg-bg-secondary transition-colors duration-300 shadow-xl shadow-accent/10 hover:shadow-xl hover:shadow-accent/20 lg:grid-cols-[1.2fr_0.8fr]"
            >
              <div className="relative min-h-64 overflow-hidden sm:min-h-80 lg:min-h-[28rem]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                <div className="pointer-events-none absolute inset-0 bg-black/40 transition-opacity duration-500 ease-out group-hover:opacity-0 group-focus-within:opacity-0" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium tracking-wider text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="absolute right-5 top-5 flex flex-wrap justify-end gap-2 transition-all duration-300 sm:pointer-events-none sm:translate-y-1 sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:pointer-events-auto sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline inline-flex rounded-full bg-button px-4 py-2 text-xs font-medium text-button-text shadow-lg shadow-black/20 transition-colors hover:bg-button-hover active:bg-button-active"
                    >
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline inline-flex rounded-full border border-border-control bg-bg-secondary/90 px-4 py-2 text-xs font-medium text-text-primary shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-accent-hover hover:bg-code-bg active:border-accent-active"
                    >
                      View source
                    </a>
                  )}
                </div>
              </div>

              <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                <div>
                  <h4 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary transition-colors group-hover:text-accent-hover md:text-4xl">
                    {project.title}
                  </h4>
                  {project.description && (
                    <p className="max-w-md text-sm leading-relaxed text-text-secondary md:text-base">
                      {project.description}
                    </p>
                  )}
                </div>

                <div className="mt-10">
                  <div className="mb-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-default bg-code-bg px-2.5 py-1 text-xs font-medium text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
