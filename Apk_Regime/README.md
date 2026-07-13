# Diet Coach — Landing Page

Landing page Astro pour l'app "AI Diet Coach" (AGH Data Agency Holding).

## Démarrer en local
```
npm install
npm run dev
```
Ouvre http://localhost:4321

## Déployer sur Vercel
1. Pousse ce dossier sur un dépôt GitHub.
2. Sur vercel.com → "Import Project" → sélectionne le dépôt.
3. Vercel détecte Astro automatiquement. Clique "Deploy".

## Structure
- `src/pages/index.astro` → toute la page (contenu + styles)
- `public/images/` → visuels (icône, captures d'écran de l'app)

## À personnaliser
- Le lien Gumroad est en haut du fichier `index.astro` (`const gumroadUrl`)
- Les couleurs et polices sont dans la balise `<style>` du même fichier (variables `:root`)
