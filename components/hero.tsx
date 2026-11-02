"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Full-Stack Developer", "React & Spring Boot Developer"];

// Path under /public; the Download CV button is hidden until this is set
const cvFile: string | null = null;

function useTypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(roles[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const role = roles[roleIndex];
    const delay = !deleting && length === role.length ? 1800 : deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && length === role.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      } else {
        setLength(length + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [roleIndex, length, deleting]);

  return roles[roleIndex].slice(0, length);
}

export function Hero({ lightMode }: { lightMode: boolean }) {
  const typedRole = useTypedRole();

  return (
    <section className="mx-auto grid max-w-[1600px] items-center gap-12 px-8 py-12 lg:grid-cols-2 lg:px-16 lg:py-20">
      <div data-reveal>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for work
        </p>
        <h1 className={`text-6xl font-bold tracking-tight sm:text-7xl ${lightMode ? "text-gray-900" : "text-white"}`}>
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">Ange</span>
        </h1>
        <p className="mt-5 h-10 text-2xl font-semibold text-accent sm:text-3xl" aria-label={roles.join(", ")}>
          <span aria-hidden="true">
            {typedRole}
            <span className="caret" />
          </span>
        </p>
        <p className={`mt-4 max-w-xl text-xl leading-snug sm:text-2xl ${lightMode ? "text-gray-700" : "text-white/80"}`}>
          IT Graduate &amp; Software Engineer. I build user-friendly web
          applications that solve real-world problems.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#project"
            className={`rounded-full px-6 py-4 font-medium transition ${lightMode ? "bg-gray-900 text-white hover:bg-gray-700" : "bg-white text-black hover:bg-white/85"}`}
          >
            View my work
          </a>
          <a
            href="#contact"
            className={`rounded-full border px-6 py-4 font-medium transition hover:border-accent hover:text-accent ${lightMode ? "border-black/20 text-gray-900" : "border-white/30 text-white"}`}
          >
            Get in touch
          </a>
          {cvFile && (
            <a
              href={cvFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 font-medium text-white shadow-[0_14px_28px_rgba(59,130,246,0.35)] transition hover:bg-accent-hover"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
          )}
        </div>
      </div>

      <div data-reveal className="relative mx-auto w-full max-w-[520px]">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/40 via-sky-400/10 to-indigo-500/30 blur-2xl" aria-hidden="true" />
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 lg:h-[560px]">
          <Image
            src="/images/profile.jpeg"
            alt="Portrait of Ange"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
