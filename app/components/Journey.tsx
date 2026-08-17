"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Layers3,
  Rocket,
} from "lucide-react";

const journey = [
  {
    episode: "EP 01",
    title: "THE BEGINNING",
    year: "2025",
    description:
      "Started my journey into web development by building a strong foundation in HTML, CSS and JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    icon: Code2,
  },
  {
    episode: "EP 02",
    title: "GOING DEEPER",
    year: "2025",
    description:
      "Moved into modern frontend development and started building interactive, responsive interfaces with React and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "REST API"],
    icon: Layers3,
  },
  {
    episode: "EP 03",
    title: "FULL STACK",
    year: "2026",
    description:
      "Expanded into backend development, authentication and database-driven applications using Node.js, Express and MongoDB.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    icon: Database,
  },
  {
    episode: "EP 04",
    title: "BUILDING REAL PRODUCTS",
    year: "2026",
    description:
      "Started building production-style applications with Next.js, PostgreSQL, Prisma and Redis while focusing on scalable and practical solutions.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    icon: Rocket,
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="
        relative overflow-hidden
        bg-white text-gray-900
        dark:bg-[#050505] dark:text-white
        pb-20 pt-10
        sm:pb-24 sm:pt-14
        transition-colors duration-300
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[500px] w-[700px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-red-600/[0.04]
          blur-[150px]
          dark:bg-red-600/[0.035]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-red-600" />

            <span
              className="
                text-[10px] font-semibold uppercase
                tracking-[0.35em]
                text-red-600
                dark:text-red-500
              "
            >
              My Journey
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2
                className="
                  text-4xl font-black leading-[0.95]
                  tracking-tight
                  text-gray-900
                  dark:text-white
                  sm:text-5xl md:text-7xl
                "
              >
                THE JOURNEY
                <br />

                <span className="text-gray-400 dark:text-gray-600">
                  SO FAR.
                </span>
              </h2>

              <p
                className="
                  mt-6 max-w-2xl
                  text-sm leading-7
                  text-gray-600
                  dark:text-gray-500
                  sm:text-base
                "
              >
                Every project, every challenge and every new technology has
                been another episode in my journey as a developer.
              </p>
            </div>

            <span
              className="
                text-[10px] uppercase
                tracking-[0.3em]
                text-gray-400
                dark:text-gray-700
              "
            >
              04 Episodes
            </span>
          </div>
        </motion.div>

        {/* ================= EPISODES ================= */}

        <div className="relative">

          {/* Timeline */}

          <div
            className="
              pointer-events-none absolute
              bottom-0 left-[22px] top-0
              hidden w-px
              bg-gradient-to-b
              from-red-600/60
              via-gray-300
              to-transparent
              dark:via-white/10
              md:block
            "
          />

          <div className="space-y-5">

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.episode}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative md:pl-16"
                >

                  {/* Timeline Dot */}

                  <div
                    className="
                      absolute left-[14px] top-8
                      z-10 hidden h-[17px] w-[17px]
                      items-center justify-center
                      rounded-full
                      border border-red-600/40
                      bg-white
                      dark:bg-[#050505]
                      md:flex
                    "
                  >
                    <span
                      className="
                        h-1.5 w-1.5 rounded-full
                        bg-red-600
                        transition duration-300
                        group-hover:scale-150
                      "
                    />
                  </div>

                  {/* ================= CARD ================= */}

                  <div
                    className="
                      relative overflow-hidden
                      rounded-2xl
                      border
                      border-gray-200
                      bg-gray-50
                      p-6

                      transition duration-500

                      group-hover:-translate-y-1
                      group-hover:border-red-600/30

                      dark:border-white/10
                      dark:bg-[#0a0a0a]

                      sm:p-8
                    "
                  >

                    {/* Episode Number */}

                    <div
                      className="
                        absolute right-5 top-3
                        select-none
                        text-7xl font-black
                        text-gray-900/[0.035]
                        dark:text-white/[0.025]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Hover Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute -right-20 -top-20
                        h-40 w-40
                        rounded-full
                        bg-red-600/0
                        blur-[70px]
                        transition duration-500
                        group-hover:bg-red-600/10
                      "
                    />

                    <div
                      className="
                        relative flex flex-col gap-6
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                      "
                    >

                      {/* ================= LEFT ================= */}

                      <div className="flex gap-5">

                        {/* Icon */}

                        <div
                          className="
                            hidden h-12 w-12 shrink-0
                            items-center justify-center
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            text-gray-500

                            transition duration-300

                            group-hover:border-red-600/30
                            group-hover:text-red-600

                            dark:border-white/10
                            dark:bg-black
                            dark:text-gray-500
                            dark:group-hover:text-red-500

                            sm:flex
                          "
                        >
                          <Icon size={20} />
                        </div>

                        <div>

                          {/* Episode */}

                          <div className="flex items-center gap-3">
                            <span
                              className="
                                h-px w-7
                                bg-red-600
                                transition-all duration-500
                                group-hover:w-12
                              "
                            />

                            <span
                              className="
                                text-[10px] font-bold
                                uppercase
                                tracking-[0.3em]
                                text-red-600
                                dark:text-red-500
                              "
                            >
                              {item.episode}
                            </span>
                          </div>

                          {/* Title */}

                          <h3
                            className="
                              mt-3
                              text-2xl font-black
                              tracking-tight

                              text-gray-900
                              group-hover:text-black

                              dark:text-gray-200
                              dark:group-hover:text-white

                              sm:text-3xl
                            "
                          >
                            {item.title}
                          </h3>

                          {/* Year */}

                          <p
                            className="
                              mt-2
                              text-xs uppercase
                              tracking-[0.2em]
                              text-gray-400
                              dark:text-gray-700
                            "
                          >
                            {item.year}
                          </p>

                          {/* Description */}

                          <p
                            className="
                              mt-4 max-w-2xl
                              text-sm leading-7
                              text-gray-600
                              dark:text-gray-500
                            "
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* ================= TECHNOLOGIES ================= */}

                      <div className="lg:max-w-xs">

                        <p
                          className="
                            mb-3
                            text-[9px] uppercase
                            tracking-[0.25em]
                            text-gray-400
                            dark:text-gray-700
                          "
                        >
                          Featured In This Episode
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="
                                rounded-full
                                border
                                border-gray-200
                                bg-white
                                px-3 py-1.5
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-gray-500

                                transition

                                group-hover:border-gray-300
                                group-hover:text-gray-600

                                dark:border-white/10
                                dark:bg-white/[0.02]
                                dark:text-gray-500

                                dark:group-hover:border-white/15
                                dark:group-hover:text-gray-400
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ================= BOTTOM LINE ================= */}

                    <div
                      className="
                        relative mt-7
                        flex items-center
                        justify-between
                        border-t
                        border-gray-200
                        dark:border-white/5
                        pt-4
                      "
                    >
                      <span
                        className="
                          text-[9px] uppercase
                          tracking-[0.25em]
                          text-gray-400
                          dark:text-gray-700
                        "
                      >
                        Chapter {String(index + 1).padStart(2, "0")}
                      </span>

                      <ArrowRight
                        size={15}
                        className="
                          text-gray-400
                          transition duration-300
                          group-hover:translate-x-1
                          group-hover:text-red-600

                          dark:text-gray-700
                          dark:group-hover:text-red-500
                        "
                      />
                    </div>

                    {/* Red Hover Line */}

                    <div
                      className="
                        absolute bottom-0 left-0
                        h-px w-0
                        bg-red-600
                        transition-all duration-500
                        group-hover:w-full
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= NEXT CHAPTER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p
            className="
              text-[10px] uppercase
              tracking-[0.35em]
              text-gray-400
              dark:text-gray-700
            "
          >
            The story continues...
          </p>

          <h3
            className="
              mt-4
              text-2xl font-bold
              text-gray-800
              dark:text-gray-300
              sm:text-3xl
            "
          >
            Ready for the next chapter.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}