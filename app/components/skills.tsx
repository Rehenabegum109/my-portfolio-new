// "use client";

// import { useState, type ElementType } from "react";
// import {
//   ArrowUpRight,
//   Braces,
//   Cloud,
//   Code2,
//   Database,
//   GitBranch,
//   Layers3,
//   LockKeyhole,
//   Server,
//   Settings2,
//   Zap,
// } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// type Skill = {
//   name: string;
//     label?: string;
//   description: string;
//   icon: ElementType;
//   level?: "Core" | "Basic";
// };

// const categories = {
//   Frontend: {
//     number: "01",
//     subtitle: "INTERFACE ENGINEERING",
//     description:
//       "Building responsive, accessible and polished interfaces for modern web applications.",
//     skills: [
//       {
//         name: "HTML5",
//         description: "Semantic structure & accessible markup",
//         icon: Code2,
//         level: "Core" as const,
//       },
//       {
//         name: "CSS3",
//         description: "Modern layouts, animations & responsive design",
//         icon: Layers3,
//         level: "Core" as const,
//       },
//       {
//         name: "JavaScript",
//         description: "ES6+ syntax, DOM & application logic",
//         icon: Braces,
//         level: "Core" as const,
//       },
//       {
//         name: "React.js",
//         description: "Reusable components & interactive interfaces",
//         icon: Code2,
//         level: "Core" as const,
//       },
//       {
//         name: "TypeScript",
//         description: "Type-safe and maintainable applications",
//         icon: Braces,
//         level: "Core" as const,
//       },
//       {
//         name: "Next.js",
//         description: "App Router, SSR & production-ready applications",
//         icon: Layers3,
//         level: "Core" as const,
//       },
//       {
//         name: "Tailwind CSS",
//         description: "Utility-first responsive UI development",
//         icon: Layers3,
//         level: "Core" as const,
//       },
//     ],
//   },

//   "Backend & APIs": {
//     number: "02",
//     subtitle: "SERVER ENGINEERING",
//     description:
//       "Creating secure APIs, authentication systems and reliable server-side applications.",
//     skills: [
//       {
//         name: "Node.js",
//         description: "Server-side JavaScript runtime",
//         icon: Server,
//         level: "Core" as const,
//       },
//       {
//         name: "Express.js",
//         description: "REST API development & middleware",
//         icon: Server,
//         level: "Core" as const,
//       },
//       {
//         name: "Firebase",
//         description: "Authentication & basic cloud integration",
//         icon: Cloud,
//         level: "Basic" as const,
//       },
//       {
//         name: "JWT Authentication",
//         description: "Token-based authentication & authorization",
//         icon: LockKeyhole,
//         level: "Core" as const,
//       },
//     ],
//   },

//   Databases: {
//     number: "03",
//     subtitle: "DATA ENGINEERING",
//     description:
//       "Working with structured and flexible data models for modern applications.",
//     skills: [
//       {
//         name: "MongoDB",
//         description: "NoSQL database & document modeling",
//         icon: Database,
//         level: "Core" as const,
//       },
//       {
//         name: "PostgreSQL",
//         description: "Relational database development",
//         icon: Database,
//         level: "Core" as const,
//       },
//       {
//         name: "SQL",
//         description: "Queries, relationships & basic data operations",
//         icon: Database,
//         level: "Basic" as const,
//       },
//      {
//   name: "Prisma",
//   label: "ORM",
//   description:
//     "Type-safe database access, schema modeling and efficient queries.",
//   icon: Database,
//   code: "PR",
//   level: "Core" as const,
// },
// {
//   name: "Redis",
//   label: "IN-MEMORY DATA",
//   description:
//     "Fast caching, temporary data storage and OTP-based workflows.",
//   icon: Zap,
//   code: "RD",
//   level: "Core" as const,
// },
//     ],
//   },

//   "Tools & Deployment": {
//     number: "04",
//     subtitle: "DEVELOPMENT WORKFLOW",
//     description:
//       "Tools and deployment technologies I use to build, manage and ship applications.",
//     skills: [
//       {
//         name: "Git",
//         description: "Version control & source management",
//         icon: GitBranch,
//         level: "Core" as const,
//       },
//       {
//         name: "GitHub",
//         description: "Repositories, collaboration & code hosting",
//         icon: GitBranch,
//         level: "Core" as const,
//       },
//       {
//         name: "VS Code",
//         description: "Primary development environment",
//         icon: Code2,
//         level: "Core" as const,
//       },
//       {
//         name: "Docker",
//         description: "Containerization & development environments",
//         icon: Settings2,
//         level: "Basic" as const,
//       },
//       {
//         name: "CI/CD Pipeline",
//         description: "Basic automated build & deployment workflow",
//         icon: Settings2,
//         level: "Basic" as const,
//       },
//       {
//         name: "Firebase Hosting",
//         description: "Basic application deployment & hosting",
//         icon: Cloud,
//         level: "Basic" as const,
//       },
//     ],
//   },
// } satisfies Record<
//   string,
//   {
//     number: string;
//     subtitle: string;
//     description: string;
//     skills: Skill[];
//   }
// >;

// type Category = keyof typeof categories;

// export default function Skills() {
//   const [activeCategory, setActiveCategory] =
//     useState<Category>("Frontend");

//   const active = categories[activeCategory];

//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-28"
//     >
//       {/* =====================================================
//           CINEMATIC BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,9,20,0.09),transparent_35%)]" />

//       <div className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-600/[0.035] blur-[150px]" />

//       <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* =====================================================
//             HEADER
//         ====================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-14"
//         >
//           <div className="mb-5 flex items-center gap-4">
//             <span className="h-px w-12 bg-red-600" />

//             <span className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
//               Behind The Scene
//             </span>
//           </div>

//           <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
//             <div>
//               <h2 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
//                 THE STACK
//                 <br />
//                 <span className="text-gray-600">
//                   BEHIND THE WORK.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
//                 Technologies, tools and systems I use to turn ideas into
//                 functional digital experiences.
//               </p>
//             </div>

//             <div className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 lg:self-end">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

//               <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
//                 Developer Stack
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* =====================================================
//             MAIN VAULT
//         ====================================================== */}

//         <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909] shadow-2xl">

//           <div className="grid lg:grid-cols-[280px_1fr]">

//             {/* =================================================
//                 LEFT CATEGORY PANEL
//             ================================================== */}

//             <aside className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r lg:p-6">

//               <div className="mb-5 px-2">
//                 <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700">
//                   Explore Stack
//                 </p>
//               </div>

//               <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-2">
//                 {(Object.keys(categories) as Category[]).map(
//                   (category) => {
//                     const item = categories[category];
//                     const isActive = category === activeCategory;

//                     return (
//                       <button
//                         key={category}
//                         type="button"
//                         onClick={() => setActiveCategory(category)}
//                         className={`group relative flex min-w-[190px] items-center justify-between overflow-hidden rounded-xl px-4 py-4 text-left transition-all duration-300 lg:w-full ${
//                           isActive
//                             ? "bg-red-600 text-white shadow-lg shadow-red-600/10"
//                             : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
//                         }`}
//                       >
//                         <div className="flex items-center gap-4">
//                           <span
//                             className={`text-[10px] font-bold tracking-widest ${
//                               isActive
//                                 ? "text-white/50"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             {item.number}
//                           </span>

//                           <span className="text-sm font-semibold">
//                             {category}
//                           </span>
//                         </div>

//                         <ArrowUpRight
//                           size={15}
//                           className={`transition-all duration-300 ${
//                             isActive
//                               ? "translate-x-0 opacity-100"
//                               : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
//                           }`}
//                         />
//                       </button>
//                     );
//                   },
//                 )}
//               </div>

//               {/* Side information */}
//               <div className="mt-8 hidden border-t border-white/5 pt-6 lg:block">
//                 <p className="text-[10px] uppercase tracking-[0.25em] text-gray-700">
//                   Primary Stack
//                 </p>

//                 <p className="mt-3 text-sm leading-6 text-gray-500">
//                   React
//                   <br />
//                   Next.js
//                   <br />
//                   Node.js
//                   <br />
//                   MongoDB
//                 </p>
//               </div>
//             </aside>

//             {/* =================================================
//                 RIGHT CONTENT
//             ================================================== */}

//             <main className="relative min-h-[580px] overflow-hidden p-6 sm:p-8 lg:p-10">

//               {/* Huge background number */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeCategory}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="pointer-events-none absolute right-0 top-[-50px] select-none text-[180px] font-black leading-none text-white/[0.025] sm:text-[250px]"
//                 >
//                   {active.number}
//                 </motion.div>
//               </AnimatePresence>

//               {/* Top information */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`heading-${activeCategory}`}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative"
//                 >
//                   <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
//                     {active.subtitle}
//                   </p>

//                   <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
//                     {activeCategory}
//                   </h3>

//                   <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
//                     {active.description}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>

//               {/* =================================================
//                   SKILL CARDS
//               ================================================== */}

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`skills-${activeCategory}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.35 }}
//                   className="relative mt-10 grid gap-3 sm:grid-cols-2"
//                 >
//                   {active.skills.map((skill, index) => {
//                     const Icon = skill.icon;

//                     return (
//                       <motion.article
//                         key={skill.name}
//                         initial={{
//                           opacity: 0,
//                           y: 15,
//                         }}
//                         animate={{
//                           opacity: 1,
//                           y: 0,
//                         }}
//                         transition={{
//                           delay: index * 0.06,
//                           duration: 0.35,
//                         }}
//                         whileHover={{
//                           y: -5,
//                         }}
//                         className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 transition-all duration-500 hover:border-red-500/30"
//                       >
//                         {/* Spotlight */}
//                         <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-red-600/0 blur-[55px] transition duration-500 group-hover:bg-red-600/20" />

//                         <div className="relative flex items-start justify-between">
//                           <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-gray-400 transition duration-300 group-hover:border-red-500/30 group-hover:text-red-400">
//                             <Icon size={20} />
//                           </div>

//                           <span
//                             className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider ${
//                               skill.level === "Basic"
//                                 ? "border-yellow-500/20 text-yellow-600"
//                                 : "border-red-500/20 text-red-500"
//                             }`}
//                           >
//                             {skill.level}
//                           </span>
//                         </div>

//                         <h4 className="relative mt-6 text-lg font-bold text-gray-200 transition group-hover:text-white">
//                           {skill.name}
//                         </h4>

//                         <p className="relative mt-2 text-sm leading-6 text-gray-600">
//                           {skill.description}
//                         </p>

//                         <div className="relative mt-5 flex items-center gap-2">
//                           <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

//                           <span className="text-[10px] uppercase tracking-[0.2em] text-gray-700 transition group-hover:text-gray-500">
//                             In my toolkit
//                           </span>
//                         </div>

//                         {/* Bottom red line */}
//                         <div className="absolute bottom-0 left-0 h-px w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
//                       </motion.article>
//                     );
//                   })}
//                 </motion.div>
//               </AnimatePresence>

//               {/* Bottom metadata */}
//               <div className="relative mt-8 flex items-center justify-between border-t border-white/5 pt-5">
//                 <span className="text-[10px] uppercase tracking-[0.25em] text-gray-700">
//                   {active.skills.length} Skills
//                 </span>

//                 <span className="text-[10px] uppercase tracking-[0.25em] text-gray-700">
//                   2026 Stack
//                 </span>
//               </div>
//             </main>
//           </div>
//         </div>

//         {/* =====================================================
//             CLOSING STATEMENT
//         ====================================================== */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-12 text-center"
//         >
//           <p className="text-sm text-gray-700">
//             The technology is the tool.
//           </p>

//           <p className="mt-2 text-base font-medium text-gray-400 sm:text-lg">
//             The experience is what matters.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, type ElementType } from "react";
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Server,
  Settings2,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Skill = {
  name: string;
  label?: string;
  code?: string;
  description: string;
  icon: ElementType;
  level?: "Core" | "Basic";
};

const categories = {
  Frontend: {
    number: "01",
    subtitle: "INTERFACE ENGINEERING",
    description:
      "Building responsive, accessible and polished interfaces for modern web applications.",
    skills: [
      {
        name: "HTML5",
        description: "Semantic structure & accessible markup",
        icon: Code2,
        level: "Core" as const,
      },
      {
        name: "CSS3",
        description: "Modern layouts, animations & responsive design",
        icon: Layers3,
        level: "Core" as const,
      },
      {
        name: "JavaScript",
        description: "ES6+ syntax, DOM & application logic",
        icon: Braces,
        level: "Core" as const,
      },
      {
        name: "React.js",
        description: "Reusable components & interactive interfaces",
        icon: Code2,
        level: "Core" as const,
      },
      {
        name: "TypeScript",
        description: "Type-safe and maintainable applications",
        icon: Braces,
        level: "Core" as const,
      },
      {
        name: "Next.js",
        description:
          "App Router, SSR & production-ready applications",
        icon: Layers3,
        level: "Core" as const,
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first responsive UI development",
        icon: Layers3,
        level: "Core" as const,
      },
    ],
  },

  "Backend & APIs": {
    number: "02",
    subtitle: "SERVER ENGINEERING",
    description:
      "Creating secure APIs, authentication systems and reliable server-side applications.",
    skills: [
      {
        name: "Node.js",
        description:
          "Server-side JavaScript runtime",
        icon: Server,
        level: "Core" as const,
      },
      {
        name: "Express.js",
        description:
          "REST API development & middleware",
        icon: Server,
        level: "Core" as const,
      },
      {
        name: "Firebase",
        description:
          "Authentication & basic cloud integration",
        icon: Cloud,
        level: "Basic" as const,
      },
      {
        name: "JWT Authentication",
        description:
          "Token-based authentication & authorization",
        icon: LockKeyhole,
        level: "Core" as const,
      },
    ],
  },

  Databases: {
    number: "03",
    subtitle: "DATA ENGINEERING",
    description:
      "Working with structured and flexible data models for modern applications.",
    skills: [
      {
        name: "MongoDB",
        description:
          "NoSQL database & document modeling",
        icon: Database,
        level: "Core" as const,
      },
      {
        name: "PostgreSQL",
        description:
          "Relational database development",
        icon: Database,
        level: "Core" as const,
      },
      {
        name: "SQL",
        description:
          "Queries, relationships & basic data operations",
        icon: Database,
        level: "Basic" as const,
      },
      {
        name: "Prisma",
        label: "ORM",
        description:
          "Type-safe database access, schema modeling and efficient queries.",
        icon: Database,
        code: "PR",
        level: "Core" as const,
      },
      {
        name: "Redis",
        label: "IN-MEMORY DATA",
        description:
          "Fast caching, temporary data storage and OTP-based workflows.",
        icon: Zap,
        code: "RD",
        level: "Core" as const,
      },
    ],
  },

  "Tools & Deployment": {
    number: "04",
    subtitle: "DEVELOPMENT WORKFLOW",
    description:
      "Tools and deployment technologies I use to build, manage and ship applications.",
    skills: [
      {
        name: "Git",
        description:
          "Version control & source management",
        icon: GitBranch,
        level: "Core" as const,
      },
      {
        name: "GitHub",
        description:
          "Repositories, collaboration & code hosting",
        icon: GitBranch,
        level: "Core" as const,
      },
      {
        name: "VS Code",
        description:
          "Primary development environment",
        icon: Code2,
        level: "Core" as const,
      },
      {
        name: "Docker",
        description:
          "Containerization & development environments",
        icon: Settings2,
        level: "Basic" as const,
      },
      {
        name: "CI/CD Pipeline",
        description:
          "Basic automated build & deployment workflow",
        icon: Settings2,
        level: "Basic" as const,
      },
      {
        name: "Firebase Hosting",
        description:
          "Basic application deployment & hosting",
        icon: Cloud,
        level: "Basic" as const,
      },
    ],
  },
} satisfies Record<
  string,
  {
    number: string;
    subtitle: string;
    description: string;
    skills: Skill[];
  }
>;

type Category = keyof typeof categories;

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Frontend");

  const active = categories[activeCategory];

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-white text-gray-900
        transition-colors duration-500
        dark:bg-[#050505] dark:text-white
        py-20 sm:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(229,9,20,0.06),transparent_35%)]
          dark:bg-[radial-gradient(circle_at_50%_0%,rgba(229,9,20,0.09),transparent_35%)]
        "
      />

      <div
        className="
          pointer-events-none absolute left-1/2 top-[45%]
          h-[500px] w-[800px]
          -translate-x-1/2 rounded-full
          bg-red-600/[0.025]
          blur-[150px]
          dark:bg-red-600/[0.035]
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.025]
          [background-image:linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)]
          [background-size:70px_70px]
          dark:[background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
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
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-red-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-red-600 dark:text-red-500">
              Behind The Scene
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2
                className="
                  text-4xl font-black leading-[0.95]
                  tracking-tight
                  text-gray-900
                  sm:text-5xl md:text-7xl
                  dark:text-white
                "
              >
                THE STACK
                <br />

                <span className="text-gray-400 dark:text-gray-600">
                  BEHIND THE WORK.
                </span>
              </h2>

              <p
                className="
                  mt-6 max-w-2xl text-sm leading-7
                  text-gray-600
                  sm:text-base
                  dark:text-gray-500
                "
              >
                Technologies, tools and systems I use to turn ideas into
                functional digital experiences.
              </p>
            </div>

            <div
              className="
                flex items-center gap-3 self-start
                rounded-full border
                border-gray-200
                bg-gray-50
                px-4 py-2
                lg:self-end
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

              <span
                className="
                  text-[10px] uppercase tracking-[0.2em]
                  text-gray-500
                  dark:text-gray-500
                "
              >
                Developer Stack
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN VAULT
        ====================================================== */}

        <div
          className="
            overflow-hidden rounded-3xl border
            border-gray-200
            bg-gray-50
            shadow-xl
            transition-colors duration-500
            dark:border-white/10
            dark:bg-[#090909]
            dark:shadow-2xl
          "
        >
          <div className="grid lg:grid-cols-[280px_1fr]">

            {/* =================================================
                LEFT CATEGORY PANEL
            ================================================== */}

            <aside
              className="
                border-b
                border-gray-200
                p-4
                lg:border-b-0 lg:border-r lg:p-6
                dark:border-white/10
              "
            >
              <div className="mb-5 px-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-700">
                  Explore Stack
                </p>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-2">
                {(Object.keys(categories) as Category[]).map(
                  (category) => {
                    const item = categories[category];
                    const isActive =
                      category === activeCategory;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() =>
                          setActiveCategory(category)
                        }
                        className={`group relative flex min-w-[190px] items-center justify-between overflow-hidden rounded-xl px-4 py-4 text-left transition-all duration-300 lg:w-full ${
                          isActive
                            ? "bg-red-600 text-white shadow-lg shadow-red-600/10"
                            : "text-gray-500 hover:bg-black/[0.04] hover:text-gray-900 dark:hover:bg-white/[0.04] dark:hover:text-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-[10px] font-bold tracking-widest ${
                              isActive
                                ? "text-white/50"
                                : "text-gray-400 dark:text-gray-700"
                            }`}
                          >
                            {item.number}
                          </span>

                          <span className="text-sm font-semibold">
                            {category}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className={`transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    );
                  },
                )}
              </div>

              {/* Side information */}

              <div
                className="
                  mt-8 hidden border-t
                  border-gray-200
                  pt-6
                  lg:block
                  dark:border-white/5
                "
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-700">
                  Primary Stack
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  React
                  <br />
                  Next.js
                  <br />
                  Node.js
                  <br />
                  MongoDB
                </p>
              </div>
            </aside>

            {/* =================================================
                RIGHT CONTENT
            ================================================== */}

            <main
              className="
                relative min-h-[580px]
                overflow-hidden
                p-6 sm:p-8 lg:p-10
              "
            >
              {/* Huge number */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="
                    pointer-events-none absolute
                    right-0 top-[-50px]
                    select-none text-[180px]
                    font-black leading-none
                    text-black/[0.025]
                    dark:text-white/[0.025]
                    sm:text-[250px]
                  "
                >
                  {active.number}
                </motion.div>
              </AnimatePresence>

              {/* Top information */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`heading-${activeCategory}`}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 dark:text-red-500">
                    {active.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    {activeCategory}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-600">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  SKILL CARDS
              ================================================== */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`skills-${activeCategory}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative mt-10 grid gap-3 sm:grid-cols-2"
                >
                  {active.skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.article
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.35,
                        }}
                        whileHover={{
                          y: -5,
                        }}
                        className="
                          group relative overflow-hidden
                          rounded-2xl border
                          border-gray-200
                          bg-white
                          p-5
                          transition-all duration-500
                          hover:border-red-500/30
                          dark:border-white/10
                          dark:bg-[#0d0d0d]
                        "
                      >
                        {/* Spotlight */}

                        <div
                          className="
                            pointer-events-none absolute
                            -right-16 -top-16
                            h-36 w-36 rounded-full
                            bg-red-600/0 blur-[55px]
                            transition duration-500
                            group-hover:bg-red-600/15
                            dark:group-hover:bg-red-600/20
                          "
                        />

                        <div className="relative flex items-start justify-between">
                          <div
                            className="
                              flex h-12 w-12 items-center
                              justify-center rounded-xl
                              border
                              border-gray-200
                              bg-gray-50
                              text-gray-500
                              transition duration-300
                              group-hover:border-red-500/30
                              group-hover:text-red-500
                              dark:border-white/10
                              dark:bg-black
                              dark:text-gray-400
                              dark:group-hover:text-red-400
                            "
                          >
                            <Icon size={20} />
                          </div>

                          <span
                            className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider ${
                              skill.level === "Basic"
                                ? "border-yellow-500/30 text-yellow-600 dark:text-yellow-500"
                                : "border-red-500/20 text-red-600 dark:text-red-500"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <h4
                          className="
                            relative mt-6 text-lg font-bold
                            text-gray-800
                            transition
                            group-hover:text-black
                            dark:text-gray-200
                            dark:group-hover:text-white
                          "
                        >
                          {skill.name}
                        </h4>

                        <p className="relative mt-2 text-sm leading-6 text-gray-500 dark:text-gray-600">
                          {skill.description}
                        </p>

                        <div className="relative mt-5 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                          <span
                            className="
                              text-[10px] uppercase
                              tracking-[0.2em]
                              text-gray-400
                              transition
                              group-hover:text-gray-600
                              dark:text-gray-700
                              dark:group-hover:text-gray-500
                            "
                          >
                            In my toolkit
                          </span>
                        </div>

                        {/* Bottom red line */}

                        <div className="absolute bottom-0 left-0 h-px w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
                      </motion.article>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Bottom metadata */}

              <div
                className="
                  relative mt-8 flex items-center
                  justify-between border-t
                  border-gray-200
                  pt-5
                  dark:border-white/5
                "
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-700">
                  {active.skills.length} Skills
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-700">
                  2026 Stack
                </span>
              </div>
            </main>
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400 dark:text-gray-700">
            The technology is the tool.
          </p>

          <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-400 sm:text-lg">
            The experience is what matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}