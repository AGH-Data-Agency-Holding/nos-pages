# Calmenow (Mindful AI) — Landing Page

Landing page Astro pour l'application **Calmenow / Mindful AI** (AGH / Keita Digital Wellness), générée à partir de la fiche produit Gumroad officielle : https://aghhol.gumroad.com/l/mental-heath-ai

## Stack
- [Astro](https://astro.build) — génération de site statique
- CSS pur (aucun framework), inline dans `src/pages/index.astro`
- Polices : Poppins (titres) + Inter (texte courant), via Google Fonts

## Structure
```
calmenow/
├── public/images/       # captures d'écran réelles de l'app + logo
├── src/pages/index.astro
├── astro.config.mjs
└── package.json
```

## Développement local
```bash
npm install
npm run dev       # http://localhost:4321
```

## Build de production
```bash
npm run build      # sortie dans dist/
npm run preview    # prévisualiser le build
```

## Déploiement sur Vercel
1. Pousser ce dossier sur un repo GitHub (privé ou public).
2. Sur Vercel : "Import Project" → sélectionner le repo → Framework Preset "Astro" (détecté automatiquement).
3. Aucune variable d'environnement requise.

> Note : si le repo GitHub est privé et rattaché à une organisation, un plan Vercel Pro peut être requis — même blocage que pour les autres landing pages AGH, à valider avec Bilgassim/Amine.

## Contenu
Tous les textes marketing (description longue, fonctionnalités, tarif à 2 $) proviennent directement de la fiche Gumroad officielle du produit, version française. Les captures utilisées (`phone_hero`, `phone_mood`, `phone_journal`, `phone_meditation`) sont les visuels réels de l'application. L'image `illustration_privacy.png` est un visuel décoratif fourni par l'équipe (non une capture d'écran de l'app) utilisé pour illustrer la section confidentialité. Aucune statistique ni témoignage n'a été inventé.

⚠️ Aucun lien Figma n'a été fourni pour ce produit — la page a été construite à partir des 7 visuels fournis (slides + logo + bannière).
