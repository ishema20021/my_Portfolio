const experience = [
  {
    title: "React Native Trainee",
    organization: "SOLVIT AFRICA",
    detail: "Completed React Native training through the 2CodeConnect Fellowship II.",
  },
];

export function Experience({ lightMode }: { lightMode: boolean }) {
  return (
    <section id="experience" className="scroll-mt-8 px-8 py-12 sm:px-10 sm:py-14">
      <h2 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Experience
      </h2>
      <div className="mx-auto max-w-6xl space-y-10">
        {experience.map((item) => (
          <article
            key={item.title}
            className={`border-l-4 py-1 pl-8 ${
              lightMode ? "border-gray-200" : "border-white/15"
            }`}
          >
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p
              className={`mt-3 text-lg ${
                lightMode ? "text-gray-700" : "text-white/80"
              }`}
            >
              {item.organization}
            </p>
            <ul
              className={`mt-4 list-disc space-y-2 pl-5 text-lg ${
                lightMode ? "text-gray-600" : "text-white/70"
              }`}
            >
              <li>{item.detail}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
