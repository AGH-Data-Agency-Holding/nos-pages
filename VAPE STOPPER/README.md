# Vape Stopper — Landing Page

Landing page Astro pour l'application **Vape Stopper** (AGH / Keita Digital Wellness), générée à partir de la fiche produit Gumroad officielle : https://aghhol.gumroad.com/l/bjwrxx

## Stack
- [Astro](https://astro.build) — génération de site statique
- CSS pur (aucun framework), inline dans `src/pages/index.astro`
- Polices : Sora (titres) + Inter (texte courant), via Google Fonts

## Structure
```
vape-stopper/
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

> Note : si le repo GitHub est privé et rattaché à une organisation, un plan Vercel Pro peut être requis pour le déploiement — point à valider avec Bilgassim/Amine.

## Contenu
Tous les textes marketing (description longue, fonctionnalités, tarif à 2 $) proviennent directement de la fiche Gumroad officielle du produit, version française. Aucune statistique ni témoignage n'a été inventé.
