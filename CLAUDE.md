# Portfolio - CV en ligne de Michaël Myscile

## Description

Site portfolio/CV en ligne pour Michaël Myscile, candidat en alternance pour le titre professionnel Gestionnaire Comptable et Fiscal (Bac+2).

**URL de production** : Hébergé sur GitHub Pages (repo: MMyscile/cv-online)

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4 (configuration CSS-first avec `@theme`)
- **Langage** : TypeScript
- **Déploiement** : GitHub Pages (export statique)

## Structure du projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux + config Tailwind @theme
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
└── components/
    ├── Navigation.tsx   # Nav fixe + menu burger mobile
    ├── Hero.tsx         # Section hero
    ├── VideoSection.tsx # Présentation vidéo + texte
    ├── Skills.tsx       # Compétences
    ├── FormationProgram.tsx  # Programme GCF + calendrier
    ├── Education.tsx    # Formations + expériences
    ├── Contact.tsx      # Coordonnées
    └── AnimatedSection.tsx   # Wrapper animations
```

## Couleurs personnalisées

Définies dans `globals.css` via `@theme inline` :

| Variable | Valeur | Classe Tailwind |
|----------|--------|-----------------|
| `--cv-green` | #7B9E7B | `bg-cv-green`, `text-cv-green` |
| `--cv-green-dark` | #5C7A5C | `bg-cv-green-dark`, `text-cv-green-dark` |
| `--cv-green-light` | #9DB99D | `bg-cv-green-light`, `text-cv-green-light` |
| `--cv-beige` | #FBF8F3 | `bg-cv-beige` |

## Conventions de code

- Utiliser les classes Tailwind canoniques (pas `[var(--cv-green)]` mais `bg-cv-green`)
- Utiliser `shrink-0` au lieu de `flex-shrink-0`
- Utiliser `bg-linear-to-*` au lieu de `bg-gradient-to-*` (Tailwind v4)
- Breakpoints responsive : `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

## Fonctionnalités notables

### Calendrier de formation (FormationProgram.tsx)
- Affiche 18 mois de formation (fév 2026 - juil 2027)
- Jours en centre marqués en vert
- Responsive : 2 → 3 → 4 → 6 colonnes selon la largeur
- Expand/collapse sur mobile avec animation

### Menu mobile (Navigation.tsx)
- Menu burger avec animation
- Fermeture auto au clic sur un lien
- `max-h-80` + `pb-8` pour l'espacement

### Section Contact
- Breakpoint `lg` pour passer en ligne
- `whitespace-nowrap` sur téléphone et ville

## Commandes

```bash
npm run dev      # Développement
npm run build    # Build production
npm run lint     # ESLint
```

## Notes pour les futures sessions

- Les warnings Tailwind dans VSCode sont souvent des suggestions de style, pas des erreurs
- Tester le responsive en réduisant la fenêtre du navigateur
- Le LCP en local avec DevTools est toujours plus lent qu'en prod
