export interface ProductPricingTier {
  name: string;
  price: string;
  variant: string;
  featured?: boolean;
  badge?: string;
  description?: string;
}

export interface ProductTestimonial {
  photo?: string;
  initials?: string;
  profile: string;
  profession: string;
  problem: string;
  benefit: string;
  rating?: number;
}

export interface ProductStep {
  icon: string;
  title: string;
  description: string;
}

export interface ProductFeature {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export interface ProductTheme {
  cream: string;
  peach: string;
  ink: string;
  charcoal: string;
  primary: string;
  primaryDark: string;
  line: string;
  sage?: string;
}

export interface ProductInstallationStep {
  number: number;
  title: string;
  description: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductThankYou {
  title: string;
  subtitle: string;
  badgeText: string;
  apkDownloadUrl: string;
  apkFilename: string;
  apkVersion: string;
  apkSize: string;
  googlePlayUrl?: string;
  supportEmail: string;
  supportWhatsapp?: string;
  installationSteps: ProductInstallationStep[];
  faq: ProductFaq[];
}

export interface ProductConfig {
  slug: string;
  aliases?: string[];
  name: string;
  shortTagline: string;
  metaTitle: string;
  metaDescription: string;
  paymentUrl: string;
  theme: ProductTheme;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    trustBadge: string;
    bgImage: string;
  };
  stepsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ProductStep[];
  };
  featuresSection: {
    features: ProductFeature[];
  };
  uspBanner: {
    eyebrow: string;
    title: string;
    description: string;
  };
  pricingSection: {
    eyebrow: string;
    title: string;
    cardEyebrow: string;
    priceHint: string;
    guaranteeHint: string;
    tiers: ProductPricingTier[];
    featuresIncluded: string[];
  };
  testimonialsSection: {
    eyebrow: string;
    title: string;
    testimonials: ProductTestimonial[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    languagesText: string;
  };
  thankYou: ProductThankYou;
}

export const products: Record<string, ProductConfig> = {
  "recettes-cuisine": {
    "slug": "recettes-cuisine",
    "aliases": [
      "cooking-chief-kitchen-ai",
      "cooking-chief"
    ],
    "name": "Recettes Cuisine",
    "shortTagline": "Scannez ce qu",
    "metaTitle": "Recettes Cuisine — Le chef IA hors-ligne anti-gaspi",
    "metaDescription": "Scannez ce qu",
    "paymentUrl": "https://aghhol.gumroad.com/l/cooking-chief-kitchen-ai",
    "theme": {
      "cream": "#FDEEE1",
      "peach": "#FBD9BE",
      "ink": "#241608",
      "charcoal": "#2B1D10",
      "primary": "#E8622A",
      "primaryDark": "#C94A1A",
      "line": "#F0C9A6",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "IA hors-ligne · Anti-gaspi",
      "headline": "Ce qu'il reste dans le frigo devient votre prochain bon plat.",
      "subheadline": "Scannez ce qu'il reste dans votre frigo avec la caméra, l'IA reconnaît vos ingrédients et propose une recette marocaine ou internationale adaptée — sans connexion internet, sans publicité, sans même taper un mot.",
      "primaryCtaText": "Télécharger Recettes Cuisine",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/screen-recipe-detail.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Recettes Cuisine en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Trouvez votre prochaine idée",
          "title": "Cuisinez facilement selon vos envies et vos ingrédients.",
          "description": "Parcourez les recettes populaires par pays, filtrez selon vos envies, et gardez vos favorites à portée de main.",
          "image": "/images/screen-explore.png",
          "imageAlt": "Cuisinez facilement selon vos envies et vos ingrédients.",
          "tags": [
            "RECHERCHE PAR PAYS",
            "FAVORIS"
          ]
        },
        {
          "eyebrow": "Cuisinez sans attendre",
          "title": "Obtenez une idée de recette, même sans réseau.",
          "description": "L'assistant recettes répond directement depuis votre téléphone — utile en cuisine, en voyage ou dans les zones peu connectées.",
          "image": "/images/screen-chat-offline.png",
          "imageAlt": "Obtenez une idée de recette, même sans réseau.",
          "tags": [
            "ZÉRO WI-FI",
            "CHAT INTÉGRÉ"
          ]
        },
        {
          "eyebrow": "Réussissez votre plat",
          "title": "Suivez chaque étape sans vous poser de questions.",
          "description": "Chaque recette détaille la préparation pas à pas avec des quantités précises — pas d'approximation qui gâche le plat.",
          "image": "/images/screen-recipe-detail.png",
          "imageAlt": "Suivez chaque étape sans vous poser de questions.",
          "tags": [
            "ÉTAPES DÉTAILLÉES",
            "MESURES PRÉCISES"
          ]
        },
        {
          "eyebrow": "Gardez l'envie de cuisiner",
          "title": "Progressez en cuisine, un plat réussi à la fois.",
          "description": "Gagnez des points, montez de niveau et débloquez des badges au fil de vos réussites en cuisine — de \"Chef Débutant\" à des défis plus ambitieux.",
          "image": "/images/screen-gamification.png",
          "imageAlt": "Progressez en cuisine, un plat réussi à la fois.",
          "tags": [
            "NIVEAUX",
            "DÉFIS",
            "BADGES"
          ]
        },
        {
          "eyebrow": "Cuisinez avec plaisir",
          "title": "Trouvez une communauté qui partage vos envies.",
          "description": "Cuisine végé, pâtisserie, batch cooking ou cuisine du monde : rejoignez un groupe qui vous correspond et échangez avec d'autres passionnés.",
          "image": "/images/screen-community.png",
          "imageAlt": "Trouvez une communauté qui partage vos envies.",
          "tags": [
            "GROUPES",
            "PARTAGE"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Recettes Cuisine fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Recettes Cuisine",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Master Chef 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Master Chef 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Master Chef 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Master Chef 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Master Chef À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Recettes Cuisine",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Youssef",
          "profession": "Technicien réseau",
          "problem": "Je ne savais jamais quoi cuisiner avec ce qu",
          "benefit": "L",
          "initials": "YO",
          "photo": "/images/avatar-youssef.jpg"
        },
        {
          "profile": "Noura",
          "profession": "Entrepreneuse e-commerce",
          "problem": "Je commandais souvent à manger après une longue journée.",
          "benefit": "Je trouve maintenant rapidement une recette adaptée à mes ingrédients.",
          "initials": "NO",
          "photo": "/images/avatar-noura.jpg"
        },
        {
          "profile": "Lucas",
          "profession": "Architecte d",
          "problem": "Je pensais que l",
          "benefit": "L",
          "initials": "LU",
          "photo": "/images/avatar-lucas.jpg"
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Recettes Cuisine dès aujourd'hui.",
      "subtitle": "Téléchargez Recettes Cuisine et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Recettes Cuisine",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Recettes Cuisine !",
      "subtitle": "Votre commande est confirmée et votre application Recettes Cuisine est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-RECETTES-GOOGLE/releases/latest/download/recettes-cuisine-release.apk",
      "apkFilename": "recettes-cuisine-release.apk",
      "apkVersion": "v1.0.4",
      "apkSize": "61 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger recettes-cuisine-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "dropshipping": {
    "slug": "dropshipping",
    "aliases": [
      "winning-items",
      "dropshipping-finder"
    ],
    "name": "Winning Items",
    "shortTagline": "IA hors-ligne d",
    "metaTitle": "Winning Items — Trouve tes produits gagnants, même hors-ligne",
    "metaDescription": "IA hors-ligne d",
    "paymentUrl": "https://aghhol.gumroad.com/l/dropshopping-winning-product-ai",
    "theme": {
      "cream": "#FBF3EA",
      "peach": "#F3DFC8",
      "ink": "#201408",
      "charcoal": "#241608",
      "primary": "#F2740A",
      "primaryDark": "#C25807",
      "line": "#F0DCC0",
      "sage": "#1F9D55"
    },
    "hero": {
      "eyebrow": "Des décisions plus rapides · IA hors-ligne",
      "headline": "Trouve ton prochain produit gagnant, sans y passer des heures.",
      "subheadline": "Winning Items analyse les tendances du marché et te propose des idées de produits rentables grâce à une IA embarquée — aucune connexion internet requise pour chercher.",
      "primaryCtaText": "Télécharger Winning Items",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/dropshipping/screen-home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Winning Items en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Trouve plus vite une opportunité",
          "title": "Réduis ta recherche aux produits qui correspondent à ta stratégie.",
          "description": "Trouve rapidement les produits qui correspondent à ta stratégie, sans te noyer dans des centaines de résultats non pertinents.",
          "image": "/images/dropshipping/screen-search.png",
          "imageAlt": "Réduis ta recherche aux produits qui correspondent à ta stratégie.",
          "tags": [
            "FILTRES AVANCÉS",
            "SCORE DE VIRALITÉ"
          ]
        },
        {
          "eyebrow": "Décide avec plus de clarté",
          "title": "Évalue chaque produit avec les informations qui comptent.",
          "description": "Chaque produit suggéré vient avec une fiche complète : prix de vente recommandé, marge nette, tendance et niveau de concurrence.",
          "image": "/images/dropshipping/screen-benchmark.png",
          "imageAlt": "Évalue chaque produit avec les informations qui comptent.",
          "tags": [
            "MARGE NETTE",
            "DONNÉES DE VENTE"
          ]
        },
        {
          "eyebrow": "Pilote ton activité",
          "title": "Garde une vue claire sur tes recherches et tes décisions.",
          "description": "Fiches produits analysées, temps de recherche économisé, taux de succès — un tableau de bord clair pour mesurer l'impact réel de l'app sur ton activité.",
          "image": "/images/dropshipping/screen-dashboard.png",
          "imageAlt": "Garde une vue claire sur tes recherches et tes décisions.",
          "tags": [
            "STATISTIQUES",
            "GAIN DE TEMPS"
          ]
        },
        {
          "eyebrow": "Ne perds plus tes idées",
          "title": "Retrouve tes favoris et affine ta stratégie au fil du temps.",
          "description": "Retrouve tes produits sauvegardés, ton nombre de vues et ton score global pour affiner ta stratégie au fil du temps.",
          "image": "/images/dropshipping/screen-profile.png",
          "imageAlt": "Retrouve tes favoris et affine ta stratégie au fil du temps.",
          "tags": [
            "FAVORIS",
            "HISTORIQUE"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Winning Items fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Winning Items",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "ECommerce Pro 1 mois",
          "price": "39,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "ECommerce Pro 3 mois",
          "price": "99,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "ECommerce Pro 6 mois",
          "price": "179,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "ECommerce Pro 12 mois",
          "price": "299,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "ECommerce Pro À vie",
          "price": "699,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Winning Items",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Lina",
          "profession": "Créatrice de contenu",
          "problem": "Je ne savais pas comment repérer un produit intéressant sans passer des heures à chercher.",
          "benefit": "L",
          "initials": "LE",
          "photo": null
        },
        {
          "profile": "Mehdi",
          "profession": "Vendeur en ligne",
          "problem": "Je testais des produits au hasard et je manquais de visibilité sur leur potentiel.",
          "benefit": "Les fiches et le suivi m",
          "initials": "MO",
          "photo": null
        },
        {
          "profile": "Clara",
          "profession": "Consultante indépendante",
          "problem": "Je pensais qu",
          "benefit": "Les informations sont regroupées clairement et m",
          "initials": "CL",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Winning Items dès aujourd'hui.",
      "subtitle": "Téléchargez Winning Items et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Winning Items",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Winning Items !",
      "subtitle": "Votre commande est confirmée et votre application Winning Items est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-DROPSHIPPING-FINDER/releases/latest/download/dropshipping-finder-release.apk",
      "apkFilename": "dropshipping-finder-release.apk",
      "apkVersion": "v1.1.0",
      "apkSize": "48 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger dropshipping-finder-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "apk-regime": {
    "slug": "apk-regime",
    "aliases": [
      "diet-coach",
      "regimes"
    ],
    "name": "AI Diet Coach",
    "shortTagline": "Plans minceur 7/14/30 jours, coach IA hors-ligne, scanner de repas et ",
    "metaTitle": "AI Diet Coach — Ton coach minceur IA, même sans internet",
    "metaDescription": "Plans minceur 7/14/30 jours, coach IA hors-ligne, scanner de repas et suivi complet. Fonctionne sans connexion internet.",
    "paymentUrl": "https://aghhol.gumroad.com/l/DIET-COACH-ai-fitness",
    "theme": {
      "cream": "#FBEAD9",
      "peach": "#F4CBA0",
      "ink": "#24160B",
      "charcoal": "#0E1A3A",
      "primary": "#E85A2B",
      "primaryDark": "#C94A1A",
      "line": "#E3C7A6",
      "sage": "#3FA66D"
    },
    "hero": {
      "eyebrow": "Coach IA · Hors-ligne · FR / EN / AR",
      "headline": "Perds du poids même sans réseau, jour après jour.",
      "subheadline": "Un plan minceur sur 7, 14 ou 30 jours, un coach IA qui répond par texte, et un scanner qui analyse ton assiette en une photo — sans avoir besoin d'internet.",
      "primaryCtaText": "Télécharger AI Diet Coach",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/regime/screen-home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience AI Diet Coach en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Mange plus sereinement",
          "title": "Comprends ton assiette en quelques secondes.",
          "description": "Prends ton assiette en photo, l'IA identifie les aliments et calcule calories, protéines, glucides et lipides. Fini les calculs à la main.",
          "image": "/images/regime/tab-logmeal.png",
          "imageAlt": "Comprends ton assiette en quelques secondes.",
          "tags": [
            "IDENTIFICATION IA",
            "SCAN CODE-BARRES",
            "RECETTES"
          ]
        },
        {
          "eyebrow": "Ne reste jamais seul",
          "title": "Obtiens le bon conseil au moment où tu en as besoin.",
          "description": "Pose tes questions par texte : suggestion de repas, conseils nutrition, ajustement de ton plan. Le coach répond, connecté ou non.",
          "image": "/images/regime/tab-coach-chat.png",
          "imageAlt": "Obtiens le bon conseil au moment où tu en as besoin.",
          "tags": [
            "TEXTE",
            "100% HORS-LIGNE"
          ]
        },
        {
          "eyebrow": "Reprends le contrôle",
          "title": "Traverse une fringale sans abandonner tes efforts.",
          "description": "Stress, ennui, vraie faim ou fatigue : l'app t'aide à identifier ce que tu ressens vraiment et te propose une réponse adaptée sur le moment.",
          "image": "/images/regime/tab-sos.png",
          "imageAlt": "Traverse une fringale sans abandonner tes efforts.",
          "tags": [
            "GESTION DES ENVIES",
            "SUGGESTIONS INSTANTANÉES"
          ]
        },
        {
          "eyebrow": "Reste motivé",
          "title": "Transforme ta régularité en progrès visibles.",
          "description": "Partage tes progrès, rejoins des défis et grimpe dans le classement mondial. La régularité devient un jeu plutôt qu'une contrainte.",
          "image": "/images/regime/screen-community.png",
          "imageAlt": "Transforme ta régularité en progrès visibles.",
          "tags": [
            "POINTS QUOTIDIENS",
            "DÉFIS",
            "CLASSEMENT"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "AI Diet Coach fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "AI Diet Coach",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Champion 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Champion 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Champion 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Champion 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Champion À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à AI Diet Coach",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Amina",
          "profession": "Assistante administrative",
          "problem": "Avant, je ne savais jamais quoi manger ni par où commencer.",
          "benefit": "L",
          "initials": "AM",
          "photo": null
        },
        {
          "profile": "Karim",
          "profession": "Commercial",
          "problem": "Mes repas étaient souvent improvisés et je perdais vite ma motivation.",
          "benefit": "Le suivi m",
          "initials": "KA",
          "photo": null
        },
        {
          "profile": "Sophie",
          "profession": "Professeure",
          "problem": "Je pensais que l",
          "benefit": "Elle analyse mes repas et répond à mes questions de façon vraiment pratique.",
          "initials": "SO",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de AI Diet Coach dès aujourd'hui.",
      "subtitle": "Téléchargez AI Diet Coach et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger AI Diet Coach",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à AI Diet Coach !",
      "subtitle": "Votre commande est confirmée et votre application AI Diet Coach est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-REGIMES-GOOGLE/releases/latest/download/diet-coach-release.apk",
      "apkFilename": "diet-coach-release.apk",
      "apkVersion": "v1.0.8",
      "apkSize": "55 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger diet-coach-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "ai-doctor": {
    "slug": "ai-doctor",
    "aliases": [
      "doctor-healthcare",
      "medical-ai"
    ],
    "name": "MEDICAL AI",
    "shortTagline": "MEDICAL AI (Your Doctor AI) : assistant santé IA 24h/24 pour diagnosti",
    "metaTitle": "MEDICAL AI — Votre assistant santé IA, disponible 24h/24",
    "metaDescription": "MEDICAL AI (Your Doctor AI) : assistant santé IA 24h/24 pour diagnostic préliminaire, suivi de vos symptômes et prise de rendez-vous. Conforme RGPD et HIPAA, fonctionne à 97% hors-ligne.",
    "paymentUrl": "https://aghhol.gumroad.com/l/doctor-healthcare",
    "theme": {
      "cream": "#F7F8FC",
      "peach": "#F3DFC8",
      "ink": "#10142B",
      "charcoal": "#241608",
      "primary": "#22A559",
      "primaryDark": "#C94A1A",
      "line": "#E4E5F0",
      "sage": "#22A559"
    },
    "hero": {
      "eyebrow": "Une première orientation santé, guidée par l'IA",
      "headline": "Comprenez vos symptômes, plus sereinement.",
      "subheadline": "MEDICAL AI fait le pont entre l'incertitude d'une recherche sur internet et la visite chez le médecin. Analysez vos symptômes, suivez votre carnet de santé numérique et préparez vos consultations, avec une IA médicale disponible 24h/24.",
      "primaryCtaText": "Télécharger MEDICAL AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/doctor/phone_home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience MEDICAL AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Analyseur de symptômes IA",
          "title": "Décrivez, ou montrez simplement où ça fait mal",
          "description": "Décrivez vos symptômes avec vos propres mots, ou touchez directement la zone douloureuse sur un schéma du corps. Notre IA analyse votre état à partir de bases de données médicales reconnues pour vous orienter immédiatement.",
          "image": "/images/doctor/phone_start_diagnosis.png",
          "imageAlt": "Décrivez, ou montrez simplement où ça fait mal",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Carnet de santé numérique",
          "title": "Tout votre historique, classé et accessible",
          "description": "Chaque évaluation est enregistrée avec son niveau d'urgence (stable, modéré, urgent), la date et les symptômes déclarés. Exportez ou partagez votre historique en un tap avant un rendez-vous médical.",
          "image": "/images/doctor/phone_medical_history.png",
          "imageAlt": "Tout votre historique, classé et accessible",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Profil médical personnalisé",
          "title": "Une IA qui connaît votre contexte",
          "description": "Antécédents médicaux, traitements en cours, allergies connues : renseignez votre profil pour que l'IA affine chaque analyse en fonction de votre situation réelle, pas d'une moyenne générique.",
          "image": "/images/doctor/phone_medical_profile.png",
          "imageAlt": "Une IA qui connaît votre contexte",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "IA intelligente, confidentialité totale",
          "title": "Vos données de santé restent les vôtres",
          "description": "MEDICAL AI fonctionne à 97% hors-ligne : vos données de santé restent sur votre appareil, jamais partagées, jamais vendues. Une conformité stricte aux réglementations RGPD et HIPAA protège vos informations les plus sensibles.",
          "image": "/images/doctor/phone_onboard_privacy.png",
          "imageAlt": "Vos données de santé restent les vôtres",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Disponible à toute heure",
          "title": "Un avis médical préliminaire, où que vous soyez",
          "description": "Que ce soit à 3h du matin ou en voyage à l'étranger, votre assistant santé IA reste disponible pour évaluer vos symptômes en quelques secondes et vous orienter vers les bons soins.",
          "image": "/images/doctor/phone_onboard_doctor.png",
          "imageAlt": "Un avis médical préliminaire, où que vous soyez",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "MEDICAL AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "MEDICAL AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Vitalis 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Vitalis 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Vitalis 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Vitalis 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Vitalis À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à MEDICAL AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Léa",
          "profession": "Assistante juridique",
          "problem": "Je voulais mieux préparer mes consultations sans passer des heures à chercher mes informations.",
          "benefit": "Le carnet de santé m",
          "initials": "LE",
          "photo": null
        },
        {
          "profile": "Omar",
          "profession": "Technicien audiovisuel",
          "problem": "Je perdais le fil de mes symptômes et de mes traitements entre deux rendez-vous.",
          "benefit": "L",
          "initials": "OM",
          "photo": null
        },
        {
          "profile": "Camille",
          "profession": "Formatrice indépendante",
          "problem": "J",
          "benefit": "Les questions guidées m",
          "initials": "CA",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de MEDICAL AI dès aujourd'hui.",
      "subtitle": "Téléchargez MEDICAL AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger MEDICAL AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à MEDICAL AI !",
      "subtitle": "Votre commande est confirmée et votre application MEDICAL AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-MEDICAL-AI/releases/latest/download/medical-ai-release.apk",
      "apkFilename": "medical-ai-release.apk",
      "apkVersion": "v1.2.0",
      "apkSize": "58 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger medical-ai-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "coiffure-ai": {
    "slug": "coiffure-ai",
    "aliases": [
      "hair-coiffure-ai",
      "coiffure"
    ],
    "name": "Hair Styler AI",
    "shortTagline": "Hair Changer (Coiffure Virtual AR) : essayez des centaines de coiffure",
    "metaTitle": "Hair Changer — Essayez coupes et couleurs en réalité augmentée",
    "metaDescription": "Hair Changer (Coiffure Virtual AR) : essayez des centaines de coiffures et couleurs en réalité augmentée, obtenez des recommandations IA selon votre morphologie, et réservez votre salon en un clic.",
    "paymentUrl": "https://aghhol.gumroad.com/l/haircut-hairstyle-ai",
    "theme": {
      "cream": "#FAFAFC",
      "peach": "#F3DFC8",
      "ink": "#14162B",
      "charcoal": "#241608",
      "primary": "#E8622A",
      "primaryDark": "#C94A1A",
      "line": "#E6E3EE",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Un nouveau look en confiance · IA hors-ligne",
      "headline": "Trouvez votre match parfait, sans risque.",
      "subheadline": "Une IA d'analyse morphologique rencontre l'expertise des meilleurs salons. Essayez des centaines de coiffures et couleurs en réalité augmentée, en temps réel, directement sur votre visage — quelle que soit votre texture de cheveux.",
      "primaryCtaText": "Télécharger Hair Styler AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/coiffure-ai/frame_home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Hair Styler AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Visualisez avant de choisir",
          "title": "Testez votre prochain look directement sur votre visage.",
          "description": "Notre moteur RA en temps réel utilise un tracking facial de haute précision pour appliquer instantanément une nouvelle coupe ou couleur sur votre visage — coupe, couleur, longueur et volume, tout est ajustable à la volée.",
          "image": "/images/coiffure-ai/phone_ar_camera.png",
          "imageAlt": "Testez votre prochain look directement sur votre visage.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Trouvez ce qui vous va",
          "title": "Recevez des idées adaptées à votre visage et à votre style.",
          "description": "Notre IA analyse la symétrie de votre visage, votre sous-ton de peau et la forme de votre mâchoire pour vous proposer les coupes les plus flatteuses, avec un score de compatibilité pour chaque suggestion.",
          "image": "/images/coiffure-ai/frame_ai_suggestions.png",
          "imageAlt": "Recevez des idées adaptées à votre visage et à votre style.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Passez à l'action",
          "title": "Arrivez au salon en sachant exactement quoi demander.",
          "description": "Trouvez le salon idéal grâce à la carte interactive, consultez les avis et le portfolio des coiffeurs, puis envoyez votre aperçu RA en HD avant votre rendez-vous pour un résultat exactement conforme à vos attentes.",
          "image": "/images/coiffure-ai/phone_salon_booking.png",
          "imageAlt": "Arrivez au salon en sachant exactement quoi demander.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Gardez vos meilleures idées",
          "title": "Comparez vos essais avant de prendre votre décision.",
          "description": "Retrouvez l'historique complet de vos sessions RA, comparez plusieurs looks côte à côte et ressortez vos favoris avant de vous décider définitivement.",
          "image": "/images/coiffure-ai/frame_archive.png",
          "imageAlt": "Comparez vos essais avant de prendre votre décision.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Inspirez-vous",
          "title": "Découvrez des looks qui donnent envie d'oser.",
          "description": "Publiez vos transformations, découvrez comment d'autres réinventent leur style, et testez directement les looks qui vous inspirent dans le fil de la communauté.",
          "image": "/images/coiffure-ai/frame_community.png",
          "imageAlt": "Découvrez des looks qui donnent envie d'oser.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Hair Styler AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Hair Styler AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Hair Icon 1 mois",
          "price": "19,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Hair Icon 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Hair Icon 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Hair Icon 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Hair Icon À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Hair Styler AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Sara",
          "profession": "Chargée de communication",
          "problem": "J",
          "benefit": "Je peux maintenant tester plusieurs styles avant de prendre rendez-vous.",
          "initials": "SA",
          "photo": null
        },
        {
          "profile": "Théo",
          "profession": "Photographe",
          "problem": "Je changeais souvent de look sans garder une trace de ce qui me plaisait.",
          "benefit": "L",
          "initials": "TI",
          "photo": null
        },
        {
          "profile": "Amel",
          "profession": "Entrepreneuse",
          "problem": "Je pensais qu",
          "benefit": "Les suggestions sont plus personnalisées et m",
          "initials": "AM",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Hair Styler AI dès aujourd'hui.",
      "subtitle": "Téléchargez Hair Styler AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Hair Styler AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Hair Styler AI !",
      "subtitle": "Votre commande est confirmée et votre application Hair Styler AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-COIFFURE-AI/releases/latest/download/hair-styler-ai-release.apk",
      "apkFilename": "hair-styler-ai-release.apk",
      "apkVersion": "v1.0.5",
      "apkSize": "52 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger hair-styler-ai-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "dresser-ai": {
    "slug": "dresser-ai",
    "aliases": [
      "wardrobe-dresser-ai",
      "dresser"
    ],
    "name": "Dresser AI",
    "shortTagline": "Scanne ta garde-robe, génère des tenues selon la météo et l",
    "metaTitle": "Dresser AI — Ton styliste IA, même sans connexion",
    "metaDescription": "Scanne ta garde-robe, génère des tenues selon la météo et l",
    "paymentUrl": "https://aghhol.gumroad.com/l/Styliste-Dresser-ai",
    "theme": {
      "cream": "#FDFDFD",
      "peach": "#F3DFC8",
      "ink": "#2A1F3D",
      "charcoal": "#241608",
      "primary": "#E8829E",
      "primaryDark": "#C94A1A",
      "line": "#DCD3F4",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Un style plus simple · IA hors-ligne",
      "headline": "Fini le dilemme du \"qu'est-ce que je mets\", chaque matin.",
      "subheadline": "Dresser AI scanne ta garde-robe, comprend ta morphologie et te propose des tenues adaptées à la météo, à l'occasion et à ton humeur — un vrai styliste, disponible 24/7.",
      "primaryCtaText": "Télécharger Dresser AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/dresser-ai/screen-home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Dresser AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Habille-toi sans hésiter",
          "title": "Découvre des tenues avec les pièces que tu as déjà.",
          "description": "Mixe vestes, hauts, bas et chaussures de ta propre garde-robe pour découvrir des combinaisons que tu n'aurais jamais imaginées toi-même.",
          "image": "/images/dresser-ai/screen-generate.png",
          "imageAlt": "Découvre des tenues avec les pièces que tu as déjà.",
          "tags": [
            "MIX & MATCH",
            "GARDE-ROBE VIRTUELLE"
          ]
        },
        {
          "eyebrow": "Prépare chaque occasion",
          "title": "Obtiens une idée de look adaptée à ton agenda.",
          "description": "Décris l'occasion, et le styliste IA te propose instantanément plusieurs looks complets, adaptés à ton style et à la météo du jour.",
          "image": "/images/dresser-ai/screen-ai-stylist.png",
          "imageAlt": "Obtiens une idée de look adaptée à ton agenda.",
          "tags": [
            "TEXTE & PHOTO",
            "50+ LANGUES"
          ]
        },
        {
          "eyebrow": "Retrouve tes pièces",
          "title": "Garde une vue claire sur tout ce que tu peux porter.",
          "description": "Hauts, bas, robes, chaussures : chaque vêtement scanné est classé pour que tu retrouves tout en un instant, sans jamais fouiller ton placard.",
          "image": "/images/dresser-ai/screen-wardrobe-tops.png",
          "imageAlt": "Garde une vue claire sur tout ce que tu peux porter.",
          "tags": [
            "SCAN PHOTO",
            "TRI AUTOMATIQUE"
          ]
        },
        {
          "eyebrow": "Exprime ton identité",
          "title": "Adopte un style qui respecte tes goûts et tes traditions.",
          "description": "L'IA comprend aussi bien le streetwear moderne que les tenues traditionnelles comme le kaftan ou le sari, pour un style qui te ressemble vraiment.",
          "image": "/images/dresser-ai/screen-wardrobe-shoes.png",
          "imageAlt": "Adopte un style qui respecte tes goûts et tes traditions.",
          "tags": [
            "INCLUSIF",
            "TOUTES MORPHOLOGIES"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Dresser AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Dresser AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Fashion Icon 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Fashion Icon 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Fashion Icon 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Fashion Icon 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Fashion Icon À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Dresser AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Romy",
          "profession": "Architecte",
          "problem": "Je perdais du temps chaque matin à chercher une tenue qui me ressemble.",
          "benefit": "L",
          "initials": "RO",
          "photo": null
        },
        {
          "profile": "Kamel",
          "profession": "Responsable commercial",
          "problem": "Je préparais mes tenues au dernier moment pour mes rendez-vous.",
          "benefit": "Je peux maintenant retrouver des idées adaptées à chaque occasion et mieux m",
          "initials": "KA",
          "photo": null
        },
        {
          "profile": "Maëlle",
          "profession": "Étudiante en design",
          "problem": "Je doutais qu",
          "benefit": "Les suggestions sont surprenantes, personnalisées et faciles à adapter.",
          "initials": "MA",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Dresser AI dès aujourd'hui.",
      "subtitle": "Téléchargez Dresser AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Dresser AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Dresser AI !",
      "subtitle": "Votre commande est confirmée et votre application Dresser AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-DRESSER-AI/releases/latest/download/dresser-ai-release.apk",
      "apkFilename": "dresser-ai-release.apk",
      "apkVersion": "v1.0.3",
      "apkSize": "49 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger dresser-ai-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "esthetique": {
    "slug": "esthetique",
    "aliases": [
      "skin-clinic-ai",
      "esthetique-ai"
    ],
    "name": "Skin Clinic AI",
    "shortTagline": "Esthetique AI révolutionne les soins du visage grâce à une IA analytiq",
    "metaTitle": "Esthetique AI — Routine Visage & Diagnostic Peau par IA",
    "metaDescription": "Esthetique AI révolutionne les soins du visage grâce à une IA analytique de pointe. Diagnostic dermatologique en 30 secondes, avatar 3D évolutif, routine gamifiée.",
    "paymentUrl": "https://aghhol.gumroad.com/l/makeup-skincare-ai",
    "theme": {
      "cream": "#FDFDFD",
      "peach": "#f2eaf8",
      "ink": "#2e1b4d",
      "charcoal": "#241608",
      "primary": "#f3a0c6",
      "primaryDark": "#C94A1A",
      "line": "#e8dcf2",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Écosystème beauté gamifié — propulsé par l'IA",
      "headline": "Une routine qui comprend vraiment votre peau.",
      "subheadline": "Esthetique AI révolutionne les soins du visage grâce à une intelligence artificielle analytique de pointe. Obtenez un diagnostic dermatologique précis à partir d'un simple selfie pour analyser l'acné, l'hydratation et les pores — puis découvrez une routine sur mesure adaptée à votre type de peau et à votre budget.",
      "primaryCtaText": "Télécharger Skin Clinic AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/esthetique/home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Skin Clinic AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Diagnostic",
          "title": "Un diagnostic de peau avec une précision de 98 %",
          "description": "Positionnez votre visage dans le cadre, et l'IA analyse instantanément l'hydratation, le niveau d'huile, l'acné, les pores et la texture — avec une précision médicale entraînée sur 10 millions de données multiraciales. Le résultat s'affiche en quelques secondes, avec des repères visuels clairs sur votre écran.",
          "image": "/images/esthetique/skinscan.png",
          "imageAlt": "Un diagnostic de peau avec une précision de 98 %",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Miroir virtuel",
          "title": "Un avatar 3D qui évolue avec votre peau",
          "description": "Chaque scan met à jour votre modèle 3D en temps réel : teint, grain de peau et zones à surveiller sont reflétés visuellement. Vous voyez littéralement votre \"avant / après\" progresser au fil de votre routine, sans avoir à comparer des photos une par une.",
          "image": "/images/esthetique/avatarstudio.png",
          "imageAlt": "Un avatar 3D qui évolue avec votre peau",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Gamification",
          "title": "Des quêtes quotidiennes et des Cristaux Beauté",
          "description": "Chaque analyse de peau, chaque look sauvegardé, chaque partage dans la communauté rapporte de l'expérience. Le système de gamification transforme la routine matinale en une expérience interactive qui incite à la régularité — avec des badges à débloquer et des défis hebdomadaires.",
          "image": "/images/esthetique/gamification.png",
          "imageAlt": "Des quêtes quotidiennes et des Cristaux Beauté",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Communauté",
          "title": "Un classement qui donne envie de rester régulière",
          "description": "Comparez votre progression à celle de la communauté et grimpez dans le classement au fil de vos scans et de vos looks partagés. La compétition amicale renforce la motivation à long terme — la constance devient un jeu plutôt qu'une contrainte.",
          "image": "/images/esthetique/leaderboard.png",
          "imageAlt": "Un classement qui donne envie de rester régulière",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Marketplace intelligente",
          "title": "5 000+ marques Clean Beauty, avec scan d'ingrédients AR",
          "description": "La marketplace filtre automatiquement les produits contenant des ingrédients à éviter, et ne vous propose que ceux adaptés à votre type de peau et à votre budget. L'essayage AR vous permet de tester rouges à lèvres, fards et teintes en temps réel avant tout achat.",
          "image": "/images/esthetique/armakeup.png",
          "imageAlt": "5 000+ marques Clean Beauty, avec scan d'ingrédients AR",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Skin Clinic AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Skin Clinic AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Dermato Guru 1 mois",
          "price": "19,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Dermato Guru 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Dermato Guru 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Dermato Guru 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Dermato Guru À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Skin Clinic AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Elisa",
          "profession": "Responsable marketing",
          "problem": "Je ne savais pas quels produits correspondaient vraiment aux besoins de ma peau.",
          "benefit": "Le diagnostic m",
          "initials": "EL",
          "photo": null
        },
        {
          "profile": "Nora",
          "profession": "Étudiante en architecture",
          "problem": "Je commençais des routines sans réussir à les suivre régulièrement.",
          "benefit": "Le suivi et les défis rendent mes soins plus simples à intégrer dans mes journées.",
          "initials": "NO",
          "photo": null
        },
        {
          "profile": "Yanis",
          "profession": "Photographe",
          "problem": "Je pensais qu",
          "benefit": "Les recommandations sont claires et suffisamment personnalisées pour m",
          "initials": "YA",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Skin Clinic AI dès aujourd'hui.",
      "subtitle": "Téléchargez Skin Clinic AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Skin Clinic AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Skin Clinic AI !",
      "subtitle": "Votre commande est confirmée et votre application Skin Clinic AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-ESTHETIQUE-AI/releases/latest/download/skin-clinic-release.apk",
      "apkFilename": "skin-clinic-release.apk",
      "apkVersion": "v1.0.6",
      "apkSize": "57 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger skin-clinic-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "examen-assistant": {
    "slug": "examen-assistant",
    "aliases": [
      "exam-assistant-ai",
      "examen"
    ],
    "name": "Exam Assistant AI",
    "shortTagline": "QCM générés par IA, tuteur 100% hors-ligne, suivi de progression intel",
    "metaTitle": "Exam Assistant — Le tuteur IA hors-ligne pour réussir tes examens",
    "metaDescription": "QCM générés par IA, tuteur 100% hors-ligne, suivi de progression intelligent. Révise sans Wi-Fi, même en mode avion.",
    "paymentUrl": "https://aghhol.gumroad.com/l/zclcjl",
    "theme": {
      "cream": "#F6F6FD",
      "peach": "#F3DFC8",
      "ink": "#1E1E2E",
      "charcoal": "#1B1B3A",
      "primary": "#F5821F",
      "primaryDark": "#3F35B0",
      "line": "#E1E0F6",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Des révisions plus efficaces · IA hors-ligne",
      "headline": "Révise plus intelligemment, pas plus longtemps.",
      "subheadline": "Un tuteur IA dans ta poche, disponible 24/7 même en mode avion. Des QCM générés instantanément, des résumés clairs, et un suivi qui repère tes points faibles avant l'examen.",
      "primaryCtaText": "Télécharger Exam Assistant AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/examen-assistant/screen-home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Exam Assistant AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Vérifie ce que tu sais",
          "title": "Transforme tes notes en entraînement utile.",
          "description": "L'app génère des questions à choix multiples sur n'importe quel sujet pour mémoriser 10 fois plus vite qu'en relisant simplement tes notes.",
          "image": "/images/examen-assistant/screen-quiz.png",
          "imageAlt": "Transforme tes notes en entraînement utile.",
          "tags": [
            "QCM INSTANTANÉS",
            "CORRECTION IMMÉDIATE"
          ]
        },
        {
          "eyebrow": "Comprends enfin les notions difficiles",
          "title": "Obtiens une explication claire, même sans réseau.",
          "description": "Demande une explication, un résumé ou un exemple — le tuteur répond directement depuis ton téléphone, aucune connexion nécessaire.",
          "image": "/images/examen-assistant/screen-ai-chat.png",
          "imageAlt": "Obtiens une explication claire, même sans réseau.",
          "tags": [
            "ZÉRO WI-FI",
            "RÉPONSES INSTANTANÉES"
          ]
        },
        {
          "eyebrow": "Concentre tes efforts",
          "title": "Repère les notions à revoir avant le jour de l'examen.",
          "description": "Temps de révision, taux de réussite par matière, progression hebdomadaire — tout est visible pour concentrer ton effort là où il compte.",
          "image": "/images/examen-assistant/screen-analytics.png",
          "imageAlt": "Repère les notions à revoir avant le jour de l'examen.",
          "tags": [
            "STATISTIQUES",
            "PAR MATIÈRE"
          ]
        },
        {
          "eyebrow": "Avance sans te disperser",
          "title": "Un objectif clair chaque jour pour garder le rythme.",
          "description": "Des petites missions quotidiennes (flashcards, lecture, quiz) et une série de jours actifs pour garder la motivation jusqu'au jour J.",
          "image": "/images/examen-assistant/screen-missions.png",
          "imageAlt": "Un objectif clair chaque jour pour garder le rythme.",
          "tags": [
            "OBJECTIFS QUOTIDIENS",
            "SÉRIE ACTIVE"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Exam Assistant AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Exam Assistant AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Genius 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Genius 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Genius 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Genius 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Genius À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Exam Assistant AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Hugo",
          "profession": "Étudiant en droit",
          "problem": "Je cherchais une méthode simple pour réviser sans passer mes soirées à relire mes notes.",
          "benefit": "Les quiz me permettent de commencer rapidement et de voir ce que je dois vraiment travailler.",
          "initials": "HU",
          "photo": null
        },
        {
          "profile": "Salma",
          "profession": "Étudiante en médecine",
          "problem": "J",
          "benefit": "Les objectifs quotidiens m",
          "initials": "SA",
          "photo": null
        },
        {
          "profile": "Idriss",
          "profession": "Candidat à un concours",
          "problem": "Je pensais qu",
          "benefit": "Il m",
          "initials": "ID",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Exam Assistant AI dès aujourd'hui.",
      "subtitle": "Téléchargez Exam Assistant AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Exam Assistant AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Exam Assistant AI !",
      "subtitle": "Votre commande est confirmée et votre application Exam Assistant AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-EXAM-ASSISTANT/releases/latest/download/exam-assistant-release.apk",
      "apkFilename": "exam-assistant-release.apk",
      "apkVersion": "v1.1.2",
      "apkSize": "45 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger exam-assistant-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "fitness-coach": {
    "slug": "fitness-coach",
    "aliases": [
      "fitness-coach-smart-ai",
      "fitness"
    ],
    "name": "MARCO Fitness",
    "shortTagline": "Programmes personnalisés, coach IA conversationnel, bibliothèque de 15",
    "metaTitle": "MARCO — Ton coach fitness IA, chez toi, même hors-ligne",
    "metaDescription": "Programmes personnalisés, coach IA conversationnel, bibliothèque de 150+ exercices vidéo, adaptation au Ramadan. Aucune salle de sport requise.",
    "paymentUrl": "https://aghhol.gumroad.com/l/fitness-coach-smart-ai",
    "theme": {
      "cream": "#F3F6FB",
      "peach": "#F3DFC8",
      "ink": "#101826",
      "charcoal": "#0A1330",
      "primary": "#1FC2B0",
      "primaryDark": "#C94A1A",
      "line": "#E5E4EC",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Un entraînement qui s'adapte · IA hors-ligne",
      "headline": "Ton coach fitness, adapté à ta vie, pas l'inverse.",
      "subheadline": "Pas de salle de sport, pas de matériel ? Aucun problème. MARCO construit un programme qui respecte tes contraintes, ton emploi du temps et même le Ramadan.",
      "primaryCtaText": "Télécharger MARCO Fitness",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/fitness-coach/screen-home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience MARCO Fitness en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Ne reste jamais bloqué",
          "title": "Obtiens le conseil dont tu as besoin au bon moment.",
          "description": "Adapte ton entraînement, demande un conseil nutrition ou un coup de motivation — ton coach répond instantanément, dans ta langue.",
          "image": "/images/fitness-coach/screen-coach-chat.png",
          "imageAlt": "Obtiens le conseil dont tu as besoin au bon moment.",
          "tags": [
            "TEXTE",
            "MULTILINGUE"
          ]
        },
        {
          "eyebrow": "Trouve le bon mouvement",
          "title": "Choisis une séance adaptée à ton niveau et à ton objectif.",
          "description": "Chaque mouvement est démontré en vidéo HD avec des instructions claires, pour progresser sans te blesser, même sans coach en salle.",
          "image": "/images/fitness-coach/screen-library.png",
          "imageAlt": "Choisis une séance adaptée à ton niveau et à ton objectif.",
          "tags": [
            "150+ VIDÉOS",
            "FILTRES PAR MUSCLE"
          ]
        },
        {
          "eyebrow": "Vois tes progrès",
          "title": "Comprends ton évolution et ajuste tes efforts au bon moment.",
          "description": "Un graphique clair de ton évolution, jour après jour, pour rester motivé et ajuster ton programme au bon moment.",
          "image": "/images/fitness-coach/screen-progress.png",
          "imageAlt": "Comprends ton évolution et ajuste tes efforts au bon moment.",
          "tags": [
            "CALORIES",
            "FRÉQUENCE CARDIAQUE"
          ]
        },
        {
          "eyebrow": "Reste constant",
          "title": "Organise ta semaine et avance sans perdre le fil.",
          "description": "Musculation, cardio, running : retrouve toutes tes séances passées et à venir, avec la possibilité de les refaire en un tap.",
          "image": "/images/fitness-coach/screen-schedule.png",
          "imageAlt": "Organise ta semaine et avance sans perdre le fil.",
          "tags": [
            "PLANNING HEBDO",
            "HISTORIQUE"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "MARCO Fitness fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "MARCO Fitness",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Elite Coach 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Elite Coach 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Elite Coach 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Elite Coach 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Elite Coach À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à MARCO Fitness",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Noé",
          "profession": "Développeur web",
          "problem": "Je voulais m",
          "benefit": "L",
          "initials": "NO",
          "photo": null
        },
        {
          "profile": "Fatou",
          "profession": "Responsable boutique",
          "problem": "Je faisais du sport par périodes, sans voir de vraie progression.",
          "benefit": "Le suivi me permet de voir mes efforts et de garder une routine semaine après semaine.",
          "initials": "FA",
          "photo": null
        },
        {
          "profile": "Rayan",
          "profession": "Chauffeur indépendant",
          "problem": "Je pensais qu",
          "benefit": "Les conseils sont concrets, personnalisés et accessibles même sans connexion.",
          "initials": "RY",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de MARCO Fitness dès aujourd'hui.",
      "subtitle": "Téléchargez MARCO Fitness et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger MARCO Fitness",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à MARCO Fitness !",
      "subtitle": "Votre commande est confirmée et votre application MARCO Fitness est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-FITNESS-COACH/releases/latest/download/marco-fitness-release.apk",
      "apkFilename": "marco-fitness-release.apk",
      "apkVersion": "v1.0.9",
      "apkSize": "63 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger marco-fitness-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "histoires-prophetes": {
    "slug": "histoires-prophetes",
    "aliases": [
      "stories-of-prophets-ai",
      "prophetes"
    ],
    "name": "Qisas AI",
    "shortTagline": "Qisas AI (Stories of Prophets) : le compagnon islamique intelligent et",
    "metaTitle": "Qisas AI — Histoire des prophètes, 100% hors-ligne pour vos enfants",
    "metaDescription": "Qisas AI (Stories of Prophets) : le compagnon islamique intelligent et 100% hors-ligne pour apprendre l",
    "paymentUrl": "https://www.jvzoo.com/b/0/448845/1",
    "theme": {
      "cream": "#FBF7EE",
      "peach": "#F3DFC8",
      "ink": "#14231B",
      "charcoal": "#241608",
      "primary": "#0B4423",
      "primaryDark": "#062B15",
      "line": "#E6E0D0",
      "sage": "#0B4423"
    },
    "hero": {
      "eyebrow": "Apprendre en famille · 100% hors-ligne",
      "headline": "L'histoire desprophètes,sans écran de trop.",
      "subheadline": "Qisas AI transforme les récits coraniques en aventures simples et captivantes pour vos enfants — dans un environnement 100% sûr, sans publicité, sans internet requis, même en mode avion.",
      "primaryCtaText": "Télécharger Qisas AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/histoires-prophetes/phone_home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Qisas AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Des récits à leur portée",
          "title": "Partagez des histoires qui donnent envie d'apprendre.",
          "description": "Les récits des prophètes sont transformés en aventures faciles à comprendre pour les plus jeunes, avec un Mode Enfant dédié : histoires ludiques et petits quiz pensés pour leur âge.",
          "image": "/images/histoires-prophetes/tablet_home.png",
          "imageAlt": "Partagez des histoires qui donnent envie d'apprendre.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Comprendre plus facilement",
          "title": "Retrouvez l'essentiel, même sans connexion.",
          "description": "Notre assistant IA intégré fonctionne entièrement hors-ligne : il génère des résumés clairs et des mini-quiz sans jamais avoir besoin de Wi-Fi. Vos enfants apprennent, concentrés, sans notification ni distraction.",
          "image": "/images/histoires-prophetes/phone_summary.png",
          "imageAlt": "Retrouvez l'essentiel, même sans connexion.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Un moment de calme",
          "title": "Transformez l'écoute en rituel du soir.",
          "description": "Chaque histoire peut être écoutée comme un livre audio, chapitre par chapitre, avec téléchargement pour une écoute hors-ligne — parfait pour accompagner le coucher de votre enfant.",
          "image": "/images/histoires-prophetes/phone_audio.png",
          "imageAlt": "Transformez l'écoute en rituel du soir.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Gardez le fil",
          "title": "Retrouvez leurs histoires préférées en un instant.",
          "description": "Enregistrez les récits marquants pour les relire ou les réécouter — pratique pour construire une vraie routine de lecture du soir, sans jamais perdre le fil de l'histoire en cours.",
          "image": "/images/histoires-prophetes/phone_bookmarks.png",
          "imageAlt": "Retrouvez leurs histoires préférées en un instant.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Qisas AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Qisas AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Savant 1 mois",
          "price": "19,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Savant 3 mois",
          "price": "39,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Savant 6 mois",
          "price": "69,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Savant 12 mois",
          "price": "129,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Savant À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Qisas AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Nadia",
          "profession": "Maman et éducatrice",
          "problem": "Je cherchais une manière simple de partager ces récits avec mes enfants sans les exposer aux distractions du web.",
          "benefit": "Qisas AI est devenu un moment calme de lecture et d",
          "initials": "NA",
          "photo": null
        },
        {
          "profile": "Yassine",
          "profession": "Étudiant en histoire",
          "problem": "Je voulais mieux retenir les récits et les leçons importantes sans relire de longues pages.",
          "benefit": "Les résumés et les favoris m",
          "initials": "YA",
          "photo": null
        },
        {
          "profile": "Lina",
          "profession": "Animatrice jeunesse",
          "problem": "Je pensais qu",
          "benefit": "Le contenu est clair, pratique et disponible même quand je n",
          "initials": "LI",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Qisas AI dès aujourd'hui.",
      "subtitle": "Téléchargez Qisas AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Qisas AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Qisas AI !",
      "subtitle": "Votre commande est confirmée et votre application Qisas AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-PROPHETS-GOOGLE/releases/latest/download/qisas-prophets-release.apk",
      "apkFilename": "qisas-prophets-release.apk",
      "apkVersion": "v1.0.4",
      "apkSize": "51 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger qisas-prophets-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence reçue immédiatement après confirmation de votre commande sur JVZoo."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été transmise automatiquement par email après votre commande sur JVZoo, et est également consultable dans les détails de votre reçu d'achat JVZoo."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "mental-health": {
    "slug": "mental-health",
    "aliases": [
      "mental-heath-ai",
      "calmenow"
    ],
    "name": "Calmenow AI",
    "shortTagline": "Calmenow (Mindful AI) : votre compagnon IA pour le bien-être mental, d",
    "metaTitle": "Calmenow — Votre coach IA de bien-être mental, 24h/24",
    "metaDescription": "Calmenow (Mindful AI) : votre compagnon IA pour le bien-être mental, disponible 24h/24. Suivi d",
    "paymentUrl": "https://aghhol.gumroad.com/l/mental-heath-ai",
    "theme": {
      "cream": "#FAFAF8",
      "peach": "#F3DFC8",
      "ink": "#17252B",
      "charcoal": "#12283B",
      "primary": "#0E6E55",
      "primaryDark": "#C94A1A",
      "line": "#E2E8E4",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Un quotidien plus apaisé, guidé par l'IA",
      "headline": "Retrouvez votre équilibre, à votre rythme.",
      "subheadline": "Stress, anxiété, ou simplement besoin d'être écouté : Calmenow est un compagnon IA disponible 24h/24, conçu pour comprendre votre culture, vos valeurs et votre langue — sans jugement, avec des méthodes reconnues comme la TCC.",
      "primaryCtaText": "Télécharger Calmenow AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/mental-health/phone_hero.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Calmenow AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Suivi d'humeur quotidien",
          "title": "Un check-in rapide, chaque jour",
          "description": "En quelques secondes, notez comment vous vous sentez et suivez l'évolution de votre humeur sur la semaine. Calmenow vous aide à repérer les tendances avant qu'elles ne deviennent un problème.",
          "image": "/images/mental-health/phone_mood.png",
          "imageAlt": "Un check-in rapide, chaque jour",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Journal guidé par IA",
          "title": "Écrivez librement, avec un peu d'aide",
          "description": "Quand les mots manquent, des questions générées par l'IA vous aident à explorer ce que vous ressentez — \"Pourquoi vous sentez-vous ainsi ?\", \"Qu'est-ce qui a déclenché cette émotion ?\" — et à tagger vos émotions pour mieux les comprendre.",
          "image": "/images/mental-health/phone_journal.png",
          "imageAlt": "Écrivez librement, avec un peu d'aide",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Méditations & respiration guidée",
          "title": "Un calme immédiat, à portée de main",
          "description": "Des séances de méditation guidées avec des voix familières et des exercices de respiration pour un apaisement instantané — le matin pour bien démarrer, le soir pour relâcher la journée.",
          "image": "/images/mental-health/phone_meditation.png",
          "imageAlt": "Un calme immédiat, à portée de main",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Calmenow AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Calmenow AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Serein 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Serein 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Serein 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Serein 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Serein À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Calmenow AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Inès",
          "profession": "Responsable boutique",
          "problem": "Je cherchais un espace simple pour mettre des mots sur mes journées difficiles.",
          "benefit": "Les exercices guidés m",
          "initials": "IM",
          "photo": null
        },
        {
          "profile": "Thomas",
          "profession": "Développeur web",
          "problem": "Mon stress revenait souvent et je ne savais pas comment suivre son évolution.",
          "benefit": "Le suivi d",
          "initials": "TH",
          "photo": null
        },
        {
          "profile": "Yasmine",
          "profession": "Photographe indépendante",
          "problem": "Je doutais qu",
          "benefit": "Les échanges sont accessibles et les suggestions m",
          "initials": "YA",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Calmenow AI dès aujourd'hui.",
      "subtitle": "Téléchargez Calmenow AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Calmenow AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Calmenow AI !",
      "subtitle": "Votre commande est confirmée et votre application Calmenow AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-MENTAL-HEALTH/releases/latest/download/calmenow-ai-release.apk",
      "apkFilename": "calmenow-ai-release.apk",
      "apkVersion": "v1.0.2",
      "apkSize": "47 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger calmenow-ai-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "my-quran": {
    "slug": "my-quran",
    "aliases": [
      "coran-ai-hifz",
      "quran"
    ],
    "name": "My Quran",
    "shortTagline": "My Quran : votre professeur de Tajwid par IA, 100% hors-ligne et privé",
    "metaTitle": "My Quran — Apprenez le Tajwid avec l'IA, 100% hors-ligne",
    "metaDescription": "My Quran : votre professeur de Tajwid par IA, 100% hors-ligne et privé. Correction en temps réel de votre récitation, Coran complet avec audio, mode nuit. Gratuit, sans abonnement.",
    "paymentUrl": "https://aghhol.gumroad.com/l/coran-ai-hifz",
    "theme": {
      "cream": "#F7F8F5",
      "peach": "#F3DFC8",
      "ink": "#12291A",
      "charcoal": "#241608",
      "primary": "#0E4A1E",
      "primaryDark": "#C94A1A",
      "line": "#E1E7DE",
      "sage": "#0E4A1E"
    },
    "hero": {
      "eyebrow": "Professeur de Tajwid par IA · 100% hors-ligne",
      "headline": "Récitez avec précision, en toute intimité.",
      "subheadline": "Vous n'avez pas de professeur ou de connexion Wi-Fi ? My Quran écoute votre récitation et vous corrige en temps réel, entièrement hors-ligne et en toute confidentialité — pour progresser à votre rythme, sans jugement.",
      "primaryCtaText": "Télécharger My Quran",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/my-quran/phone_lecture_start.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience My Quran en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Correction IA en temps réel",
          "title": "L'IA analyse chaque mot que vous récitez",
          "description": "Écoutez le verset, appuyez sur le micro et récitez. Notre IA analyse les règles de Tajweed et votre prononciation en temps réel, verset par verset, pour vous aider à perfectionner votre récitation.",
          "image": "/images/my-quran/phone_lecture_recording.png",
          "imageAlt": "L'IA analyse chaque mot que vous récitez",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Corrections détaillées",
          "title": "Un score précis, mot par mot",
          "description": "Après chaque récitation, obtenez un score de précision et des corrections détaillées pour chaque mot : quelle règle de Tajweed appliquer, comment prononcer correctement chaque lettre — puis réessayez jusqu'à la perfection.",
          "image": "/images/my-quran/phone_lecture_correction.png",
          "imageAlt": "Un score précis, mot par mot",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Historique & suivi",
          "title": "Toute votre progression, en un coup d'œil",
          "description": "Retrouvez l'historique complet de vos récitations, duas et quiz, avec votre score pour chacun. Une vue claire de votre régularité, jour après jour.",
          "image": "/images/my-quran/phone_history.png",
          "imageAlt": "Toute votre progression, en un coup d'œil",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Quiz & statistiques",
          "title": "Testez vos connaissances, suivez vos progrès",
          "description": "Des quiz réguliers sur les sourates étudiées, avec un tableau de statistiques détaillé : score moyen, activité des 7 derniers jours, et historique de chaque quiz passé.",
          "image": "/images/my-quran/phone_quiz_stats.png",
          "imageAlt": "Testez vos connaissances, suivez vos progrès",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Progression & motivation",
          "title": "Un compagnon qui vous garde motivé",
          "description": "Niveaux, badges, séries de jours consécutifs et versets lus : chaque effort est valorisé. Rejoignez le classement quotidien, hebdomadaire ou mensuel pour vous mesurer à la communauté.",
          "image": "/images/my-quran/phone_profile.png",
          "imageAlt": "Un compagnon qui vous garde motivé",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "My Quran fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "My Quran",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "My Quran 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "My Quran 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "My Quran 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "My Quran 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "My Quran À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à My Quran",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Amina",
          "profession": "Entrepreneuse",
          "problem": "Je cherchais un outil fiable sans connexion internet obligatoire.",
          "benefit": "L'IA intégrée me permet d'avancer sereinement où que je sois.",
          "initials": "AM"
        },
        {
          "profile": "Karim",
          "profession": "Consultant",
          "problem": "La plupart des solutions nécessitent un abonnement mensuel contraignant.",
          "benefit": "La licence permanente et la rapidité d'exécution m'ont conquis.",
          "initials": "KA"
        },
        {
          "profile": "Sarah",
          "profession": "Utilisatrice active",
          "problem": "La protection de ma vie privée et de mes données est primordiale.",
          "benefit": "Le fonctionnement 100% local sur mon smartphone me rassure complètement.",
          "initials": "SA"
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de My Quran dès aujourd'hui.",
      "subtitle": "Téléchargez My Quran et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger My Quran",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à My Quran !",
      "subtitle": "Votre commande est confirmée et votre application My Quran est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-MY-QURAN/releases/latest/download/my-quran-tajwid-release.apk",
      "apkFilename": "my-quran-tajwid-release.apk",
      "apkVersion": "v1.3.0",
      "apkSize": "68 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger my-quran-tajwid-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "natural-beauty": {
    "slug": "natural-beauty",
    "aliases": [
      "skin-natural-beauty-ai",
      "naturalbeauty"
    ],
    "name": "Natural Beauty",
    "shortTagline": "Recettes DIY pour la peau, les cheveux et le corps, assistant IA 100% ",
    "metaTitle": "Natural Beauty — Ta routine beauté naturelle, même hors-ligne",
    "metaDescription": "Recettes DIY pour la peau, les cheveux et le corps, assistant IA 100% hors-ligne, ingrédients simples de cuisine. Sublime ta beauté naturelle, sans connexion.",
    "paymentUrl": "https://aghhol.gumroad.com/l/skin-natural-beauty-ai",
    "theme": {
      "cream": "#FFF6F2",
      "peach": "#F3DFC8",
      "ink": "#2B1420",
      "charcoal": "#241608",
      "primary": "#D6247B",
      "primaryDark": "#A81760",
      "line": "#F3D9E4",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Une routine qui te ressemble · IA hors-ligne",
      "headline": "Révèle ta beauté naturelle, même sans réseau.",
      "subheadline": "Des centaines de recettes maison pour la peau, les cheveux et le corps, avec un assistant IA qui te conseille instantanément — même en avion, même sans Wi-Fi.",
      "primaryCtaText": "Télécharger Natural Beauty",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/natural-beauty/screen-home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Natural Beauty en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Comprends mieux ta peau",
          "title": "Découvre les besoins de ta peau à partir d'une simple photo.",
          "description": "Prends une photo rapide pour révéler ton type de peau et tes besoins spécifiques, puis reçois des solutions naturelles personnalisées.",
          "image": "/images/natural-beauty/screen-scan.png",
          "imageAlt": "Découvre les besoins de ta peau à partir d'une simple photo.",
          "tags": [
            "ANALYSE PHOTO",
            "PERSONNALISÉ"
          ]
        },
        {
          "eyebrow": "Commence en quelques secondes",
          "title": "Lance ta routine avec la photo que tu as déjà.",
          "description": "Que tu prennes une photo sur le moment ou que tu utilises une image déjà sur ton téléphone, l'analyse démarre en un tap.",
          "image": "/images/natural-beauty/screen-photo-choice.png",
          "imageAlt": "Lance ta routine avec la photo que tu as déjà.",
          "tags": [
            "APPAREIL PHOTO",
            "GALERIE"
          ]
        },
        {
          "eyebrow": "Reste motivé",
          "title": "Garde une routine régulière et trouve de nouvelles inspirations.",
          "description": "Un tableau de bord clair pour visualiser ta routine, accéder à l'assistant IA, et découvrir des idées beauté fraîches régulièrement.",
          "image": "/images/natural-beauty/screen-home.png",
          "imageAlt": "Garde une routine régulière et trouve de nouvelles inspirations.",
          "tags": [
            "SUIVI DE ROUTINE",
            "INSPIRATIONS"
          ]
        },
        {
          "eyebrow": "Des conseils plus sûrs pour toi",
          "title": "Indique tes allergies pour recevoir des idées qui te conviennent.",
          "description": "Type de peau, allergies, historique de recettes testées — l'app garde tout en mémoire pour ne te proposer que ce qui te convient vraiment.",
          "image": "/images/natural-beauty/screen-profile.png",
          "imageAlt": "Indique tes allergies pour recevoir des idées qui te conviennent.",
          "tags": [
            "ALLERGIES",
            "HISTORIQUE"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Natural Beauty fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Natural Beauty",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Beauty Guru 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Beauty Guru 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Beauty Guru 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Beauty Guru 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Beauty Guru À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Natural Beauty",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Inès",
          "profession": "Graphiste freelance",
          "problem": "Je cherchais une routine simple sans accumuler les produits.",
          "benefit": "L",
          "initials": "IM",
          "photo": null
        },
        {
          "profile": "Samir",
          "profession": "Chef de projet",
          "problem": "Je commençais souvent une routine sans réussir à rester régulier.",
          "benefit": "Le suivi m",
          "initials": "SA",
          "photo": null
        },
        {
          "profile": "Élodie",
          "profession": "Photographe",
          "problem": "Je doutais qu",
          "benefit": "Les suggestions sont concrètes et personnalisées, même sans connexion.",
          "initials": "EL",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Natural Beauty dès aujourd'hui.",
      "subtitle": "Téléchargez Natural Beauty et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Natural Beauty",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Natural Beauty !",
      "subtitle": "Votre commande est confirmée et votre application Natural Beauty est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-NATURAL-BEAUTY/releases/latest/download/natural-beauty-release.apk",
      "apkFilename": "natural-beauty-release.apk",
      "apkVersion": "v1.0.7",
      "apkSize": "54 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger natural-beauty-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "nutrition-kids": {
    "slug": "nutrition-kids",
    "aliases": [
      "baby-child-health",
      "baby-food"
    ],
    "name": "Baby Food AI",
    "shortTagline": "Calendrier de diversification intelligent, 800+ recettes, suivi de cro",
    "metaTitle": "Baby Food — Diversification Alimentaire & Nutrition Bébé par IA",
    "metaDescription": "Calendrier de diversification intelligent, 800+ recettes, suivi de croissance selon les courbes OMS et nutritionniste IA 24/7 pour accompagner bébé sans stress.",
    "paymentUrl": "https://aghhol.gumroad.com/l/Baby-child-health",
    "theme": {
      "cream": "#fbfefc",
      "peach": "#eaf6f1",
      "ink": "#1e3b31",
      "charcoal": "#241608",
      "primary": "#E8622A",
      "primaryDark": "#C94A1A",
      "line": "#dceee6",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Des repas plus simples, guidés par l'IA",
      "headline": "Accompagnez chaque repas sereinement.",
      "subheadline": "Que vous commenciez tout juste la diversification ou cherchiez à mieux organiser l'alimentation de votre bébé, Baby Food vous accompagne à chaque étape. Nous associons les recommandations de l'OMS à vos traditions culinaires locales, pour des repas qui correspondent vraiment à votre culture et aux produits de saison.",
      "primaryCtaText": "Télécharger Baby Food AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/nutrition-kids/home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Baby Food AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Calendrier intelligent",
          "title": "Un calendrier de diversification qui s'adapte à votre enfant",
          "description": "Le calendrier s'ajuste automatiquement à l'âge et aux allergies de votre enfant pour vous proposer le bon aliment, au bon moment. Chaque jour affiche un planning clair — petit-déjeuner, déjeuner, collation, dîner — avec le nombre de calories associé à chaque repas.",
          "image": "/images/nutrition-kids/mealplan.png",
          "imageAlt": "Un calendrier de diversification qui s'adapte à votre enfant",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Bibliothèque de recettes",
          "title": "Plus de 800 recettes saines, expliquées pas à pas",
          "description": "Purées, petits-déjeuners, plats principaux, protéines, collations : chaque recette est filtrable par catégorie et affiche le temps de préparation, le niveau de difficulté et l'âge recommandé, ainsi que les apports nutritionnels clés (vitamines, fibres, fer...).",
          "image": "/images/nutrition-kids/recipes.png",
          "imageAlt": "Plus de 800 recettes saines, expliquées pas à pas",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Suivi de croissance",
          "title": "Suivez la croissance de votre enfant avec les courbes officielles de l'OMS",
          "description": "Poids, taille, nombre de repas par jour : chaque mesure est comparée aux courbes de croissance officielles de l'Organisation Mondiale de la Santé, avec une indication claire lorsque votre enfant se situe dans la plage de croissance normale.",
          "image": "/images/nutrition-kids/growth.png",
          "imageAlt": "Suivez la croissance de votre enfant avec les courbes officielles de l'OMS",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Assistant IA",
          "title": "Une nutritionniste IA disponible 24h/24",
          "description": "Une question sur une recette, un doute sur un produit, une inquiétude à poser à un pédiatre ? L'assistant IA répond à tout moment, suggère des recettes adaptées, analyse les étiquettes des produits pour bébé et guide vos décisions au quotidien.",
          "image": "/images/nutrition-kids/aichat.png",
          "imageAlt": "Une nutritionniste IA disponible 24h/24",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Baby Food AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Baby Food AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Super Parent 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Super Parent 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Super Parent 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Super Parent 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Super Parent À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Baby Food AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Malika",
          "profession": "Assistante administrative",
          "problem": "Je cherchais une façon simple d",
          "benefit": "Le calendrier me donne des idées claires et m",
          "initials": "MA",
          "photo": null
        },
        {
          "profile": "Loris",
          "profession": "Conducteur de travaux",
          "problem": "Entre le travail et les repas, je manquais de temps pour varier les menus.",
          "benefit": "Les recettes et le planning me font gagner du temps tout en gardant des repas adaptés.",
          "initials": "LO",
          "photo": null
        },
        {
          "profile": "Sana",
          "profession": "Illustratrice indépendante",
          "problem": "J",
          "benefit": "L",
          "initials": "SA",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Baby Food AI dès aujourd'hui.",
      "subtitle": "Téléchargez Baby Food AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Baby Food AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Baby Food AI !",
      "subtitle": "Votre commande est confirmée et votre application Baby Food AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-NUTRITION-KIDS/releases/latest/download/baby-food-ai-release.apk",
      "apkFilename": "baby-food-ai-release.apk",
      "apkVersion": "v1.0.5",
      "apkSize": "59 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger baby-food-ai-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "ramadan-halal": {
    "slug": "ramadan-halal",
    "aliases": [
      "ramadan-halal-pray-ai",
      "ramadan"
    ],
    "name": "Ramadan Halal AI",
    "shortTagline": "Coach IA prédictif pour le Suhoor et l",
    "metaTitle": "Ramadan Halal AI — Coach de jeûne, scanner halal & Zakat",
    "metaDescription": "Coach IA prédictif pour le Suhoor et l",
    "paymentUrl": "https://aghhol.gumroad.com/l/ramadan-halal-pray-ai",
    "theme": {
      "cream": "#F5F1E6",
      "peach": "#E9DFC4",
      "ink": "#1B2620",
      "charcoal": "#241608",
      "primary": "#1E3A45",
      "primaryDark": "#C94A1A",
      "line": "#E5E4EC",
      "sage": "#6F9469"
    },
    "hero": {
      "eyebrow": "Un Ramadan mieux organisé · IA hors-ligne",
      "headline": "Vivez un Ramadan plus serein, jour après jour.",
      "subheadline": "Un coach IA prédictif pour votre Suhoor et Iftar, un scanner qui vérifie l'origine halal de vos aliments en un instant, et un parcours gamifié sur 30 jours pour rester motivé jusqu'à l'Aïd.",
      "primaryCtaText": "Télécharger Ramadan Halal AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/ramadan-halal/screen-dashboard.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Ramadan Halal AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Garde ton énergie",
          "title": "Aborde Suhoor et Iftar avec des repères adaptés.",
          "description": "Le coach IA anticipe vos besoins nutritionnels avec 92% de précision pour gérer les fringales et maintenir votre énergie tout au long du jeûne.",
          "image": "/images/ramadan-halal/screen-dashboard.png",
          "imageAlt": "Aborde Suhoor et Iftar avec des repères adaptés.",
          "tags": [
            "PRÉCISION 92%",
            "SUHOOR & IFTAR"
          ]
        },
        {
          "eyebrow": "Achète en confiance",
          "title": "Comprends tes étiquettes sans recherche interminable.",
          "description": "Un simple scan déchiffre les étiquettes complexes pour garantir que votre alimentation reste strictement halal, sans doute ni recherche manuelle.",
          "image": "/images/ramadan-halal/screen-scanner.png",
          "imageAlt": "Comprends tes étiquettes sans recherche interminable.",
          "tags": [
            "SCAN INSTANTANÉ",
            "CODES-E"
          ]
        },
        {
          "eyebrow": "Avance avec constance",
          "title": "Rends chaque bonne action visible et motivante.",
          "description": "Chaque prière, chaque scan, chaque bonne action rapporte des points. Votre progression spirituelle devient visible, jour après jour.",
          "image": "/images/ramadan-halal/screen-coins.png",
          "imageAlt": "Rends chaque bonne action visible et motivante.",
          "tags": [
            "AVATAR 3D",
            "BADGES",
            "PIÈCES HALAL"
          ]
        },
        {
          "eyebrow": "Ne reste pas seul",
          "title": "Partage ton parcours avec une communauté qui te comprend.",
          "description": "Comparez votre progression à celle des membres de votre mosquée ou de vos amis, et partagez vos réussites du mois sacré.",
          "image": "/images/ramadan-halal/screen-community.png",
          "imageAlt": "Partage ton parcours avec une communauté qui te comprend.",
          "tags": [
            "CLASSEMENT LOCAL",
            "DÉFIS"
          ]
        },
        {
          "eyebrow": "Donne l'esprit tranquille",
          "title": "Prépare tes dons avec un calcul clair et pratique.",
          "description": "Un outil intégré calcule vos obligations religieuses financières et simplifie vos dons annuels — pour une tranquillité d'esprit complète.",
          "image": "/images/ramadan-halal/screen-zakat.png",
          "imageAlt": "Prépare tes dons avec un calcul clair et pratique.",
          "tags": [
            "CALCUL AUTOMATIQUE",
            "DONS"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Ramadan Halal AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Ramadan Halal AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Lumière 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Lumière 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Lumière 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Lumière 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Lumière À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Ramadan Halal AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Mariam",
          "profession": "Infirmière",
          "problem": "Je cherchais un accompagnement simple pour mieux organiser mes journées de Ramadan.",
          "benefit": "L",
          "initials": "MA",
          "photo": null
        },
        {
          "profile": "Ibrahim",
          "profession": "Entrepreneur",
          "problem": "Je perdais vite le fil entre mes prières, mes objectifs et mes bonnes actions.",
          "benefit": "Le parcours me motive à rester régulier et à suivre mes progrès jour après jour.",
          "initials": "IB",
          "photo": null
        },
        {
          "profile": "Zahra",
          "profession": "Enseignante",
          "problem": "Je pensais qu",
          "benefit": "Les fonctions de l",
          "initials": "ZA",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Ramadan Halal AI dès aujourd'hui.",
      "subtitle": "Téléchargez Ramadan Halal AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Ramadan Halal AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Ramadan Halal AI !",
      "subtitle": "Votre commande est confirmée et votre application Ramadan Halal AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-RAMADAN-HALAL/releases/latest/download/ramadan-halal-release.apk",
      "apkFilename": "ramadan-halal-release.apk",
      "apkVersion": "v1.0.3",
      "apkSize": "50 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger ramadan-halal-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "ruqya-charia": {
    "slug": "ruqya-charia",
    "aliases": [
      "rokia-charia-ai",
      "ruqya"
    ],
    "name": "Ruqya Charia IA",
    "shortTagline": "Ruqya Charia IA : premier assistant au monde reliant sciences islamiqu",
    "metaTitle": "Ruqya Charia IA — Diagnostic spirituel et bien-être par l'IA",
    "metaDescription": "Ruqya Charia IA : premier assistant au monde reliant sciences islamiques authentiques et psychologie moderne. Analyse faciale IA, questionnaires cliniques, diagnostic spirituel précis et récitations coraniques de Ruqya personnalisées.",
    "paymentUrl": "https://aghhol.gumroad.com/l/rokia-charia-ai",
    "theme": {
      "cream": "#FAF9F6",
      "peach": "#F3DFC8",
      "ink": "#101B2E",
      "charcoal": "#0F2A52",
      "primary": "#E8622A",
      "primaryDark": "#C94A1A",
      "line": "#E5E4EC",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Un chemin plus apaisé, guidé par l'IA",
      "headline": "Comprenez ce que vous ressentez, à votre rythme.",
      "subheadline": "Épuisement spirituel, mal-être émotionnel, anxiété sans cause apparente : plutôt que de deviner, Ruqya Charia IA analyse vos expressions faciales et croise les résultats avec des questionnaires psychologiques cliniques pour vous offrir un diagnostic spirituel précis — et des récitations coraniques de Ruqya adaptées à votre état.",
      "primaryCtaText": "Télécharger Ruqya Charia IA",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/ruqya-charia/phone_home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Ruqya Charia IA en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Analyse faciale par IA",
          "title": "Une reconnaissance d'émotions de haute précision",
          "description": "Notre IA avancée (technologie MediaPipe/FER2013) analyse vos expressions faciales en temps réel, en toute sécurité et localement sur votre appareil — sans jamais transmettre vos données à des tiers.",
          "image": "/images/ruqya-charia/phone_scanning.png",
          "imageAlt": "Une reconnaissance d'émotions de haute précision",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Diagnostic psycho-spirituel",
          "title": "Trois étapes vers une réponse claire",
          "description": "Le diagnostic combine l'analyse des émotions faciales, un questionnaire psychologique validé (dépression, anxiété, stress) et une analyse IA qui relie vos résultats à un état spirituel reconnu — avec des recommandations personnalisées.",
          "image": "/images/ruqya-charia/phone_assessment_overview.png",
          "imageAlt": "Trois étapes vers une réponse claire",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Suivi de votre évolution",
          "title": "Votre parcours émotionnel et spirituel, dans le temps",
          "description": "Chaque diagnostic est enregistré et représenté sur un graphique d'évolution — dimension émotionnelle, spirituelle et psychologique — pour visualiser vos progrès session après session.",
          "image": "/images/ruqya-charia/phone_home.png",
          "imageAlt": "Votre parcours émotionnel et spirituel, dans le temps",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Espace éducatif",
          "title": "Comprendre, avant de guérir",
          "description": "Des ressources claires sur la santé mentale en Islam, la dépression et l'anxiété d'un point de vue scientifique et spirituel, les pratiques spirituelles islamiques validées, et les signes qui doivent pousser à consulter un professionnel.",
          "image": "/images/ruqya-charia/phone_education.png",
          "imageAlt": "Comprendre, avant de guérir",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Confidentialité absolue",
          "title": "Vos données les plus intimes restent les vôtres",
          "description": "Chiffrement de bout en bout, toutes les données stockées localement sur votre appareil, jamais partagées. Un espace sûr pour explorer ce que vous ressentez, en toute discrétion.",
          "image": "/images/ruqya-charia/phone_privacy_first.png",
          "imageAlt": "Vos données les plus intimes restent les vôtres",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Ruqya Charia IA fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Ruqya Charia IA",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Baraka 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Baraka 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Baraka 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Baraka 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Baraka À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Ruqya Charia IA",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Nawal",
          "profession": "Bibliothécaire",
          "problem": "Je cherchais un cadre calme pour mieux comprendre ce que je ressentais au quotidien.",
          "benefit": "Les ressources et le parcours guidé m",
          "initials": "NA",
          "photo": null
        },
        {
          "profile": "Idriss",
          "profession": "Comptable",
          "problem": "Je voulais suivre mon évolution sans mélanger mes notes et mes différentes étapes.",
          "benefit": "L",
          "initials": "ID",
          "photo": null
        },
        {
          "profile": "Salma",
          "profession": "Graphiste freelance",
          "problem": "J",
          "benefit": "L",
          "initials": "SA",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Ruqya Charia IA dès aujourd'hui.",
      "subtitle": "Téléchargez Ruqya Charia IA et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Ruqya Charia IA",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Ruqya Charia IA !",
      "subtitle": "Votre commande est confirmée et votre application Ruqya Charia IA est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-RUQUIA-GOOGLE/releases/latest/download/ruqya-charia-release.apk",
      "apkFilename": "ruqya-charia-release.apk",
      "apkVersion": "v1.0.6",
      "apkSize": "64 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger ruqya-charia-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "salat-hajj": {
    "slug": "salat-hajj",
    "aliases": [
      "salat-hajj-ai",
      "salat"
    ],
    "name": "Salat & Hajj AI",
    "shortTagline": "Salat & Hajj AI : rappels de prière intelligents adaptés à votre Madha",
    "metaTitle": "Salat & Hajj AI — Votre compagnon spirituel intelligent",
    "metaDescription": "Salat & Hajj AI : rappels de prière intelligents adaptés à votre Madhab, simulation 3D/RA du Hajj et de la Omra, Cheikh virtuel IA disponible 24/7, calculatrice de Zakat. 100% hors-ligne.",
    "paymentUrl": "https://aghhol.gumroad.com/l/salat-hajj-ai",
    "theme": {
      "cream": "#FAF9F5",
      "peach": "#F3DFC8",
      "ink": "#0D211F",
      "charcoal": "#241608",
      "primary": "#17A968",
      "primaryDark": "#0B6B44",
      "line": "#E3E7E2",
      "sage": "#17A968"
    },
    "hero": {
      "eyebrow": "Une pratique spirituelle plus claire, guidée par l'IA",
      "headline": "Votre foi, organiséeau quotidien.",
      "subheadline": "Salat & Hajj AI apprend vos habitudes pour vous rappeler chaque prière au bon moment, selon votre fuseau horaire et votre Madhab — et vous accompagne pas à pas dans la préparation du Hajj et de la Omra.",
      "primaryCtaText": "Télécharger Salat & Hajj AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/salat-hajj/phone_home_straight.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Salat & Hajj AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Rappels de prière intelligents",
          "title": "Ne manquez plus jamais une prière",
          "description": "L'application apprend vos habitudes quotidiennes pour envoyer des rappels adaptatifs, entièrement personnalisés selon votre fuseau horaire et votre Madhab préféré. Cochez chaque prière accomplie et suivez votre régularité au fil des jours.",
          "image": "/images/salat-hajj/phone_salat_checklist.png",
          "imageAlt": "Ne manquez plus jamais une prière",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Cheikh virtuel IA",
          "title": "Une réponse à vos questions, à toute heure",
          "description": "Baraka AI, votre assistant islamique quotidien, répond à vos questions de Fiqh 24h/24 — que ce soit sur le Wudu, les duas contre l'anxiété, ou toute autre interrogation religieuse du quotidien.",
          "image": "/images/salat-hajj/tablet_baraka_ai.png",
          "imageAlt": "Une réponse à vos questions, à toute heure",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Guide du Hajj & de la Omra",
          "title": "Chaque rituel expliqué, étape par étape",
          "description": "Préparez votre pèlerinage avec un guide complet : de l'Ihram et l'intention jusqu'au Tawaf Al-Ifadah, chaque étape est détaillée avec des simulations immersives en 3D et réalité augmentée des lieux saints comme Mina et Arafat.",
          "image": "/images/salat-hajj/phone_hajj_guide.png",
          "imageAlt": "Chaque rituel expliqué, étape par étape",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Progression & motivation",
          "title": "Un avatar qui évolue avec votre engagement",
          "description": "Votre avatar 3D personnel évolue à mesure que vous progressez dans votre pratique. Débloquez des badges, suivez vos séries de prières accomplies, et restez motivé jour après jour grâce à une préparation ludique du Ramadan et du Hajj.",
          "image": "/images/salat-hajj/tablet_home.png",
          "imageAlt": "Un avatar qui évolue avec votre engagement",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Salat & Hajj AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Salat & Hajj AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Érudit 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Érudit 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Érudit 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Érudit 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Érudit À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Salat & Hajj AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Aïcha",
          "profession": "Enseignante",
          "problem": "Je voulais mieux organiser mes prières et retrouver les étapes importantes du Hajj au même endroit.",
          "benefit": "Les rappels et les check-lists m",
          "initials": "AD",
          "photo": null
        },
        {
          "profile": "Karim",
          "profession": "Ingénieur réseau",
          "problem": "Mes horaires changeaient souvent et je perdais le fil de ma régularité.",
          "benefit": "Les rappels adaptés à mon rythme rendent ma pratique quotidienne plus facile à suivre.",
          "initials": "KM",
          "photo": null
        },
        {
          "profile": "Nadia",
          "profession": "Cheffe de projet",
          "problem": "Je doutais qu",
          "benefit": "Baraka AI m",
          "initials": "NS",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Salat & Hajj AI dès aujourd'hui.",
      "subtitle": "Téléchargez Salat & Hajj AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Salat & Hajj AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Salat & Hajj AI !",
      "subtitle": "Votre commande est confirmée et votre application Salat & Hajj AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-SALAT-GOOGLE/releases/latest/download/salat-hajj-release.apk",
      "apkFilename": "salat-hajj-release.apk",
      "apkVersion": "v1.0.5",
      "apkSize": "62 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger salat-hajj-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "smart-deco": {
    "slug": "smart-deco",
    "aliases": [
      "smart-deco-ai",
      "betob"
    ],
    "name": "Smart Deco AI",
    "shortTagline": "Le décorateur IA qui fusionne design moderne et artisanat local : scan",
    "metaTitle": "Smart Deco AI — Décoration d'Intérieur & Design 3D par IA",
    "metaDescription": "Le décorateur IA qui fusionne design moderne et artisanat local : scanner d",
    "paymentUrl": "https://aghhol.gumroad.com/l/betob",
    "theme": {
      "cream": "#faf6f0",
      "peach": "#f0eef9",
      "ink": "#1a1a1a",
      "charcoal": "#241608",
      "primary": "#c1793f",
      "primaryDark": "#C94A1A",
      "line": "#e8e2d8",
      "sage": "#8a9a7e"
    },
    "hero": {
      "eyebrow": "Un intérieur qui vous ressemble, guidé par l'IA",
      "headline": "Votre intérieur, réinventé avec confiance.",
      "subheadline": "Révolutionnez votre décoration avec une application IA qui fusionne le design moderne international et l'artisanat traditionnel. Que vous soyez primo-accédant ou passionné de rénovation, notre IA analyse vos photos pour générer des ambiances photoréalistes en moins de 5 minutes — zellige, tapis berbères et mobilier artisanal compris.",
      "primaryCtaText": "Télécharger Smart Deco AI",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/smart-deco/home.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Smart Deco AI en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Décorateur personnel IA",
          "title": "Un chat intelligent qui vous conseille selon votre budget et vos goûts",
          "description": "Décrivez votre pièce, votre style préféré et vos contraintes d'espace : l'assistant IA vous propose une palette, des matériaux et des lignes directrices concrètes, puis vous montre des exemples pour affiner votre vision avant de passer au rendu 3D.",
          "image": "/images/smart-deco/ai_chat.png",
          "imageAlt": "Un chat intelligent qui vous conseille selon votre budget et vos goûts",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Scanner d'espace IA",
          "title": "Des mesures précises, calculées automatiquement",
          "description": "Scannez simplement les murs de votre pièce avec la caméra : l'IA calcule les dimensions exactes et détecte le mobilier déjà présent, pour générer ensuite des designs parfaitement à l'échelle de votre espace réel.",
          "image": "/images/smart-deco/scan_walls.png",
          "imageAlt": "Des mesures précises, calculées automatiquement",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Générateur de designs 3D",
          "title": "Des rendus haute définition, avec une lumière naturelle réaliste",
          "description": "Chaque design généré est accompagné de sa palette de couleurs, d'une estimation du coût du projet et d'une répartition claire entre mobilier et décoration — pour visualiser aussi bien le style que le budget avant de vous lancer.",
          "image": "/images/smart-deco/design_detail.png",
          "imageAlt": "Des rendus haute définition, avec une lumière naturelle réaliste",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Essai AR sans risque",
          "title": "Placez le mobilier chez vous, à l'échelle réelle, avant d'acheter",
          "description": "Visualisez chaque meuble directement dans votre pièce grâce à la réalité augmentée : taille, orientation et distance sont ajustables en temps réel pour éviter toute erreur de style ou de mesure avant l'achat.",
          "image": "/images/smart-deco/ar_placement.png",
          "imageAlt": "Placez le mobilier chez vous, à l'échelle réelle, avant d'acheter",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Marketplace artisanale",
          "title": "Grandes marques et artisans locaux, dans un seul catalogue",
          "description": "Achetez des pièces authentiques auprès de marques partenaires et d'artisans locaux vérifiés. Recherchez par style, filtrez par budget, et accédez directement à un répertoire de créateurs certifiés pour demander un devis.",
          "image": "/images/smart-deco/marketplace.png",
          "imageAlt": "Grandes marques et artisans locaux, dans un seul catalogue",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Smart Deco AI fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Smart Deco AI",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Architecte 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Architecte 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Architecte 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Architecte 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Architecte À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Smart Deco AI",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Maya",
          "profession": "Architecte d",
          "problem": "J",
          "benefit": "Les propositions et les rendus m",
          "initials": "MA",
          "photo": null
        },
        {
          "profile": "Romain",
          "profession": "Chef de projet",
          "problem": "Je voulais réaménager mon salon sans dépasser mon budget.",
          "benefit": "Le planificateur et les suggestions de mobilier m",
          "initials": "RE",
          "photo": null
        },
        {
          "profile": "Sofia",
          "profession": "Consultante indépendante",
          "problem": "Je pensais qu",
          "benefit": "Le scanner et les recommandations personnalisées donnent des idées vraiment adaptées à ma pièce.",
          "initials": "SO",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Smart Deco AI dès aujourd'hui.",
      "subtitle": "Téléchargez Smart Deco AI et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Smart Deco AI",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Smart Deco AI !",
      "subtitle": "Votre commande est confirmée et votre application Smart Deco AI est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-SMART-DECO/releases/latest/download/smart-deco-ai-release.apk",
      "apkFilename": "smart-deco-ai-release.apk",
      "apkVersion": "v1.1.0",
      "apkSize": "65 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger smart-deco-ai-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  },
  "vape-stopper": {
    "slug": "vape-stopper",
    "aliases": [
      "vape-stopper-ai",
      "bjwrxx"
    ],
    "name": "Vape Stopper",
    "shortTagline": "Vape Stopper : votre coach IA 24h/24 pour un sevrage progressif, durab",
    "metaTitle": "Vape Stopper — Arrêtez la vape avec un coach IA 24h/24",
    "metaDescription": "Vape Stopper : votre coach IA 24h/24 pour un sevrage progressif, durable et personnalisé de la cigarette électronique. Plan sur 8 à 12 semaines, mode SOS Craving, plus de 30 techniques validées.",
    "paymentUrl": "https://aghhol.gumroad.com/l/bjwrxx",
    "theme": {
      "cream": "#F7F6F2",
      "peach": "#F3DFC8",
      "ink": "#14213D",
      "charcoal": "#2A497D",
      "primary": "#E8622A",
      "primaryDark": "#C94A1A",
      "line": "#E4E2DA",
      "sage": "#3F9B5E"
    },
    "hero": {
      "eyebrow": "Coach IA de sevrage à la vape",
      "headline": "Reprenez le contrôle,une respirationà la fois.",
      "subheadline": "Vape Stopper est votre coach IA disponible 24h/24 pour un sevrage progressif et durable de la cigarette électronique — sans culpabilité, avec un plan qui s'adapte à votre corps et à votre culture.",
      "primaryCtaText": "Télécharger Vape Stopper",
      "secondaryCtaText": "Voir les fonctionnalités",
      "trustBadge": "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      "bgImage": "/images/vape-stopper/phone_tracker.png"
    },
    "stepsSection": {
      "eyebrow": "Comment ça marche",
      "title": "Votre expérience Vape Stopper en trois étapes.",
      "subtitle": "Pas besoin de réseau permanent : le moteur IA et vos données restent disponibles en toute circonstance.",
      "steps": [
        {
          "icon": "⚡",
          "title": "1. Installation & Configuration",
          "description": "Téléchargez et lancez l'application en quelques secondes."
        },
        {
          "icon": "🤖",
          "title": "2. Analyse locale par l'IA",
          "description": "L'intelligence artificielle embarquée traite vos requêtes sans dépendre du Wi-Fi."
        },
        {
          "icon": "🎯",
          "title": "3. Résultats & Sauvegarde",
          "description": "Consultez vos bilans, recettes ou conseils et conservez vos favoris."
        }
      ]
    },
    "featuresSection": {
      "features": [
        {
          "eyebrow": "Reprenez le contrôle des envies",
          "title": "Obtenez une aide concrète dès que l'envie arrive.",
          "description": "Dites simplement comment vous vous sentez — \"j'ai envie de vapoter\", \"je suis stressé\" — et votre coach répond aussitôt avec des conseils validés par des experts, dans un ton adapté à votre culture et à votre langue.",
          "image": "/images/vape-stopper/phone_coach.png",
          "imageAlt": "Obtenez une aide concrète dès que l'envie arrive.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Rendez vos progrès visibles",
          "title": "Suivez votre évolution et les économies réalisées.",
          "description": "Chaque jour sans vapoter est compté, chaque baisse de consommation est visible sur un graphique clair. Vape Stopper calcule automatiquement l'argent que vous économisez, dans votre monnaie locale.",
          "image": "/images/vape-stopper/tablet_tracker.png",
          "imageAlt": "Suivez votre évolution et les économies réalisées.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Un soutien dans les moments difficiles",
          "title": "Traversez les envies fortes avec les bons réflexes.",
          "description": "Un accès en un clic à des outils d'urgence, même hors connexion. Respiration guidée, exercices de recentrage et rappel que l'envie va passer — pour tenir bon dans les moments les plus difficiles.",
          "image": "/images/vape-stopper/phone_sos.png",
          "imageAlt": "Traversez les envies fortes avec les bons réflexes.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Avancez entouré",
          "title": "Trouvez du soutien auprès de personnes qui comprennent votre parcours.",
          "description": "Rejoignez des groupes segmentés par langue, âge et profil pour échanger avec des personnes qui vivent la même chose que vous — un espace bienveillant, sans jugement.",
          "image": "/images/vape-stopper/tablet_community.png",
          "imageAlt": "Trouvez du soutien auprès de personnes qui comprennent votre parcours.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        },
        {
          "eyebrow": "Un parcours à votre rythme",
          "title": "Suivez un plan qui s'adapte à votre quotidien.",
          "description": "Contrairement aux applications anti-tabac génériques, Vape Stopper gère spécifiquement les dosages de nicotine, les arômes et la gestuelle propres à la vape. Le plan de réduction s'étale sur 8 à 12 semaines et s'adapte dynamiquement à vos réactions pour éviter les rechutes.",
          "image": "/images/vape-stopper/tablet_onboarding.png",
          "imageAlt": "Suivez un plan qui s'adapte à votre quotidien.",
          "tags": [
            "HORS-LIGNE",
            "SÉCURISÉ"
          ]
        }
      ]
    },
    "uspBanner": {
      "eyebrow": "Zéro connexion requise",
      "title": "Vape Stopper fonctionne même en mode avion.",
      "description": "Vos données restent privées sur votre appareil et ne transitent par aucun serveur externe."
    },
    "pricingSection": {
      "eyebrow": "Tarif",
      "title": "Choisissez la durée qui vous convient.",
      "cardEyebrow": "Vape Stopper",
      "priceHint": "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      "guaranteeHint": "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      "tiers": [
        {
          "name": "Champion Libre 1 mois",
          "price": "29,99 €",
          "variant": "1 Month License",
          "featured": false
        },
        {
          "name": "Champion Libre 3 mois",
          "price": "59,99 €",
          "variant": "3 Months License",
          "featured": false
        },
        {
          "name": "Champion Libre 6 mois",
          "price": "119,99 €",
          "variant": "6 Months License",
          "featured": false
        },
        {
          "name": "Champion Libre 12 mois",
          "price": "199,99 €",
          "variant": "12 Months License",
          "featured": true,
          "badge": "Le plus choisi"
        },
        {
          "name": "Champion Libre À vie",
          "price": "399,99 €",
          "variant": "LIFETIME",
          "featured": false
        }
      ],
      "featuresIncluded": [
        "Accès complet à Vape Stopper",
        "Moteur d'intelligence artificielle hors-ligne",
        "Mises à jour et nouvelles fonctionnalités incluses",
        "Support technique officiel AGH Data Agency Holding"
      ]
    },
    "testimonialsSection": {
      "eyebrow": "Preuve sociale",
      "title": "Ils ont adopté notre application au quotidien.",
      "testimonials": [
        {
          "profile": "Alex",
          "profession": "Technicien support",
          "problem": "Je voulais arrêter la vape mais je ne savais pas comment gérer les envies au quotidien.",
          "benefit": "Le parcours me donne des étapes simples et des outils accessibles au moment où j",
          "initials": "AL",
          "photo": null
        },
        {
          "profile": "Julie",
          "profession": "Assistante de direction",
          "problem": "Je réduisais ma consommation quelques jours avant de reprendre mes anciennes habitudes.",
          "benefit": "Le suivi m",
          "initials": "JU",
          "photo": null
        },
        {
          "profile": "Omar",
          "profession": "Livreur indépendant",
          "problem": "Je pensais qu",
          "benefit": "Les conseils sont concrets, personnalisés et disponibles même hors connexion.",
          "initials": "OM",
          "photo": null
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Passez à l'action",
      "title": "Faites l'expérience de Vape Stopper dès aujourd'hui.",
      "subtitle": "Téléchargez Vape Stopper et commencez immédiatement, même hors-ligne.",
      "buttonText": "Télécharger Vape Stopper",
      "languagesText": "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية"
    },
    "thankYou": {
      "title": "Félicitations pour votre accès à Vape Stopper !",
      "subtitle": "Votre commande est confirmée et votre application Vape Stopper est prête.",
      "badgeText": "Licence validée · Accès immédiat",
      "apkDownloadUrl": "https://github.com/AGH-Data-Agency-Holding/APK-VAPE-STOPPER/releases/latest/download/vape-stopper-release.apk",
      "apkFilename": "vape-stopper-release.apk",
      "apkVersion": "v1.0.1",
      "apkSize": "46 Mo",
      "supportEmail": "contact@datagenere.com",
      "supportWhatsapp": "+212710911949",
      "installationSteps": [
        {
          "number": 1,
          "title": "Téléchargez le fichier APK",
          "description": "Cliquez sur le bouton ci-dessus pour télécharger vape-stopper-release.apk directement sur votre smartphone."
        },
        {
          "number": 2,
          "title": "Autorisez l'installation",
          "description": "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source »."
        },
        {
          "number": 3,
          "title": "Activez votre licence",
          "description": "Lancez l'application et saisissez la clé de licence personnelle reçue par email de la part de Gumroad."
        }
      ],
      "faq": [
        {
          "question": "Où puis-je trouver ma clé de licence ?",
          "answer": "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement."
        },
        {
          "question": "L'application fonctionne-t-elle sans connexion ?",
          "answer": "Oui ! Une fois installée et activée, l'IA fonctionne à 100% hors-ligne, sans Wi-Fi ni données mobiles."
        }
      ]
    }
  }
};

export const defaultProduct = products["recettes-cuisine"];
