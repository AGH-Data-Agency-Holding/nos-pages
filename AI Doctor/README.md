# MEDICAL AI (Your Doctor AI) — Landing Page

Landing page Astro pour l'application **MEDICAL AI / Your Doctor AI** (AGH / Keita Digital Wellness), générée à partir de la fiche produit Gumroad officielle : https://aghhol.gumroad.com/l/doctor-healthcare

## Stack
- [Astro](https://astro.build) — génération de site statique
- CSS pur (aucun framework), inline dans `src/pages/index.astro`
- Polices : Space Grotesk (titres) + Inter (texte courant), via Google Fonts

## Structure
```
medicalai/
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
Tous les textes marketing (description longue, fonctionnalités, tarif à 2 $) proviennent directement de la fiche Gumroad officielle du produit (titre app store "AI DOCTOR OFFLINE", nom produit "Your Doctor AI"), version française. Les captures utilisées sont les vrais écrans de l'application, déjà propres (sans texte marketing ajouté à recadrer). Aucune statistique ni témoignage n'a été inventé.

⚠️ Aucun lien Figma n'a été fourni pour ce produit — la page a été construite à partir des 17 visuels fournis (3 jeux de mockups du même parcours + bannière + logo).

**Nom de marque :** l'app affiche "MEDICAL AI" sur son écran de démarrage réel (les visuels de présentation portent la mention "MEDIAL AI", probable coquille) — la page utilise donc "MEDICAL AI" comme nom principal, avec "Your Doctor AI" en sous-titre/référence produit.
