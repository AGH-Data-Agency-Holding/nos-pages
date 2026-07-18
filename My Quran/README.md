# My Quran (AI Tajweed Tutor) — Landing Page

Landing page Astro pour l'application **My Quran** (AGH / Keita Digital Wellness), générée à partir de la fiche produit Gumroad officielle : https://aghhol.gumroad.com/l/coran-ai-hifz

## Stack
- [Astro](https://astro.build) — génération de site statique
- CSS pur (aucun framework), inline dans `src/pages/index.astro`
- Polices : Outfit (titres) + Inter (texte courant), via Google Fonts

## Structure
```
myquran/
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
Tous les textes marketing (description longue, fonctionnalités) proviennent directement de la fiche Gumroad officielle du produit (titre app store "APK HOLY QURAN AI RECIT", nom produit "My Quran"), version française. Les captures utilisées sont les vrais écrans de l'application, déjà propres (sans texte marketing ajouté à recadrer). Aucune statistique ni témoignage n'a été inventé.

⚠️ **Prix : cette application est gratuite** (0,00 $ sur la fiche Gumroad) — contrairement aux autres apps AGH facturées 2 $. La page reflète ce prix gratuit dans la section tarif et les call-to-action.

⚠️ Aucun lien Figma n'a été fourni pour ce produit — la page a été construite à partir des 11 visuels fournis.
