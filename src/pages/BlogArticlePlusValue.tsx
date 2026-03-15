import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/pv-hero-notaire.jpg";
import calculImg from "@/assets/blog/pv-calcul.jpg";
import coteVaroiseImg from "@/assets/blog/pv-cote-varoise.jpg";
import ctaImg from "@/assets/blog/pv-conseillers-cta.jpg";

const faqItems = [
  {
    q: "Dois-je payer une plus-value si je vends ma résidence principale ?",
    a: "Non. La vente de votre résidence principale est totalement exonérée d'impôt sur la plus-value immobilière, quelle que soit la durée de détention du bien et quel que soit le montant de votre gain. C'est l'exonération la plus favorable du droit immobilier français.",
  },
  {
    q: "Quel est le taux d'imposition sur la plus-value immobilière d'une résidence secondaire en 2026 ?",
    a: "Le taux global est de 36,2 % : 19 % d'impôt sur le revenu + 17,2 % de prélèvements sociaux. Des abattements progressifs s'appliquent à partir de la 6e année de détention, jusqu'à l'exonération totale de l'IR après 22 ans et des PS après 30 ans.",
  },
  {
    q: "Comment réduire ma plus-value immobilière légalement ?",
    a: "Plusieurs leviers permettent de réduire votre plus-value immobilière imposable : déduire vos frais d'acquisition (au réel ou au forfait de 7,5 %), déduire vos travaux (au réel sur factures d'entreprise ou au forfait de 15 % si détention > 5 ans), et profiter du système d'abattement pour durée de détention. Plus votre bien est détenu longtemps, moins vous payez.",
  },
  {
    q: "Quand suis-je totalement exonéré de plus-value immobilière ?",
    a: "Pour l'impôt sur le revenu (19 %), l'exonération totale intervient après 22 ans de détention. Pour les prélèvements sociaux (17,2 %), il faut attendre 30 ans. La résidence principale, elle, est exonérée immédiatement, sans condition de durée.",
  },
  {
    q: "Qui calcule et déclare la plus-value immobilière ?",
    a: "C'est le notaire chargé de la vente qui calcule la plus-value, vérifie les exonérations possibles, prélève l'impôt sur le produit de la vente et le reverse au Trésor Public. Vous n'avez pas de démarche à effectuer vous-même, sauf reporter le montant indiqué par le notaire sur votre déclaration de revenus annuelle.",
  },
  {
    q: "La surtaxe sur les grosses plus-values s'applique-t-elle souvent sur la Côte Varoise ?",
    a: "Oui, fréquemment. Sur des marchés comme Sanary-sur-Mer ou Bandol, des biens achetés il y a 10-15 ans ont parfois doublé de valeur. Une plus-value imposable de 50 000 € ou plus déclenche la surtaxe progressive (2 % à 6 %). La déduction maximale des travaux sur justificatifs est souvent le meilleur moyen de passer sous ce seuil.",
  },
  {
    q: "Que se passe-t-il si je revends un investissement locatif en LMNP ?",
    a: "Depuis la réforme 2025, si vous détenez votre bien en location meublée non professionnelle (LMNP), les amortissements que vous avez déduits de vos revenus locatifs doivent désormais être réintégrés dans le calcul de votre plus-value imposable. Cette règle peut augmenter significativement la fiscalité à la revente. Consultez votre comptable ou notaire avant toute décision.",
  },
  {
    q: "Comment calculer ma plus-value avant de vendre dans le Var ?",
    a: "Nous vous recommandons de commencer par une estimation précise de votre bien, puis de consulter votre notaire pour simuler votre plus-value sur la base du prix estimé. Cette démarche gratuite vous permettra de connaître le net vendeur réel avant de prendre votre décision de vente.",
  },
];

const BlogArticlePlusValue = () => {
  useEffect(() => {
    document.title = "Plus-value immobilière 2026 : calcul et exonérations | Jérémy et Laureline";
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
    headline: "Plus-value immobilière en 2026 : comment la calculer et la réduire ?",
    datePublished: "2026-03-15",
    author: [
      { "@type": "Person", name: "Jérémy Vieira" },
      { "@type": "Person", name: "Laureline Loheac" },
    ],
    publisher: {
      "@type": "Organization",
      name: "Jérémy & Laureline Immobilier",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" },
      { "@type": "ListItem", position: 3, name: "Plus-value immobilière 2026" },
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
          <img src={heroImg} alt="calcul plus-value immobilière vente notaire 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4">
              <Link to="/" className="hover:text-sand transition-colors">Accueil</Link>
              <span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-sand transition-colors">Blog</Link>
              <span className="mx-2">›</span>
              <span className="text-primary-foreground/70">Plus-value immobilière 2026</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight"
            >
              Plus-value immobilière en 2026 : comment la calculer et la réduire ?
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

            {/* Intro */}
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Vous vendez un appartement à <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link>, une maison à <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours-les-Plages</Link> ou un investissement locatif à Toulon, et vous vous demandez quelle sera la fiscalité sur votre gain ? La <strong>plus-value immobilière en 2026</strong> concerne tous les vendeurs qui cèdent un bien à un prix supérieur à leur prix d'achat. Sur la Côte Varoise, où les prix ont fortement progressé ces dernières années, c'est une question que nous rencontrons au quotidien. Voici un guide complet, clair et actualisé pour comprendre le calcul, les taux, les abattements et les exonérations applicables à votre situation en 2026.
            </p>

            {/* Qu'est-ce que la plus-value */}
            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Qu'est-ce que la plus-value immobilière ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La <strong>plus-value immobilière</strong> est le gain réalisé lors de la vente d'un bien immobilier. Elle correspond à la différence positive entre le prix de vente et le prix d'acquisition du bien. Si vous avez acheté un appartement 200 000 € et que vous le revendez 320 000 €, votre plus-value brute est de 120 000 €. Simple en apparence, mais le calcul réel est plus nuancé — et souvent plus avantageux — car plusieurs éléments viennent réduire cette base imposable.
            </p>
            <div className="bg-sand-light border-l-4 border-sand rounded-r-lg p-5 my-6">
              <p className="text-foreground/80 text-sm leading-relaxed">
                <strong>Important :</strong> la <strong>plus-value immobilière sur la résidence principale</strong> bénéficie d'une exonération totale d'impôt sur le revenu et de prélèvements sociaux, sans condition de durée de détention. En revanche, les résidences secondaires, les investissements locatifs et les terrains à bâtir sont soumis à la taxation selon des règles précises.
              </p>
            </div>

            {/* Calcul */}
            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Comment calculer votre plus-value immobilière en 2026 ?</h2>
            <img src={calculImg} alt="comment calculer plus-value immobilière 2026 exemple" className="w-full rounded-xl mb-6" loading="lazy" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le <strong>calcul de la plus-value immobilière</strong> repose sur une formule précise : <strong>Plus-value brute = Prix de vente – Prix d'acquisition (majoré)</strong>. Chaque élément mérite une attention particulière, car des postes souvent négligés permettent de réduire significativement l'assiette imposable.
            </p>

            <h3 className="font-display text-xl font-semibold text-navy mb-3 mt-8">Le prix de vente à retenir</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Pour le calcul de la plus-value immobilière, on retient le prix stipulé dans l'acte authentique, diminué des frais de cession justifiés : frais de diagnostics obligatoires (DPE, amiante, plomb…), et dans certains cas les honoraires du conseiller immobilier si contractuellement à la charge du vendeur.
            </p>

            <h3 className="font-display text-xl font-semibold text-navy mb-3 mt-8">Le prix d'acquisition majoré — les éléments déductibles</h3>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="text-left p-3 font-medium">Élément déductible</th>
                    <th className="text-left p-3 font-medium">Forfaitaire</th>
                    <th className="text-left p-3 font-medium">Réel</th>
                    <th className="text-left p-3 font-medium">Condition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Frais d'acquisition (notaire)</td>
                    <td className="p-3 text-foreground/80">7,5 % du prix d'achat</td>
                    <td className="p-3 text-foreground/80">Montant réel justifié</td>
                    <td className="p-3 text-foreground/80">Au choix du vendeur</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-3 text-foreground/80">Travaux (rénovation, agrandissement)</td>
                    <td className="p-3 text-foreground/80">15 % du prix d'achat</td>
                    <td className="p-3 text-foreground/80">Montant réel sur facture</td>
                    <td className="p-3 text-foreground/80">Forfait si détention {"> "}5 ans</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-light rounded-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Exemple chiffré :</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Vous avez acheté un appartement à <Link to="/bandol" className="text-sand font-medium hover:underline">Bandol</Link> 250 000 € en 2015, payé 18 750 € de frais de notaire et réalisé 30 000 € de travaux. Vous le revendez 420 000 € en 2026.<br />
                <strong>Prix d'acquisition majoré :</strong> 250 000 + 18 750 + 30 000 = 298 750 €<br />
                <strong>Plus-value brute :</strong> 420 000 – 298 750 = <strong>121 250 €</strong>
              </p>
            </div>

            {/* Taux */}
            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Quel taux d'imposition sur la plus-value immobilière en 2026 ?</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="text-left p-3 font-medium">Prélèvement</th>
                    <th className="text-left p-3 font-medium">Taux 2026</th>
                    <th className="text-left p-3 font-medium">Qui est concerné ?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Impôt sur le revenu (IR)</td>
                    <td className="p-3 font-semibold text-navy">19 %</td>
                    <td className="p-3 text-foreground/80">Résidences secondaires, biens locatifs, terrains</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-3 text-foreground/80">Prélèvements sociaux (PS)</td>
                    <td className="p-3 font-semibold text-navy">17,2 %</td>
                    <td className="p-3 text-foreground/80">Résidences secondaires, biens locatifs, terrains</td>
                  </tr>
                  <tr className="border-t border-border bg-sand-light">
                    <td className="p-3 font-semibold text-navy">TOTAL taux plein</td>
                    <td className="p-3 font-bold text-navy">36,2 %</td>
                    <td className="p-3 text-foreground/80">Avant abattements pour durée de détention</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-sand-light border-l-4 border-sand rounded-r-lg p-5 my-6">
              <p className="text-foreground/80 text-sm leading-relaxed">
                <strong>Attention :</strong> si votre plus-value imposable dépasse <strong>50 000 €</strong>, une <strong>surtaxe progressive</strong> s'applique (de 2 % à 6 %). Sur la Côte Varoise, où les biens ont fortement valorisé, ce seuil est souvent atteint pour les vendeurs de résidences secondaires achetées avant 2015.
              </p>
            </div>

            {/* Abattements */}
            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les abattements pour durée de détention</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système d'<strong>abattement pour durée de détention</strong> est l'outil fiscal le plus puissant dont dispose un vendeur. Plus vous avez détenu votre bien longtemps, moins vous payez d'impôt.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="text-left p-3 font-medium">Durée de détention</th>
                    <th className="text-left p-3 font-medium">Abattement IR (19 %)</th>
                    <th className="text-left p-3 font-medium">Abattement PS (17,2 %)</th>
                    <th className="text-left p-3 font-medium">Taux effectif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">Moins de 6 ans</td>
                    <td className="p-3 text-foreground/80">0 %</td>
                    <td className="p-3 text-foreground/80">0 %</td>
                    <td className="p-3 font-semibold text-navy">36,2 % (plein)</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-3 text-foreground/80">6 à 11 ans</td>
                    <td className="p-3 text-foreground/80">+6 %/an</td>
                    <td className="p-3 text-foreground/80">+1,65 %/an</td>
                    <td className="p-3 text-foreground/80">Réduction progressive</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 text-foreground/80">12 à 17 ans</td>
                    <td className="p-3 text-foreground/80">72 % abattement</td>
                    <td className="p-3 text-foreground/80">+1,65 %/an</td>
                    <td className="p-3 text-foreground/80">~17 % environ</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-3 text-foreground/80">Après 22 ans</td>
                    <td className="p-3 font-semibold text-sand">100 % — IR exonéré</td>
                    <td className="p-3 text-foreground/80">~72 %</td>
                    <td className="p-3 text-foreground/80">Seuls PS restants</td>
                  </tr>
                  <tr className="border-t border-border bg-sand-light">
                    <td className="p-3 font-semibold text-navy">Après 30 ans</td>
                    <td className="p-3 font-semibold text-sand">100 %</td>
                    <td className="p-3 font-semibold text-sand">100 %</td>
                    <td className="p-3 font-bold text-sand">EXONÉRATION TOTALE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4 text-sm italic">
              Note : le projet de loi de finances 2026 prévoyait de réduire le délai d'exonération IR de 22 à 17 ans. Son application effective doit être confirmée par votre notaire selon l'état d'avancement législatif au moment de votre vente.
            </p>

            {/* Exonérations */}
            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les exonérations applicables à votre plus-value immobilière</h2>
            <ol className="list-decimal list-inside space-y-4 text-foreground/80 leading-relaxed mb-6">
              <li><strong>Résidence principale :</strong> exonération totale, sans condition de durée de détention.</li>
              <li><strong>Première cession d'une résidence secondaire :</strong> si vous n'avez pas été propriétaire de votre résidence principale au cours des 4 années précédentes, et que vous réemployez l'intégralité du produit dans l'achat de votre résidence principale sous 24 mois.</li>
              <li><strong>Petites cessions :</strong> prix de vente inférieur à 15 000 € (30 000 € pour un couple).</li>
              <li><strong>Cas spécifiques :</strong> retraités sous conditions de ressources, personnes en établissement d'accueil, non-résidents européens… Chaque situation mérite une analyse personnalisée.</li>
            </ol>

            {/* Angle local */}
            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Plus-value immobilière sur la Côte Varoise : ce qu'il faut anticiper</h2>
            <img src={coteVaroiseImg} alt="vente maison Côte Varoise plus-value immobilière Var" className="w-full rounded-xl mb-6" loading="lazy" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sur la Côte Varoise, les propriétaires qui détiennent un bien depuis 10 ou 15 ans se trouvent souvent face à des <strong>plus-values immobilières significatives</strong>. Le marché de <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link>, <Link to="/bandol" className="text-sand font-medium hover:underline">Bandol</Link> ou <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours-les-Plages</Link> a enregistré des hausses de prix importantes depuis 2012-2015, avec des biens qui ont parfois doublé de valeur.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Nos conseils concrets pour réduire votre <strong>plus-value immobilière dans le Var</strong> :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed mb-6">
              <li>Rassemblez toutes les factures de travaux réalisés (entreprises, pas auto-construction) pour maximiser le montant déductible.</li>
              <li>Vérifiez si vous êtes dans la tranche des abattements les plus intéressants (6 à 21 ans : 6 % d'abattement IR par an).</li>
              <li>Si vous êtes propriétaire depuis plus de 17-22 ans, l'exonération IR se rapproche : simulez avec votre notaire.</li>
              <li>Si vous hésitez entre vendre et louer en saisonnier, consultez-nous — nous pouvons vous présenter les deux scénarios chiffrés en partenariat avec <a href="https://ouikey.fr" target="_blank" rel="noopener noreferrer" className="text-sand font-medium hover:underline">Ouikey</a>.</li>
            </ul>

            {/* Rôle du notaire */}
            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Le rôle du notaire dans le calcul de la plus-value immobilière</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Bonne nouvelle : vous n'avez pas à calculer et déclarer vous-même votre <strong>plus-value immobilière</strong>. C'est le <strong>notaire</strong> chargé de la vente qui effectue l'intégralité des formalités. Il calcule la plus-value nette imposable, applique les abattements, vérifie les exonérations, prélève l'impôt directement sur le produit de la vente et le reverse à l'administration fiscale.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Votre seule obligation complémentaire : reporter le montant de la plus-value sur votre déclaration de revenus annuelle. Le notaire vous communique ce montant.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Un conseil que nous donnons systématiquement à nos clients vendeurs : <strong>rencontrez votre notaire en amont de la mise en vente</strong> pour simuler votre plus-value. Cette simulation gratuite vous permettra d'anticiper le montant net réel que vous percevrez.
            </p>

            {/* CTA */}
            <div className="relative rounded-2xl overflow-hidden my-12">
              <img src={ctaImg} alt="conseillers immobiliers Sanary Six-Fours estimation gratuite 2026" className="w-full h-64 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy/80 flex flex-col items-center justify-center text-center px-6">
                <p className="text-primary-foreground font-display text-xl md:text-2xl font-bold mb-2">
                  Vous vendez un bien sur la Côte Varoise ?
                </p>
                <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg">
                  Contactez-nous pour une estimation gratuite et sans engagement — nous vous accompagnons de A à Z.
                </p>
                <Link to="/estimation">
                  <Button variant="sand" size="lg" className="gap-2">
                    Demander votre estimation gratuite <ArrowLeft size={16} className="rotate-180" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Plus-value immobilière 2026</h2>
            <Accordion type="single" collapsible className="mb-12">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-navy font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Back */}
            <div className="border-t border-border pt-8 flex justify-between items-center">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sand hover:text-sand-hover text-sm transition-colors">
                <ArrowLeft size={14} /> Retour au blog
              </Link>
              <Link to="/estimation">
                <Button variant="navy-outline" size="sm">Estimation gratuite</Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogArticlePlusValue;
