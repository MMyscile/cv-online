"use client";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20">
      <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 animate-on-load animate-fade-in-up">
        Michaël <span className="font-semibold">Myscile</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-xl animate-on-load animate-fade-in-up delay-200">
        Gestionnaire Comptable et Fiscal en Alternance
      </p>
      <div className="mt-10 animate-on-load animate-fade-in-up delay-400">
        <a
          href="#contact"
          className="inline-block border-2 border-cv-green text-cv-green-dark px-8 py-3 text-sm uppercase tracking-wider hover:bg-cv-green hover:text-white transition-colors duration-300"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
