
"use client";

import { ArrowUpRight, Heart } from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
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

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.28ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0Z" />
    </svg>
  );
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white text-gray-900 dark:border-white/10 dark:bg-[#050505] dark:text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/[0.04] blur-[120px] dark:bg-red-600/[0.06]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16">

        {/* Top */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-sm font-black text-white shadow-lg shadow-red-600/20">
                R
              </span>

              <div>
                <p className="text-sm font-bold tracking-wide">
                  REHENA BEGUM
                </p>

                <p className="text-[9px] uppercase tracking-[0.25em] text-gray-500 dark:text-gray-600">
                  MERN Stack Developer
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-500">
              Building modern, responsive and meaningful digital experiences
              with clean code and thoughtful interfaces.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/Rehenabegum109"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.02] text-gray-500 transition duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-500 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-500 dark:hover:text-white"
              >
                <GitHubIcon
                  size={18}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rehena-begum-057894396"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.02] text-gray-500 transition duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-500 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-500 dark:hover:text-white"
              >
                <LinkedInIcon
                  size={18}
                />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-end">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-500 dark:text-gray-600 dark:hover:text-white"
                >
                  {item.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-black/10 dark:bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Rehena Begum. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with
            <Heart
              size={13}
              fill="currentColor"
              className="text-red-500"
            />
            using Next.js
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 transition hover:text-red-500 dark:hover:text-white"
          >
            Back to top

            <ArrowUpRight
              size={14}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
