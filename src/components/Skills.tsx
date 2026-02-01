const skills = [
  {
    category: "Comptabilité",
    items: [
      "Tenue comptable et révision des comptes",
      "Déclarations fiscales",
      "Notion et écriture de paye",
      "Analyse financière : SIG",
      "Budget prévisionnel et de trésorerie",
    ],
  },
  {
    category: "Bureautique",
    items: ["Excel", "Suite Office", "Sage", "ACD Cador"],
  },
  {
    category: "Atouts",
    items: [
      "Communication",
      "Autodidacte & Curieux",
      "Travail en équipe",
      "Travail sous pression",
      "Adaptabilité",
    ],
  },
  {
    category: "Autres",
    items: ["Anglais B1/B2", "Développement Web", "Impression 3D"],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-center text-cv-green-dark mb-12">
          Compétences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg font-semibold text-cv-green-dark mb-4 pb-2 border-b-2 border-cv-green-light">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cv-green rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
