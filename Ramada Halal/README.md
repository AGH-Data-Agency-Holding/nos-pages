# Ramadan Halal AI — Landing Page

Landing page Astro pour l'app "Ramadan Halal AI" (AGH Data Agency Holding).

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
- Les chiffres affichés (92% précision, 50 000+ ingrédients, 10 000+ produits) viennent directement de la fiche Gumroad officielle de l'app — à reconfirmer avec l'équipe produit avant publication si ces chiffres évoluent.
