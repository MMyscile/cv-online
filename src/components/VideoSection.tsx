const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function VideoSection() {
  return (
    <section className="py-20 px-6 bg-[var(--cv-beige)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center text-[var(--cv-green-dark)] mb-12">
          Présentation
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Texte à gauche */}
          <div className="text-gray-600 leading-relaxed space-y-4 text-[15px]">
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
              compétences, avec une réelle volonté de transmission et de partage.
            </p>
            <p className="text-gray-900 font-medium">
              Si vous cherchez un nouveau talent qui souhaite s&apos;inscrire sur la durée et sur lequel
              vous êtes prêt à investir, je pense être le profil qu&apos;il vous faut.
            </p>
          </div>

          {/* Vidéo à droite */}
          <div className="lg:sticky lg:top-24">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                controls
                poster={`${basePath}/videos/poster.jpg`}
              >
                <source src={`${basePath}/videos/presentation.mp4`} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3">
              Vidéo de présentation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
