const education = [
  {
    title: "BSc in Software Engineering",
    place: "Adventist University of Central Africa (AUCA), Kigali Rwanda",
    dates: "Feb 2023 – Dec 2025",
    detail: "Coursework includes programming, system administration, and software design.",
  },
];

export function Education({ lightMode }: { lightMode: boolean }) {
  return (
    <section id="education" className="scroll-mt-8 px-8 py-12 sm:px-10 sm:py-14">
      <h2 className="mb-10 text-center text-4xl font-bold sm:text-5xl">Education</h2>
      <div className="mx-auto max-w-6xl space-y-10">
        {education.map((item) => (
          <article key={item.title} className="border-l-4 border-cyan-500 py-1 pl-8">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className={`mt-3 text-lg ${lightMode ? "text-gray-700" : "text-white/80"}`}>
              {item.place} <span className="mx-1">|</span> {item.dates}
            </p>
            <p className={`mt-4 text-lg ${lightMode ? "text-gray-600" : "text-white/70"}`}>
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
