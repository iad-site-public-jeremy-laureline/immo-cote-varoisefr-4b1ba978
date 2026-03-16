import laSeyneBalaguierAerien from "@/assets/cities/la-seyne/balaguier-aerien.jpg";
import laSeyneTour from "@/assets/cities/la-seyne/tour-balaguier.jpg";
import laSeynePort from "@/assets/cities/la-seyne/port-seyne.jpg";
import laSeynePortColore from "@/assets/cities/la-seyne/port-coloré.jpg";
import laSeyneCentreVille from "@/assets/cities/la-seyne/centre-ville.jpg";
import laSeynePlage from "@/assets/cities/la-seyne/plage-sablettes.jpg";
import sixFoursMoules from "@/assets/cities/six-fours/moules.jpg";
import sixFoursCrique from "@/assets/cities/six-fours/crique.jpg";
import sixFoursCoucherSoleil from "@/assets/cities/six-fours/coucher-soleil.webp";
import sixFoursEmbiez from "@/assets/cities/six-fours/ile-embiez.webp";
import sixFoursGaou from "@/assets/cities/six-fours/ile-gaou.webp";
import sixFoursPortBrusc from "@/assets/cities/six-fours/port-brusc.jpeg";
import bandolCalanque from "@/assets/cities/bandol/calanque.jpeg";
import bandolCapitainerie from "@/assets/cities/bandol/capitainerie.jpg";
import bandolBendor from "@/assets/cities/bandol/ile-bendor.jpg";
import bandolVillagePort from "@/assets/cities/bandol/village-port.webp";
import bandolPlageRenecros from "@/assets/cities/bandol/plage-renecros.jpg";
import bandolPort from "@/assets/cities/bandol/port-bandol.jpg";

export interface PriceSector {
  name: string;
  description: string;
  image?: string; // optional photo per sector
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CityData {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  marketTitle: string;
  marketText: string[];
  pricesTitle: string;
  pricesIntro?: string;
  priceSectors: PriceSector[];
  pricesOutro?: string;
  sellingTitle: string;
  sellingText: string[];
  buyingTitle: string;
  buyingText: string[];
  expertiseTitle?: string;
  expertiseText?: string[];
  investTitle?: string;
  investText?: string[];
  estimationTitle: string;
  estimationText: string;
  faq: FaqItem[];
  /** Optional extra images for gallery & separators — to be provided later */
  galleryImages?: string[];
  separatorImage2?: string;
  separatorImage3?: string;
}

export const cities: CityData[] = [
  {
    slug: "sanary-sur-mer",
    name: "Sanary-sur-Mer",
    title: "Immobilier Sanary-sur-Mer | Jérémy et Laureline",
    metaDescription: "Immobilier à Sanary-sur-Mer : estimation gratuite, vente et achat avec Jérémy et Laureline, conseillers immobiliers indépendants. Prix m², marché local.",
    h1: "Immobilier à Sanary-sur-Mer — Estimation, Vente et Achat",
    intro: "L'immobilier à Sanary-sur-Mer est l'un des marchés les plus dynamiques et les plus recherchés de la Côte Varoise. Nous y accompagnons propriétaires et acquéreurs avec une connaissance fine du terrain, une approche humaine et une exigence de résultat. Que vous souhaitiez vendre votre bien à Sanary, acheter un appartement face à la mer ou simplement connaître la valeur de votre propriété, nous vous proposons une estimation immobilière gratuite réalisée sur place, sans engagement.",
    marketTitle: "Le marché immobilier à Sanary-sur-Mer en 2026",
    marketText: [
      "Sanary-sur-Mer n'a rien perdu de son attrait. Son port coloré, ses plages de Portissol et de la Gorguette, son marché provençal et sa qualité de vie en font l'une des communes les plus convoitées du Var. Nous le constatons au quotidien depuis notre installation sur la Côte Varoise : la demande reste forte, portée aussi bien par des familles en quête d'une résidence principale que par des acquéreurs à la recherche d'une résidence secondaire ou d'un investissement locatif saisonnier.",
      "En 2026, le marché immobilier de Sanary-sur-Mer se stabilise après plusieurs années de hausse soutenue. Le prix moyen au m² se situe autour de **5 946 €/m²** pour les appartements et **6 947 €/m²** pour les maisons. Certains biens en première ligne face à la mer ou sur les hauteurs avec panorama sur la rade dépassent les 9 000 à 10 000 €/m² pour les villas d'exception.",
      "Ce que nous observons sur le terrain : les biens présentés au juste prix et bien mis en valeur trouvent acquéreur en 45 à 75 jours. Ceux qui démarrent trop haut stagnent et finissent par se négocier en dessous de leur valeur réelle. C'est pourquoi une estimation immobilière sérieuse est toujours le premier pas vers une vente réussie à Sanary-sur-Mer.",
    ],
    pricesTitle: "Prix au m² à Sanary-sur-Mer par secteur en 2026",
    pricesIntro: "La commune de Sanary-sur-Mer est loin d'être monolithique. Chaque secteur a ses propres dynamiques de prix, ses acheteurs types et ses spécificités.",
    priceSectors: [
      { name: "Port et centre historique", description: "C'est le cœur de Sanary, avec ses façades colorées, ses terrasses animées et ses commerces de proximité. Les appartements s'y négocient entre 6 500 et 9 500 €/m² selon l'étage, l'état et la présence d'une vue sur le port. La demande y est permanente." },
      { name: "Portissol et bord de mer", description: "Secteur le plus recherché pour les résidences secondaires et l'investissement saisonnier. Les villas avec vue mer directe dépassent régulièrement 9 000 €/m², parfois jusqu'à 12 000 €/m² pour les biens d'exception." },
      { name: "Hauteurs et collines", description: "Les villas perchées offrent des panoramas spectaculaires sur la rade et les îles. Les prix s'échelonnent entre 4 500 et 7 500 €/m² selon les prestations et l'accessibilité. Ces biens attirent une clientèle exigeante à la recherche de calme et d'espace." },
      { name: "Route de Bandol et secteurs d'accès", description: "Plus accessible, ce secteur accueille des résidences récentes. Les appartements démarrent autour de 4 200 €/m². La proximité avec Bandol, à seulement 5 km, renforce l'attractivité de cette zone." },
      { name: "Gorguette et La Cride", description: "Très prisé pour les maisons de plain-pied avec jardin et piscine, ce secteur résidentiel calme affiche des prix entre 5 000 et 8 000 €/m². Idéal pour les familles souhaitant s'installer à l'année." },
    ],
    pricesOutro: "Pour une évaluation précise de votre bien, demandez votre estimation gratuite.",
    sellingTitle: "Vendre votre appartement ou villa à Sanary-sur-Mer",
    sellingText: [
      "Vendre à Sanary-sur-Mer, c'est saisir une opportunité sur un marché où la demande dépasse l'offre sur les biens de qualité. Mais une vente réussie ne s'improvise pas. Nous vous accompagnons de la première estimation jusqu'à la signature chez le notaire, avec une approche rigoureuse et transparente à chaque étape.",
      "Notre accompagnement comprend une estimation immobilière à Sanary-sur-Mer fondée sur les transactions comparables les plus récentes de votre secteur, la réalisation de photos professionnelles qui mettent votre bien en valeur, une diffusion ciblée sur les plateformes nationales les plus consultées, la sélection et le suivi des visites avec compte-rendu systématique, et la négociation menée dans votre intérêt.",
      "Nous vivons et travaillons sur ce secteur au quotidien. Nous connaissons les copropriétés, les rues, les dynamiques de chaque quartier — et ça fait une vraie différence quand vient le moment de positionner un bien sur le marché. La transparence et l'honnêteté sont au cœur de notre approche : nous vous disons la vérité sur la valeur de votre bien et sur les conditions du marché, même si ce n'est pas toujours ce que l'on espère entendre.",
      "Vous hésitez entre vendre et mettre votre bien en location saisonnière ? Notre partenariat avec Ouikey, service de conciergerie expert de la Côte Varoise, nous permet de vous présenter les deux scénarios chiffrés.",
    ],
    buyingTitle: "Acheter un bien immobilier à Sanary-sur-Mer",
    buyingText: [
      "Les appartements et villas à vendre à Sanary-sur-Mer partent vite, surtout les biens avec extérieur, vue mer ou proche du port. Être accompagné par un conseiller qui connaît les vendeurs avant la mise en ligne fait toute la différence. Notre ancrage local et notre réseau actif nous donnent régulièrement accès à des opportunités avant leur diffusion publique.",
      "Notre approche de l'achat est avant tout humaine. Nous prenons le temps de comprendre votre projet, votre budget, vos priorités de vie. Pour un investissement locatif à Sanary-sur-Mer, la commune affiche un excellent potentiel saisonnier. La fréquentation touristique de mai à octobre est élevée, et la demande en location annuelle reste soutenue.",
    ],
    expertiseTitle: "Notre expertise à votre service sur Sanary-sur-Mer",
    expertiseText: [
      "Nous sommes installés sur la Côte Varoise depuis près de 5 ans, et nous vivons sur le secteur où nous travaillons. Sanary-sur-Mer fait partie de notre quotidien — ses rues, ses quartiers, ses habitants, ses prix. Avec un cumul de plus de 26 ans d'expérience dans l'immobilier, nous avons traversé toutes les phases de marché et accompagné des centaines de projets.",
      "Notre approche à deux est un vrai atout. Jérémy apporte la rigueur, la structure et une lecture précise des dynamiques de marché. Laureline, dont le bureau est basé à Sanary-sur-Mer, apporte l'écoute, la disponibilité et un accompagnement chaleureux qui met les vendeurs et acquéreurs à l'aise à chaque étape. Elle parle également anglais, ce qui est un vrai plus pour les acquéreurs étrangers nombreux sur ce secteur. Nos 176 avis clients vérifiés à 4,8/5 reflètent ce que nos clients vivent réellement à nos côtés.",
      "Disponibles 7j/7 de 9h à 20h, nous nous déplaçons à votre domicile pour votre estimation immobilière à Sanary-sur-Mer sous 48 heures.",
    ],
    estimationTitle: "Estimation immobilière gratuite à Sanary-sur-Mer",
    estimationText: "Vous envisagez de vendre votre bien à Sanary-sur-Mer et souhaitez connaître sa valeur réelle en 2026 ? Notre estimation immobilière gratuite et sans engagement va au-delà des simulateurs en ligne : nous venons chez vous, nous analysons votre bien dans le détail et nous croisons les données du marché local avec notre expérience terrain. Vous repartez avec une évaluation argumentée, honnête et exploitable.",
    faq: [
      { q: "Quel est le prix moyen au m² à Sanary-sur-Mer en 2026 ?", a: "Le prix moyen se situe autour de 5 946 €/m² pour les appartements et 6 947 €/m² pour les maisons. Les biens avec vue mer ou proche du port peuvent largement dépasser ces moyennes." },
      { q: "Combien de temps faut-il pour vendre un bien à Sanary-sur-Mer ?", a: "Un bien estimé au juste prix et bien présenté se vend généralement en 45 à 75 jours. Un prix trop élevé au départ peut rallonger ce délai et fragiliser la négociation." },
      { q: "Est-ce le bon moment pour vendre à Sanary-sur-Mer en 2026 ?", a: "La demande reste supérieure à l'offre sur les biens de qualité. Le marché est actuellement favorable aux vendeurs bien conseillés, notamment sur les biens avec extérieur ou vue mer." },
      { q: "Quels sont les secteurs les plus prisés de Sanary-sur-Mer ?", a: "Le secteur de Portissol, le centre historique près du port, les hauteurs avec panorama sur la rade et la Gorguette sont les plus recherchés. Chaque secteur correspond à un profil différent." },
      { q: "Comment fonctionne votre estimation immobilière à Sanary ?", a: "Vous nous contactez via le formulaire. Nous venons chez vous sous 48h. Après visite et analyse comparative du marché local, vous recevez notre avis de valeur détaillé — gratuitement et sans engagement." },
      { q: "Peut-on investir en location saisonnière à Sanary-sur-Mer ?", a: "Oui, Sanary est l'une des destinations les plus attractives du Var pour la location courte durée. Notre partenaire Ouikey peut prendre en charge la gestion complète de votre bien." },
      { q: "Faut-il confier un mandat exclusif pour vendre à Sanary-sur-Mer ?", a: "Le mandat exclusif permet de concentrer les efforts sur votre bien et d'éviter la multiplicité des intervenants. Nous vous conseillons sur la stratégie la plus adaptée lors de notre rendez-vous." },
      { q: "Vous accompagnez aussi sur d'autres communes ?", a: "Oui, notre zone couvre Six-Fours-les-Plages, Bandol, Toulon, La Seyne-sur-Mer et Ollioules. Nous pouvons vous accompagner sur un projet multisite." },
    ],
  },
  {
    slug: "six-fours-les-plages",
    name: "Six-Fours-les-Plages",
    title: "Immobilier Six-Fours-les-Plages | Jérémy et Laureline",
    metaDescription: "Vendre ou acheter à Six-Fours-les-Plages ? Jérémy et Laureline, conseillers immobiliers indépendants. Estimation gratuite, prix du m², biens disponibles.",
    h1: "Immobilier à Six-Fours-les-Plages — Estimation, Vente et Achat",
    intro: "L'immobilier à Six-Fours-les-Plages est notre terrain de jeu quotidien. Nous y vivons, nous la connaissons rue par rue, quartier par quartier. Installés aux Lônes depuis près de 5 ans, nous avons fait de cette commune notre terrain d'expertise principal. Que vous souhaitiez vendre votre maison à Six-Fours, acheter un appartement, ou simplement obtenir une estimation de votre bien, nous sommes vos interlocuteurs de référence sur ce secteur.",
    marketTitle: "Le marché immobilier à Six-Fours-les-Plages en 2026",
    marketText: [
      "Six-Fours-les-Plages est une commune qui a tout pour plaire : 32 km de côtes, une forêt de Janas préservée, un accès rapide à Toulon et Sanary, et des quartiers résidentiels variés qui répondent à tous les projets de vie. Nous observons depuis plusieurs années une demande soutenue, portée aussi bien par des familles cherchant de l'espace et de la verdure que par des acquéreurs attirés par les secteurs balnéaires du Brusc et de la Coudoulière.",
      "En 2026, le marché immobilier de Six-Fours-les-Plages affiche des prix médians autour de **4 880 à 5 565 €/m²** pour les maisons et **4 200 à 5 200 €/m²** pour les appartements selon le secteur. Les biens avec vue mer ou situés dans les quartiers les plus prisés peuvent dépasser ces moyennes de façon significative.",
      "Les délais de vente sont parmi les plus courts de la zone lorsque le bien est positionné au juste prix. Un appartement correctement estimé dans le secteur des Lônes ou de la Coudoulière part souvent en moins de 60 jours.",
    ],
    pricesTitle: "Prix au m² à Six-Fours-les-Plages par quartier en 2026",
    pricesIntro: "Six-Fours est une commune vaste avec des microclimats immobiliers très distincts. Voici ce que nous constatons sur le terrain en 2026 :",
    priceSectors: [
      { name: "Le Brusc et les secteurs bord de mer", description: "Le quartier le plus coté de la commune. Le Brusc, avec son port de pêche authentique et ses calanques, attire les résidences secondaires et les investisseurs. Les maisons avec vue mer dépassent facilement 6 000 à 7 500 €/m². Les appartements avec terrasse et vue dégagée se négocient entre 5 500 et 7 000 €/m²." },
      { name: "Les Lônes et Coudoulière", description: "Secteur résidentiel animé, prisé par les familles pour la qualité de ses commerces et sa vie de quartier. Les appartements se positionnent entre 4 000 et 5 500 €/m² selon les prestations. Les maisons avec jardin atteignent 5 000 à 6 500 €/m². C'est notre secteur de vie, et nous en connaissons chaque copropriété." },
      { name: "Les hauteurs (Raybaud, Le Verger)", description: "Calme absolu, grandes villas et lotissements résidentiels au milieu de la nature. Les prix se situent entre 4 200 et 5 000 €/m² pour les maisons. Ces secteurs attirent les familles cherchant l'espace sans sacrifier l'accès aux plages." },
      { name: "Centre-ville et secteur gare", description: "Appartements plus accessibles, idéaux pour les primo-accédants ou les investisseurs locatifs. Les prix démarrent autour de 3 500 €/m² et montent à 4 500 €/m² pour les biens rénovés avec prestations." },
    ],
    pricesOutro: "Votre bien est dans l'un de ces secteurs ? Chaque propriété a ses propres atouts qui influencent sa valeur. Pour une estimation immobilière à Six-Fours-les-Plages précise et argumentée, contactez-nous.",
    sellingTitle: "Vendre votre bien à Six-Fours-les-Plages",
    sellingText: [
      "Vendre à Six-Fours-les-Plages demande une connaissance fine des spécificités de chaque quartier. Un appartement aux Lônes ne se vend pas de la même façon qu'une villa du Brusc. C'est précisément pour cette raison que notre ancrage local est un vrai avantage pour vous.",
      "Notre accompagnement pour la vente immobilière à Six-Fours-les-Plages comprend une estimation au plus juste basée sur les transactions récentes de votre secteur, des photos professionnelles qui valorisent chaque atout de votre bien, une diffusion ciblée sur les portails immobiliers les plus consultés, un suivi rigoureux des visites et une négociation menée dans votre seul intérêt.",
      "Jérémy, fort de 15 ans d'expérience dans l'immobilier, apporte la méthode et la rigueur. Laureline apporte l'écoute et la capacité à mettre en confiance chaque vendeur et chaque acquéreur.",
      "Si votre bien peut également générer des revenus via la location saisonnière, notre partenariat avec Ouikey vous permet d'explorer cette option et de prendre la décision la plus éclairée pour votre patrimoine.",
    ],
    buyingTitle: "Acheter à Six-Fours-les-Plages",
    buyingText: [
      "Nous vivons à Six-Fours-les-Plages et nous accompagnons chaque acquéreur avec la même exigence. Que vous cherchiez un appartement proche des plages, une maison avec jardin pour votre famille ou un bien d'investissement, nous savons où chercher et à quel prix négocier.",
      "Les appartements à vendre à Six-Fours-les-Plages sont particulièrement recherchés dans les secteurs des Lônes, de la Coudoulière et du Brusc. Les maisons avec terrain et piscine sur les hauteurs attirent quant à elles une clientèle en quête d'espace et de verdure. Notre réseau actif nous donne régulièrement accès à des biens avant leur mise en ligne publique — un avantage que nos clients acquéreurs apprécient particulièrement dans un marché concurrentiel.",
    ],
    estimationTitle: "Estimation immobilière gratuite à Six-Fours-les-Plages",
    estimationText: "Vous envisagez de vendre votre bien à Six-Fours-les-Plages ? Commencez par une estimation gratuite et sans engagement réalisée sur place. En tant que résidents du secteur, nous n'avons pas besoin de découvrir les Lônes, le Brusc ou la Coudoulière sur une carte — nous y vivons. Cette proximité nous permet de calibrer la valeur de votre bien avec une précision que peu de conseillers peuvent offrir.",
    faq: [
      { q: "Quel est le prix moyen au m² à Six-Fours-les-Plages en 2026 ?", a: "Les prix varient entre 4 200 et 7 500 €/m² selon le secteur. Le Brusc est le quartier le plus cher, les hauteurs offrent de belles opportunités autour de 4 200 à 5 000 €/m²." },
      { q: "Quels sont les quartiers les plus recherchés à Six-Fours ?", a: "Le Brusc, les Lônes, la Coudoulière et les hauteurs de Raybaud sont les secteurs les plus prisés. Chacun répond à un profil d'acquéreur différent." },
      { q: "Combien de temps pour vendre à Six-Fours-les-Plages ?", a: "Un bien estimé au juste prix dans un secteur demandé se vend en 45 à 60 jours. Pour les biens atypiques ou haut de gamme, le délai peut s'allonger à 90 jours." },
      { q: "Vous habitez bien à Six-Fours-les-Plages ?", a: "Oui, nous vivons aux Lônes depuis près de 5 ans. Nous connaissons chaque rue, chaque copropriété et les dynamiques de prix de chaque secteur. C'est notre quotidien." },
      { q: "Comment se passe votre estimation à Six-Fours ?", a: "Nous nous déplaçons à votre domicile sous 48h. Après visite et analyse du marché local, vous recevez notre avis de valeur argumenté — gratuitement et sans engagement." },
      { q: "Six-Fours est-elle bien desservie ?", a: "Oui, Six-Fours offre un accès rapide à Toulon (20 min), Sanary (10 min) et Bandol (15 min) par les axes routiers. La commune dispose également de sa propre gare SNCF." },
      { q: "Peut-on investir en locatif saisonnier à Six-Fours ?", a: "Le potentiel est réel, notamment dans les secteurs du Brusc et de la Coudoulière. Notre partenaire Ouikey peut prendre en charge la gestion de votre bien en location courte durée." },
    ],
    galleryImages: [sixFoursGaou, sixFoursEmbiez, sixFoursPortBrusc, sixFoursCrique, sixFoursCoucherSoleil, sixFoursMoules],
    separatorImage2: sixFoursGaou,
    separatorImage3: sixFoursEmbiez,
  },
  {
    slug: "bandol",
    name: "Bandol",
    title: "Immobilier Bandol | Jérémy et Laureline",
    metaDescription: "Vendre votre villa ou appartement à Bandol ? Jérémy et Laureline, conseillers immobiliers indépendants experts de la côte varoise. Estimation gratuite.",
    h1: "Immobilier à Bandol — Estimation, Vente et Achat de Prestige",
    intro: "L'immobilier à Bandol jouit d'une réputation bien établie sur la Côte Varoise. Station balnéaire reconnue pour ses vins AOC, son port de plaisance animé et ses plages de sable, Bandol attire une clientèle exigeante à la recherche d'un bien d'exception dans un cadre privilégié. Nous accompagnons propriétaires et acquéreurs sur ce marché de prestige avec rigueur, discrétion et une connaissance approfondie des réalités locales.",
    marketTitle: "Le marché immobilier à Bandol en 2026",
    marketText: [
      "Bandol est l'une des communes les plus premium de la Côte Varoise. Son marché immobilier se caractérise par une offre limitée et une demande constante, ce qui maintient les prix à un niveau élevé. En 2026, le prix moyen au m² se situe autour de **5 365 €/m²** pour les appartements et **6 017 €/m²** pour les maisons, avec des variations importantes selon la localisation.",
      "Les villas avec vue dégagée sur la rade ou les vignobles de l'AOC Bandol dépassent régulièrement 8 000 à 10 000 €/m² pour les biens d'exception. Le marché bandolais attire aussi bien une clientèle nationale qu'internationale, attirée par l'authenticité du port, la qualité de vie méditerranéenne et le rayonnement des vins de Bandol dans le monde entier.",
      "Nous constatons une stabilisation des prix en 2026 après plusieurs années de forte hausse. Les biens présentés au bon prix trouvent acquéreur dans des délais raisonnables. C'est la crédibilité de l'estimation qui fait la différence.",
    ],
    pricesTitle: "Prix au m² à Bandol par secteur en 2026",
    priceSectors: [
      { name: "Port et bord de mer", description: "Le secteur le plus recherché. Les appartements avec vue port ou première ligne mer se négocient entre 6 500 et 10 000 €/m². Les biens rares avec terrasse panoramique dépassent parfois les 12 000 €/m²." },
      { name: "Hauteurs et domaines viticoles", description: "Les villas avec vue sur les vignes et la rade de Bandol constituent le segment le plus exclusif. Les prix s'échelonnent entre 6 000 et 10 000 €/m² selon les prestations, la piscine, le terrain et la qualité de la vue." },
      { name: "Engraviers, Capelan et secteurs résidentiels", description: "Quartiers résidentiels calmes, à l'abri de l'animation du port tout en restant à quelques minutes à pied des plages. Les appartements se positionnent entre 4 500 et 6 500 €/m². Ces secteurs attirent les familles qui souhaitent profiter de Bandol à l'année." },
      { name: "Accès Saint-Cyr et La Cadière", description: "Quelques kilomètres plus à l'est, ce secteur offre des biens plus accessibles dans un cadre provençal préservé, avec des prix autour de 3 500 à 5 000 €/m². La proximité avec Sanary et Six-Fours en fait un secteur de report intéressant." },
    ],
    sellingTitle: "Vendre votre villa ou appartement à Bandol",
    sellingText: [
      "Vendre un bien immobilier à Bandol est une opération qui mérite une stratégie adaptée au marché de prestige. La discrétion, la qualité de la présentation et le ciblage des bons acquéreurs sont essentiels pour concrétiser une vente dans les meilleures conditions.",
      "Notre approche pour la vente immobilière à Bandol s'appuie sur une estimation rigoureuse fondée sur les transactions comparables récentes, une mise en valeur soignée de votre bien avec des photos et vidéos professionnelles, et une diffusion ciblée sur les plateformes nationales et les réseaux spécialisés dans l'immobilier de qualité. Nous sélectionnons les acquéreurs, organisons les visites et gérons la négociation avec la discrétion et l'efficacité que le marché bandolais requiert.",
      "Jérémy apporte la structure et la rigueur d'un professionnel qui a traversé 15 ans de marché immobilier. Laureline apporte l'accompagnement humain qui rassure vendeurs et acquéreurs dans une transaction souvent complexe et émotionnelle.",
    ],
    buyingTitle: "Acheter à Bandol : un marché de rareté",
    buyingText: [
      "Les appartements et villas à vendre à Bandol sont rares. Les biens de qualité ne restent jamais longtemps sur le marché. Être accompagné par un conseiller qui connaît les vendeurs en amont de la mise en ligne est souvent la seule façon d'accéder aux meilleures opportunités.",
      "Pour un investissement immobilier à Bandol, la commune offre un excellent potentiel : le tourisme haut de gamme, la réputation des vins de Bandol et le rayonnement de la commune à l'international en font un marché solide sur le long terme. Nous pouvons vous accompagner dans l'analyse du rendement locatif et vous mettre en relation avec notre partenaire Ouikey pour la gestion de votre bien.",
    ],
    estimationTitle: "Estimation immobilière gratuite à Bandol",
    estimationText: "Votre villa, votre appartement ou votre terrain à Bandol mérite une estimation immobilière réalisée par des professionnels qui connaissent les réalités de ce marché exigeant. Nous nous déplaçons à votre domicile, nous analysons chaque détail de votre bien et vous fournissons un avis de valeur précis et argumenté — gratuitement et sans engagement.",
    faq: [
      { q: "Quel est le prix moyen au m² à Bandol en 2026 ?", a: "Environ 5 365 €/m² pour les appartements et 6 017 €/m² pour les maisons. Les villas d'exception avec vue mer peuvent dépasser les 10 000 €/m²." },
      { q: "Bandol est-elle accessible aux primo-accédants ?", a: "Bandol est un marché premium. Les primo-accédants trouveront plus facilement leur bonheur à Six-Fours ou à La Seyne. Bandol est davantage orientée résidences secondaires et investissements patrimoniaux." },
      { q: "Quel est le potentiel locatif saisonnier à Bandol ?", a: "Excellent. Bandol est une destination recherchée, avec une saison touristique étalée d'avril à octobre. Les villas et appartements bien situés affichent des taux d'occupation très élevés." },
      { q: "Comment vendre discrètement un bien de prestige à Bandol ?", a: "Nous travaillons en réseau et pouvons présenter votre bien à des acquéreurs qualifiés avant toute diffusion publique, pour les vendeurs qui préfèrent une approche confidentielle." },
      { q: "Combien de temps pour vendre à Bandol ?", a: "Cela dépend du type de bien et du prix. Un appartement standard bien positionné part en 60 jours. Une villa d'exception peut nécessiter 3 à 6 mois pour trouver le bon acquéreur." },
      { q: "Vous accompagnez aussi les achats de résidences secondaires à Bandol ?", a: "Absolument. Les résidences secondaires représentent une grande part du marché bandolais. Nous accompagnons aussi bien les acquéreurs locaux qu'étrangers." },
      { q: "Comment obtenir une estimation immobilière gratuite à Bandol ?", a: "Remplissez le formulaire en ligne ou appelez-nous. Nous nous déplaçons chez vous sous 48h pour une évaluation sur place, gratuite et sans engagement." },
    ],
    galleryImages: [bandolCalanque, bandolCapitainerie, bandolBendor, bandolVillagePort, bandolPlageRenecros, bandolPort],
    separatorImage2: bandolCalanque,
    separatorImage3: bandolPlageRenecros,
  },
  {
    slug: "toulon",
    name: "Toulon",
    title: "Immobilier Toulon | Jérémy et Laureline",
    metaDescription: "Achat et vente immobilière à Toulon avec Jérémy et Laureline, conseillers immobiliers indépendants. Estimation gratuite, accompagnement personnalisé.",
    h1: "Immobilier à Toulon — Conseiller Indépendant, Estimation et Vente",
    intro: "L'immobilier à Toulon offre une palette unique en Provence : grande métropole méditerranéenne de 170 000 habitants, Toulon combine la richesse d'une ville universitaire et militaire avec un cadre naturel d'exception entre rade, montagne du Faron et littoral. Nous accompagnons vendeurs et acquéreurs sur l'ensemble de la commune, du Mourillon au Cap Brun en passant par le centre-ville et les hauteurs.",
    marketTitle: "Le marché immobilier à Toulon en 2026",
    marketText: [
      "Toulon présente une spécificité que nous observons au quotidien : c'est l'une des grandes villes du littoral méditerranéen où les prix restent encore accessibles par rapport à Nice ou Marseille. En 2026, le prix moyen au m² à Toulon se situe autour de **3 266 €/m²** pour les appartements et **4 361 €/m²** pour les maisons. Mais ces moyennes cachent des disparités importantes selon les quartiers.",
      "Le marché toulonnais est en mutation positive. La ville attire de plus en plus de ménages qui arbitrent entre la qualité de vie méditerranéenne et des prix encore abordables par rapport aux communes voisines comme Sanary ou Bandol. Les investisseurs locatifs s'y intéressent également pour les rendements plus élevés qu'offrent les biens locatifs en ville.",
      "Pour un vendeur à Toulon, la concurrence est réelle avec un volume de transactions important. Se démarquer demande une stratégie de présentation soignée et un positionnement tarifaire précis dès le départ. C'est exactement ce que nous apportons.",
    ],
    pricesTitle: "Prix au m² à Toulon par quartier en 2026",
    priceSectors: [
      { name: "Le Mourillon", description: "Le quartier le plus prisé de Toulon. Proche des plages, des restaurants et du port, le Mourillon affiche des prix entre 3 500 et 5 500 €/m² pour les appartements selon la vue et les prestations. Les maisons y sont rares et recherchées, dépassant souvent 5 000 €/m²." },
      { name: "Cap Brun et secteurs résidentiels est", description: "Le secteur premium de Toulon, avec ses villas arborées, ses panoramas sur la rade et ses propriétés d'exception. Les prix atteignent 4 000 à 7 000 €/m² selon la rareté et la qualité des biens." },
      { name: "Centre-ville et Haute Ville", description: "Forte demande locative, prix accessibles pour les investisseurs. Les appartements se négocient entre 2 000 et 3 500 €/m². Les biens rénovés dans les rues piétonnes du centre trouvent rapidement preneur." },
      { name: "Secteurs nord et périphérie", description: "Les quartiers nord de Toulon et la périphérie offrent les prix les plus accessibles de la commune, entre 1 800 et 2 800 €/m². Idéaux pour les primo-accédants ou les investisseurs cherchant un rendement locatif optimisé." },
    ],
    sellingTitle: "Vendre votre bien à Toulon",
    sellingText: [
      "Vendre un appartement ou une maison à Toulon demande de se positionner dans un marché plus concurrentiel que les communes voisines. Le volume de l'offre est important et les acquéreurs ont l'embarras du choix. Se différencier passe par une mise en valeur impeccable et un prix juste dès le premier jour.",
      "Notre accompagnement pour la vente immobilière à Toulon s'appuie sur la rigueur et la méthode que Jérémy a développées en 15 ans d'exercice. L'estimation est réalisée sur place, les photos professionnelles sont soignées, la diffusion est large et ciblée. Laureline assure un suivi personnalisé de chaque vendeur, avec un contact régulier et une transparence totale sur l'avancement de la commercialisation.",
      "Nous gérons aussi bien les appartements courants que les biens atypiques ou les maisons avec terrain. Chaque dossier reçoit la même attention, quelle que soit la valeur du bien.",
    ],
    buyingTitle: "Acheter à Toulon",
    buyingText: [
      "Toulon est une destination de choix pour les acquéreurs qui cherchent à profiter de la vie méditerranéenne avec un budget maîtrisé. Les appartements à vendre à Toulon offrent un excellent rapport qualité-prix par rapport aux communes du littoral. Le quartier du Mourillon et les secteurs résidentiels de l'est de la ville sont particulièrement adaptés aux familles cherchant la qualité de vie sans les prix de Bandol ou Sanary.",
      "Nous connaissons les spécificités de chaque quartier toulonnais et nous accompagnons nos acquéreurs avec le même sérieux que pour les biens du Brusc ou de Portissol. Laureline parle anglais, ce qui facilite l'accompagnement des acquéreurs étrangers de plus en plus nombreux à s'intéresser à Toulon.",
    ],
    estimationTitle: "Estimation immobilière gratuite à Toulon",
    estimationText: "Vous souhaitez connaître la valeur de votre bien dans votre quartier toulonnais ? Notre estimation immobilière à Toulon est gratuite, sans engagement, et réalisée sur place par des professionnels qui maîtrisent les dynamiques de prix de chaque secteur. Nous nous déplaçons sous 48h à votre domicile.",
    faq: [
      { q: "Quel est le prix moyen au m² à Toulon en 2026 ?", a: "Environ 3 266 €/m² pour les appartements et 4 361 €/m² pour les maisons en moyenne. Le Mourillon et Cap Brun sont les secteurs les plus chers, le centre et le nord les plus accessibles." },
      { q: "Quels sont les quartiers les plus recherchés à Toulon ?", a: "Le Mourillon arrive en tête, suivi du Cap Brun et des secteurs résidentiels de l'est. Pour les investisseurs locatifs, le centre-ville offre de bons rendements." },
      { q: "Est-il intéressant d'investir à Toulon en 2026 ?", a: "Oui, Toulon offre encore des prix accessibles avec de bonnes perspectives de valorisation. Le marché locatif est soutenu par la population étudiante et militaire." },
      { q: "Combien de temps pour vendre à Toulon ?", a: "En moyenne 60 à 90 jours pour un bien correctement positionné. Le Mourillon vend plus vite. Les secteurs nord demandent parfois plus de patience." },
      { q: "Quelle est la différence entre acheter à Toulon et à Sanary ?", a: "Toulon offre un marché plus accessible mais plus concurrentiel. Sanary est plus premium et plus orientée résidences secondaires. Les deux communes ont leurs atouts selon le projet." },
      { q: "Comment se passe une estimation à Toulon avec vous ?", a: "Nous nous déplaçons sous 48h à votre domicile. Après visite et analyse du marché de votre quartier, vous recevez notre avis de valeur détaillé — gratuitement." },
      { q: "Vous accompagnez aussi les achats de biens atypiques à Toulon ?", a: "Oui, lofts, maisons de ville, biens avec vue rade, immeubles de rapport... Nous traitons tous les types de biens avec le même professionnalisme." },
    ],
  },
  {
    slug: "la-seyne-sur-mer",
    name: "La Seyne-sur-Mer",
    title: "Immobilier La Seyne-sur-Mer | Jérémy et Laureline",
    metaDescription: "Immobilier à La Seyne-sur-Mer. Jérémy et Laureline, conseillers immobiliers indépendants. Estimation gratuite et accompagnement personnalisé.",
    h1: "Immobilier à La Seyne-sur-Mer — Estimation, Vente et Investissement",
    intro: "L'immobilier à La Seyne-sur-Mer connaît un dynamisme remarquable en 2026. Deuxième ville du Var avec 63 000 habitants, La Seyne offre un positionnement idéal entre la rade de Toulon et la plage des Sablettes, avec des prix encore accessibles par rapport aux communes voisines. Nous accompagnons vendeurs et acquéreurs sur ce marché en transformation avec la même rigueur et le même engagement que sur l'ensemble de la Côte Varoise.",
    marketTitle: "Le marché immobilier à La Seyne-sur-Mer en 2026",
    marketText: [
      "La Seyne-sur-Mer est en pleine mutation. Ancienne capitale de la construction navale, la ville s'est progressivement transformée en destination résidentielle et touristique à part entière. Son front de mer réaménagé, ses plages des Sablettes et de Fabrégas, sa proximité immédiate avec Toulon par les navettes maritimes et sa liaison rapide avec Six-Fours-les-Plages en font une commune de plus en plus attractive.",
      "En 2026, le prix moyen au m² à La Seyne-sur-Mer se situe autour de **3 385 €/m²** pour les appartements et **4 262 €/m²** pour les maisons. La tendance est à la hausse avec une progression d'environ +5% sur les 6 derniers mois, ce qui en fait l'un des marchés les plus dynamiques de la zone.",
      "Pour les vendeurs, c'est une fenêtre favorable. Pour les acquéreurs et investisseurs, c'est encore le bon moment d'entrer sur ce marché avant que les prix rattrapent ceux de Toulon. Notre conseil : si vous possédez un bien à La Seyne et que vous réfléchissez à vendre, c'est le bon moment pour faire réaliser une estimation immobilière.",
    ],
    pricesTitle: "Prix au m² à La Seyne-sur-Mer par secteur en 2026",
    priceSectors: [
      { name: "Les Sablettes et front de mer", description: "Secteur le plus recherché, à la jonction entre La Seyne et Saint-Mandrier. Les appartements avec vue mer se négocient entre 3 500 et 5 500 €/m². Les maisons en première ligne sont rares et très convoitées." },
      { name: "Tamaris", description: "Quartier balnéaire historique aux allures de station estivale. Les biens y sont recherchés pour la location saisonnière et les résidences secondaires. Les prix s'échelonnent entre 3 200 et 5 000 €/m² selon la vue et l'état." },
      { name: "Centre-ville et secteurs résidentiels", description: "Le cœur de La Seyne propose des appartements accessibles entre 2 200 et 3 500 €/m². Idéal pour les primo-accédants ou les investisseurs locatifs cherchant un bon rendement." },
      { name: "Fabrégas et secteurs sud", description: "Proche du cap Sicié, ce secteur résidentiel calme offre des maisons avec jardin entre 3 500 et 5 000 €/m². La vue sur la rade et la proximité des criques en font un secteur de plus en plus recherché." },
    ],
    sellingTitle: "Vendre votre bien à La Seyne-sur-Mer",
    sellingText: [
      "Vendre à La Seyne-sur-Mer en 2026, c'est profiter d'une dynamique de marché favorable. La demande est en croissance, les acquéreurs plus nombreux et les délais de vente qui se raccourcissent. C'est le bon moment pour valoriser votre patrimoine.",
      "Notre accompagnement pour la vente immobilière à La Seyne-sur-Mer s'appuie sur une estimation précise des réalités locales, une mise en valeur soignée de votre bien et une diffusion efficace auprès d'une clientèle ciblée. Nous suivons chaque vente avec rigueur et transparence, en vous tenant informé à chaque étape de la commercialisation.",
      "La Seyne est également un secteur à fort potentiel pour la location saisonnière, notamment dans les secteurs des Sablettes et de Tamaris. Notre partenaire Ouikey peut vous accompagner dans cette démarche si vous souhaitez valoriser votre bien avant de le vendre.",
    ],
    buyingTitle: "Acheter à La Seyne-sur-Mer",
    buyingText: [
      "La Seyne-sur-Mer représente une excellente opportunité pour les acquéreurs en quête d'un bon rapport qualité-prix sur la Côte Varoise. Les prix encore contenus, la transformation urbaine en cours et la qualité de vie qui s'améliore d'année en année en font un choix pertinent pour les familles comme pour les investisseurs.",
    ],
    investTitle: "Investir à La Seyne-sur-Mer : une opportunité à saisir",
    investText: [
      "La Seyne-sur-Mer est l'une des meilleures opportunités d'investissement immobilier sur la Côte Varoise en 2026. Des prix encore accessibles, un marché en progression, une demande locative soutenue et une qualité de vie qui continue de s'améliorer : tous les indicateurs pointent dans la même direction.",
      "Les investisseurs qui avaient misé sur La Seyne il y a 5 ans constatent aujourd'hui des plus-values significatives. Ceux qui entrent maintenant profitent encore d'un potentiel de valorisation réel avant que les prix ne rejoignent ceux de Toulon. Nous pouvons vous accompagner dans l'analyse du rendement locatif et la sélection du bien le plus adapté à votre stratégie patrimoniale.",
    ],
    estimationTitle: "Estimation immobilière gratuite à La Seyne-sur-Mer",
    estimationText: "Dans un marché en mouvement comme celui de La Seyne-sur-Mer, la valeur de votre bien peut avoir évolué significativement en l'espace de quelques mois. Notre estimation immobilière gratuite vous donne une vision claire et actualisée de la valeur de votre patrimoine — sans engagement, et réalisée sur place dans les 48 heures suivant votre demande.",
    faq: [
      { q: "Quel est le prix moyen au m² à La Seyne-sur-Mer en 2026 ?", a: "Environ 3 385 €/m² pour les appartements et 4 262 €/m² pour les maisons. Le marché est en hausse d'environ +5% sur les 6 derniers mois, ce qui en fait l'un des plus dynamiques du Var." },
      { q: "Pourquoi les prix à La Seyne sont-ils inférieurs à ceux de Toulon ?", a: "La Seyne a longtemps souffert de son image industrielle. Mais la ville s'est transformée et les écarts de prix tendent à se réduire. C'est précisément ce qui en fait une opportunité intéressante." },
      { q: "Est-ce un bon moment pour investir à La Seyne-sur-Mer ?", a: "Oui, 2026 est encore une fenêtre favorable. Les prix sont en hausse mais restent accessibles. La demande locative est soutenue et le potentiel de valorisation réel sur les prochaines années." },
      { q: "Les Sablettes sont-elles vraiment recommandées pour un achat ?", a: "Oui, c'est l'un des meilleurs secteurs de La Seyne pour la valorisation à long terme et la location saisonnière. La proximité de la mer et les prix encore inférieurs à Sanary en font un choix pertinent." },
      { q: "Comment se passe une estimation à La Seyne avec vous ?", a: "Nous venons chez vous sous 48h pour une visite et une analyse du marché de votre quartier. Notre avis de valeur est gratuit et sans engagement." },
      { q: "Vous gérez aussi les biens à louer à La Seyne-sur-Mer ?", a: "Pour la gestion locative courte durée, nous travaillons avec notre partenaire Ouikey qui intervient sur La Seyne et l'ensemble de la Côte Varoise." },
      { q: "Quelle est la différence entre acheter à La Seyne et à Six-Fours ?", a: "Six-Fours est plus premium et offre un littoral plus varié. La Seyne est plus accessible avec un fort potentiel de rattrapage des prix. Tout dépend de votre projet et de votre budget." },
    ],
    galleryImages: [laSeyneBalaguierAerien, laSeyneTour, laSeynePortColore, laSeyneCentreVille, laSeynePlage, laSeynePort],
    separatorImage2: laSeyneTour,
    separatorImage3: laSeyneBalaguierAerien,
  },
  {
    slug: "ollioules",
    name: "Ollioules",
    title: "Immobilier Ollioules | Jérémy et Laureline",
    metaDescription: "Immobilier à Ollioules. Jérémy et Laureline, conseillers immobiliers indépendants spécialistes du Var. Estimation gratuite de votre bien.",
    h1: "Immobilier à Ollioules — Estimation, Vente et Achat",
    intro: "L'immobilier à Ollioules attire de plus en plus d'acquéreurs en quête d'authenticité provençale sans s'éloigner des commodités de Toulon ou des plages de la Côte Varoise. Village perché au pied de ses célèbres gorges, Ollioules offre un cadre de vie préservé à quelques minutes seulement de Sanary-sur-Mer et de Toulon. Nous accompagnons les projets immobiliers sur cette commune avec la même exigence que sur l'ensemble de nos secteurs.",
    marketTitle: "Le marché immobilier à Ollioules en 2026",
    marketText: [
      "Ollioules est l'un des marchés immobiliers les plus intéressants du Var en 2026. Longtemps dans l'ombre de ses voisines plus connues, la commune connaît une montée en puissance progressive portée par plusieurs facteurs : son cadre de vie authentique, sa proximité avec les grands axes routiers, ses projets de revalorisation du centre-village, et des prix encore accessibles par rapport au littoral.",
      "En 2026, le prix moyen au m² à Ollioules se situe autour de **2 787 €/m²** pour les appartements et **4 091 €/m²** pour les maisons. Ces prix sont parmi les plus accessibles de la zone, mais la tendance est clairement à la hausse. Le marché attire notamment des familles qui cherchent à acquérir une maison avec jardin dans un village provençal calme, tout en restant à 15 minutes de Toulon et 10 minutes de Sanary.",
      "Pour les vendeurs, Ollioules représente une opportunité de valoriser un patrimoine longtemps sous-estimé. Pour les acquéreurs et investisseurs, c'est encore le bon moment d'entrer sur ce marché avant que les prix ne rejoignent pleinement ceux des communes voisines.",
    ],
    pricesTitle: "Prix au m² à Ollioules par secteur en 2026",
    priceSectors: [
      { name: "Centre village historique", description: "Le cœur d'Ollioules avec ses ruelles médiévales et ses maisons de caractère. Les maisons de village se négocient entre 2 500 et 4 000 €/m² selon l'état et les prestations. Les biens rénovés avec charme trouvent rapidement preneur auprès d'une clientèle en quête d'authenticité." },
      { name: "Secteurs résidentiels pavillonnaires", description: "Les lotissements et secteurs résidentiels périphériques proposent des maisons avec jardin entre 3 000 et 4 500 €/m². Ces biens attirent les familles qui veulent de l'espace et du calme à 15 minutes de Toulon." },
      { name: "Gorges et secteurs naturels", description: "Les biens à proximité des Gorges d'Ollioules bénéficient d'un cadre naturel exceptionnel. Les prix varient entre 3 500 et 5 000 €/m² pour les villas avec terrain et vue sur le massif. La rareté de l'offre dans ce secteur maintient une demande soutenue." },
      { name: "Accès Nationale 8 et entrées de ville", description: "Les secteurs les plus accessibles en termes de prix, avec des appartements autour de 2 200 à 3 000 €/m². Idéaux pour les primo-accédants ou les investisseurs locatifs à la recherche d'un bon rapport qualité-prix." },
    ],
    sellingTitle: "Vendre votre maison ou villa à Ollioules",
    sellingText: [
      "Vendre à Ollioules en 2026, c'est profiter d'un marché en plein essor où la demande dépasse souvent l'offre sur les biens de qualité. Les acheteurs qui recherchent une maison provençale authentique à proximité des grands centres sont de plus en plus nombreux, et les délais de vente se raccourcissent.",
      "Notre accompagnement pour la vente immobilière à Ollioules s'appuie sur une connaissance précise des réalités du marché local, une mise en valeur soignée de chaque bien et une diffusion efficace auprès d'une clientèle qualifiée. Jérémy apporte la méthode et la rigueur de ses 15 ans d'expérience. Laureline assure un accompagnement humain et chaleureux qui met chaque vendeur en confiance et qui facilite les visites avec les acquéreurs.",
      "Ollioules attire également des acquéreurs qui cherchent un pied-à-terre provençal pour profiter des plages de la Côte Varoise tout en bénéficiant d'un cadre plus calme et de prix plus raisonnables. Votre bien a peut-être une valeur supérieure à ce que vous imaginez.",
    ],
    buyingTitle: "Acheter à Ollioules : l'authenticité provençale à portée de budget",
    buyingText: [
      "Ollioules est l'une de nos recommandations pour les acquéreurs qui cherchent à s'installer sur la Côte Varoise avec un budget maîtrisé. La commune offre un cadre de vie authentique, des maisons avec jardin accessibles, et une situation géographique idéale entre plusieurs des destinations les plus attractives du Var.",
      "Les maisons à vendre à Ollioules avec jardin et espace extérieur sont particulièrement recherchées par les familles venues de zones urbaines denses. Notre connaissance du marché local nous permet d'identifier les meilleures opportunités et de vous éviter les pièges classiques liés à l'achat d'une maison de caractère provençale (coûts de rénovation, règles d'urbanisme, servitudes...).",
    ],
    estimationTitle: "Estimation immobilière gratuite à Ollioules",
    estimationText: "Dans un marché en évolution comme celui d'Ollioules, la valeur de votre bien mérite d'être évaluée régulièrement. Que vous ayez acquis votre maison il y a 5 ans ou il y a 20 ans, le marché a considérablement évolué. Notre estimation immobilière gratuite vous donne une vision claire et actualisée de la valeur de votre patrimoine — sans engagement, et réalisée sur place dans les 48 heures suivant votre demande.",
    faq: [
      { q: "Quel est le prix moyen au m² à Ollioules en 2026 ?", a: "Environ 2 787 €/m² pour les appartements et 4 091 €/m² pour les maisons. Les prix sont en hausse et restent encore très accessibles par rapport aux communes du littoral." },
      { q: "Ollioules est-elle bien desservie ?", a: "Oui. La commune est traversée par la N8 qui relie Toulon et Sanary en 10-15 minutes. L'accès à l'A57 et à Toulon est rapide. Il n'y a pas de gare mais le réseau de bus Mistral couvre la commune." },
      { q: "Pourquoi investir à Ollioules plutôt qu'à La Seyne ou Toulon ?", a: "Ollioules est idéale pour les acheteurs cherchant l'authenticité d'un village provençal avec de l'espace. Les prix y sont parmi les plus accessibles de la zone avec un fort potentiel de valorisation." },
      { q: "Y a-t-il de la demande locative à Ollioules ?", a: "La demande locative longue durée est présente, notamment de la part des actifs travaillant à Toulon ou Sanary. La location saisonnière est moins développée qu'en bord de mer mais possible." },
      { q: "Quels sont les atouts principaux d'Ollioules ?", a: "Son village médiéval authentique, ses gorges remarquables, son marché provençal, la qualité de ses écoles et sa situation au cœur du triangle Toulon-Sanary-Bandol." },
      { q: "Comment se déroule une estimation immobilière à Ollioules avec vous ?", a: "Nous venons chez vous sous 48h pour une visite complète. Après analyse du marché local, vous recevez notre avis de valeur gratuit et sans engagement." },
      { q: "Y a-t-il des biens atypiques à Ollioules ?", a: "Oui, des mas provençaux, des bastides avec terrain, des maisons de village rénovées... C'est précisément ce type de biens qui attire une clientèle de plus en plus exigeante. Nous les valorisons avec soin." },
      { q: "Ollioules a-t-elle un potentiel de revente intéressant ?", a: "Oui. Les prix bas actuels et la tendance haussière offrent un potentiel de plus-value réel sur 5 à 10 ans, d'autant que la commune bénéficie de projets de revalorisation de son centre-village." },
    ],
  },
];
