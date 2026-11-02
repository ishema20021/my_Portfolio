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
  return (
    <header className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-8 py-7 sm:px-10 lg:px-16">
      <div className={`flex items-center text-4xl font-bold tracking-[-0.04em] ${lightMode ? "text-gray-900" : "text-white"}`}>
        <span>Ange</span>
      </div>

      <nav className={`hidden items-center gap-9 text-[1.05rem] lg:flex ${lightMode ? "text-gray-700" : "text-[#d7d7d7]"}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="opacity-80 hover:opacity-100">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}
          onClick={onThemeToggle}
          className={`flex h-12 w-12 items-center justify-center rounded-full border bg-transparent text-xl ${lightMode ? "border-black/20 text-gray-900" : "border-white/20 text-white"}`}
        >
          {lightMode ? "☾" : "☀"}
        </button>

        <a
          href="#contact"
          className="rounded-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-[0_14px_28px_rgba(59,130,246,0.35)] transition hover:bg-accent-hover"
        >
          Hire me <span className="ml-2">→</span>
        </a>
      </div>
    </header>
  );
}
