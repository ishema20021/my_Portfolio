export function About({ lightMode }: { lightMode: boolean }) {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-8 px-8 py-16 text-center sm:px-10 sm:py-24">
      <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-accent">
        A bit about me
      </p>
      <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">Who I am</h2>
      <p className={`mx-auto max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9 ${lightMode ? "text-gray-600" : "text-white/70"}`}>
        Motivated IT graduate with a foundation in software engineering, networking, and database
        management. Experienced in building full-stack web applications using Java, TypeScript,
        Spring Boot, React.js, HTML, CSS, SQL, and PostgreSQL. Completed the 2CodeConnect Fellowship
        II React Native training at SOLVIT AFRICA and online courses in Generative AI. Interested
        in using technology to solve real-world problems while continuing to grow professionally.
      </p>
    </section>
  );
}
