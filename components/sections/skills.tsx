const skills = [
  { name: "HTML/CSS", description: "Web development foundation", mark: "5" },
  { name: "JavaScript", description: "Dynamic web applications", mark: "JS" },
  { name: "Java", description: "Enterprise applications", mark: "☕" },
  { name: "C#", description: "Desktop and backend", mark: "▦" },
  { name: "C", description: "Systems programming", mark: "</>" },
  { name: "TypeScript", description: "Typed JavaScript", mark: "TS" },
  { name: "Spring Boot", description: "Application development", mark: "✿" },
  { name: ".NET", description: "Frameworks and APIs", mark: "</>" },
  { name: "Nest.js", description: "Node.js framework", mark: "◆" },
  { name: "PostgreSQL", description: "Database management", mark: "▤" },
  { name: "MySQL / MSSQL / Oracle", description: "Relational databases", mark: "▤" },
  { name: "Android Studio", description: "Mobile development", mark: "●" },
];

export function Skills({ lightMode }: { lightMode: boolean }) {
  return (
    <section id="skills" className="scroll-mt-8 px-8 py-20 text-center sm:px-10">
      <h2 className="mb-12 text-4xl font-bold sm:text-5xl">Skills</h2>
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className={`rounded-xl border p-6 ${lightMode ? "border-gray-200 bg-gray-50" : "border-white/10 bg-white/5"}`}
          >
            <p className="mb-5 text-2xl font-bold text-indigo-500" aria-hidden="true">
              {skill.mark}
            </p>
            <h3 className="mb-2 text-lg font-semibold">{skill.name}</h3>
            <p className={`text-sm ${lightMode ? "text-gray-500" : "text-white/60"}`}>
              {skill.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
