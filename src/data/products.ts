import kitchenWhite from '@/assets/products/modern-kitchen-white.jpg';
import kitchenIsland from '@/assets/products/modern-kitchen-island.jpg';
import kitchenCabinets from '@/assets/products/modern-kitchen-cabinets.jpg';
import kitchenGrey from '@/assets/products/modern-kitchen-grey.jpg';
import entryway from '@/assets/products/entryway-console.jpg';
import bed from '@/assets/products/upholstered-bed.jpg';
import wardrobe1 from '@/assets/products/wardrobe-1.jpg';
import wardrobe2 from '@/assets/products/wardrobe-2.jpg';
import tvUnit1 from '@/assets/products/tv-wall-unit-1.jpg';
import tvUnit2 from '@/assets/products/tv-wall-unit-2.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cuisine Moderne Américaine Premium",
    description: "Cuisine américaine sur mesure de haute qualité avec îlot central moderne. Finition blanche élégante avec comptoirs blancs et électroménagers intégrés. Design chic et contemporain avec éclairage LED intégré sous les armoires. Parfait pour les espaces de vie ouverts.",
    price: "À partir de 280,000 CFA",
    rating: 5.0,
    reviews: 45,
    image: kitchenWhite,
    category: "Cuisine",
    features: [
      "Design américain sur mesure",
      "Îlot central moderne",
      "Finition blanche premium",
      "Électroménagers intégrés",
      "Éclairage LED sous armoires",
      "Garantie qualité supérieure"
    ]
  },
  {
    id: "2",
    name: "Cuisine Moderne avec Îlot Central",
    description: "Cuisine moderne sophistiquée avec îlot noir élégant et armoires blanches. Plafond design avec éclairage intégré et finition de qualité supérieure. Comprend hotte aspirante moderne et rangement optimisé. Idéal pour cuisine américaine de luxe.",
    price: "À partir de 320,000 CFA",
    rating: 5.0,
    reviews: 38,
    image: kitchenIsland,
    category: "Cuisine",
    features: [
      "Îlot central noir moderne",
      "Armoires blanches premium",
      "Plafond design avec LED",
      "Hotte aspirante intégrée",
      "Rangement optimisé",
      "Construction de qualité supérieure"
    ]
  },
  {
    id: "3",
    name: "Cuisine en L Moderne",
    description: "Cuisine en forme de L avec armoires blanches et comptoirs noirs élégants. Design minimaliste avec électroménagers encastrés et finition de haute qualité. Parfait pour optimiser l'espace avec style et fonctionnalité. Fabrication sur mesure avec garantie.",
    price: "À partir de 290,000 CFA",
    rating: 4.9,
    reviews: 42,
    image: kitchenCabinets,
    category: "Cuisine",
    features: [
      "Configuration en L optimisée",
      "Comptoirs noirs premium",
      "Armoires blanches élégantes",
      "Électroménagers encastrés",
      "Design minimaliste chic",
      "Fabrication sur mesure"
    ]
  },
  {
    id: "4",
    name: "Cuisine Moderne Compacte Premium",
    description: "Cuisine moderne avec armoires grises et blanches, design sophistiqué avec éclairage intégré. Finition de luxe avec détails dorés et rangement optimisé. Construction de qualité supérieure avec garantie. Parfaite pour appartements modernes.",
    price: "À partir de 310,000 CFA",
    rating: 5.0,
    reviews: 35,
    image: kitchenGrey,
    category: "Cuisine",
    features: [
      "Armoires grises et blanches",
      "Détails dorés élégants",
      "Éclairage LED intégré",
      "Rangement optimisé",
      "Finition luxe",
      "Garantie qualité"
    ]
  },
  {
    id: "5",
    name: "Meuble Entrée Console Design",
    description: "Console d'entrée moderne avec panneau texturé en bois et éclairage LED intégré. Design sophistiqué avec lamelles verticales dorées et finition premium. Parfait pour créer une première impression élégante. Fabrication artisanale de qualité supérieure.",
    price: "450,000 CFA",
    rating: 4.9,
    reviews: 28,
    image: entryway,
    category: "Décoration & Entrée",
    features: [
      "Panneau lamelles dorées",
      "Console moderne flottante",
      "Éclairage LED intégré",
      "Finition bois premium",
      "Design sophistiqué",
      "Fabrication artisanale"
    ]
  },
  {
    id: "6",
    name: "Lit Moderne Capitonné Premium",
    description: "Lit moderne avec tête de lit capitonnée en velours gris élégant. Design contemporain avec éclairage LED intégré et finition de luxe. Structure robuste avec garantie qualité. Parfait pour chambres modernes haut de gamme. Fabrication sur mesure disponible.",
    price: "À partir de 580,000 CFA",
    rating: 5.0,
    reviews: 52,
    image: bed,
    category: "Chambre",
    features: [
      "Tête de lit capitonnée velours",
      "Éclairage LED intégré",
      "Design contemporain luxe",
      "Structure robuste",
      "Finition premium",
      "Sur mesure disponible"
    ]
  },
  {
    id: "7",
    name: "Dressing & Armoire Moderne",
    description: "Dressing et armoire sur mesure avec portes coulissantes et étagères ouvertes. Finition bi-ton élégante blanc et bois naturel. Rangement optimisé avec multiple compartiments. Construction solide avec garantie. Idéal pour chambres spacieuses.",
    price: "À partir de 420,000 CFA",
    rating: 4.8,
    reviews: 31,
    image: wardrobe1,
    category: "Chambre & Rangement",
    features: [
      "Portes coulissantes modernes",
      "Étagères ouvertes intégrées",
      "Finition bi-ton élégante",
      "Rangement optimisé",
      "Construction robuste",
      "Fabrication sur mesure"
    ]
  },
  {
    id: "8",
    name: "Armoire Chambre Premium",
    description: "Grande armoire moderne avec finition blanche et détails bois. Design élégant avec portes battantes et poignées modernes. Rangement spacieux avec étagères et penderie. Construction de qualité supérieure avec garantie. Fabrication sur mesure selon vos besoins.",
    price: "À partir de 380,000 CFA",
    rating: 4.9,
    reviews: 37,
    image: wardrobe2,
    category: "Chambre & Rangement",
    features: [
      "Grande capacité de rangement",
      "Finition blanche premium",
      "Détails bois naturel",
      "Portes battantes modernes",
      "Construction solide",
      "Sur mesure disponible"
    ]
  },
  {
    id: "9",
    name: "Meuble TV Mural Luxe",
    description: "Unité murale TV moderne avec étagères illuminées et finition bois chaud. Design sophistiqué avec éclairage LED doré intégré et panneau texturé. Rangement élégant avec compartiments multiples. Parfait pour salons de luxe. Construction premium avec garantie.",
    price: "À partir de 650,000 CFA",
    rating: 5.0,
    reviews: 48,
    image: tvUnit1,
    category: "Salon",
    features: [
      "Étagères illuminées LED",
      "Panneau texturé élégant",
      "Finition bois chaud",
      "Rangement optimisé",
      "Design sophistiqué",
      "Garantie qualité supérieure"
    ]
  },
  {
    id: "10",
    name: "Coin TV Moderne Élégant",
    description: "Meuble TV moderne avec panneau lamelles noir et doré élégant. Éclairage LED intégré et rangement sophistiqué. Design contemporain avec finition de luxe. Construction de qualité supérieure avec garantie. Idéal pour créer un point focal impressionnant.",
    price: "À partir de 720,000 CFA",
    rating: 5.0,
    reviews: 41,
    image: tvUnit2,
    category: "Salon",
    features: [
      "Panneau lamelles noir et or",
      "Éclairage LED intégré",
      "Meuble bas moderne blanc",
      "Design luxe contemporain",
      "Finition premium",
      "Construction garantie"
    ]
  }
];
