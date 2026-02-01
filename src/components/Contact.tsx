export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-cv-green-dark text-white"
    >
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8">Me contacter</h2>
        <p className="text-cv-green-light mb-10 max-w-xl mx-auto">
          Vous recherchez un alternant motivé et rigoureux pour votre cabinet ou
          entreprise ? N&apos;hésitez pas à me contacter.
        </p>
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6">
          <a
            href="mailto:michael.myscile@gmail.com"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            michael.myscile@gmail.com
          </a>
          <a
            href="tel:+33650865691"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors whitespace-nowrap"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            06 50 86 56 91
          </a>
          <span className="flex items-center gap-3 text-white/80 whitespace-nowrap">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Villenave-d&apos;Ornon (33140)
          </span>
          <a
            href="https://www.linkedin.com/in/micha%C3%ABl-myscile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 11v5M8 8v.01M12 16v-5c0-1 .5-2 2-2s2 1 2 2v5"
              />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
