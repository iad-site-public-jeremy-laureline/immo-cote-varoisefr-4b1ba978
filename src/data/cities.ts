export interface CityData {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  prices: { type: string; range: string; note: string }[];
  reasons: string[];
  faq: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: "six-fours-les-plages",
    name: "Six-Fours-les-Plages",
    title: "Immobilier Six-Fours-les-Plages | Jérémy & Laureline",
    metaDescription: "Vendre ou acheter à Six-Fours-les-Plages ? Jérémy & Laureline, conseillers immobiliers indépendants. Estimation gratuite, prix du m², biens disponibles.",
    intro: "Située entre Toulon et Sanary, Six-Fours-les-Plages est l'une des communes les plus recherchées du Var. Avec ses 32 km de côtes, ses quartiers résidentiels du Brusc, sa forêt de Janas et son accès rapide aux grandes villes, Six-Fours attire aussi bien les familles que les investisseurs. Le marché immobilier y affiche des prix médians autour de 4 900 €/m² pour les appartements et 5 565 €/m² pour les maisons.",
    prices: [
      { type: "Appartement — centre / Lônes", range: "4 200 — 5 200 €/m²", note: "Variable selon étage" },
      { type: "Appartement vue mer", range: "5 500 — 7 500 €/m²", note: "Forte demande" },
      { type: "Maison / Villa — Le Brusc", range: "5 000 — 6 500 €/m²", note: "Quartier premium" },
      { type: "Maison — hauteurs / Raybaud", range: "4 200 — 5 000 €/m²", note: "Calme, jardin" },
    ],
    reasons: [
      "32 km de littoral et plages préservées",
      "Proximité immédiate de Toulon et Sanary",
      "Quartiers variés du centre-ville au Brusc",
      "Forte demande locative et potentiel de plus-value",
    ],
    faq: [
      { q: "Quel est le prix moyen au m² à Six-Fours ?", a: "Le prix médian se situe autour de 4 900 €/m² pour les appartements et 5 565 €/m² pour les maisons, avec des variations importantes selon le quartier et la vue mer." },
      { q: "Est-ce le bon moment pour vendre à Six-Fours ?", a: "Le marché reste dynamique avec une demande soutenue. Contactez-nous pour une estimation précise et personnalisée de votre bien." },
      { q: "Quels sont les quartiers les plus recherchés ?", a: "Le Brusc, les hauteurs avec vue mer, et le centre-ville sont les secteurs les plus prisés." },
    ],
  },
  {
    slug: "sanary-sur-mer",
    name: "Sanary-sur-Mer",
    title: "Immobilier Sanary-sur-Mer | Jérémy & Laureline",
    metaDescription: "Immobilier à Sanary-sur-Mer : estimation, vente et achat avec Jérémy & Laureline, conseillers immobiliers indépendants. Prix m², marché local.",
    intro: "Sanary-sur-Mer, élue plus belle ville de France, séduit par son port coloré, ses marchés provençaux et son art de vivre méditerranéen. Le marché immobilier y est dynamique avec une forte demande pour les biens de caractère, les vues mer et les appartements en centre-ville.",
    prices: [
      { type: "Appartement centre", range: "4 500 — 6 000 €/m²", note: "Proche du port" },
      { type: "Villa avec jardin", range: "5 500 — 8 000 €/m²", note: "Selon vue et terrain" },
    ],
    reasons: ["Port pittoresque et marché provençal", "Proximité de Bandol et Toulon", "Cadre de vie exceptionnel", "Forte attractivité touristique"],
    faq: [
      { q: "Combien coûte un appartement à Sanary ?", a: "Comptez entre 4 500 et 6 000 €/m² selon la localisation et la vue." },
      { q: "Sanary est-elle un bon investissement ?", a: "Oui, la demande locative saisonnière et la qualité de vie en font un investissement sûr." },
    ],
  },
  {
    slug: "bandol",
    name: "Bandol",
    title: "Immobilier Bandol | Jérémy & Laureline",
    metaDescription: "Vendre votre villa ou appartement à Bandol ? Jérémy & Laureline, conseillers immobiliers indépendants experts de la côte varoise. Estimation gratuite.",
    intro: "Bandol est une station balnéaire prisée, connue pour ses vignobles AOC, ses plages de sable fin et son ambiance chic mais décontractée. Le marché immobilier y est haut de gamme avec des biens d'exception.",
    prices: [
      { type: "Appartement", range: "5 000 — 7 000 €/m²", note: "Centre et bord de mer" },
      { type: "Villa prestige", range: "6 000 — 10 000 €/m²", note: "Vue mer et piscine" },
    ],
    reasons: ["Vignobles AOC Bandol réputés", "Plages de sable fin", "Marché immobilier premium", "Gare SNCF et accès autoroute"],
    faq: [
      { q: "Bandol est-elle chère ?", a: "Bandol est effectivement un marché premium, avec des prix allant de 5 000 à 10 000 €/m² selon le type de bien." },
    ],
  },
  {
    slug: "toulon",
    name: "Toulon",
    title: "Immobilier Toulon | Jérémy & Laureline",
    metaDescription: "Achat et vente immobilière à Toulon avec Jérémy & Laureline, conseillers immobiliers indépendants. Estimation, mandats, accompagnement.",
    intro: "Préfecture du Var et plus grande ville de la côte, Toulon offre un marché immobilier diversifié, des quartiers historiques du Mourillon aux résidences modernes du port. Les prix restent plus accessibles que dans les communes voisines.",
    prices: [
      { type: "Appartement centre", range: "2 500 — 4 000 €/m²", note: "Selon quartier" },
      { type: "Maison Le Mourillon", range: "4 000 — 6 000 €/m²", note: "Quartier prisé" },
    ],
    reasons: ["Prix plus accessibles", "Rade de Toulon et Mont Faron", "Quartier du Mourillon très recherché", "Vie culturelle et économique dynamique"],
    faq: [
      { q: "Quels quartiers privilégier à Toulon ?", a: "Le Mourillon, le Cap Brun et le centre historique rénové sont les plus recherchés." },
    ],
  },
  {
    slug: "la-seyne-sur-mer",
    name: "La Seyne-sur-Mer",
    title: "Immobilier La Seyne-sur-Mer | Jérémy & Laureline",
    metaDescription: "Immobilier à La Seyne-sur-Mer. Jérémy & Laureline, conseillers immobiliers indépendants. Estimation gratuite et accompagnement personnalisé.",
    intro: "La Seyne-sur-Mer, entre Toulon et Sanary, connaît un renouveau immobilier avec le développement du quartier Tamaris et la réhabilitation du centre-ville. Les prix restent attractifs avec un fort potentiel de valorisation.",
    prices: [
      { type: "Appartement", range: "2 800 — 4 200 €/m²", note: "Centre et Tamaris" },
      { type: "Villa", range: "3 800 — 5 500 €/m²", note: "Selon vue et terrain" },
    ],
    reasons: ["Prix encore attractifs", "Renouveau urbain en cours", "Quartier Tamaris en bord de mer", "Proximité immédiate de Toulon"],
    faq: [
      { q: "La Seyne est-elle un bon investissement ?", a: "Oui, les prix encore contenus et le développement urbain en font une opportunité intéressante." },
    ],
  },
  {
    slug: "ollioules",
    name: "Ollioules",
    title: "Immobilier Ollioules | Jérémy & Laureline",
    metaDescription: "Immobilier à Ollioules. Jérémy & Laureline, conseillers immobiliers indépendants spécialistes du Var. Estimation gratuite de votre bien.",
    intro: "Ollioules, village provençal authentique niché entre mer et collines, séduit par son charme médiéval, ses gorges spectaculaires et sa proximité avec Toulon et Sanary. Un marché immobilier de caractère.",
    prices: [
      { type: "Appartement", range: "3 000 — 4 200 €/m²", note: "Centre village" },
      { type: "Villa avec terrain", range: "4 000 — 5 500 €/m²", note: "Collines et vue" },
    ],
    reasons: ["Village provençal de caractère", "Gorges d'Ollioules", "Proximité autoroute et Toulon", "Cadre verdoyant et calme"],
    faq: [
      { q: "Ollioules convient-elle aux familles ?", a: "Oui, le cadre calme, les écoles et la proximité de Toulon en font un choix idéal pour les familles." },
    ],
  },
];