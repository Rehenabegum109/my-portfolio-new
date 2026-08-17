"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const designations = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Next.js Developer",
  "Full Stack Developer",
];

export default function Hero() {
  const [designationIndex, setDesignationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDesignationIndex(
        (prev) => (prev + 1) % designations.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-white text-gray-900
        transition-colors duration-500
        dark:bg-[#050505] dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main cinematic glow */}
      <div
        className="
          pointer-events-none absolute -left-40 top-1/4
          h-[600px] w-[600px] rounded-full
          bg-red-500/5 blur-[160px]
          dark:bg-red-600/10
        "
      />

      {/* Right glow */}
      <div
        className="
          pointer-events-none absolute right-[-200px] top-[15%]
          h-[650px] w-[650px] rounded-full
          bg-violet-500/5 blur-[180px]
          dark:bg-violet-700/10
        "
      />

      {/* Bottom glow */}
      <div
        className="
          pointer-events-none absolute bottom-[-250px] left-1/2
          h-[500px] w-[800px]
          -translate-x-1/2
          rounded-full
          bg-red-500/5 blur-[150px]
          dark:bg-red-600/5
        "
      />

      {/* Cinematic gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_75%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_75%)]
        "
      />

      {/* =====================================================
          DECORATIVE GRID
      ====================================================== */}

      <div className="pointer-events-none absolute right-10 top-32 hidden opacity-20 lg:block">
        <div className="grid grid-cols-8 gap-5">
          {Array.from({ length: 64 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1 w-1 rounded-full
                bg-red-400
                dark:bg-violet-400
              "
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative mx-auto grid min-h-screen max-w-7xl
          items-center gap-10
          px-6 pb-20 pt-28
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-4 lg:pt-24
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          {/* Small intro */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500 sm:w-14" />

            <p
              className="
                text-xs font-medium uppercase
                tracking-[0.35em]
                text-red-500
                dark:text-red-400
                sm:text-sm
              "
            >
              Welcome to my portfolio
            </p>
          </div>

          {/* Name */}
          <h1
            className="
              max-w-3xl
              text-5xl font-black
              leading-[0.95]
              tracking-tight
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
            "
          >
            Rehena
            <br />

            <span
              className="
                bg-gradient-to-r
                from-gray-900
                via-gray-700
                to-gray-400
                bg-clip-text
                text-transparent
                dark:from-white
                dark:via-gray-200
                dark:to-gray-500
              "
            >
              Begum
            </span>
          </h1>

          {/* Designation */}
          <div className="mt-7 flex min-h-[50px] items-center gap-4">
            <div className="h-8 w-1 rounded-full bg-red-500" />

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={designations[designationIndex]}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    text-xl font-semibold
                    text-gray-800
                    dark:text-gray-200
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  {designations[designationIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <p
            className="
              mt-7 max-w-2xl
              text-base leading-8
              text-gray-600
              dark:text-gray-400
              sm:text-lg
            "
          >
            I build modern, scalable and user-focused web applications
            that combine clean interfaces with powerful functionality.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <div className="mt-9 flex flex-wrap gap-4">
            {/* Primary */}
            <a
              href="#projects"
              className="
                group flex items-center gap-3
                rounded-md
                bg-red-600
                px-7 py-3.5
                text-sm font-semibold
                text-white
                shadow-lg shadow-red-600/20
                transition duration-300
                hover:-translate-y-0.5
                hover:bg-red-500
                hover:shadow-red-600/30
              "
            >
              Explore My Work

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Secondary */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-3
                rounded-md
                border border-gray-300
                bg-gray-100
                px-7 py-3.5
                text-sm font-semibold
                text-gray-800
                transition duration-300
                hover:-translate-y-0.5
                hover:border-gray-400
                hover:bg-gray-200

                dark:border-white/20
                dark:bg-white/[0.03]
                dark:text-gray-200
                dark:hover:border-white/40
                dark:hover:bg-white/[0.08]
              "
            >
              Download CV

              <Download size={18} />
            </a>
          </div>

          {/* =================================================
              SOCIAL + STATS
          ================================================== */}

          <div className="mt-12 flex flex-wrap items-center gap-8">
            {/* Social */}
            <div>
              <p
                className="
                  mb-3 text-[10px]
                  uppercase tracking-[0.3em]
                  text-gray-500
                  dark:text-gray-600
                "
              >
                Connect
              </p>

              <div className="flex gap-2.5">
                {/* GitHub */}
                <a
                  href="https://github.com/Rehenabegum109"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-gray-200
                    bg-gray-100
                    text-xs font-bold
                    text-gray-500
                    transition

                    hover:border-red-500/50
                    hover:text-red-600

                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-gray-400
                    dark:hover:text-white
                  "
                >
                  GH
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/rehena-begum-057894396"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-gray-200
                    bg-gray-100
                    text-xs font-bold
                    text-gray-500
                    transition

                    hover:border-red-500/50
                    hover:text-red-600

                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-gray-400
                    dark:hover:text-white
                  "
                >
                  in
                </a>

                {/* Email */}
                <a
                  href="rehenabegum999000@gmail.com"
                  aria-label="Email"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-gray-200
                    bg-gray-100
                    text-gray-500
                    transition

                    hover:border-red-500/50
                    hover:text-red-600

                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-gray-400
                    dark:hover:text-white
                  "
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div
              className="
                hidden h-12 w-px
                bg-gray-200
                dark:bg-white/10
                sm:block
              "
            />

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  5+
                </p>

                <p
                  className="
                    mt-1 text-[10px]
                    uppercase tracking-wider
                    text-gray-500
                    dark:text-gray-600
                  "
                >
                  Projects
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  10+
                </p>

                <p
                  className="
                    mt-1 text-[10px]
                    uppercase tracking-wider
                    text-gray-500
                    dark:text-gray-600
                  "
                >
                  Technologies
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            RIGHT PROFILE
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            relative flex min-h-[500px]
            items-center justify-center
            lg:min-h-[680px]
          "
        >
          {/* Huge glow */}
          <div
            className="
              absolute
              h-[350px] w-[350px]
              rounded-full
              bg-red-500/10
              blur-[120px]
              dark:bg-red-600/10
              sm:h-[500px] sm:w-[500px]
            "
          />

          {/* Outer ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[350px] w-[350px]
              rounded-full
              border border-gray-300
              border-dashed
              opacity-70
              dark:border-white/10
              sm:h-[500px] sm:w-[500px]
            "
          />

          {/* Inner ring */}
          <div
            className="
              absolute
              h-[300px] w-[300px]
              rounded-full
              border border-red-500/20
              sm:h-[430px] sm:w-[430px]
            "
          />

          {/* Profile */}
          <div
            className="
              relative z-10
              flex h-[430px] w-[320px]
              items-end justify-center
              sm:h-[560px] sm:w-[400px]
            "
          >
            {/* Profile glow */}
            <div
              className="
                absolute bottom-0
                h-[400px] w-[280px]
                rounded-full
                bg-red-500/10
                blur-[90px]
                dark:bg-red-600/20
                sm:h-[500px] sm:w-[340px]
              "
            />

            {/* Image container */}
            <div
              className="
                relative h-full w-full
                overflow-hidden
                rounded-[45%]
                border border-gray-200
                bg-gradient-to-b
                from-gray-100
                via-gray-50
                to-gray-200
                shadow-2xl
                dark:border-white/10
                dark:from-white/[0.08]
                dark:via-[#111111]
                dark:to-black
              "
            >
              <Image
                src="/profile.png"
                alt="Rehena Begum - MERN Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 320px, 400px"
                className="object-cover object-top"
              />

              {/* Cinematic overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-white/20
                  via-transparent
                  to-transparent
                  dark:from-black
                "
              />

              <div
                className="
                  pointer-events-none absolute
                  inset-x-0 bottom-0 h-1/3
                  bg-gradient-to-t
                  from-white/40 to-transparent
                  dark:from-black/80
                "
              />
            </div>
          </div>

          {/* =================================================
              FLOATING CARD
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute left-0 top-[25%]
              z-20 hidden
              rounded-xl
              border border-gray-200
              bg-white/90
              px-5 py-4
              shadow-2xl
              backdrop-blur-xl
              sm:block

              dark:border-white/10
              dark:bg-[#101010]/90
            "
          >
            <p
              className="
                text-[10px]
                uppercase tracking-[0.2em]
                text-gray-500
                dark:text-gray-600
              "
            >
              Currently
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              Building
            </p>

            <p className="text-xs text-red-500 dark:text-red-400">
              Full Stack Apps
            </p>
          </motion.div>

          {/* Decorative vertical line */}
          <div
            className="
              absolute right-10 top-1/2
              hidden h-32 w-px
              bg-gradient-to-b
              from-transparent
              via-red-500/50
              to-transparent
              lg:block
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute bottom-7 left-1/2
          hidden
          -translate-x-1/2
          flex-col items-center gap-2
          text-gray-500
          transition
          hover:text-red-500
          dark:text-gray-600
          dark:hover:text-white
          sm:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}