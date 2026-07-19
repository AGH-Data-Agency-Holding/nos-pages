# Dresser AI — Landing Page

Landing page Astro pour l'app "Dresser AI" (AGH Data Agency Holding).

## Démarrer en local
```
npm install
npm run dev
```
Ouvre http://localhost:4321

## Déployer sur Vercel
1. Pousse le contenu de ce dossier dans le sous-dossier prévu pour cette app sur le dépôt `Landing-pages` (ou `nos-pages`) de l'entreprise.
2. Sur vercel.com → "Import Project" → sélectionne le dépôt, renseigne le bon "Root Directory".
3. Vercel détecte Astro automatiquement. Clique "Deploy".

## Structure
- `src/pages/index.astro` → toute la page (contenu + styles)
- `public/images/` → captures d'écran de l'app

## À vérifier avant publication
- Le lien Gumroad est en haut du fichier `index.astro` (`const gumroadUrl`)
- Aucune icône dédiée n'a été fournie pour cette app : un logo simple (robe stylisée en dégradé violet/rose, inspiré de l'écran de lancement) a été dessiné en SVG dans l'en-tête. Remplace-le si tu as une icône officielle.
