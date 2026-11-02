"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { About } from "../components/sections/about";
import { Skills } from "../components/sections/skills";
import { Education } from "../components/sections/education";
import { Certifications } from "../components/sections/certifications";
import { Experience } from "../components/sections/experience";
import { Projects } from "../components/sections/projects";
import { Contact } from "../components/sections/contact";

export default function Home() {
  const [lightMode, setLightMode] = useState(false);

  // Fade elements marked data-reveal in as they scroll into view
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <main
      id="home"
      className={`min-h-screen transition-colors ${lightMode ? "light bg-slate-50 text-gray-900" : "bg-[#05070d] text-white"}`}
    >
      <div
        className={`relative mx-auto max-w-[1800px] ${
          lightMode
            ? "bg-[radial-gradient(circle_at_15%_5%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(99,102,241,0.08),transparent_30%)]"
            : "bg-[radial-gradient(circle_at_15%_5%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.14),transparent_26%),radial-gradient(circle_at_10%_70%,rgba(14,165,233,0.12),transparent_25%),radial-gradient(circle_at_90%_95%,rgba(59,130,246,0.16),transparent_30%)]"
        }`}
      >
        <Header lightMode={lightMode} onThemeToggle={() => setLightMode(!lightMode)} />
        <Hero lightMode={lightMode} />
        <About lightMode={lightMode} />
        <Skills lightMode={lightMode} />
        <Education lightMode={lightMode} />
        <Experience lightMode={lightMode} />
        <Certifications lightMode={lightMode} />
        <Projects lightMode={lightMode} />
        <Contact lightMode={lightMode} />
      </div>
    </main>
  );
}
