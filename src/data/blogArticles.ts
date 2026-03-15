export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "plus-value-immobiliere-vente-2026",
    title: "Plus-value immobilière en 2026 : comment la calculer et la réduire ?",
    metaTitle: "Plus-value immobilière 2026 : calcul et exonérations",
    metaDescription: "Tout savoir sur la plus-value immobilière en 2026 : calcul, taux, abattements et exonérations. Guide complet par vos conseillers immobiliers sur la Côte Varoise. Estimez votre bien !",
    date: "2026-03-15",
    readTime: "8 min",
    category: "Fiscalité",
    excerpt: "Vous vendez un bien sur la Côte Varoise ? Découvrez comment calculer votre plus-value immobilière en 2026, les abattements pour durée de détention et les exonérations possibles.",
    heroImage: "/blog/pv-hero-notaire.jpg",
    heroAlt: "calcul plus-value immobilière vente notaire 2026",
  },
];
