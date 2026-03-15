export type PropertyStatus = "Nouveau" | "Exclusivité" | "Sous compromis" | null;
export type PropertyType = "Appartement" | "Maison" | "Terrain" | "Local";
export type Conseiller = "Jérémy" | "Laureline";

export interface Property {
  id: number;
  type: PropertyType;
  label: string;
  city: string;
  cityFilter: string;
  surface: string;
  terrain?: string;
  rooms?: number;
  bedrooms?: number;
  price: number;
  status: PropertyStatus;
  link: string;
  conseiller: Conseiller;
}

export const properties: Property[] = [
  {
    id: 1,
    type: "Local",
    label: "Local commercial",
    city: "La Garde",
    cityFilter: "La Garde",
    surface: "121m²",
    price: 97000,
    status: "Nouveau",
    link: "https://www.iadfrance.fr/annonce/local-commercial-vente-la-garde-121m2/r1969140",
    conseiller: "Jérémy",
  },
  {
    id: 2,
    type: "Appartement",
    label: "Appartement 2 pièces",
    city: "Six-Fours-les-Plages",
    cityFilter: "Six-Fours",
    surface: "38m²",
    rooms: 2,
    price: 277000,
    status: null,
    link: "https://www.iadfrance.fr/annonce/appartement-vente-2-pieces-six-fours-les-plages-38m2/r1944736",
    conseiller: "Jérémy",
  },
  {
    id: 3,
    type: "Maison",
    label: "Maison 8 pièces · 5 chambres",
    city: "La Seyne-sur-Mer",
    cityFilter: "La Seyne",
    surface: "280m²",
    terrain: "1 100m²",
    rooms: 8,
    bedrooms: 5,
    price: 1456000,
    status: null,
    link: "https://www.iadfrance.fr/annonce/maison-vente-8-pieces-la-seyne-sur-mer-280m2/r1743098",
    conseiller: "Jérémy",
  },
  {
    id: 4,
    type: "Appartement",
    label: "Appartement 1 pièce",
    city: "Toulon",
    cityFilter: "Toulon",
    surface: "36m²",
    rooms: 1,
    price: 100000,
    status: "Nouveau",
    link: "https://www.iadfrance.fr/annonce/appartement-vente-1-piece-toulon-36m2/r1966347",
    conseiller: "Laureline",
  },
  {
    id: 5,
    type: "Maison",
    label: "Maison 8 pièces · 7 chambres",
    city: "Toulon",
    cityFilter: "Toulon",
    surface: "201m²",
    terrain: "937m²",
    rooms: 8,
    bedrooms: 7,
    price: 937900,
    status: null,
    link: "https://www.iadfrance.fr/annonce/maison-vente-8-pieces-toulon-201m2/r1959980",
    conseiller: "Laureline",
  },
  {
    id: 6,
    type: "Appartement",
    label: "Appartement 2 pièces",
    city: "Sanary-sur-Mer",
    cityFilter: "Sanary-sur-Mer",
    surface: "68m²",
    rooms: 2,
    price: 425000,
    status: null,
    link: "https://www.iadfrance.fr/annonce/appartement-vente-2-pieces-sanary-sur-mer-68m2/r1956434",
    conseiller: "Laureline",
  },
  {
    id: 7,
    type: "Appartement",
    label: "Appartement 2 pièces",
    city: "Toulon",
    cityFilter: "Toulon",
    surface: "55m²",
    rooms: 2,
    price: 149000,
    status: "Exclusivité",
    link: "https://www.iadfrance.fr/annonce/appartement-vente-2-pieces-toulon-55m2/r1923182",
    conseiller: "Laureline",
  },
  {
    id: 8,
    type: "Appartement",
    label: "Appartement 1 pièce",
    city: "Sanary-sur-Mer",
    cityFilter: "Sanary-sur-Mer",
    surface: "18m²",
    rooms: 1,
    price: 123000,
    status: "Exclusivité",
    link: "https://www.iadfrance.fr/annonce/appartement-vente-1-piece-sanary-sur-mer-18m2/r1923864",
    conseiller: "Laureline",
  },
  {
    id: 9,
    type: "Appartement",
    label: "Appartement 1 pièce",
    city: "Toulon",
    cityFilter: "Toulon",
    surface: "21m²",
    rooms: 1,
    price: 85000,
    status: "Sous compromis",
    link: "https://www.iadfrance.fr/annonce/appartement-vente-1-piece-toulon-21m2/r1877125",
    conseiller: "Laureline",
  },
  {
    id: 10,
    type: "Terrain",
    label: "Terrain à bâtir",
    city: "Sanary-sur-Mer",
    cityFilter: "Sanary-sur-Mer",
    surface: "1 000m²",
    price: 630000,
    status: null,
    link: "https://www.iadfrance.fr/annonce/terrain-vente-sanary-sur-mer-1000m2/r1783413",
    conseiller: "Laureline",
  },
];
