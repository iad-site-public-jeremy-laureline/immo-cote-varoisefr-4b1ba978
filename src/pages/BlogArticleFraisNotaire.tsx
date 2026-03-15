import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/fn-hero.jpg";

const faqItems = [
  {
    q: "Combien coûtent les frais de notaire en 2026 pour un achat dans l'ancien ?",
    a: "Entre 7 et 8,5 % du prix d'achat pour un logement ancien. Pour un bien à 350 000 €, comptez entre 24 500 € et 29 750 €. Ces frais sont à régler le jour de la signature de l'acte définitif chez le notaire.",
  },
  {
    q: "Peut-on négocier les frais de notaire ?",
    a: "La part fixée par l'État (droits de mutation, ~80 % du total) n'est pas négociable. En revanche, les émoluments du notaire peuvent faire l'objet d'une remise de 10 % maximum pour les transactions supérieures à 150 000 €. Cette remise est à la discrétion du notaire.",
  },
  {
    q: "Les frais de notaire sont-ils différents dans le Var ?",
    a: "Le taux varie légèrement selon les départements car il dépend en partie du taux de taxe départementale. Dans le Var (83), le taux applicable en 2026 est comparable à la moyenne nationale, autour de 7 à 8,5 % dans l'ancien.",
  },
  {
    q: "Peut-on déduire les meubles des frais de notaire ?",
    a: "Oui. Si le bien est vendu avec des équipements (cuisine équipée, climatisation, etc.), une liste de meubles avec estimation peut réduire l'assiette taxable. Les droits de mutation ne s'appliquent pas sur la valeur du mobilier.",
  },
  {
    q: "Les frais de notaire sont-ils finançables par le prêt immobilier ?",
    a: "En règle générale, les banques exigent que les frais de notaire soient couverts par l'apport personnel. Certains établissements acceptent de les financer pour les très bons profils (prêt à 110 %). Parlez-en à votre courtier.",
  },
  {
    q: "Quand doit-on payer les frais de notaire ?",
    a: "Le jour de la signature de l'acte authentique chez le notaire. Vous versez la totalité des fonds (prix du bien + frais de notaire) à cette occasion. Le notaire se charge ensuite de répartir les fonds.",
  },
  {
    q: "Y a-t-il des aides pour réduire les frais de notaire pour un premier achat ?",
    a: "Le PTZ (Prêt à Taux Zéro) peut aider à financer l'acquisition mais ne réduit pas directement les frais de notaire. L'achat dans le neuf reste la solution la plus efficace pour réduire ces frais (2-3 % vs 7-8,5 % dans l'ancien).",
  },
];

const BlogArticleFraisNotaire = () => {
  useEffect(() => {
    document.title = "Frais de notaire 2026 : calcul complet | Jérémy et Laureline";
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Frais de notaire 2026 : combien prévoir pour votre achat immobilier ?",
    datePublished: "2026-03-15",
    author: [
      { "@type": "Person", name: "Jérémy Vieira" },
      { "@type": "Person", name: "Laureline Loheac" },
    ],
    publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" },
      { "@type": "ListItem", position: 3, name: "Frais de notaire 2026" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-[70px]">
        {/* Hero */}
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="frais de notaire achat immobilier 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4">
              <Link to="/" className="hover:text-sand transition-colors">Accueil</Link>
              <span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-sand transition-colors">Blog</Link>
              <span className="mx-2">›</span>
              <span className="text-primary-foreground/70">Frais de notaire 2026</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight"
            >
              Frais de notaire 2026 : combien prévoir pour votre achat immobilier ?
            </motion.h1>
            <div className="flex items-center gap-4 mt-5 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1.5"><CalendarDays size={14} /> 15 mars 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min de lecture</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="bg-background section-padding">
          <div className="container-narrow mx-auto max-w-3xl px-4">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sand hover:text-sand-hover text-sm mb-8 transition-colors">
              <ArrowLeft size={14} /> Retour au blog
            </Link>

            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Vous êtes en train de préparer votre achat immobilier sur la Côte Varoise — un appartement à <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link>, une maison à <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours-les-Plages</Link>, un bien à <Link to="/bandol" className="text-sand font-medium hover:underline">Bandol</Link> — et vous vous demandez combien prévoir au total ? Les <strong>frais de notaire en 2026</strong> représentent une part significative du budget d'acquisition que beaucoup de primo-accédants sous-estiment. Ce guide complet vous explique exactement comment ils se calculent, ce qu'ils comprennent, et comment les anticiper.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les frais de notaire : c'est quoi exactement ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le terme <strong>frais de notaire</strong> est souvent mal compris. Dans les faits, ce que l'on appelle « frais de notaire » ne correspond qu'en petite partie à la rémunération du notaire lui-même. La grande majorité de ces frais est composée de taxes collectées par le notaire pour le compte de l'État et des collectivités locales. On parle officiellement de <strong>droits de mutation à titre onéreux (DMTO)</strong>, qui représentent à eux seuls environ 80 % du total.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les frais d'achat immobilier se décomposent en trois grandes catégories : les <strong>droits de mutation</strong> (taxes reversées à l'État et au département), les <strong>émoluments du notaire</strong> (sa rémunération propre, réglementée par l'État), et les <strong>débours</strong> (frais avancés par le notaire pour réaliser les formalités : cadastre, publicité foncière, documents d'urbanisme...).
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Quel taux de frais de notaire en 2026 : ancien vs neuf ?</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="text-left p-3 font-medium">Type de bien</th>
                    <th className="text-left p-3 font-medium">Taux frais de notaire 2026</th>
                    <th className="text-left p-3 font-medium">Exemple pour 300 000 €</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Logement ancien (&gt; 5 ans)</td>
                    <td className="p-3 font-semibold text-navy">7 à 8,5 % du prix</td>
                    <td className="p-3 text-foreground/80">21 000 € à 25 500 €</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-3 text-foreground/80">Logement neuf ou VEFA</td>
                    <td className="p-3 font-semibold text-navy">2 à 3 % du prix</td>
                    <td className="p-3 text-foreground/80">6 000 € à 9 000 €</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Terrain à bâtir</td>
                    <td className="p-3 font-semibold text-navy">7 à 8,5 % du prix</td>
                    <td className="p-3 text-foreground/80">7 000 € à 8 500 € (100k€)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sur la Côte Varoise, la grande majorité des transactions portent sur l'ancien. Pour un appartement acheté 350 000 € à Sanary-sur-Mer, les frais de notaire représentent ainsi entre 24 500 € et 29 750 €. Pour une maison à Six-Fours-les-Plages à 500 000 €, comptez entre 35 000 € et 42 500 €.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Comment se calculent les frais de notaire en détail ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le <strong>calcul des frais de notaire</strong> repose sur plusieurs composantes cumulées. Les <strong>droits de mutation</strong> constituent la part la plus importante : environ 5,09 % pour le Var, répartis entre le département (3,80 %), la commune (1,20 %) et l'État (0,09 %). Les <strong>émoluments du notaire</strong> représentent environ 0,8 % du prix pour les transactions supérieures à 60 000 €. Les <strong>débours</strong> ajoutent généralement 800 à 1 200 €. Enfin, la <strong>contribution de sécurité immobilière</strong> complète le total (environ 0,1 % du prix).
            </p>
            <div className="bg-sand-light border-l-4 border-sand rounded-r-lg p-5 my-6">
              <p className="text-foreground/80 text-sm leading-relaxed">
                <strong>Bonne nouvelle :</strong> pour les transactions supérieures à 150 000 €, le notaire peut accorder une <strong>remise sur ses émoluments dans la limite de 10 %</strong>. C'est négociable. En revanche, les droits de mutation — la part la plus importante — sont fixes et non négociables car reversés directement à l'État.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Peut-on réduire les frais de notaire lors d'un achat immobilier ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Oui, plusieurs stratégies légales permettent de <strong>réduire les frais de notaire</strong> :</p>
            <div className="space-y-4 mb-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">1. Déduire les meubles et équipements du prix de vente</p>
                <p className="text-foreground/80 text-sm leading-relaxed">Si le bien est vendu avec du mobilier (cuisines équipées, placards sur mesure, climatisation...), il est possible de les déduire du prix de vente immobilier. Les droits de mutation ne s'appliquent pas sur la valeur des meubles. Cette déduction peut représenter 3 000 à 15 000 € selon les équipements, soit une économie de 200 à 1 000 € sur les frais.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">2. Exclure les honoraires du conseiller immobilier du prix d'achat</p>
                <p className="text-foreground/80 text-sm leading-relaxed">Si les honoraires du conseiller sont mentionnés à la charge de l'acheteur de façon distincte dans l'acte, ils ne sont pas intégrés dans l'assiette de calcul des droits de mutation. Cela peut générer une économie significative.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">3. Acheter dans le neuf</p>
                <p className="text-foreground/80 text-sm leading-relaxed">Le taux réduit à 2-3 % pour les logements neufs ou en VEFA représente une économie de 4 à 5 % par rapport à l'ancien pour un même prix d'achat.</p>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Frais de notaire et prêt immobilier : comment les financer ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les frais de notaire représentent l'essentiel de ce que les banques appellent les « frais annexes ». La plupart des établissements bancaires exigent que ces frais soient couverts par <strong>l'apport personnel</strong> de l'acheteur. La règle communément admise est d'avoir un apport minimum correspondant à 10 % du prix du bien.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Il existe cependant des <strong>prêts immobiliers dits « à 110 % »</strong> qui financent à la fois le prix du bien et les frais annexes. Ils sont réservés aux profils très solides (CDI, revenus élevés, faible endettement). Commencez par une <Link to="/estimation" className="text-sand font-medium hover:underline">estimation de votre capacité d'acquisition</Link>.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Exemples concrets de frais de notaire sur la Côte Varoise en 2026</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="text-left p-3 font-medium">Bien</th>
                    <th className="text-left p-3 font-medium">Localisation</th>
                    <th className="text-left p-3 font-medium">Prix</th>
                    <th className="text-left p-3 font-medium">Frais estimés (7,5 %)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Appartement 2 pièces</td>
                    <td className="p-3 text-foreground/80">Sanary-sur-Mer</td>
                    <td className="p-3 text-foreground/80">380 000 €</td>
                    <td className="p-3 font-semibold text-navy">~28 500 €</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-3 text-foreground/80">Maison 5 pièces jardin</td>
                    <td className="p-3 text-foreground/80">Six-Fours-les-Plages</td>
                    <td className="p-3 text-foreground/80">520 000 €</td>
                    <td className="p-3 font-semibold text-navy">~39 000 €</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Appartement 3 pièces</td>
                    <td className="p-3 text-foreground/80">Toulon Mourillon</td>
                    <td className="p-3 text-foreground/80">280 000 €</td>
                    <td className="p-3 font-semibold text-navy">~21 000 €</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-3 text-foreground/80">Villa avec piscine</td>
                    <td className="p-3 text-foreground/80">Bandol</td>
                    <td className="p-3 text-foreground/80">850 000 €</td>
                    <td className="p-3 font-semibold text-navy">~63 750 €</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Studio investissement</td>
                    <td className="p-3 text-foreground/80">La Seyne-sur-Mer</td>
                    <td className="p-3 text-foreground/80">110 000 €</td>
                    <td className="p-3 font-semibold text-navy">~8 250 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-foreground/60 text-sm italic mb-8">
              Note : ces estimations sont calculées sur la base d'un taux moyen de 7,5 % applicable dans le Var en 2026. Le taux réel dépend du montant exact de la transaction.
            </p>

            {/* CTA */}
            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous préparez votre achat immobilier sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Demandez votre estimation et un accompagnement complet — nous calculons avec vous le budget total réel, frais inclus.</p>
              <Button asChild variant="sand" size="lg">
                <Link to="/estimation">Démarrer votre projet →</Link>
              </Button>
            </div>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Frais de notaire 2026</h2>
            <Accordion type="single" collapsible className="mb-12">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-navy font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogArticleFraisNotaire;
