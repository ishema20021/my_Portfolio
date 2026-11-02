"use client";

import { useState } from "react";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { About } from "../components/sections/about";
import { Skills } from "../components/sections/skills";
import { Education } from "../components/sections/education";
import { Certifications } from "../components/sections/certifications";
import { Experience } from "../components/sections/experience";
import { Contact } from "../components/sections/contact";

export default function Home() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <main id="home" className={`min-h-screen transition-colors ${lightMode ? "bg-white text-gray-900" : "bg-[#090909] text-white"}`}>
      <div className={`mx-auto max-w-[1800px] border-x ${lightMode ? "border-black/5 bg-white" : "border-white/5 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.12),transparent_20%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_18%),#090909]"}`}>
        <Header lightMode={lightMode} onThemeToggle={() => setLightMode(!lightMode)} />
        <Hero lightMode={lightMode} />
        <About lightMode={lightMode} />
        <Skills lightMode={lightMode} />
        <Education lightMode={lightMode} />
        <Experience lightMode={lightMode} />
        <Certifications lightMode={lightMode} />
        <Contact lightMode={lightMode} />
      </div>
    </main>
  );
}
