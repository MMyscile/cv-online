export default function Education() {
  return (
    <section className="py-20 px-6 bg-cv-beige">
      <div className="max-w-4xl mx-auto">
        {/* Formations */}
        <h2 className="text-3xl font-light text-center text-cv-green-dark mb-12">
          Formations
        </h2>
        <div className="space-y-8 mb-20">
          {/* POEC */}
          <div className="relative pl-8 border-l-2 border-cv-green-light hover:border-cv-green transition-colors">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-cv-green rounded-full"></div>
            <p className="text-sm text-gray-500 mb-1">Octobre 2025 - Janvier 2026</p>
            <h3 className="text-xl font-semibold text-gray-900">
              POEC Collaborateur Comptable
            </h3>
            <p className="text-gray-600 mb-3">Modula Formation | Bruges</p>
            <ul className="text-gray-500 text-sm space-y-1">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                Coordonner et gérer la tenue de la comptabilité et de la fiscalité
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                Réaliser la tenue comptable et les déclarations fiscales
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                Préparer l&apos;intégration en alternance vers le titre Gestionnaire Comptable et Fiscal
              </li>
            </ul>
          </div>

          {/* Bac */}
          <div className="relative pl-8 border-l-2 border-cv-green-light hover:border-cv-green transition-colors">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-cv-green rounded-full"></div>
            <p className="text-sm text-gray-500 mb-1">2010 - 2013</p>
            <h3 className="text-xl font-semibold text-gray-900">
              Baccalauréat Électrotechnique
            </h3>
            <p className="text-gray-600 mb-3">Lycée Saint-Nicolas | Paris</p>
            <ul className="text-gray-500 text-sm space-y-1">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                Formation en alternance
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                Mention Bien
              </li>
            </ul>
          </div>
        </div>

        {/* Expériences */}
        <h2 className="text-3xl font-light text-center text-cv-green-dark mb-12">
          Expériences professionnelles
        </h2>
        <div className="space-y-8">
          {/* Burgundy - Évolution interne */}
          <div className="relative pl-8 border-l-2 border-cv-green-light hover:border-cv-green transition-colors">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-cv-green rounded-full"></div>
            <p className="text-sm text-gray-500 mb-1">2016 - 2024</p>
            <h3 className="text-xl font-semibold text-gray-900">
              Hôtel Le Burgundy ***** | Paris
            </h3>
            <div className="mt-4 space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium bg-cv-green-light text-cv-green-dark px-2 py-1 rounded">
                    2022 - 2024
                  </span>
                  <span className="text-gray-900 font-medium">Directeur Technique</span>
                </div>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                    Pilotage budgétaire et maîtrise des coûts d&apos;exploitation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                    Gestion des flux et des inventaires
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                    Organisation et conformité des procédures de sécurité réglementaire
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                    Suivi et coordination de projets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                    Pilotage des partenariats et gestion contractuelle
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 text-cv-green text-sm pl-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>Évolution interne</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium bg-cv-green-light text-cv-green-dark px-2 py-1 rounded">
                    2016 - 2022
                  </span>
                  <span className="text-gray-900 font-medium">Technicien</span>
                </div>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                    Maintenance technique et gestion des équipements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                    Suivi des interventions et coordination des prestataires
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Croix-Rouge */}
          <div className="relative pl-8 border-l-2 border-cv-green-light hover:border-cv-green transition-colors">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-cv-green rounded-full"></div>
            <p className="text-sm text-gray-500 mb-1">2015 - 2017</p>
            <h3 className="text-xl font-semibold text-gray-900">
              Secouriste & Formateur PSC1
            </h3>
            <p className="text-gray-600 mb-2">La Croix-Rouge | Paris</p>
            <ul className="text-gray-500 text-sm space-y-1">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                Formation aux premiers secours
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-cv-green rounded-full mt-2 shrink-0"></span>
                Encadrement de sessions de formation PSC1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
