"use client";

import { useState, useRef } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 px-6 bg-[var(--cv-beige)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center text-[var(--cv-green-dark)] mb-12">
          Présentation
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
          {/* Vidéo - en haut sur mobile, à droite sur desktop */}
          <div className="w-full lg:w-1/2 lg:order-2 lg:sticky lg:top-24">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg relative">
              {/* Overlay avant lecture */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[var(--cv-green)] to-[var(--cv-green-dark)] flex flex-col items-center justify-center cursor-pointer z-10 group"
                  onClick={handlePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm font-medium">Cliquez pour lancer la vidéo</span>
                </div>
              )}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={`${basePath}/videos/presentation.mp4`} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3">
              Vidéo de présentation
            </p>
          </div>

          {/* Texte - en bas sur mobile, à gauche sur desktop */}
          <div className="w-full lg:w-1/2 lg:order-1">
            {/* Quote mark décorative - ouverture (hors du container overflow) */}
            <svg
              className="w-6 h-6 text-[var(--cv-green)] opacity-30 mb-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div
              className={`relative text-gray-600 leading-relaxed space-y-4 text-[15px] pl-4 transition-all duration-300 ${
                !isTextExpanded ? "max-h-[250px] lg:max-h-none overflow-hidden" : ""
              }`}
            >
              <p>
                Bonjour, je me présente, je m&apos;appelle <strong className="text-[var(--cv-green-dark)]">Michaël</strong> et
                il y a quelques mois, j&apos;ai décidé de me lancer dans un nouveau projet, celui de me
                reconvertir dans le domaine de la comptabilité. Et pour mener ce projet à bien, courant
                octobre, j&apos;ai démarré une formation qui s&apos;est terminée il y a quelques semaines.
              </p>
              <p>
                Cette formation avait un <strong className="text-[var(--cv-green-dark)]">double objectif</strong> : Le premier,
                me rendre opérationnel en comptabilité et m&apos;ouvrir à la gestion. J&apos;y ai acquis des
                bases solides en comptabilité générale, en révision comptable et sur les travaux de fin
                d&apos;exercice, tout en travaillant sur des sujets comme les SIG, les budgets prévisionnels
                et de trésorerie.
              </p>
              <p>
                Le deuxième objectif, c&apos;était de poursuivre cette formation vers un{" "}
                <strong className="text-[var(--cv-green-dark)]">titre professionnel de gestionnaire comptable et fiscal</strong>,
                un équivalent Bac+2 en alternance, pour consolider mes bases et monter en compétences en
                fiscalité, en gestion et en analyse financière — et bien sûr pratiquer concrètement sur le terrain.
              </p>
              <p>
                L&apos;avantage de cette formation : on est formé par des intervenants diplômés d&apos;expertise
                comptable et d&apos;anciens cadres du secteur financier. Elle possède également un rythme
                optimisé avec seulement 4 jours par mois en centre de formation, permettant ainsi une
                présence majoritaire en entreprise.
              </p>
              <p>
                Sur le plan personnel, je suis quelqu&apos;un de <strong className="text-[var(--cv-green-dark)]">rigoureux,
                organisé, polyvalent</strong>, qui sait faire preuve d&apos;adaptabilité, qui aime travailler
                en équipe — et surtout, petit bonus mais pas des moindres, j&apos;aime pratiquer la comptabilité.
                Sur le plan des outils, je suis à l&apos;aise avec Excel et j&apos;ai déjà travaillé sur plusieurs
                logiciels de saisie comptable comme Sage lors de mes expériences professionnelles et ACD Cador
                pendant ma formation.
              </p>
              <p>
                Ce que je recherche aujourd&apos;hui, c&apos;est une <strong className="text-[var(--cv-green-dark)]">structure
                d&apos;accueil et un tuteur</strong> qui sauront m&apos;accompagner dans le développement de mes
                compétences, avec une réelle volonté de transmission et de partage durant ces 18 mois de formation.
              </p>
              <p className="inline">
                Si vous cherchez un nouveau talent qui souhaite s&apos;inscrire sur la durée et sur lequel
                vous êtes prêt à investir, je pense être le profil qu&apos;il vous faut.
                {/* Quote mark décorative - fermeture */}
                <svg
                  className="inline-block w-5 h-5 ml-2 text-[var(--cv-green)] opacity-30 align-baseline transform rotate-180"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </p>

              {/* Gradient fade overlay quand le texte est tronqué */}
              {!isTextExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--cv-beige)] to-transparent pointer-events-none lg:hidden" />
              )}
            </div>

            {/* Bouton Voir plus / Voir moins - uniquement sur mobile/tablet */}
            <button
              onClick={() => setIsTextExpanded(!isTextExpanded)}
              className="mt-4 mx-auto text-[var(--cv-green-dark)] font-medium text-sm hover:underline flex items-center gap-1 lg:hidden"
            >
              {isTextExpanded ? (
                <>
                  Voir moins
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Voir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
