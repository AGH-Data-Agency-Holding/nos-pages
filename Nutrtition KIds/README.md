# Baby Food — Landing Page

Page produit pour **Baby Food** (Nutrition Bébé & Enfant), l'app de diversification alimentaire et de suivi de croissance basée sur les courbes OMS (portefeuille AGH Data Agency Holding).

## Stack
- [Astro](https://astro.build) (aucune dépendance UI externe, CSS custom uniquement)
- Déploiement statique — compatible Vercel

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur `http://localhost:4321`.

## Build

```bash
npm run build
```

Le résultat statique est généré dans `dist/`.

## Déploiement Vercel

1. Pousser ce dossier sur un repo GitHub (org privée AGH — nécessite le plan Vercel Pro pour les déploiements d'orgs privées).
2. Importer le repo dans Vercel.
3. Framework preset : **Astro** (détecté automatiquement).
4. Aucune variable d'environnement requise.

## Contenu source

Tous les textes (fonctionnalités, avantages, prix) proviennent de la fiche produit Gumroad officielle :
https://aghhol.gumroad.com/l/Baby-child-health

Aucune statistique ni témoignage n'a été inventé — seules les données présentes sur la fiche Gumroad sont utilisées.
