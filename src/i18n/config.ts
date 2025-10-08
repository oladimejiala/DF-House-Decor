import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        gallery: "Galerie",
        about: "À Propos"
      },
      hero: {
        title: "Meubles Modernes Sur Mesure",
        subtitle: "De Haute Qualité & Élégants",
        description: "Fabrication de meubles modernes sur mesure de qualité supérieure avec garantie. Ameublement, rénovation et décoration intérieure pour espaces résidentiels et commerciaux.",
        exploreGallery: "Découvrir Nos Créations",
        contactUs: "Nous Contacter"
      },
      featured: {
        title: "Collections en Vedette",
        description: "Découvrez notre sélection triée de meubles haut de gamme conçus pour rehausser votre espace",
        viewAll: "Voir Tous les Produits"
      },
      about: {
        whyChoose: "Pourquoi Choisir DF HOUSE ?",
        description: "Spécialisés dans la fabrication de meubles modernes sur mesure de haute qualité, chic et élégants avec garantie. Situés à Calavi, nous transformons vos espaces avec excellence et professionnalisme.",
        learnMore: "En Savoir Plus Sur Nous",
        title: "Notre Expertise",
        mission: "Notre Mission",
        values: "Nos Valeurs",
        story1: "DF HOUSE AMEUBLEMENT ET DÉCOR est spécialisée dans la fabrication de meubles modernes sur mesure de haute qualité, chic et élégants avec garantie. Nous créons des espaces uniques qui reflètent votre personnalité et votre style de vie.",
        story2: "Notre usine située à Calavi produit une large gamme de meubles : lits capitonnés, lits modernes, tables basses, canapés bourrés, divans, meubles télé modernes, coin TV, panneaux TV muraux, guéridons, dressings, armoires, tables à manger, meubles de cuisine sur mesure, cuisines à l'américaine, tables de bureaux, coiffeuses, étagères de rangement et bien plus.",
        story3: "Nous équipons également vos espaces commerciaux et professionnels : boutiques, caves à vin, prêt-à-porter, salons de coiffure, bars, restaurants, hôtels, appartements. Ameublement, rénovation des appartements et décoration intérieure avec garantie de qualité supérieure.",
        valuesTitle: "Nos Valeurs",
        valuesDesc: "Les principes qui guident tout ce que nous faisons",
        qualityTitle: "Qualité Supérieure Garantie",
        qualityDesc: "Fabrication de meubles modernes de haute qualité avec garantie. Chaque pièce est conçue pour durer et sublimer votre espace.",
        customerTitle: "Sur Mesure",
        customerDesc: "Nous créons des meubles personnalisés selon vos besoins et dimensions. Chaque projet est unique et adapté à votre espace.",
        passionTitle: "Expertise Artisanale",
        passionDesc: "Notre usine de fabrication à Calavi combine savoir-faire traditionnel et techniques modernes pour des créations exceptionnelles.",
        eleganceTitle: "Design Moderne & Chic",
        eleganceDesc: "Nos créations allient esthétique contemporaine et élégance intemporelle pour des intérieurs sophistiqués.",
        ctaTitle: "Prêt à Transformer Votre Espace ?",
        ctaDesc: "Travaillons ensemble pour créer la maison de vos rêves. Parcourez notre collection ou contactez-nous pour des recommandations personnalisées.",
        viewGallery: "Voir Notre Galerie",
        contactWhatsapp: "Contactez-Nous sur WhatsApp"
      },
      product: {
        learnMore: "En Savoir Plus",
        buyNow: "Acheter Maintenant",
        reviews: "avis",
        features: "Caractéristiques",
        viewDetails: "Voir les Détails"
      },
      trust: {
        securePayment: "Paiement Sécurisé",
        secureDesc: "Transactions 100% sécurisées",
        freeDelivery: "Livraison Gratuite",
        freeDesc: "Sur toutes les commandes importantes",
        quality: "Qualité Garantie",
        qualityDesc: "Artisanat Premium",
        support: "Support 24/7",
        supportDesc: "Assistance dédiée"
      },
      footer: {
        description: "Fabrication de meubles modernes sur mesure de qualité supérieure. Ameublement et décoration intérieure avec garantie.",
        quickLinks: "Liens Rapides",
        contact: "Contact",
        phone: "Téléphone",
        email: "Email",
        location: "Localisation",
        rights: "Tous droits réservés.",
        callNow: "Appeler",
        whatsapp: "WhatsApp"
      },
      gallery: {
        title: "Notre Collection Complète",
        description: "Parcourez notre vaste gamme de meubles de luxe et de pièces de décoration",
        all: "Tous",
        noProducts: "Aucun produit trouvé dans cette catégorie."
      },
      categories: {
        "Cuisine": "Cuisine",
        "Chambre": "Chambre",
        "Salon": "Salon",
        "Chambre & Rangement": "Chambre & Rangement",
        "Décoration & Entrée": "Décoration & Entrée"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        gallery: "Gallery",
        about: "About"
      },
      hero: {
        title: "Custom Modern Furniture",
        subtitle: "High Quality & Elegant",
        description: "Manufacturing premium quality custom modern furniture with guarantee. Furnishing, renovation and interior decoration for residential and commercial spaces.",
        exploreGallery: "Discover Our Creations",
        contactUs: "Contact Us"
      },
      featured: {
        title: "Featured Collections",
        description: "Discover our handpicked selection of premium furniture pieces designed to elevate your space",
        viewAll: "View All Products"
      },
      about: {
        whyChoose: "Why Choose DF HOUSE?",
        description: "Specialized in manufacturing high-quality custom modern furniture, chic and elegant with guarantee. Located in Calavi, we transform your spaces with excellence and professionalism.",
        learnMore: "Learn More About Us",
        title: "Our Expertise",
        mission: "Our Mission",
        values: "Our Values",
        story1: "DF HOUSE AMEUBLEMENT ET DÉCOR specializes in manufacturing high-quality custom modern furniture, chic and elegant with guarantee. We create unique spaces that reflect your personality and lifestyle.",
        story2: "Our factory located in Calavi produces a wide range of furniture: upholstered beds, modern beds, coffee tables, upholstered sofas, divans, modern TV units, TV corners, wall TV panels, side tables, dressings, wardrobes, dining tables, custom kitchen furniture, American kitchens, office desks, vanities, storage shelves and more.",
        story3: "We also equip your commercial and professional spaces: shops, wine cellars, ready-to-wear, hair salons, bars, restaurants, hotels, apartments. Furnishing, apartment renovation and interior decoration with superior quality guarantee.",
        valuesTitle: "Our Values",
        valuesDesc: "The principles that guide everything we do",
        qualityTitle: "Superior Quality Guaranteed",
        qualityDesc: "Manufacturing modern furniture of high quality with guarantee. Each piece is designed to last and enhance your space.",
        customerTitle: "Custom Made",
        customerDesc: "We create custom furniture according to your needs and dimensions. Each project is unique and adapted to your space.",
        passionTitle: "Artisanal Expertise",
        passionDesc: "Our manufacturing factory in Calavi combines traditional craftsmanship with modern techniques for exceptional creations.",
        eleganceTitle: "Modern & Chic Design",
        eleganceDesc: "Our creations combine contemporary aesthetics and timeless elegance for sophisticated interiors.",
        ctaTitle: "Ready to Transform Your Space?",
        ctaDesc: "Let's work together to create the home of your dreams. Browse our collection or get in touch for personalized recommendations.",
        viewGallery: "View Our Gallery",
        contactWhatsapp: "Contact Us on WhatsApp"
      },
      product: {
        learnMore: "Learn More",
        buyNow: "Buy Now",
        reviews: "reviews",
        features: "Features",
        viewDetails: "View Details"
      },
      trust: {
        securePayment: "Secure Payment",
        secureDesc: "100% secure transactions",
        freeDelivery: "Free Delivery",
        freeDesc: "On all major orders",
        quality: "Quality Guaranteed",
        qualityDesc: "Premium craftsmanship",
        support: "24/7 Support",
        supportDesc: "Dedicated assistance"
      },
      footer: {
        description: "Manufacturing premium quality custom modern furniture. Furnishing and interior decoration with guarantee.",
        quickLinks: "Quick Links",
        contact: "Contact",
        phone: "Phone",
        email: "Email",
        location: "Location",
        rights: "All rights reserved.",
        callNow: "Call",
        whatsapp: "WhatsApp"
      },
      gallery: {
        title: "Our Complete Collection",
        description: "Browse through our extensive range of luxury furniture and home décor pieces",
        all: "All",
        noProducts: "No products found in this category."
      },
      categories: {
        "Cuisine": "Kitchen",
        "Chambre": "Bedroom",
        "Salon": "Living Room",
        "Chambre & Rangement": "Bedroom & Storage",
        "Décoration & Entrée": "Decor & Entryway"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // French as default
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
