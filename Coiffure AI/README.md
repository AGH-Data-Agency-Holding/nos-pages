# Hair Changer (Coiffure Virtual AR) — Landing Page

Landing page Astro pour l'application **Hair Changer** (AGH / Keita Digital Wellness), générée à partir de la fiche produit Gumroad officielle : https://aghhol.gumroad.com/l/haircut-hairstyle-ai

## Stack
- [Astro](https://astro.build) — génération de site statique
- CSS pur (aucun framework), inline dans `src/pages/index.astro`
- Polices : Manrope (titres) + Inter (texte courant), via Google Fonts

## Structure
```
hairchanger/
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

> Note : même blocage potentiel Vercel Pro pour repo privé d'organisation que sur les autres landing pages AGH — à valider avec Bilgassim/Amine.

## Contenu
Tous les textes marketing (description longue, fonctionnalités, tarif à 2 $, garantie satisfait ou remboursé) proviennent directement de la fiche Gumroad officielle du produit, version française. Les captures utilisées sont les vrais visuels de l'application (Frames propres + Slides recadrées pour retirer les titres marketing incrustés). Aucune statistique ni témoignage n'a été inventé.

⚠️ Aucun lien Figma n'a été fourni pour ce produit — la page a été construite à partir des 11 visuels fournis.
