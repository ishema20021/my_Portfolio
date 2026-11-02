"use client";

import { useState } from "react";

type HeaderProps = {
  lightMode: boolean;
  onThemeToggle: () => void;
};

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CERTIFICATION", href: "#certification" },
  { label: "PROJECT", href: "#project" },
  { label: "CONTACT", href: "#contact" },
];

export function Header({ lightMode, onThemeToggle }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconButton = `flex h-12 w-12 items-center justify-center rounded-full border bg-transparent text-xl ${
    lightMode ? "border-black/20 text-gray-900" : "border-white/20 text-white"
  }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        lightMode ? "border-black/5 bg-white/70" : "border-white/5 bg-[#05070d]/60"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#home"
          className={`text-3xl font-bold tracking-[-0.04em] sm:text-4xl ${lightMode ? "text-gray-900" : "text-white"}`}
        >
          Ange<span className="text-accent">.</span>
        </a>

        <nav className={`hidden items-center gap-8 text-[0.95rem] xl:flex ${lightMode ? "text-gray-700" : "text-[#d7d7d7]"}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="opacity-80 transition hover:text-accent hover:opacity-100">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}
            onClick={onThemeToggle}
            className={iconButton}
          >
            {lightMode ? "☾" : "☀"}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-[0_14px_28px_rgba(59,130,246,0.35)] transition hover:bg-accent-hover sm:inline-block"
          >
            Hire me <span className="ml-2">→</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${iconButton} xl:hidden`}
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 xl:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-6 pb-6 sm:px-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-accent/10 hover:text-accent ${
                    lightMode ? "text-gray-800" : "text-white/85"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href="#contact"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-xl bg-accent px-4 py-3 text-center text-lg font-semibold text-white"
              >
                Hire me →
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
