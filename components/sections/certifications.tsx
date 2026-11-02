const certifications = [
  {
    title: "Certificate of Completion in React Native",
    organization: "SOLVIT AFRICA",
    year: "2026",
  },
  {
    title: "Generative AI Foundation",
    organization: "Ingazi Platform (Online)",
    year: "2026",
    file: "Generative%20AI%20Foundation.pdf",
  },
  {
    title: "Generative AI Medium",
    organization: "Ingazi Platform (Online)",
    year: "2026",
    file: "Generative%20AI%20Medium.pdf",
  },
  {
    title: "Generative AI Master",
    organization: "Ingazi Platform (Online)",
    year: "2026",
    file: "Generative%20AI%20Master.pdf",
  },
  {
    title: "1 Million Prompters",
    organization: "Online Certificate",
    year: "2026",
    file: "1_Million_Prompters.pdf",
  },
  {
    title: "English Proficiency Certificate",
    organization: "AUCA",
    year: "2026",
    file: "English%20Proffesiency%20certificate.pdf",
  },
  {
    title: "Networking Essentials",
    organization: "AUCA",
    year: "2024",
  },
  {
    title: "Operating System Basics",
    organization: "AUCA",
    year: "2024",
    file: "operating%20system%20courses.pdf",
  },
];

export function Certifications({ lightMode }: { lightMode: boolean }) {
  return (
    <section id="certification" className="scroll-mt-24 px-8 py-12 sm:px-10 sm:py-14">
      <h2 data-reveal className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Certifications
      </h2>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            data-reveal
            className="glass glow-hover rounded-2xl px-6 py-8 text-center"
          >
            <h3 className="text-xl font-bold sm:text-2xl">
              {certification.title}
            </h3>
            <p
              className={`mt-4 text-lg ${
                lightMode ? "text-gray-600" : "text-white/75"
              }`}
            >
              {certification.organization} <span className="mx-1">|</span>{" "}
              {certification.year}
            </p>
            {certification.file && (
              <div className="mt-5 flex justify-center">
                <a
                  href={`/certificates/${certification.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  View Certificate
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
