const projects = [
  {
    title: "Intelligent Tourism System",
    description:
      "Full-stack tourism platform for Rwanda with attraction browsing, personalized recommendations, map exploration and booking management.",
    tags: ["React", "Vite", "Spring Boot", "PostgreSQL"],
    repo: "intelligent-tourism-system",
    cover: "from-sky-500/40 via-blue-600/20 to-transparent",
  },
  {
    title: "HealthFitness",
    description:
      "Health and fitness tracking app with an ASP.NET Core 8 Web API backend and a React frontend for activity, sleep and social features.",
    tags: ["ASP.NET Core", "C#", "React", "SQL Server"],
    repo: "Health_and_Fitness_Monitoring_System",
    cover: "from-emerald-500/35 via-blue-600/20 to-transparent",
  },
  {
    title: "ISHEMA Store",
    description:
      "E-commerce web app where customers browse products, manage a shopping cart, check out and track their orders.",
    tags: ["Spring Boot", "Java", "Thymeleaf"],
    repo: "ISHEMASTORE_springboot_thymleaf",
    cover: "from-violet-500/35 via-blue-600/20 to-transparent",
  },
  {
    title: "Student Management System",
    description: "Web app for managing student records, built with Next.js and Firebase.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    repo: "student-management-system",
    cover: "from-blue-500/40 via-indigo-600/20 to-transparent",
  },
  {
    title: "WeatherHub",
    description: "Weather dashboard built with TypeScript.",
    tags: ["TypeScript", "CSS"],
    repo: "WeatherHub",
    cover: "from-cyan-400/35 via-blue-600/20 to-transparent",
  },
  {
    title: "Movie App",
    description: "Movie browsing app built with TypeScript.",
    tags: ["TypeScript"],
    repo: "movie_app",
    cover: "from-rose-500/30 via-blue-600/20 to-transparent",
  },
];

export function Projects({ lightMode }: { lightMode: boolean }) {
  return (
    <section id="project" className="scroll-mt-24 px-8 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12 text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-accent">
            Things I&apos;ve built
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.repo}
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              className="glass glow-hover flex flex-col overflow-hidden rounded-2xl"
            >
              <div
                className={`relative flex h-36 items-end bg-gradient-to-br p-5 ${project.cover}`}
              >
                <span className="text-5xl font-bold tracking-tight opacity-30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className={`mt-3 flex-1 leading-7 ${lightMode ? "text-gray-600" : "text-white/65"}`}>
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://github.com/ishema20021/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
                >
                  View on GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
