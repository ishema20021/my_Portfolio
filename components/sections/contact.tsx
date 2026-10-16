const email = "Ishemangaboangel@gmail.com";

export function Contact({ lightMode }: { lightMode: boolean }) {
  const mutedText = lightMode ? "text-gray-600" : "text-white/65";
  const fieldClass = `mt-2 w-full rounded-xl border px-5 py-4 text-base outline-none transition focus:border-orange-500 ${
    lightMode
      ? "border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500"
      : "border-white/10 bg-white/[0.03] text-white placeholder:text-white/45"
  }`;

  return (
    <section id="contact" className="scroll-mt-8 px-8 py-12 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Contact
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s build something together
        </h2>
        <p className={`mt-5 text-lg sm:text-xl ${mutedText}`}>
          Have a project in mind, a question, or just want to say hi? Send me a
          message below or email me at{" "}
          <a
            href={`mailto:${email}`}
            className={`underline underline-offset-4 hover:text-orange-500 ${
              lightMode ? "decoration-gray-400" : "decoration-white/40"
            }`}
          >
            {email}
          </a>
          .
        </p>

        <div className={`mt-8 flex flex-wrap gap-x-8 gap-y-4 text-lg ${mutedText}`}>
          <a
            href="https://github.com/ishema20021"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center gap-2 hover:text-orange-500"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.34 4.12 1.66.1-.73.4-1.23.72-1.52-2.48-.29-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.29-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ishema-ngabo-ange-296b06329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-2 hover:text-orange-500"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.68H9.18V9h2.85v1.29h.04a3.13 3.13 0 0 1 2.82-1.55c3.02 0 3.58 1.99 3.58 4.58v5.13Z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <form
          action={`mailto:${email}`}
          method="post"
          encType="text/plain"
          className="mt-16 grid gap-7 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="contact-name" className={`text-base ${mutedText}`}>
              Name
            </label>
            <input
              id="contact-name"
              name="Name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={`text-base ${mutedText}`}>
              Email
            </label>
            <input
              id="contact-email"
              name="Email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@email.com"
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className={`text-base ${mutedText}`}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="Message"
              required
              rows={5}
              placeholder="How can I help you?"
              className={`${fieldClass} resize-y`}
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
