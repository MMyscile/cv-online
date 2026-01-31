"use client";

import { useState } from "react";

// Jours de formation MF extraits du calendrier 2026-2027 (source: Modula Formation)
const trainingDays: Record<string, number[]> = {
  "2026-02": [2, 3, 16, 17],
  "2026-03": [2, 3, 16, 17, 18, 19, 20, 30, 31],
  "2026-04": [13, 14, 20, 21],
  "2026-05": [4, 5, 18, 19],
  "2026-06": [1, 2, 3, 4, 5, 22, 23],
  "2026-07": [6, 7, 20, 21],
  "2026-08": [3, 4, 24, 25],
  "2026-09": [7, 8, 21, 22],
  "2026-10": [5, 6, 7, 8, 9],
  "2026-11": [2, 3, 16, 17, 30],
  "2026-12": [1, 14, 15],
  "2027-01": [4, 5, 18, 19],
  "2027-02": [1, 2, 15, 16],
  "2027-03": [1, 22, 23, 24, 25, 26],
  "2027-04": [12, 13, 14, 26, 27, 28],
  "2027-05": [10, 11, 12, 24, 25, 31],
  "2027-06": [1, 2, 21, 22, 23],
  "2027-07": [19, 20, 21, 22, 23, 26, 27, 28, 29, 30],
};

const months = [
  { key: "2026-02", label: "Fév 2026" },
  { key: "2026-03", label: "Mar 2026" },
  { key: "2026-04", label: "Avr 2026" },
  { key: "2026-05", label: "Mai 2026" },
  { key: "2026-06", label: "Juin 2026" },
  { key: "2026-07", label: "Juil 2026" },
  { key: "2026-08", label: "Août 2026" },
  { key: "2026-09", label: "Sep 2026" },
  { key: "2026-10", label: "Oct 2026" },
  { key: "2026-11", label: "Nov 2026" },
  { key: "2026-12", label: "Déc 2026" },
  { key: "2027-01", label: "Jan 2027" },
  { key: "2027-02", label: "Fév 2027" },
  { key: "2027-03", label: "Mar 2027" },
  { key: "2027-04", label: "Avr 2027" },
  { key: "2027-05", label: "Mai 2027" },
  { key: "2027-06", label: "Juin 2027" },
  { key: "2027-07", label: "Juil 2027" },
];

const ccpModules = [
  {
    id: "ccp1",
    title: "CCP 1 : Établir et présenter les arrêtés comptables",
    subtitle: "Périodiques et annuels • 2 modules",
    content: [
      {
        module: "Réaliser l'arrêté des comptes",
        items: [
          "Contrôler la pertinence des soldes comptables et apporter les corrections nécessaires",
          "Identifier et comptabiliser les ajustements sur les comptes de charges et produits",
          "Calculer et comptabiliser les amortissements et dépréciations",
          "Identifier et comptabiliser les provisions nécessaires",
          "Tenir un dossier d'inventaire explicite et fiable",
        ],
      },
      {
        module: "Réviser et présenter les comptes annuels",
        items: [
          "Contrôler la conformité et l'exhaustivité des enregistrements",
          "Appliquer les règles du contrôle interne",
          "Pratiquer la révision par les cycles",
          "Contrôler la cohérence et concordance des états de synthèse",
          "Organiser le dossier de contrôles",
        ],
      },
    ],
  },
  {
    id: "ccp2",
    title: "CCP 2 : Renseigner et contrôler les déclarations fiscales",
    subtitle: "2 modules",
    content: [
      {
        module: "Établir les déclarations fiscales périodiques",
        items: [
          "Identifier les déclarations fiscales à produire (TVA, taxes parafiscales)",
          "Effectuer les traitements et calculs nécessaires",
          "Renseigner et transmettre les déclarations par voie dématérialisée",
          "Justifier et documenter le traitement des déclarations",
          "Actualiser ses connaissances en réglementation comptable et fiscale",
        ],
      },
      {
        module: "Établir les déclarations fiscales annuelles",
        items: [
          "Déterminer le résultat fiscal (réel simplifié ou normal)",
          "Préparer, justifier et établir les déclarations annuelles",
          "Calculer le résultat fiscal imposable (IR ou IS)",
          "Comptabiliser l'impôt sur les sociétés",
          "Organiser le dossier de contrôles fiscaux",
        ],
      },
    ],
  },
  {
    id: "ccp3",
    title: "CCP 3 : Établir et présenter des états prévisionnels",
    subtitle: "De l'activité de l'entreprise • 2 modules",
    content: [
      {
        module: "Analyser les états de synthèse",
        items: [
          "Déterminer et commenter les soldes intermédiaires de gestion (SIG)",
          "Calculer la capacité d'autofinancement (CAF)",
          "Établir un bilan fonctionnel et calculer le BFR",
          "Calculer le seuil de rentabilité et les ratios usuels",
          "Présenter un tableau de financement et de flux de trésorerie",
        ],
      },
      {
        module: "Établir des prévisions financières",
        items: [
          "Collecter les éléments de prévisions économiques",
          "Établir les budgets des principales fonctions de l'entreprise",
          "Établir les comptes de résultat et bilans prévisionnels",
          "Élaborer les plans de financement",
          "Calculer la rentabilité d'investissement",
        ],
      },
    ],
  },
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  // 0 = Sunday, 1 = Monday, etc. We want Monday = 0
  const day = new Date(year, month - 1, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function MiniCalendar({ monthKey, label }: { monthKey: string; label: string }) {
  const [year, month] = monthKey.split("-").map(Number);
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const mfDays = trainingDays[monthKey] || [];

  const days = [];
  // Empty cells for days before the 1st
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-6 h-6" />);
  }
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isMF = mfDays.includes(day);
    days.push(
      <div
        key={day}
        className={`w-6 h-6 flex items-center justify-center text-xs rounded ${
          isMF
            ? "bg-[var(--cv-green)] text-white font-semibold"
            : "text-gray-400"
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">
      <h4 className="text-sm font-semibold text-[var(--cv-green-dark)] mb-2 text-center">
        {label}
      </h4>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
          <div key={i} className="w-6 h-5 text-[10px] text-gray-400 font-medium">
            {d}
          </div>
        ))}
        {days}
      </div>
    </div>
  );
}

function AccordionItem({
  ccp,
  isOpen,
  onToggle,
}: {
  ccp: (typeof ccpModules)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="text-left">
          <h4 className="font-semibold text-[var(--cv-green-dark)]">{ccp.title}</h4>
          <p className="text-sm text-gray-500">{ccp.subtitle}</p>
        </div>
        <svg
          className={`w-5 h-5 text-[var(--cv-green)] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 space-y-4">
          {ccp.content.map((section, idx) => (
            <div key={idx}>
              <h5 className="font-medium text-[var(--cv-green-dark)] mb-2">
                {section.module}
              </h5>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-[var(--cv-green)] rounded-full mr-2 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FormationProgram() {
  const [openCcp, setOpenCcp] = useState<string | null>(null);
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);

  return (
    <section id="formation" className="py-20 px-6 bg-[var(--cv-beige)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-[var(--cv-green-dark)] mb-4">
          Formation
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Titre professionnel Gestionnaire Comptable et Fiscal • Niveau 5 (Bac+2) • RNCP 37949
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[var(--cv-green-dark)]">18</div>
            <div className="text-sm text-gray-500">mois de formation</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[var(--cv-green-dark)]">658h</div>
            <div className="text-sm text-gray-500">en centre (25%)</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[var(--cv-green-dark)]">1974h</div>
            <div className="text-sm text-gray-500">en entreprise (75%)</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[var(--cv-green-dark)]">4j</div>
            <div className="text-sm text-gray-500">par mois en centre</div>
          </div>
        </div>

        {/* Calendrier */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[var(--cv-green-dark)] mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Calendrier de formation 2026-2027
          </h3>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[var(--cv-green)] rounded" />
              <span className="text-gray-600">Jours en centre de formation</span>
            </div>
          </div>
          <div
            className={`relative transition-[max-height] duration-1000 ease-in-out overflow-hidden lg:!max-h-none ${
              isCalendarExpanded ? "max-h-[1800px]" : "max-h-[420px]"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pb-2">
              {months.map((m) => (
                <MiniCalendar key={m.key} monthKey={m.key} label={m.label} />
              ))}
            </div>
            {!isCalendarExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--cv-beige)] to-transparent pointer-events-none lg:hidden" />
            )}
          </div>
          <button
            onClick={() => setIsCalendarExpanded(!isCalendarExpanded)}
            className="mt-4 mx-auto text-[var(--cv-green-dark)] font-medium text-sm hover:underline flex items-center gap-1 lg:hidden"
          >
            {isCalendarExpanded ? (
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

        {/* Programme */}
        <div>
          <h3 className="text-xl font-semibold text-[var(--cv-green-dark)] mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Programme des 3 Certificats de Compétences Professionnelles
          </h3>
          <div className="space-y-3">
            {ccpModules.map((ccp) => (
              <AccordionItem
                key={ccp.id}
                ccp={ccp}
                isOpen={openCcp === ccp.id}
                onToggle={() => setOpenCcp(openCcp === ccp.id ? null : ccp.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
