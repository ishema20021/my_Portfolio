import Image from "next/image";

export function Hero({ lightMode }: { lightMode: boolean }) {
  return (
    <section className="mx-auto grid max-w-[1600px] items-center gap-12 px-8 py-12 lg:grid-cols-2 lg:px-16">
      <div>
        <p className="mb-6 font-semibold uppercase tracking-widest text-orange-500">
          Available for work
        </p>
        <h1 className={`text-6xl font-bold sm:text-7xl ${lightMode ? "text-gray-900" : "text-white"}`}>
          Hi, I&apos;m <span className="text-orange-500">Ange</span>
        </h1>
        <p className={`mt-6 max-w-xl text-2xl ${lightMode ? "text-gray-700" : "text-white"}`}>
          IT Graduate &amp; Software Engineer. I build user-friendly web
          applications that solve real-world problems.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" className="rounded-full bg-white px-6 py-4 text-black">
            View my work
          </button>
          <button type="button" className="rounded-full border border-white/30 px-6 py-4 text-white">
            Get in touch
          </button>
        </div>
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-[520px] overflow-hidden rounded-3xl lg:h-[560px]">
        <Image
          src="/images/profile.jpeg"
          alt="Portrait of Ange"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
