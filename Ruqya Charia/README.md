# Ruqya Charia IA — Landing Page

Landing page Astro pour l'application **Ruqya Charia IA** (AGH / Keita Digital Wellness), générée à partir de la fiche produit Gumroad officielle : https://aghhol.gumroad.com/l/rokia-charia-ai

## Stack
- [Astro](https://astro.build) — génération de site statique
- CSS pur (aucun framework), inline dans `src/pages/index.astro`
- Polices : Lora (titres) + Inter (texte courant), via Google Fonts

## Structure
```
ruqya/
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
Tous les textes marketing (description longue, fonctionnalités, tarif à 2 $) proviennent directement de la fiche Gumroad officielle du produit (version française du descriptif multilingue FR/EN/AR). Les captures utilisées sont les vrais écrans de l'application (jeu de mockups "PHONE_1" à "PHONE_7", déjà propres). Aucune statistique ni témoignage n'a été inventé.

⚠️ Sujet sensible : cette app combine diagnostic psychologique et spirituel. Le footer inclut un avertissement rappelant qu'elle ne remplace pas un avis médical, psychologique ou religieux professionnel.

Aucun lien Figma n'a été fourni pour ce produit — la page a été construite à partir des 15 visuels fournis (7 mockups uniques + doublons "Onboarding" 7"/10" + bannière + logo).
