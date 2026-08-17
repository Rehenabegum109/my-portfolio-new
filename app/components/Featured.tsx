"use client";

import { ArrowUpRight, GitBranchPlus } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "RentNest",
    subtitle: "Rental Property Marketplace",
    description:
      "A modern rental marketplace where tenants can discover properties, submit rental requests and complete payments.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    technologies: ["Next.js", "React", "Tailwind", "Node.js"],
    number: "01",
    liveUrl: "https://renest-client.vercel.app",
    githubUrl: "https://github.com/Rehenabegum109/renest_client",
  },

  {
    title: "ScholarStream",
    subtitle: "Learning Management Platform",
    description:
      "A modern education platform designed to connect students with learning resources through a clean and intuitive interface.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    number: "02",
    liveUrl: "https://illustrious-daffodil-e7692d.netlify.app",
    githubUrl: "https://github.com/Rehenabegum109/-ScholarStream",
  },

  {
    title: "MovieMatrix",
    subtitle: "Movie Discovery Platform",
    description:
      "A cinematic movie discovery experience with modern UI, search, categories and responsive layouts.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85",
    technologies: ["React", "API", "Tailwind", "JavaScript"],
    number: "03",
    liveUrl: "https://eg-movie-matrix-collaboration.vercel.app",
    githubUrl: "https://github.com/Rehenabegum109/movie_matrix",
  },
];

export default function Featured() {
  return (
    <section
      id="featured"
      className="
        relative overflow-hidden
        bg-white
        py-16
        text-gray-900
        transition-colors duration-500
        dark:bg-[#050505]
        dark:text-white
        sm:py-20
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-[500px] w-[800px]
          -translate-x-1/2
          rounded-full
          bg-red-500/5
          blur-[150px]
          dark:bg-red-600/5
        "
      />

      {/* Subtle radial background */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.04),transparent_45%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.06),transparent_45%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          {/* Small Label */}
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <p
              className="
                text-xs font-medium
                uppercase tracking-[0.3em]
                text-red-500
                dark:text-red-400
              "
            >
              Featured Work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2
                className="
                  text-4xl font-black
                  tracking-tight
                  text-gray-900
                  dark:text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Projects I&apos;m{" "}
                <span className="text-gray-400 dark:text-gray-500">
                  proud of.
                </span>
              </h2>

              <p
                className="
                  mt-5 max-w-2xl
                  text-sm leading-7
                  text-gray-600
                  dark:text-gray-500
                  sm:text-base
                "
              >
                A selection of projects where I transformed ideas into
                functional and modern digital experiences.
              </p>
            </div>

            {/* View all */}
            <a
              href="#projects"
              className="
                group flex w-fit
                items-center gap-2
                text-sm font-medium
                text-gray-500
                transition
                hover:text-red-600
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              View all projects

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </motion.div>

        {/* =================================================
            PROJECT CARDS
        ================================================== */}

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-gray-200
                bg-gray-50
                transition duration-500
                hover:-translate-y-2
                hover:border-red-500/40
                hover:shadow-xl
                hover:shadow-red-500/5

                dark:border-white/10
                dark:bg-[#0c0c0c]
                dark:hover:border-red-500/30
              "
            >
              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="
                    h-full w-full
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-white/90
                    via-white/10
                    to-transparent
                    opacity-90
                    dark:from-black
                    dark:via-black/20
                    dark:to-transparent
                  "
                />

                {/* Red Hover */}
                <div
                  className="
                    absolute inset-0
                    bg-red-600/0
                    transition duration-500
                    group-hover:bg-red-600/10
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute left-5 top-5
                    rounded-lg
                    border border-red-500/30
                    bg-white/80
                    px-3 py-2
                    text-xs font-medium
                    tracking-[0.2em]
                    text-gray-900
                    backdrop-blur-md

                    dark:bg-black/60
                    dark:text-white
                  "
                >
                  {project.number}
                </span>

                {/* Project Name */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="
                      text-xs uppercase
                      tracking-[0.2em]
                      text-red-500
                      dark:text-red-400
                    "
                  >
                    {project.subtitle}
                  </p>

                  <h3
                    className="
                      mt-1 text-2xl
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="p-6">
                <p
                  className="
                    text-sm leading-7
                    text-gray-600
                    dark:text-gray-500
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border border-gray-200
                        bg-white
                        px-3 py-1.5
                        text-[10px]
                        text-gray-500
                        transition

                        group-hover:border-red-500/20
                        group-hover:text-red-600

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-gray-500
                        dark:group-hover:text-gray-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* =================================================
                    LINKS
                ================================================== */}

                <div className="mt-7 flex items-center gap-3">
                  {/* Live Demo */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/live
                      flex items-center gap-2
                      rounded-lg
                      bg-red-600
                      px-4 py-2.5
                      text-xs font-semibold
                      text-white
                      transition
                      hover:bg-red-500
                    "
                  >
                    Live Demo

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        group-hover/live:-translate-y-0.5
                        group-hover/live:translate-x-0.5
                      "
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      rounded-lg
                      border border-gray-200
                      bg-white
                      px-4 py-2.5
                      text-xs font-semibold
                      text-gray-600
                      transition

                      hover:border-gray-300
                      hover:bg-gray-100
                      hover:text-gray-900

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-gray-300
                      dark:hover:border-white/30
                      dark:hover:bg-white/[0.08]
                      dark:hover:text-white
                    "
                  >
                    <GitBranchPlus size={15} />

                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}

        <div
          className="
            mt-16 h-px w-full
            bg-gradient-to-r
            from-transparent
            via-gray-200
            to-transparent
            dark:via-white/10
          "
        />
      </div>
    </section>
  );
}