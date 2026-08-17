
"use client";

import { ArrowUpRight, Code2, Layers3, Server } from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces with React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Creating REST APIs, authentication flows and reliable backend services with Node.js and Express.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Products",
    description:
      "Connecting frontend, backend and databases to turn ideas into complete web applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-20 text-white sm:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-[400px] w-[400px] rounded-full bg-violet-700/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-400">
              About Me
            </p>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Turning ideas into
              <span className="text-gray-500"> real products.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              I&apos;m Rehena Begum, a web developer focused on building
              modern, responsive and user-centered web applications.
            </p>
          </div>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-gray-300">
              My journey into web development started with curiosity about
              how modern websites work. That curiosity turned into a habit of
              learning, experimenting and building real applications.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              I work across the frontend and backend, focusing on clean
              interfaces, API integration, authentication, database
              architecture and scalable application structure.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              I&apos;m especially interested in React, Next.js and the MERN
              ecosystem, while continuously improving my ability to build
              production-ready full-stack applications.
            </p>

            {/* Focus Cards */}

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {focusAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group rounded-xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 transition group-hover:border-red-500/40 group-hover:bg-red-500/10">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT PROFILE CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-red-600/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 sm:p-7">
              {/* Top */}

              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                    Developer Profile
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Rehena Begum
                  </h3>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/5 text-xs font-bold text-red-400">
                  RB
                </span>
              </div>

              {/* Focus */}

              <div className="mt-6 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-gray-500">
                    Primary Focus
                  </span>

                  <span className="text-sm font-medium text-gray-200">
                    Frontend / Full Stack
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-gray-500">
                    Core Stack
                  </span>

                  <span className="text-sm font-medium text-gray-200">
                    React / Next.js
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-gray-500">
                    Backend
                  </span>

                  <span className="text-sm font-medium text-gray-200">
                    Node / Express
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Database
                  </span>

                  <span className="text-sm font-medium text-gray-200">
                    MongoDB / PostgreSQL
                  </span>
                </div>
              </div>

              {/* Highlight */}

              <div className="mt-7 rounded-xl border border-red-500/15 bg-red-500/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-red-400">
                  Current Direction
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Building stronger full-stack fundamentals and creating
                  practical applications that solve real-world problems.
                </p>
              </div>

              {/* CTA */}

              <a
                href="#projects"
                className="group mt-6 flex w-fit items-center gap-2 text-xs font-semibold text-gray-400 transition hover:text-white"
              >
                Explore my projects

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}