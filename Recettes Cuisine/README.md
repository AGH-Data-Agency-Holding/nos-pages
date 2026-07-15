# Recettes Cuisine — Landing Page

Landing page Astro pour l'app "Recettes Cuisine / AI Cooking Chief Offline" (AGH Data Agency Holding).

## Démarrer en local
```
npm install
npm run dev
```
Ouvre http://localhost:4321

## Déployer sur Vercel
1. Pousse ce dossier sur le dépôt GitHub (voir avec le chef de projet : dossier séparé ou racine du dépôt).
2. Sur vercel.com → "Import Project" → sélectionne le dépôt (renseigne "Root Directory" si le projet est dans un sous-dossier).
3. Vercel détecte Astro automatiquement. Clique "Deploy".

## Structure
- `src/pages/index.astro` → toute la page (contenu + styles)
- `public/images/` → captures d'écran de l'app

## À vérifier avant publication
- Le lien Gumroad est en haut du fichier `index.astro` (`const gumroadUrl`)
- Aucune fausse statistique ni faux avis n'a été ajouté sur cette page (contrairement au template Figma d'origine qui contenait un témoignage et un chiffre d'utilisateurs fictifs) — à toi d'ajouter un vrai avis client si tu en as un.
