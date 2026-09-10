export interface ChannelConfig {
  directPaymentUrl: string;
  jvzoo?: {
    primaryId: number;
    paymentUrl: string;
    tiers?: Record<string, number>;
  };
  clickbank?: {
    vendorId: string;
    itemNumber: number;
    paymentUrl: string;
    bonusTitle: string;
    bonusDescription: string;
  };
  hotmart?: {
    productCode: string;
    paymentUrl: string;
  };
}

export const APP_CHANNELS: Record<string, ChannelConfig> = {
  "dropshipping": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/dropshopping-winning-product-ai",
    jvzoo: {
      primaryId: 448749,
      paymentUrl: "https://www.jvzoo.com/b/0/448749/1",
      tiers: { "1": 448745, "3": 448747, "6": 448749, "12": 448751, "lifetime": 448753 }
    }
  },
  "natural-beauty": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/skin-natural-beauty-ai",
    jvzoo: {
      primaryId: 448719,
      paymentUrl: "https://www.jvzoo.com/b/0/448719/1",
      tiers: { "1": 448643, "3": 448717, "6": 448719, "12": 448721, "lifetime": 448723 }
    },
    clickbank: {
      vendorId: "aghdigital",
      itemNumber: 2,
      paymentUrl: "https://aghdigital.pay.clickbank.net/?cbitem=2",
      bonusTitle: "Guide PDF Exclusif : Les 50 Recettes Beauté Bio & Rituels Détox Maison",
      bonusDescription: "Le livre numérique complet d'accompagnement de vos routines et soins naturels du visage."
    }
  },
  "recettes-cuisine": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/cooking-chief-kitchen-ai",
    jvzoo: {
      primaryId: 448711,
      paymentUrl: "https://www.jvzoo.com/b/0/448711/1",
      tiers: { "1": 448705, "3": 448709, "6": 448711, "12": 448713, "lifetime": 448715 }
    }
  },
  "apk-regime": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/DIET-COACH-ai-fitness",
    jvzoo: {
      primaryId: 448769,
      paymentUrl: "https://www.jvzoo.com/b/0/448769/1",
      tiers: { "1": 448765, "3": 448767, "6": 448769, "12": 448771, "lifetime": 448773 }
    },
    clickbank: {
      vendorId: "aghdigital",
      itemNumber: 4,
      paymentUrl: "https://aghdigital.pay.clickbank.net/?cbitem=4",
      bonusTitle: "Guide PDF Exclusif : Recettes Minceur & Menus Brûle-Graisses Rééquilibrage",
      bonusDescription: "30 jours de menus diététiques personnalisés pour optimiser votre perte de poids."
    }
  },
  "ai-doctor": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/doctor-healthcare",
    jvzoo: {
      primaryId: 448993,
      paymentUrl: "https://www.jvzoo.com/b/0/448993/1",
      tiers: { "1": 448989, "3": 448991, "6": 448993, "12": 448995, "lifetime": 448997 }
    }
  },
  "examen-assistant": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/zclcjl",
    jvzoo: {
      primaryId: 448731,
      paymentUrl: "https://www.jvzoo.com/b/0/448731/1",
      tiers: { "1": 448645, "3": 448747, "6": 448731, "lifetime": 448741 }
    }
  },
  "fitness-coach": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/fitness-coach-smart-ai",
    jvzoo: {
      primaryId: 448759,
      paymentUrl: "https://www.jvzoo.com/b/0/448759/1",
      tiers: { "1": 448755, "3": 448757, "6": 448759, "12": 448761, "lifetime": 448763 }
    },
    clickbank: {
      vendorId: "aghdigital",
      itemNumber: 3,
      paymentUrl: "https://aghdigital.pay.clickbank.net/?cbitem=3",
      bonusTitle: "Guide PDF Exclusif : Programmes HIIT & Musculation Maison Sans Matériel",
      bonusDescription: "Plans d'entraînement progressifs de 12 semaines illustrés étape par étape."
    }
  },
  "mental-health": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/mental-heath-ai",
    jvzoo: {
      primaryId: 448877,
      paymentUrl: "https://www.jvzoo.com/b/0/448877/1",
      tiers: { "1": 448873, "3": 448875, "6": 448877, "12": 448879, "lifetime": 448881 }
    }
  },
  "nutrition-kids": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/Baby-child-health",
    jvzoo: {
      primaryId: 449003,
      paymentUrl: "https://www.jvzoo.com/b/0/449003/1",
      tiers: { "1": 448999, "3": 449001, "6": 449003, "12": 449005, "lifetime": 449007 }
    },
    hotmart: {
      productCode: "HOT-BABY-FOOD",
      paymentUrl: "https://pay.hotmart.com/BABYFOOD_OFFLINE"
    }
  },
  "histoires-prophetes": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/Stories-of-Prophets-ai",
    jvzoo: {
      primaryId: 448845,
      paymentUrl: "https://www.jvzoo.com/b/0/448845/1",
      tiers: { "1": 448841, "3": 448843, "6": 448845, "12": 448847, "lifetime": 448849 }
    },
    hotmart: {
      productCode: "HOT-PROPHETS",
      paymentUrl: "https://pay.hotmart.com/PROPHETS_STORIES_OFFLINE"
    }
  },
  "salat-hajj": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/salat-hajj-ai",
    jvzoo: {
      primaryId: 448973,
      paymentUrl: "https://www.jvzoo.com/b/0/448973/1",
      tiers: { "1": 448969, "3": 448971, "6": 448973, "12": 448975, "lifetime": 448977 }
    },
    hotmart: {
      productCode: "HOT-SALAT",
      paymentUrl: "https://pay.hotmart.com/SALAT_HAJJ_OFFLINE"
    }
  },
  "vape-stopper": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/bjwrxx",
    jvzoo: {
      primaryId: 448855,
      paymentUrl: "https://www.jvzoo.com/b/0/448855/1",
      tiers: { "1": 448851, "3": 448853, "6": 448855, "12": 448857, "lifetime": 448859 }
    },
    clickbank: {
      vendorId: "aghdigital",
      itemNumber: 1,
      paymentUrl: "https://aghdigital.pay.clickbank.net/?cbitem=1",
      bonusTitle: "Guide PDF Exclusif : Protocole de Sevrage & Respiration SOS en 21 Jours",
      bonusDescription: "La méthode complète d'accompagnement cognitif pour surmonter les envies de nicotine."
    }
  },
  "ramadan-halal": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/ramadan-halal-pray-ai",
    jvzoo: {
      primaryId: 448833,
      paymentUrl: "https://www.jvzoo.com/b/0/448833/1",
      tiers: { "1": 448829, "3": 448831, "6": 448833, "12": 448837, "lifetime": 448839 }
    }
  },
  "coiffure-ai": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/haircut-hairstyle-ai",
    jvzoo: {
      primaryId: 448983,
      paymentUrl: "https://www.jvzoo.com/b/0/448983/1",
      tiers: { "1": 448979, "3": 448981, "6": 448983, "12": 448985, "lifetime": 448987 }
    }
  },
  "esthetique": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/makeup-skincare-ai",
    jvzoo: {
      primaryId: 448887,
      paymentUrl: "https://www.jvzoo.com/b/0/448887/1",
      tiers: { "1": 448883, "3": 448885, "6": 448887, "12": 448889, "lifetime": 448891 }
    }
  },
  "ruqya-charia": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/rokia-charia-ai",
    jvzoo: {
      primaryId: 449013,
      paymentUrl: "https://www.jvzoo.com/b/0/449013/1",
      tiers: { "1": 449009, "3": 449011, "6": 449013, "12": 449015, "lifetime": 449017 }
    }
  },
  "smart-deco": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/betob",
    jvzoo: {
      primaryId: 449023,
      paymentUrl: "https://www.jvzoo.com/b/0/449023/1",
      tiers: { "1": 449019, "3": 449021, "6": 449023, "12": 449025, "lifetime": 449027 }
    }
  },
  "my-quran": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/coran-ai-hifz",
    jvzoo: {
      primaryId: 449233,
      paymentUrl: "https://www.jvzoo.com/b/0/449233/1",
      tiers: { "1": 449233 }
    },
    hotmart: {
      productCode: "HOT-QURAN",
      paymentUrl: "https://pay.hotmart.com/QURAN_MAJEED_OFFLINE"
    }
  },
  "dresser-ai": {
    directPaymentUrl: "https://aghhol.gumroad.com/l/Styliste-Dresser-ai",
    jvzoo: {
      primaryId: 448865,
      paymentUrl: "https://www.jvzoo.com/b/0/448865/1",
      tiers: { "1": 448861, "3": 448863, "6": 448865, "12": 448867, "lifetime": 448869 }
    }
  }
};
