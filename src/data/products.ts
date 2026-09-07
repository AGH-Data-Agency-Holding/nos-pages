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
  // =========================================================================
  // 1. RECETTES CUISINE / COOKING CHIEF
  // =========================================================================
  "recettes-cuisine": {
    slug: "recettes-cuisine",
    aliases: ["cooking-chief-kitchen-ai", "cooking-chief"],
    name: "Recettes Cuisine",
    shortTagline: "Le chef IA hors-ligne anti-gaspi",
    metaTitle: "Recettes Cuisine — Le chef IA hors-ligne anti-gaspi",
    metaDescription: "Scannez ce qu'il reste dans votre frigo, l'IA hors-ligne propose la recette parfaite. Cuisine marocaine et internationale, zéro connexion requise.",
    paymentUrl: "https://aghhol.gumroad.com/l/cooking-chief-kitchen-ai",
    theme: {
      cream: "#FDEEE1",
      peach: "#FBD9BE",
      ink: "#241608",
      charcoal: "#2B1D10",
      primary: "#E8622A",
      primaryDark: "#C94A1A",
      line: "#F0C9A6",
      sage: "#3F9B5E",
    },
    hero: {
      eyebrow: "IA hors-ligne · Anti-gaspi",
      headline: "Ce qu'il reste dans le frigo devient votre prochain bon plat.",
      subheadline: "Scannez ce qu'il reste dans votre frigo avec la caméra, l'IA reconnaît vos ingrédients et propose une recette marocaine ou internationale adaptée — sans connexion internet, sans publicité, sans même taper un mot.",
      primaryCtaText: "Télécharger l'app",
      secondaryCtaText: "Voir les fonctionnalités",
      trustBadge: "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      bgImage: "/images/screen-recipe-detail.png",
    },
    stepsSection: {
      eyebrow: "Comment ça marche",
      title: "De vos restes de frigo à l'assiette, en trois étapes.",
      subtitle: "Pas besoin de réseau ni de clavier pour bien manger — le scan et le générateur IA fonctionnent même en mode avion.",
      steps: [
        {
          icon: "📷",
          title: "1. Scannez vos ingrédients",
          description: "Pointez la caméra vers votre frigo — l'app reconnaît vos ingrédients automatiquement, pas besoin de taper quoi que ce soit.",
        },
        {
          icon: "🤖",
          title: "2. L'IA propose une recette",
          description: "Le moteur hors-ligne trouve un plat marocain ou international adapté, sans connexion requise.",
        },
        {
          icon: "⭐",
          title: "3. Cuisinez et sauvegardez",
          description: "Suivez la méthode pas à pas, puis gardez vos coups de cœur en favoris pour la prochaine fois.",
        },
      ],
    },
    featuresSection: {
      features: [
        {
          eyebrow: "Trouvez votre prochaine idée",
          title: "Cuisinez facilement selon vos envies et vos ingrédients.",
          description: "Parcourez les recettes populaires par pays, filtrez selon vos envies, et gardez vos favorites à portée de main.",
          image: "/images/screen-explore.png",
          imageAlt: "Écran d'accueil et exploration des recettes",
          tags: ["RECHERCHE PAR PAYS", "FAVORIS"],
        },
        {
          eyebrow: "Cuisinez sans attendre",
          title: "Obtenez une idée de recette, même sans réseau.",
          description: "L'assistant recettes répond directement depuis votre téléphone — utile en cuisine, en voyage ou dans les zones peu connectées.",
          image: "/images/screen-chat-offline.png",
          imageAlt: "Assistant recettes hors-ligne",
          tags: ["ZÉRO WI-FI", "CHAT INTÉGRÉ"],
        },
        {
          eyebrow: "Réussissez votre plat",
          title: "Suivez chaque étape sans vous poser de questions.",
          description: "Chaque recette détaille la préparation pas à pas avec des quantités précises — pas d'approximation qui gâche le plat.",
          image: "/images/screen-recipe-detail.png",
          imageAlt: "Détail d'une recette avec méthode précise",
          tags: ["ÉTAPES DÉTAILLÉES", "MESURES PRÉCISES"],
        },
        {
          eyebrow: "Gardez l'envie de cuisiner",
          title: "Progressez en cuisine, un plat réussi à la fois.",
          description: "Gagnez des points, montez de niveau et débloquez des badges au fil de vos réussites en cuisine — de \"Chef Débutant\" à des défis plus ambitieux.",
          image: "/images/screen-gamification.png",
          imageAlt: "Système de gamification, niveaux et défis",
          tags: ["NIVEAUX", "DÉFIS", "BADGES"],
        },
        {
          eyebrow: "Cuisinez avec plaisir",
          title: "Trouvez une communauté qui partage vos envies.",
          description: "Cuisine végé, pâtisserie, batch cooking ou cuisine du monde : rejoignez un groupe qui vous correspond et échangez avec d'autres passionnés.",
          image: "/images/screen-community.png",
          imageAlt: "Communauté et groupes de cuisine",
          tags: ["GROUPES", "PARTAGE"],
        },
      ],
    },
    uspBanner: {
      eyebrow: "Zéro connexion requise",
      title: "Fonctionne même en mode avion, jusque dans votre cuisine.",
      description: "Le générateur IA, l'assistant et vos recettes favorites restent accessibles sans réseau — pensé pour un usage réel, pas seulement en ville bien connectée.",
    },
    pricingSection: {
      eyebrow: "Tarif",
      title: "Choisissez la durée qui vous convient.",
      cardEyebrow: "Recettes Cuisine",
      priceHint: "Cliquez sur une licence pour ouvrir directement le paiement correspondant.",
      guaranteeHint: "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      tiers: [
        { name: "Master Chef 1 mois", price: "29,99 €", variant: "1 Month License", featured: false },
        { name: "Master Chef 3 mois", price: "59,99 €", variant: "3 Months License", featured: false },
        { name: "Master Chef 6 mois", price: "119,99 €", variant: "6 Months License", featured: false },
        { name: "Master Chef 12 mois", price: "199,99 €", variant: "12 Months License", featured: true, badge: "Le plus choisi" },
        { name: "Master Chef À vie", price: "399,99 €", variant: "LIFETIME", featured: false },
      ],
      featuresIncluded: [
        "Générateur IA anti-gaspi hors-ligne",
        "Centaines de recettes marocaines & internationales",
        "Assistant recettes hors-ligne",
        "Favoris, défis et communauté",
      ],
    },
    testimonialsSection: {
      eyebrow: "Preuve sociale",
      title: "Une cuisine plus simple, au quotidien.",
      testimonials: [
        {
          photo: "/images/avatar-youssef.jpg",
          profile: "Youssef",
          profession: "Technicien réseau",
          problem: "Je ne savais jamais quoi cuisiner avec ce qu'il me restait.",
          benefit: "L'app me propose des idées simples sans me demander de tout planifier.",
        },
        {
          photo: "/images/avatar-noura.jpg",
          profile: "Noura",
          profession: "Entrepreneuse e-commerce",
          problem: "Je commandais souvent à manger après une longue journée.",
          benefit: "Je trouve maintenant rapidement une recette adaptée à mes ingrédients.",
        },
        {
          photo: "/images/avatar-lucas.jpg",
          profile: "Lucas",
          profession: "Architecte d'intérieur",
          problem: "Je pensais que l'IA ne comprendrait pas vraiment mes habitudes en cuisine.",
          benefit: "L'assistant me donne des suggestions concrètes, même quand je n'ai pas de réseau.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Prêt à cuisiner autrement ?",
      title: "Vos restes de frigo méritent mieux qu'une recherche Google.",
      subtitle: "Téléchargez Recettes Cuisine et générez votre première recette dès ce soir.",
      buttonText: "Télécharger Recettes Cuisine",
      languagesText: "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية",
    },
    thankYou: {
      title: "Félicitations pour votre commande !",
      subtitle: "Votre accès complet à Recettes Cuisine est maintenant prêt.",
      badgeText: "Commande confirmée · Accès immédiat",
      apkDownloadUrl: "https://github.com/AGH-Data-Agency-Holding/APK-RECETTES-GOOGLE/releases/latest/download/recettes-cuisine-release.apk",
      apkFilename: "recettes-cuisine-release.apk",
      apkVersion: "v1.0.4",
      apkSize: "61 Mo",
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.bilgassimel.recettes",
      supportEmail: "contact@datagenere.com",
      supportWhatsapp: "+212710911949",
      installationSteps: [
        {
          number: 1,
          title: "Téléchargez le fichier APK",
          description: "Cliquez sur le bouton ci-dessus pour télécharger le fichier APK directement sur votre smartphone Android.",
        },
        {
          number: 2,
          title: "Autorisez l'installation",
          description: "Ouvrez le fichier téléchargé. Si Android vous demande confirmation, activez « Autoriser cette source » dans les paramètres de votre navigateur ou gestionnaire de fichiers.",
        },
        {
          number: 3,
          title: "Activez votre licence",
          description: "Lancez l'application. Lors de la première ouverture, entrez la clé de licence reçue par email de la part de Gumroad.",
        },
      ],
      faq: [
        {
          question: "Où puis-je trouver ma clé de licence ?",
          answer: "Votre clé de licence vous a été envoyée automatiquement par email par Gumroad immédiatement après le paiement. Vous pouvez également la retrouver dans votre compte Gumroad sous 'Library / Mes achats'.",
        },
        {
          question: "L'application a-t-elle besoin d'une connexion Internet ?",
          answer: "Non ! Une fois installée et activée, l'IA et l'ensemble des recettes fonctionnent à 100% hors-ligne, sans Wi-Fi ni données mobiles.",
        },
        {
          question: "Puis-je installer l'app sur plusieurs appareils ?",
          answer: "Votre licence individuelle vous permet d'activer l'application sur vos appareils personnels (téléphone et tablette).",
        },
      ],
    },
  },

  // =========================================================================
  // 2. DROPSHIPPING / WINNING ITEMS
  // =========================================================================
  "dropshipping": {
    slug: "dropshipping",
    aliases: ["winning-items", "dropshipping-finder"],
    name: "Winning Items",
    shortTagline: "Trouve tes produits gagnants, même hors-ligne",
    metaTitle: "Winning Items — Trouve tes produits gagnants, même hors-ligne",
    metaDescription: "IA hors-ligne d'analyse de tendances pour le dropshipping. Trouve des produits rentables, des niches inexploitées et des fiches produit détaillées, sans connexion internet.",
    paymentUrl: "https://aghhol.gumroad.com/l/dropshopping-winning-product-ai",
    theme: {
      cream: "#FBF3EA",
      peach: "#F3DFC8",
      ink: "#201408",
      charcoal: "#241608",
      primary: "#F2740A",
      primaryDark: "#C25807",
      line: "#F0DCC0",
      sage: "#1F9D55",
    },
    hero: {
      eyebrow: "IA hors-ligne · E-commerce & Dropshipping",
      headline: "Trouve tes produits gagnants, même sans connexion internet.",
      subheadline: "Winning Items analyse les tendances du e-commerce et repère les articles à fort potentiel avec une IA locale. Fiches détaillées, marges estimées, angles marketing et concurrence — 100% fonctionnel hors-ligne.",
      primaryCtaText: "Dénicher mes produits gagnants",
      secondaryCtaText: "Voir les fonctionnalités",
      trustBadge: "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      bgImage: "/images/dropshipping/screen-home.png",
    },
    stepsSection: {
      eyebrow: "Comment ça marche",
      title: "De la recherche au lancement, en trois étapes simples.",
      subtitle: "Pas besoin de passer des heures à chercher : le moteur d'analyse hors-ligne filtre et qualifie chaque opportunité.",
      steps: [
        {
          icon: "🔍",
          title: "1. Explorez les tendances",
          description: "Parcourez des centaines de produits analysés et classés par indice de rentabilité et dynamique de marché.",
        },
        {
          icon: "📊",
          title: "2. Évaluez le potentiel",
          description: "Accédez aux fiches complètes : prix d'achat conseillé, prix de vente optimal, marges nettes et angles publicitaires.",
        },
        {
          icon: "🚀",
          title: "3. Lancez vos campagnes",
          description: "Exportez les données et les suggestions créatives pour lancer votre boutique sans perte de temps.",
        },
      ],
    },
    featuresSection: {
      features: [
        {
          eyebrow: "Découverte rapide",
          title: "Repérez les produits émergents avant la concurrence.",
          description: "Un catalogue enrichi régulièrement avec calcul automatique de l'indice de viralité et du niveau de saturation.",
          image: "/images/dropshipping/screen-search.png",
          imageAlt: "Recherche de produits gagnants",
          tags: ["SCORE DE VIRALITÉ", "POTENTIEL DE MARGE"],
        },
        {
          eyebrow: "Analyse concurrentielle",
          title: "Comprenez pourquoi un produit se vend.",
          description: "Chaque fiche décortique le problème résolu, l'audience cible idéale, ainsi que les points forts et faibles du produit.",
          image: "/images/dropshipping/screen-benchmark.png",
          imageAlt: "Benchmark et analyse concurrentielle",
          tags: ["CIBLAGE AUDIENCE", "ANGLES MARKETING"],
        },
        {
          eyebrow: "Dashboard de suivi",
          title: "Gardez le contrôle sur votre sélection de test.",
          description: "Organisez vos favoris par niche, suivez l'évolution des estimations et préparez vos imports en un seul endroit.",
          image: "/images/dropshipping/screen-dashboard.png",
          imageAlt: "Tableau de bord de suivi dropshipping",
          tags: ["LISTES PERSONNALISÉES", "EXPORT RAPIDE"],
        },
        {
          eyebrow: "Mode 100% autonome",
          title: "Travaillez vos catalogues n'importe où.",
          description: "En voyage, dans l'avion ou sans connexion : la base et le moteur d'analyse IA sont intégrés directement dans votre téléphone.",
          image: "/images/dropshipping/screen-profile.png",
          imageAlt: "Fonctionnement hors-ligne dropshipping",
          tags: ["ZÉRO WI-FI", "CONFIDENTIALITÉ TOTALE"],
        },
      ],
    },
    uspBanner: {
      eyebrow: "Zéro connexion requise",
      title: "Votre base de données e-commerce, toujours dans votre poche.",
      description: "Toutes les analyses, fiches produits et calculateurs restent accessibles hors-ligne sans consommer votre forfait ni dépendre d'une connexion.",
    },
    pricingSection: {
      eyebrow: "Tarif",
      title: "Choisissez votre formule d'accès.",
      cardEyebrow: "Winning Items Pro",
      priceHint: "Sélectionnez votre licence pour démarrer immédiatement vos recherches.",
      guaranteeHint: "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      tiers: [
        { name: "ECommerce Pro 1 mois", price: "39,99 €", variant: "1 Month License", featured: false },
        { name: "ECommerce Pro 3 mois", price: "99,99 €", variant: "3 Months License", featured: false },
        { name: "ECommerce Pro 6 mois", price: "179,99 €", variant: "6 Months License", featured: false },
        { name: "ECommerce Pro 12 mois", price: "299,99 €", variant: "12 Months License", featured: true, badge: "Le plus choisi" },
        { name: "ECommerce Pro À vie", price: "699,99 €", variant: "LIFETIME", featured: false },
      ],
      featuresIncluded: [
        "Moteur d'analyse de produits gagnants hors-ligne",
        "Calculateur de marge & indices de rentabilité",
        "Angles publicitaires et suggestions créatives",
        "Mises à jour des catalogues & support technique prioritaire",
      ],
    },
    testimonialsSection: {
      eyebrow: "Preuve sociale",
      title: "Ils trouvent leurs produits gagnants plus vite.",
      testimonials: [
        {
          initials: "LE",
          profile: "Lina",
          profession: "Créatrice de contenu e-com",
          problem: "Je passais des nuits entières à scroller TikTok sans certitude sur la viabilité d'un produit.",
          benefit: "L'application me donne des critères de sélection précis et me fait gagner un temps précieux.",
        },
        {
          initials: "ME",
          profile: "Mehdi",
          profession: "Vendeur indépendant",
          problem: "Je lançais des campagnes au hasard sans connaître les marges réelles ni la concurrence.",
          benefit: "Les fiches complètes m'aident à structurer mes offres avec de bien meilleurs taux de conversion.",
        },
        {
          initials: "CL",
          profile: "Clara",
          profession: "Consultante média buying",
          problem: "Je cherchais un outil fiable pour trouver des angles marketing percutants sans connexion permanente.",
          benefit: "Winning Items regroupe exactement ce qu'il faut pour tester vite et valider les bonnes niches.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Passez à la vitesse supérieure",
      title: "Ne cherchez plus vos produits au hasard.",
      subtitle: "Téléchargez Winning Items dès aujourd'hui et lancez vos prochains tests gagnants.",
      buttonText: "Télécharger Winning Items",
      languagesText: "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية",
    },
    thankYou: {
      title: "Félicitations pour votre accès à Winning Items !",
      subtitle: "Votre compte et vos outils de détection de produits sont prêts.",
      badgeText: "Licence Pro validée · Accès immédiat",
      apkDownloadUrl: "https://github.com/AGH-Data-Agency-Holding/APK-DROPSHIPPING-FINDER/releases/latest/download/dropshipping-finder-release.apk",
      apkFilename: "winning-items-pro-release.apk",
      apkVersion: "v1.1.0",
      apkSize: "48 Mo",
      supportEmail: "contact@datagenere.com",
      supportWhatsapp: "+212710911949",
      installationSteps: [
        {
          number: 1,
          title: "Téléchargez le fichier APK",
          description: "Cliquez sur le bouton ci-dessous pour télécharger l'application sur votre appareil Android.",
        },
        {
          number: 2,
          title: "Autorisez l'installation",
          description: "Ouvrez le fichier téléchargé et validez « Autoriser cette source » si demandé par Android.",
        },
        {
          number: 3,
          title: "Entrez votre clé de licence",
          description: "Collez la clé de licence reçue de Gumroad lors de la première ouverture de l'application.",
        },
      ],
      faq: [
        {
          question: "Les produits suggérés sont-ils actualisés ?",
          answer: "Oui, la base est régulièrement enrichie et synchronisée avec les tendances de marché.",
        },
        {
          question: "Comment puis-je exporter les fiches ?",
          answer: "Vous pouvez exporter les fiches et textes d'accroches directement depuis chaque vue produit de l'application.",
        },
      ],
    },
  },

  // =========================================================================
  // 3. APK REGIME / AI DIET COACH
  // =========================================================================
  "apk-regime": {
    slug: "apk-regime",
    aliases: ["diet-coach", "regimes"],
    name: "AI Diet Coach",
    shortTagline: "Ton coach minceur IA, même sans internet",
    metaTitle: "AI Diet Coach — Ton coach minceur IA, même sans internet",
    metaDescription: "Plans minceur 7/14/30 jours, coach IA hors-ligne, scanner de repas et suivi complet. Fonctionne sans connexion internet.",
    paymentUrl: "https://aghhol.gumroad.com/l/DIET-COACH-ai-fitness",
    theme: {
      cream: "#FBEAD9",
      peach: "#F4CBA0",
      ink: "#24160B",
      charcoal: "#0E1A3A",
      primary: "#E85A2B",
      primaryDark: "#C5441A",
      line: "#E3C7A6",
      sage: "#3FA66D",
    },
    hero: {
      eyebrow: "Coach Minceur & Nutrition IA · 100% Hors-Ligne",
      headline: "Atteins ton poids idéal, sans régime frustrant ni internet.",
      subheadline: "AI Diet Coach t'accompagne au quotidien avec des plans repas sur-mesure, un scanner de plats intelligent et un coach conversationnel privé qui fonctionne même en mode avion.",
      primaryCtaText: "Démarrer mon coaching minceur",
      secondaryCtaText: "Voir les fonctionnalités",
      trustBadge: "Satisfait ou remboursé sous 30 jours · Essayez gratuitement pendant 7 jours",
      bgImage: "/images/regime/screen-home.png",
    },
    stepsSection: {
      eyebrow: "Comment ça marche",
      title: "Ton accompagnement personnalisé en 3 étapes.",
      subtitle: "Un rééquilibrage alimentaire durable adapté à ton rythme et à tes préférences, sans calcul fastidieux.",
      steps: [
        {
          icon: "🥗",
          title: "1. Scanne ou note ton repas",
          description: "Prends une photo de ton assiette ou saisis ce que tu manges pour une estimation immédiate des calories et nutriments.",
        },
        {
          icon: "💬",
          title: "2. Échange avec ton coach IA",
          description: "Pose tes questions sur les collations, les fringales ou les alternatives légères sans avoir besoin de Wi-Fi.",
        },
        {
          icon: "📈",
          title: "3. Mesure tes progrès",
          description: "Suis l'évolution de ton poids et de tes mensurations grâce à un tableau de bord visuel et motivant.",
        },
      ],
    },
    featuresSection: {
      features: [
        {
          eyebrow: "Nutrition personnalisée",
          title: "Des programmes sur-mesure selon tes objectifs.",
          description: "Que tu souhaites perdre 3 kg ou transformer tes habitudes sur 30 jours, l'application s'adapte à ton profil.",
          image: "/images/regime/screen-analysis.png",
          imageAlt: "Analyse nutritionnelle et plan minceur",
          tags: ["OBJECTIFS PERSONNALISÉS", "SUIVI CALORIQUE"],
        },
        {
          eyebrow: "Coach IA disponible 24/7",
          title: "Des réponses bienveillantes à chaque instant.",
          description: "Un conseil pour le dîner ? Une fringale dans l'après-midi ? Ton assistant répond instantanément sans connexion.",
          image: "/images/regime/screen-coach.png",
          imageAlt: "Conversation avec le coach IA",
          tags: ["HORS-LIGNE", "CONSEILS ADAPTÉS"],
        },
        {
          eyebrow: "Gestion des encas et repas",
          title: "Fini la frustration des régimes stricts.",
          description: "Apprends à équilibrer tes plaisirs avec des alternatives saines proposées automatiquement selon tes envies.",
          image: "/images/regime/screen-snack.png",
          imageAlt: "Idées de collations et équilibrage",
          tags: ["ANTI-FRUSTRATION", "IDÉES SNACKS"],
        },
        {
          eyebrow: "Motivation & Communauté",
          title: "Reste engagé sur la durée.",
          description: "Rejoins des défis bien-être et garde le cap grâce aux rappels et bilans hebdomadaires encourageants.",
          image: "/images/regime/screen-community.png",
          imageAlt: "Défis et communauté minceur",
          tags: ["DÉFIS BIEN-ÊTRE", "SUIVI HEBDOMADAIRE"],
        },
      ],
    },
    uspBanner: {
      eyebrow: "Zéro connexion requise",
      title: "Ton carnet nutrition et ton coach restent dans ta poche.",
      description: "Toutes les fonctionnalités, du scanner d'aliments aux conseils de ton coach, fonctionnent sans aucun réseau.",
    },
    pricingSection: {
      eyebrow: "Tarif",
      title: "Choisis ta formule pour transformer ta routine.",
      cardEyebrow: "AI Diet Coach Pro",
      priceHint: "Sélectionne la durée qui correspond le mieux à ton objectif.",
      guaranteeHint: "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      tiers: [
        { name: "Champion 1 mois", price: "29,99 €", variant: "1 Month License", featured: false },
        { name: "Champion 3 mois", price: "59,99 €", variant: "3 Months License", featured: false },
        { name: "Champion 6 mois", price: "119,99 €", variant: "6 Months License", featured: false },
        { name: "Champion 12 mois", price: "199,99 €", variant: "12 Months License", featured: true, badge: "Le plus choisi" },
        { name: "Champion À vie", price: "399,99 €", variant: "LIFETIME", featured: false },
      ],
      featuresIncluded: [
        "Coach IA minceur disponible 24h/24 hors-ligne",
        "Scanner d'assiette & calcul nutritionnel instantané",
        "Programmes personnalisés 7, 14 et 30 jours",
        "Tableau de bord des mensurations et de perte de poids",
      ],
    },
    testimonialsSection: {
      eyebrow: "Preuve sociale",
      title: "Leurs résultats parlent d'eux-mêmes.",
      testimonials: [
        {
          initials: "AM",
          profile: "Amina",
          profession: "Assistante administrative",
          problem: "Je me décourageais après quelques jours de diète trop stricte.",
          benefit: "L'application m'a appris à manger équilibré sans me priver, et j'ai perdu 4 kg en un mois sans stress.",
        },
        {
          initials: "KA",
          profile: "Karim",
          profession: "Cadre commercial",
          problem: "Mes déjeuners sur le pouce étaient toujours trop riches et déséquilibrés.",
          benefit: "Le suivi rapide me permet de faire de meilleurs choix même lors de mes déplacements.",
        },
        {
          initials: "SO",
          profile: "Sophie",
          profession: "Enseignante",
          problem: "Je voulais un coach rassurant qui ne me bombarde pas d'interdictions culpabilisantes.",
          benefit: "Les encouragements quotidiens et les alternatives de collations ont tout changé.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Prenez soin de vous",
      title: "Commencez votre nouvelle routine dès aujourd'hui.",
      subtitle: "Rejoignez ceux qui ont retrouvé leur poids de forme durablement avec AI Diet Coach.",
      buttonText: "Télécharger AI Diet Coach",
      languagesText: "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية",
    },
    thankYou: {
      title: "Bienvenue dans AI Diet Coach !",
      subtitle: "Votre programme minceur et votre accès au coach IA sont activés.",
      badgeText: "Accès activé · Prêt à l'installation",
      apkDownloadUrl: "https://github.com/AGH-Data-Agency-Holding/APK-REGIMES-GOOGLE/releases/latest/download/diet-coach-release.apk",
      apkFilename: "ai-diet-coach-release.apk",
      apkVersion: "v1.0.8",
      apkSize: "55 Mo",
      supportEmail: "contact@datagenere.com",
      supportWhatsapp: "+212710911949",
      installationSteps: [
        {
          number: 1,
          title: "Téléchargez l'APK",
          description: "Téléchargez le fichier APK sur votre smartphone Android.",
        },
        {
          number: 2,
          title: "Installez l'application",
          description: "Ouvrez le fichier et validez les autorisations de source inconnue si demandé.",
        },
        {
          number: 3,
          title: "Renseignez votre profil",
          description: "Collez votre clé de licence reçue de Gumroad et personnalisez votre objectif de départ.",
        },
      ],
      faq: [
        {
          question: "Mes données de santé restent-elles privées ?",
          answer: "Oui, vos données nutritionnelles restent stockées localement sur votre téléphone et ne sont jamais revendues.",
        },
        {
          question: "L'application gère-t-elle les régimes végétariens ou sans gluten ?",
          answer: "Tout à fait, vous pouvez renseigner vos restrictions alimentaires lors du paramétrage de l'app.",
        },
      ],
    },
  },

  // =========================================================================
  // 4. AI DOCTOR / MEDICAL AI
  // =========================================================================
  "ai-doctor": {
    slug: "ai-doctor",
    aliases: ["doctor-healthcare", "medical-ai"],
    name: "MEDICAL AI",
    shortTagline: "Votre assistant santé IA, disponible 24h/24",
    metaTitle: "MEDICAL AI — Votre assistant santé IA, disponible 24h/24",
    metaDescription: "MEDICAL AI : assistant santé IA 24h/24 pour bilan préliminaire, suivi de vos symptômes et historique médical. Fonctionne à 97% hors-ligne.",
    paymentUrl: "https://aghhol.gumroad.com/l/doctor-healthcare",
    theme: {
      cream: "#F5F7FA",
      peach: "#E2E8F0",
      ink: "#0F172A",
      charcoal: "#1E293B",
      primary: "#0284C7",
      primaryDark: "#0369A1",
      line: "#CBD5E1",
      sage: "#10B981",
    },
    hero: {
      eyebrow: "Assistant Santé & Orientation Médicale IA",
      headline: "Comprenez vos symptômes, plus sereinement.",
      subheadline: "MEDICAL AI fait le pont entre l'incertitude d'une recherche sur internet et la visite chez le médecin. Analysez vos symptômes, suivez votre carnet de santé numérique et préparez vos consultations, avec une IA disponible 24h/24.",
      primaryCtaText: "Démarrer mon bilan santé",
      secondaryCtaText: "Voir les fonctionnalités",
      trustBadge: "Conforme RGPD & HIPAA · Données 100% privées · Satisfait ou remboursé sous 30 jours",
      bgImage: "/images/doctor/phone_home.png",
    },
    stepsSection: {
      eyebrow: "Comment ça marche",
      title: "Une évaluation claire et structurée en 3 étapes.",
      subtitle: "Pour une orientation rapide et une meilleure préparation avant votre rendez-vous chez le praticien.",
      steps: [
        {
          icon: "🩺",
          title: "1. Décrivez vos symptômes",
          description: "Exprimez votre ressenti avec vos propres mots ou sélectionnez la zone concernée sur le schéma corporel.",
        },
        {
          icon: "📋",
          title: "2. Recevez une première orientation",
          description: "L'IA analyse le niveau de gravité potentiel et vous indique les démarches recommandées.",
        },
        {
          icon: "📂",
          title: "3. Préparez votre consultation",
          description: "Générez une fiche récapitulative claire à présenter directement à votre médecin traitant.",
        },
      ],
    },
    featuresSection: {
      features: [
        {
          eyebrow: "Analyseur de symptômes",
          title: "Précisez votre douleur facilement.",
          description: "Interface intuitive permettant d'indiquer l'intensité, la durée et la localisation précise de chaque gêne ressentie.",
          image: "/images/doctor/phone_start_diagnosis.png",
          imageAlt: "Démarrage d'un bilan de santé",
          tags: ["QUESTIONNAIRE GUIDÉ", "REPÉRAGE CORPOREL"],
        },
        {
          eyebrow: "Carnet de santé chiffré",
          title: "Tout votre historique médical à portée de main.",
          description: "Conservez la trace de vos bilans passés, de vos traitements et de vos rendez-vous dans un espace privé et sécurisé.",
          image: "/images/doctor/phone_medical_history.png",
          imageAlt: "Historique et carnet de santé",
          tags: ["DONNÉES LOCALES", "HISTORIQUE CLASSE"],
        },
        {
          eyebrow: "Fiche de consultation",
          title: "Arrivez préparé chez votre médecin.",
          description: "Exportez une synthèse chronologique pour faciliter l'anamnèse lors de votre examen médical en cabinet.",
          image: "/images/doctor/phone_medical_profile.png",
          imageAlt: "Fiche médicale à partager",
          tags: ["SYNTHÈSE MÉDECIN", "EXPORT RAPIDE"],
        },
        {
          eyebrow: "Sécurité & Confidentialité",
          title: "Vos informations de santé ne regardent que vous.",
          description: "Conformité stricte aux standards RGPD et HIPAA. Le traitement de vos symptômes s'effectue localement sur l'appareil.",
          image: "/images/doctor/phone_onboard_privacy.png",
          imageAlt: "Confidentialité et sécurité médicale",
          tags: ["CHIFFREMENT LOCAL", "SANS TRACKING"],
        },
      ],
    },
    uspBanner: {
      eyebrow: "97% Hors-ligne · Confidentialité Totale",
      title: "Une assistance médicale disponible même en zone blanche.",
      description: "Les arbres de décision et le modèle d'orientation sont embarqués sur votre smartphone, garantissant un fonctionnement constant et une confidentialité absolue.",
    },
    pricingSection: {
      eyebrow: "Tarif",
      title: "Choisissez votre formule d'assistance santé.",
      cardEyebrow: "MEDICAL AI Pro",
      priceHint: "Bénéficiez d'un suivi permanent pour vous et vos proches.",
      guaranteeHint: "Essayez gratuitement pendant 7 jours · Satisfait ou remboursé sous 30 jours",
      tiers: [
        { name: "Vitalis 1 mois", price: "29,99 €", variant: "1 Month License", featured: false },
        { name: "Vitalis 3 mois", price: "59,99 €", variant: "3 Months License", featured: false },
        { name: "Vitalis 6 mois", price: "119,99 €", variant: "6 Months License", featured: false },
        { name: "Vitalis 12 mois", price: "199,99 €", variant: "12 Months License", featured: true, badge: "Le plus choisi" },
        { name: "Vitalis À vie", price: "399,99 €", variant: "LIFETIME", featured: false },
      ],
      featuresIncluded: [
        "Évaluateur de symptômes IA disponible 24h/24",
        "Carnet de santé et historique chiffré",
        "Générateur de fiches de synthèse pour les consultations",
        "Conforme aux standards RGPD et HIPAA",
      ],
    },
    testimonialsSection: {
      eyebrow: "Preuve sociale",
      title: "Des consultations mieux préparées et plus sereines.",
      testimonials: [
        {
          initials: "LE",
          profile: "Léa",
          profession: "Assistante juridique",
          problem: "Je paniquais souvent après avoir lu des diagnostics anxiogènes sur les forums internet.",
          benefit: "MEDICAL AI me donne une grille d'évaluation posée et objective qui m'aide à relativiser et à agir calmement.",
        },
        {
          initials: "OM",
          profile: "Omar",
          profession: "Technicien audiovisuel",
          problem: "J'oubliais la moitié des détails importants une fois assis en face de mon médecin.",
          benefit: "La fiche récapitulative m'a permis de présenter clairement l'apparition et l'évolution de mes symptômes.",
        },
        {
          initials: "CA",
          profile: "Camille",
          profession: "Formatrice indépendante",
          problem: "Je voyage fréquemment dans des régions mal desservies par les réseaux cellulaires.",
          benefit: "Savoir que mon assistant santé fonctionne même sans Wi-Fi est un vrai gage de tranquillité d'esprit.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Votre santé d'abord",
      title: "Prenez le contrôle de votre suivi santé dès maintenant.",
      subtitle: "Téléchargez MEDICAL AI et disposez d'un compagnon médical rassurant, jour et nuit.",
      buttonText: "Télécharger MEDICAL AI",
      languagesText: "DISPONIBLE EN FRANÇAIS · ENGLISH · العربية · ESPAÑOL",
    },
    thankYou: {
      title: "Félicitations pour votre accès à MEDICAL AI !",
      subtitle: "Votre assistant santé personnel est prêt à être configuré.",
      badgeText: "Accès médical activé · Conforme RGPD/HIPAA",
      apkDownloadUrl: "https://github.com/AGH-Data-Agency-Holding/APK-MEDICAL-AI/releases/latest/download/medical-ai-release.apk",
      apkFilename: "medical-ai-pro-release.apk",
      apkVersion: "v1.2.0",
      apkSize: "58 Mo",
      supportEmail: "contact@datagenere.com",
      supportWhatsapp: "+212710911949",
      installationSteps: [
        {
          number: 1,
          title: "Téléchargez l'application",
          description: "Téléchargez l'APK officiel de MEDICAL AI sur votre téléphone.",
        },
        {
          number: 2,
          title: "Installez l'APK",
          description: "Autorisez l'installation depuis cette source dans les paramètres de votre terminal.",
        },
        {
          number: 3,
          title: "Saisissez votre clé",
          description: "Activez votre licence avec la clé reçue de Gumroad pour démarrer votre premier bilan.",
        },
      ],
      faq: [
        {
          question: "L'application remplace-t-elle un médecin ?",
          answer: "Non, MEDICAL AI est un outil d'orientation et de préparation qui ne se substitue pas à un avis médical professionnel.",
        },
        {
          question: "Mes données personnelles sont-elles transmises à des tiers ?",
          answer: "Non, aucune donnée de santé n'est partagée ni vendue. Toutes les informations restent sur votre smartphone.",
        },
      ],
    },
  },
};

export const defaultProduct = products["recettes-cuisine"];
