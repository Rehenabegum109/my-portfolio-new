// "use client";

// import Image from "next/image";
// import { ArrowRight, Code2, Layers3, Rocket } from "lucide-react";
// import { motion } from "framer-motion";

// const highlights = [
//   {
//     number: "01",
//     title: "Frontend Development",
//     description:
//       "Building responsive and modern interfaces with React, Next.js and Tailwind CSS.",
//     icon: Code2,
//   },
//   {
//     number: "02",
//     title: "Full Stack Development",
//     description:
//       "Creating complete web applications with Node.js, Express, databases and REST APIs.",
//     icon: Layers3,
//   },
//   {
//     number: "03",
//     title: "Problem Solving",
//     description:
//       "Turning real-world ideas into clean, functional and user-friendly digital experiences.",
//     icon: Rocket,
//   },
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//      className="relative -mt-10 overflow-hidden bg-[#050505] py-12 text-white sm:-mt-12 sm:py-16"
//     >
//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute left-[-250px] top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[150px]" />

//       <div className="pointer-events-none absolute right-[-250px] bottom-0 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[150px]" />

//       {/* Top cinematic line */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* ===================================================
//             HEADER
//         ==================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >
//           <div className="mb-5 flex items-center gap-4">
//             <span className="h-px w-10 bg-red-500" />

//             <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-400">
//               Behind The Code
//             </p>
//           </div>

//           <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
//             More than just
//             <span className="text-gray-500"> writing code.</span>
//           </h2>
//         </motion.div>

//         {/* ===================================================
//             MAIN CONTENT
//         ==================================================== */}

//         <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

//           {/* =================================================
//               IMAGE
//           ================================================== */}

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative mx-auto w-full max-w-md"
//           >
//             {/* Glow */}
//             <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[100px]" />

//             {/* Outer Frame */}
//             <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">

//               <Image
//                 src="/profile.png"
//                 alt="Rehena Begum"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 400px"
//                 className="object-cover object-top grayscale-[15%] transition duration-700 hover:scale-105"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

//               {/* Bottom label */}
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <p className="text-xs uppercase tracking-[0.25em] text-red-400">
//                   Rehena Begum
//                 </p>

//                 <p className="mt-1 text-lg font-semibold text-white">
//                   MERN Stack Developer
//                 </p>
//               </div>

//               {/* Corner decoration */}
//               <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-red-500/60" />

//               <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-red-500/60" />
//             </div>

//             {/* Floating Stats */}
//             <motion.div
//               animate={{
//                 y: [0, -8, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#101010]/95 px-6 py-4 shadow-2xl backdrop-blur-xl"
//             >
//               <p className="text-2xl font-bold text-white">
//                 5+
//               </p>

//               <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
//                 Projects Built
//               </p>
//             </motion.div>

//             {/* Top badge */}
//             <div className="absolute -left-4 top-10 rounded-xl border border-red-500/20 bg-[#101010]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-6">
//               <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
//                 Focus
//               </p>

//               <p className="mt-1 text-xs font-semibold text-red-400">
//                 Modern Web
//               </p>
//             </div>
//           </motion.div>

//           {/* =================================================
//               TEXT CONTENT
//           ================================================== */}

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
//               I&apos;m{" "}
//               <span className="font-semibold text-white">
//                 Rehena Begum
//               </span>
//               , a passionate web developer focused on creating modern,
//               responsive and user-friendly web applications.
//             </p>

//             <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
//               I enjoy transforming ideas into meaningful digital experiences.
//               My development journey has taken me from building responsive
//               interfaces with React to creating full-stack applications using
//               Next.js, Node.js, Express and modern databases.
//             </p>

//             <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
//               I care about clean code, thoughtful UI, performance and creating
//               products that are not only functional but also enjoyable to use.
//             </p>

//             {/* =================================================
//                 HIGHLIGHTS
//             ================================================== */}

//             <div className="mt-10 space-y-3">
//               {highlights.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={item.number}
//                     initial={{
//                       opacity: 0,
//                       y: 20,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       delay: index * 0.1,
//                     }}
//                     className="group flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition duration-300 hover:border-red-500/20 hover:bg-white/[0.04]"
//                   >
//                     {/* Number */}
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black text-xs font-semibold text-gray-500 transition group-hover:border-red-500/30 group-hover:text-red-400">
//                       {item.number}
//                     </div>

//                     {/* Icon */}
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
//                       <Icon size={18} />
//                     </div>

//                     {/* Text */}
//                     <div>
//                       <h3 className="text-sm font-semibold text-gray-200">
//                         {item.title}
//                       </h3>

//                       <p className="mt-1 text-xs leading-6 text-gray-600">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* CTA */}
//             <a
//               href="#projects"
//               className="group mt-9 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:border-red-500/30 hover:bg-red-500/5 hover:text-white"
//             >
//               Explore My Journey

//               <ArrowRight
//                 size={17}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </a>
//           </motion.div>
//         </div>

//         {/* ===================================================
//             BOTTOM STATS
//         ==================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-24 grid border-y border-white/10 sm:grid-cols-3"
//         >
//           {/* Stat 1 */}
//           <div className="border-b border-white/10 px-6 py-8 sm:border-b-0 sm:border-r">
//             <p className="text-3xl font-black text-white">
//               5+
//             </p>

//             <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-600">
//               Projects Completed
//             </p>
//           </div>

//           {/* Stat 2 */}
//           <div className="border-b border-white/10 px-6 py-8 sm:border-b-0 sm:border-r">
//             <p className="text-3xl font-black text-white">
//               10+
//             </p>

//             <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-600">
//               Technologies
//             </p>
//           </div>

//           {/* Stat 3 */}
//           <div className="px-6 py-8">
//             <p className="text-3xl font-black text-red-500">
//               100%
//             </p>

//             <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-600">
//               Passion for Learning
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { ArrowRight, Code2, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and modern interfaces with React, Next.js and Tailwind CSS.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Full Stack Development",
    description:
      "Creating complete web applications with Node.js, Express, databases and REST APIs.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "Turning real-world ideas into clean, functional and user-friendly digital experiences.",
    icon: Rocket,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        border-t border-gray-200
        bg-white
        py-20
        text-gray-900
        transition-colors duration-300

        dark:border-white/10
        dark:bg-[#050505]
        dark:text-white

        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute left-[-250px] top-1/3
          h-[500px] w-[500px]
          rounded-full
          bg-red-500/5
          blur-[150px]
          dark:bg-red-600/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-0 right-[-250px]
          h-[500px] w-[500px]
          rounded-full
          bg-red-500/5
          blur-[150px]
          dark:bg-red-600/5
        "
      />

      {/* Top cinematic line */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-px w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-gray-300
          to-transparent
          dark:via-white/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-16"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-red-600
                dark:text-red-400
              "
            >
              Behind The Code
            </p>
          </div>

          <h2
            className="
              max-w-4xl
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-gray-950
              dark:text-white

              sm:text-5xl
              md:text-6xl
            "
          >
            More than just{" "}
            <span className="text-gray-400 dark:text-gray-500">
              writing code.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-500
              dark:text-gray-500
              sm:text-base
            "
          >
            I&apos;m passionate about turning ideas into meaningful,
            user-friendly and modern digital experiences.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
          "
        >

          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >

            {/* Image Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-red-500/10
                blur-[100px]
                dark:bg-red-600/15
              "
            />

            {/* Image Frame */}
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-gray-100
                shadow-xl
                shadow-gray-200/40
                transition-all
                duration-300

                dark:border-white/10
                dark:bg-[#101010]
                dark:shadow-none
              "
            >
              <Image
                src="/profile.png"
                alt="Rehena Begum - MERN Stack Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="
                  object-cover
                  object-top
                  grayscale-[10%]
                  transition
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-red-400
                  "
                >
                  Rehena Begum
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  MERN Stack Developer
                </p>
              </div>

              {/* Corner Decorations */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  h-8
                  w-8
                  border-l
                  border-t
                  border-red-500/70
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  h-8
                  w-8
                  border-b
                  border-r
                  border-red-500/70
                "
              />
            </div>

            {/* =================================================
                FLOATING STATS
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                -right-3
                rounded-2xl
                border
                border-gray-200
                bg-white/95
                px-6
                py-4
                shadow-xl
                backdrop-blur-xl

                dark:border-white/10
                dark:bg-[#101010]/95
                dark:shadow-2xl

                sm:-right-5
              "
            >
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                5+
              </p>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  dark:text-gray-600
                "
              >
                Projects Built
              </p>
            </motion.div>

            {/* =================================================
                FOCUS BADGE
            ================================================== */}

            <div
              className="
                absolute
                -left-3
                top-10
                rounded-xl
                border
                border-red-500/20
                bg-white/95
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl

                dark:bg-[#101010]/95

                sm:-left-6
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  dark:text-gray-600
                "
              >
                Focus
              </p>

              <p className="mt-1 text-xs font-semibold text-red-600 dark:text-red-400">
                Modern Web
              </p>
            </div>
          </motion.div>

          {/* =================================================
              TEXT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Main Intro */}
            <p
              className="
                max-w-2xl
                text-lg
                leading-8
                text-gray-600
                dark:text-gray-400
                sm:text-xl
              "
            >
              I&apos;m{" "}
              <span className="font-semibold text-gray-950 dark:text-white">
                Rehena Begum
              </span>
              , a passionate web developer focused on creating modern,
              responsive and user-friendly web applications.
            </p>

            {/* Paragraph 1 */}
            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-8
                text-gray-500
                dark:text-gray-500
                sm:text-base
              "
            >
              I enjoy transforming ideas into meaningful digital experiences.
              My development journey has taken me from building responsive
              interfaces with React to creating full-stack applications using
              Next.js, Node.js, Express and modern databases.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-8
                text-gray-500
                dark:text-gray-500
                sm:text-base
              "
            >
              I care about clean code, thoughtful UI, performance and creating
              products that are not only functional but also enjoyable to use.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-10 space-y-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="
                      group
                      flex
                      gap-4
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      p-4
                      transition
                      duration-300

                      hover:border-red-500/30
                      hover:bg-red-50/40

                      dark:border-white/5
                      dark:bg-white/[0.02]
                      dark:hover:border-red-500/20
                      dark:hover:bg-white/[0.04]
                    "
                  >

                    {/* Number */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-gray-200
                        bg-white
                        text-xs
                        font-semibold
                        text-gray-500
                        transition

                        group-hover:border-red-500/30
                        group-hover:text-red-500

                        dark:border-white/10
                        dark:bg-black
                        dark:text-gray-500
                        dark:group-hover:text-red-400
                      "
                    >
                      {item.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-red-500/10
                        text-red-600
                        dark:text-red-400
                      "
                    >
                      <Icon size={18} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="
                          text-sm
                          font-semibold
                          text-gray-800
                          dark:text-gray-200
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-6
                          text-gray-500
                          dark:text-gray-600
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <a
              href="#projects"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                px-6
                py-3
                text-sm
                font-medium
                text-gray-700
                transition
                duration-300

                hover:border-red-500/30
                hover:bg-red-50
                hover:text-red-600

                dark:border-white/10
                dark:bg-white/[0.03]
                dark:text-gray-300
                dark:hover:bg-red-500/5
                dark:hover:text-white
              "
            >
              Explore My Journey

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-20
            grid
            border-y
            border-gray-200
            dark:border-white/10

            sm:grid-cols-3
          "
        >

          {/* Stat 1 */}
          <div
            className="
              border-b
              border-gray-200
              px-6
              py-8

              dark:border-white/10

              sm:border-b-0
              sm:border-r
            "
          >
            <p className="text-3xl font-black text-gray-900 dark:text-white">
              5+
            </p>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-500
                dark:text-gray-600
              "
            >
              Projects Completed
            </p>
          </div>

          {/* Stat 2 */}
          <div
            className="
              border-b
              border-gray-200
              px-6
              py-8

              dark:border-white/10

              sm:border-b-0
              sm:border-r
            "
          >
            <p className="text-3xl font-black text-gray-900 dark:text-white">
              10+
            </p>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-500
                dark:text-gray-600
              "
            >
              Technologies
            </p>
          </div>

          {/* Stat 3 */}
          <div className="px-6 py-8">
            <p className="text-3xl font-black text-red-600 dark:text-red-500">
              100%
            </p>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-500
                dark:text-gray-600
              "
            >
              Passion for Learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}