export function About({ lightMode }: { lightMode: boolean }) {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-8 px-8 py-24 text-center sm:px-10 sm:py-32">
      <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-orange-500">
        A bit about me
      </p>
      <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">Who I am</h2>
      <p className={`mx-auto max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9 ${lightMode ? "text-gray-600" : "text-white/70"}`}>
        I&apos;m an IT graduate based in Kigali, Rwanda, who enjoys building useful things with code.
        I love learning new technologies, solving problems, and turning ideas into applications
        that make people&apos;s lives easier.
      </p>
    </section>
  );
}
