"use client";

import {
  ArrowUpRight,
  Download,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-white text-gray-900
        dark:bg-[#050505] dark:text-white
        px-6 pb-6 pt-12
        sm:pb-8 sm:pt-14
        transition-colors duration-300
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[550px] w-[750px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-red-600/[0.04]
          blur-[150px]
          dark:bg-red-600/[0.05]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-red-600" />

            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[0.35em]
                text-red-600
                dark:text-red-500
              "
            >
              Get In Touch
            </span>

            <span className="h-px w-10 bg-red-600" />
          </div>

          <h2
            className="
              text-4xl font-black
              leading-none tracking-tight
              text-gray-900
              dark:text-white
              sm:text-6xl md:text-7xl
            "
          >
            LET&apos;S CREATE
            <br />

            <span className="text-gray-400 dark:text-gray-600">
              SOMETHING GREAT.
            </span>
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-sm leading-7
              text-gray-600
              dark:text-gray-500
              sm:text-base
            "
          >
            Have a project, opportunity or idea? Send me a message.
            I&apos;d love to hear from you and discuss how we can build
            something meaningful together.
          </p>
        </div>

        {/* =====================================================
            MAIN CARD
        ====================================================== */}

        <div
          className="
            grid overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-gray-50

            dark:border-white/10
            dark:bg-[#0a0a0a]

            lg:grid-cols-[0.85fr_1.15fr]
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              relative
              border-b
              border-gray-200
              p-7

              dark:border-white/10

              sm:p-10

              lg:border-b-0
              lg:border-r
            "
          >

            {/* Background Number */}

            <span
              className="
                absolute
                -right-5
                -top-8
                select-none
                text-[150px]
                font-black
                leading-none
                text-gray-900/[0.025]
                dark:text-white/[0.02]
              "
            >
              06
            </span>

            <div className="relative">

              {/* Small Heading */}

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-red-600
                  dark:text-red-500
                "
              >
                Start a conversation
              </p>

              {/* Title */}

              <h3
                className="
                  mt-4
                  text-3xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                Ready for the next chapter?
              </h3>

              {/* Description */}

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-gray-600
                  dark:text-gray-500
                "
              >
                I&apos;m currently open to junior frontend, full-stack,
                internship and remote opportunities.
              </p>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <a
                href="mailto:rehenabegum999000@gmail.com"
                className="
                  mt-8
                  flex items-center gap-4
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-4

                  transition

                  hover:border-red-600/30
                  hover:bg-red-600/[0.03]

                  dark:border-white/10
                  dark:bg-white/[0.02]
                  dark:hover:bg-red-600/[0.04]
                "
              >
                <span
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-red-600/10
                    text-red-600
                    dark:text-red-500
                  "
                >
                  <Mail size={19} />
                </span>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-400
                      dark:text-gray-600
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    rehenabegum999000@gmail.com
                  </p>
                </div>
              </a>

              {/* =================================================
                  SOCIAL
              ================================================== */}

              <div className="mt-7">

                <p
                  className="
                    mb-4
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-400
                    dark:text-gray-700
                  "
                >
                  Connect with me
                </p>

                <div className="flex gap-3">

                  {/* GitHub */}

                  <a
                    href="https://github.com/Rehenabegum109"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      border
                      border-gray-200
                      text-gray-500

                      transition

                      hover:border-red-600/40
                      hover:bg-red-600/10
                      hover:text-red-600

                      dark:border-white/10
                      dark:text-gray-500
                      dark:hover:text-white
                    "
                  >
                    <GitHubIcon size={18} />
                  </a>

                  {/* LinkedIn */}

                  <a
                    href="https://linkedin.com/in/rehena-begum-057894396"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      border
                      border-gray-200
                      text-gray-500

                      transition

                      hover:border-red-600/40
                      hover:bg-red-600/10
                      hover:text-red-600

                      dark:border-white/10
                      dark:text-gray-500
                      dark:hover:text-white
                    "
                  >
                    <LinkedInIcon size={18} />
                  </a>

                </div>
              </div>

              {/* =================================================
                  RESUME
              ================================================== */}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center gap-2
                  text-sm
                  font-medium

                  text-gray-600
                  hover:text-gray-900

                  dark:text-gray-500
                  dark:hover:text-white

                  transition
                "
              >
                Download Resume

                <Download size={16} />
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================== */}

          <div className="p-7 sm:p-10">

            {submitted ? (
              <div
                className="
                  flex min-h-[420px]
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >

                {/* Success Icon */}

                <div
                  className="
                    flex h-16 w-16
                    items-center justify-center
                    rounded-full
                    bg-green-500/10
                    text-green-600
                    dark:text-green-500
                  "
                >
                  <CheckCircle2 size={32} />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  Message Sent
                </h3>

                <p
                  className="
                    mt-3
                    max-w-sm
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-gray-500
                  "
                >
                  Thanks for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="
                    mt-7
                    text-xs
                    text-gray-500
                    transition
                    hover:text-gray-900
                    dark:hover:text-white
                  "
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-5"
              >

                {/* Web3Forms */}

                <input
                  type="hidden"
                  name="access_key"
                  value={
                    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
                  }
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Portfolio Contact Message"
                />

                {/* =================================================
                    NAME
                ================================================== */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-xs
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-4 py-3.5
                      text-sm
                      text-gray-900
                      outline-none

                      placeholder:text-gray-400

                      transition

                      focus:border-red-600/50

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                      dark:placeholder:text-gray-700
                    "
                  />
                </div>

                {/* =================================================
                    EMAIL
                ================================================== */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-xs
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-4 py-3.5
                      text-sm
                      text-gray-900
                      outline-none

                      placeholder:text-gray-400

                      transition

                      focus:border-red-600/50

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                      dark:placeholder:text-gray-700
                    "
                  />
                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-xs
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell me about your project or opportunity..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-4 py-3.5
                      text-sm
                      leading-6
                      text-gray-900
                      outline-none

                      placeholder:text-gray-400

                      transition

                      focus:border-red-600/50

                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                      dark:placeholder:text-gray-700
                    "
                  />
                </div>

                {/* =================================================
                    SUBMIT
                ================================================== */}

                <button
                  type="submit"
                  className="
                    group
                    flex w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-red-600
                    px-6 py-3.5
                    text-sm
                    font-semibold
                    text-white

                    shadow-lg
                    shadow-red-600/20

                    transition
                    duration-300

                    hover:bg-red-700
                    hover:shadow-red-600/30
                  "
                >
                  Send Message

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}