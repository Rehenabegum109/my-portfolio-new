"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Load saved theme
  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
        fixed left-0 top-0 z-50 w-full
        border-b border-gray-200/80
        bg-white/85
        backdrop-blur-xl
        transition-colors duration-300
        dark:border-white/10
        dark:bg-[#080808]/85
      "
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* ================= LOGO ================= */}

        <a
          href="#home"
          onClick={closeMenu}
          className="relative flex h-25 w-[210px] items-center"
        >
          <Image
            src="/logo.png"
            alt="Rehena Begum - Web Developer"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="
              text-sm text-gray-600
              transition hover:text-red-600
              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Home
          </a>

          <a
            href="#about"
            className="
              text-sm text-gray-600
              transition hover:text-red-600
              dark:text-gray-400
              dark:hover:text-white
            "
          >
            About
          </a>

          <a
            href="#skills"
            className="
              text-sm text-gray-600
              transition hover:text-red-600
              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Skills
          </a>

          <a
            href="#projects"
            className="
              text-sm text-gray-600
              transition hover:text-red-600
              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              text-sm text-gray-600
              transition hover:text-red-600
              dark:text-gray-400
              dark:hover:text-white
            "
          >
            Contact
          </a>

        </div>

        {/* ================= DESKTOP ACTIONS ================= */}

        <div className="hidden items-center gap-3 md:flex">

          {/* Theme Toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted
                ? isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
                : "Toggle theme"
            }
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-gray-200
              bg-gray-100
              text-gray-700
              transition-all duration-300
              hover:border-red-500/40
              hover:bg-red-500/10
              hover:text-red-600
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-gray-300
              dark:hover:border-red-500/40
              dark:hover:bg-red-500/10
              dark:hover:text-red-400
            "
          >
            {mounted ? (
              isDark ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )
            ) : (
              <Sun size={17} />
            )}
          </button>

          {/* Let's Talk */}

          <a
            href="#contact"
            className="
              rounded-full
              border border-red-500/30
              px-5 py-2.5
              text-sm font-medium
              text-gray-800
              transition-all duration-300
              hover:border-red-500
              hover:bg-red-500/10
              hover:text-red-600
              dark:border-red-500/30
              dark:text-white
              dark:hover:border-red-400
              dark:hover:bg-red-500/10
            "
          >
            Let&apos;s Talk
          </a>

        </div>

        {/* ================= MOBILE ACTIONS ================= */}

        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Theme Toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg
              border border-gray-200
              bg-gray-100
              text-gray-700
              transition-all duration-300
              hover:border-red-500/40
              hover:text-red-600
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-gray-300
              dark:hover:text-red-400
            "
          >
            {mounted ? (
              isDark ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )
            ) : (
              <Sun size={17} />
            )}
          </button>

          {/* Hamburger */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg
              border border-gray-200
              bg-gray-100
              transition
              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <div className="space-y-1.5">

              <span
                className={`
                  block h-0.5 w-5
                  bg-gray-800
                  transition
                  dark:bg-white
                  ${isOpen ? "translate-y-2 rotate-45" : ""}
                `}
              />

              <span
                className={`
                  block h-0.5 w-5
                  bg-gray-800
                  transition
                  dark:bg-white
                  ${isOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  block h-0.5 w-5
                  bg-gray-800
                  transition
                  dark:bg-white
                  ${isOpen ? "-translate-y-2 -rotate-45" : ""}
                `}
              />

            </div>
          </button>

        </div>

      </nav>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <div
          className="
            border-t border-gray-200
            bg-white
            px-6 py-6
            dark:border-white/10
            dark:bg-[#080808]
            md:hidden
          "
        >
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="
                text-sm text-gray-600
                transition hover:text-red-600
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="
                text-sm text-gray-600
                transition hover:text-red-600
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="
                text-sm text-gray-600
                transition hover:text-red-600
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="
                text-sm text-gray-600
                transition hover:text-red-600
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                text-sm text-gray-600
                transition hover:text-red-600
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                mt-2 w-fit rounded-full
                bg-red-600
                px-5 py-2.5
                text-sm font-medium text-white
                transition
                hover:bg-red-700
              "
            >
              Let&apos;s Talk
            </a>

          </div>
        </div>
      )}

    </header>
  );
}