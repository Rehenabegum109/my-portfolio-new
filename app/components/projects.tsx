"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Play,
  X,
} from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  number: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "RentNest",
    subtitle: "Rental Property Marketplace",
    description:
      "A modern rental marketplace where tenants can discover properties, submit rental requests and complete payments.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
    ],
    number: "01",
    liveUrl: "https://renest-client.vercel.app",
    githubUrl:
      "https://github.com/Rehenabegum109/renest_client",
  },

  {
    title: "ScholarStream",
    subtitle: "Learning Management Platform",
    description:
      "A modern education platform designed to connect students with learning resources through a clean and intuitive interface.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
    ],
    number: "02",
    liveUrl:
      "https://illustrious-daffodil-e7692d.netlify.app",
    githubUrl:
      "https://github.com/Rehenabegum109/-ScholarStream",
  },

  {
    title: "MovieMatrix",
    subtitle: "Movie Discovery Platform",
    description:
      "A cinematic movie discovery experience with modern UI, search, categories and responsive layouts.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85",
    technologies: [
      "React",
      "API",
      "Tailwind",
      "JavaScript",
    ],
    number: "03",
    liveUrl:
      "https://eg-movie-matrix-collaboration.vercel.app",
    githubUrl:
      "https://github.com/Rehenabegum109/movie_matrix",
  },

  {
    title: "Event Management",
    subtitle: "Event Management Platform",
    description:
      "A modern event management platform designed to help users discover, organize and manage events through a clean and responsive interface.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=85",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
    ],
    number: "04",
    liveUrl:
      "https://event-managment-chi.vercel.app",
    githubUrl:
      "https://github.com/Rehenabegum109/event-management-client.git",
  },

  {
    title: "Luxury Shop",
    subtitle: "Luxury E-Commerce Platform",
    description:
      "A premium e-commerce experience focused on luxury products, elegant visual presentation and a smooth shopping experience.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
    ],
    number: "05",
    liveUrl:
      "https://dress-store-vert.vercel.app",
    githubUrl:
      "https://github.com/Rehenabegum109/shop_dress",
  },

  {
    title: "CareerTrack",
    subtitle: "Career Management Platform",
    description:
      "A career-focused platform designed to help users organize their career journey, discover opportunities and manage their professional goals.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
    ],
    number: "06",
    liveUrl:
      "https://carrer-track-lite-client.vercel.app/",
    githubUrl:
      "https://github.com/Rehenabegum109/carrerTrack_lite_client",
  },
];

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        bg-white text-gray-900
        py-20 pb-10
        transition-colors duration-300
        dark:bg-[#050505] dark:text-white
        sm:pt-24 sm:pb-14
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute left-1/2 top-0
          h-[500px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-red-600/[0.04]
          blur-[150px]
          dark:bg-red-600/[0.05]
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.04),transparent_40%)]
          dark:bg-[radial-gradient(circle_at_50%_0%,rgba(229,9,20,0.08),transparent_40%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-red-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 dark:text-red-500">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                PROJECTS
                <br />

                <span className="text-gray-400 dark:text-gray-600">
                  WORTH WATCHING.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-500 sm:text-base">
                A collection of real-world projects built with modern
                technologies, thoughtful interfaces and practical solutions.
              </p>
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-gray-400 dark:text-gray-700">
              06 Projects
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
              className={`
                group relative overflow-hidden
                rounded-2xl
                border border-gray-200
                bg-gray-50
                shadow-sm
                transition-all duration-300

                hover:border-red-200
                hover:shadow-xl
                hover:shadow-red-500/5

                dark:border-white/10
                dark:bg-[#0a0a0a]
                dark:shadow-none
                dark:hover:border-red-500/20

                ${index === 0 ? "md:col-span-2" : ""}
              `}
            >

              {/* IMAGE */}

              <div
                className={`
                  relative overflow-hidden
                  ${index === 0
                    ? "aspect-[16/8]"
                    : "aspect-[16/10]"
                  }
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full w-full object-cover
                    transition duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/30
                    to-black/5
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-red-950/0
                    transition duration-500
                    group-hover:bg-red-950/20
                  "
                />

                {/* Number */}

                <span className="absolute right-5 top-5 text-5xl font-black text-white/20">
                  {project.number}
                </span>

                {/* Category */}

                <div className="absolute left-5 top-5">
                  <span
                    className="
                      rounded-full
                      border border-white/20
                      bg-black/50
                      px-3 py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/80
                      backdrop-blur-md
                    "
                  >
                    {project.subtitle}
                  </span>
                </div>

                {/* Play Button */}

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title}`}
                  className="
                    absolute left-1/2 top-1/2
                    flex h-14 w-14
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-75
                    items-center justify-center
                    rounded-full
                    bg-red-600
                    text-white
                    opacity-0
                    shadow-xl
                    shadow-red-600/30
                    transition duration-500
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <Play
                    size={19}
                    fill="currentColor"
                    className="ml-1"
                  />
                </button>

                {/* Bottom Content */}

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                      <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/70">
                        {project.subtitle}
                      </p>

                      {/* Technologies */}

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-full
                              border border-white/20
                              bg-black/40
                              px-3 py-1
                              text-[9px]
                              uppercase
                              tracking-wider
                              text-white/70
                              backdrop-blur-md
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        hidden h-12 w-12
                        items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-black/40
                        transition duration-300
                        group-hover:border-red-500/50
                        group-hover:bg-red-600
                        sm:flex
                      "
                    >
                      <ArrowUpRight
                        size={20}
                        className="text-white/60 transition group-hover:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM BAR */}

              <div
                className="
                  flex items-center justify-between
                  border-t
                  border-gray-200
                  bg-white
                  px-5 py-4

                  dark:border-white/5
                  dark:bg-[#0a0a0a]
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
                    Featured Project
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                    transition
                    hover:text-red-600
                    dark:text-gray-500
                    dark:hover:text-red-500
                  "
                >
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            GITHUB BUTTON
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/Rehenabegum109"
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex items-center gap-3
              rounded-full
              border border-gray-300
              bg-white
              px-6 py-3
              text-sm
              text-gray-600
              shadow-sm
              transition duration-300
              hover:border-red-300
              hover:text-red-600

              dark:border-white/10
              dark:bg-transparent
              dark:text-gray-400
              dark:shadow-none
              dark:hover:border-red-500/40
              dark:hover:text-white
            "
          >
            Explore More Projects

            <GithubIcon size={17} />
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="
              fixed inset-0 z-[100]
              flex items-center justify-center
              bg-black/70
              p-5
              backdrop-blur-md
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-3xl
                overflow-y-auto
                rounded-3xl
                border
                border-gray-200
                bg-white
                text-gray-900
                shadow-2xl

                dark:border-white/10
                dark:bg-[#0a0a0a]
                dark:text-white
              "
            >

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="
                  absolute right-5 top-5 z-20
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-black/70
                  text-white/70
                  backdrop-blur-md
                  transition
                  hover:bg-red-600
                  hover:text-white
                "
              >
                <X size={18} />
              </button>

              {/* MODAL IMAGE */}

              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>

              {/* MODAL CONTENT */}

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-red-600" />

                  <span className="text-[10px] uppercase tracking-[0.3em] text-red-600 dark:text-red-500">
                    {selectedProject.subtitle}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-black sm:text-4xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-500">
                  {selectedProject.description}
                </p>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border border-gray-200
                        bg-gray-50
                        px-3 py-1.5
                        text-[10px]
                        text-gray-600

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-gray-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      rounded-xl
                      bg-red-600
                      px-5 py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-red-700
                    "
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      rounded-xl
                      border border-gray-300
                      bg-white
                      px-5 py-3
                      text-sm
                      font-semibold
                      text-gray-700
                      transition
                      hover:border-gray-400
                      hover:bg-gray-50

                      dark:border-white/10
                      dark:bg-transparent
                      dark:text-gray-300
                      dark:hover:border-white/20
                      dark:hover:text-white
                    "
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}