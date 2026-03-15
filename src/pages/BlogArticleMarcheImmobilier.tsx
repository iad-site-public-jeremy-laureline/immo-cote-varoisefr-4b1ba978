import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/mi-hero.jpg";

const faqItems = [
  { q: "Les prix de l'immobilier vont-ils baisser dans le Var en 2026 ?", a: "Non, nous n'observons pas de baisse des prix sur la Côte Varoise en 2026. Le marché se stabilise après les années de hausse, avec de légères progressions sur les secteurs les plus dynamiques (La Seyne, Ollioules). Les marchés premium de Sanary et Bandol restent stables à un niveau élevé." },
  { q: "Quelle ville offre le meilleur rapport qualité-prix dans le Var en 2026 ?", a: "Pour une résidence principale, Ollioules et La Seyne-sur-Mer offrent les meilleurs rapports qualité-prix avec un potentiel de valorisation réel. Pour une résidence secondaire, Six-Fours-les-Plages présente un bon équilibre entre attractivité balnéaire et prix plus accessibles." },
  { q: "Est-ce un bon moment pour acheter dans le Var en 2026 ?", a: "Oui. La stabilisation des taux autour de 3,25-3,50 % offre une meilleure visibilité aux acquéreurs. Les prix sont stables et les vendeurs plus ouverts à la négociation qu'en 2021-2022." },
  { q: "Combien de temps faut-il pour vendre un bien dans le Var ?", a: "Entre 45 et 75 jours pour un bien bien positionné sur les marchés actifs (Sanary, Six-Fours). Jusqu'à 3-4 mois pour les biens nécessitant des travaux ou dont le prix est au-dessus du marché." },
  { q: "L'investissement locatif saisonnier est-il toujours rentable dans le Var ?", a: "Oui, la Côte Varoise reste une destination recherchée avec une saison estivale longue (mai-octobre). Le DPE est devenu un critère important pour les locataires." },
  { q: "Sanary-sur-Mer est-elle toujours un bon investissement en 2026 ?", a: "Oui. Sanary présente une demande structurelle forte portée par les résidences secondaires nationales et internationales. L'offre est limitée et les prix restent stables à un niveau élevé." },
  { q: "Y a-t-il des biens accessibles sous 200 000 € sur la Côte Varoise ?", a: "Oui, principalement à Toulon (centre-ville, quartiers nord) et à La Seyne-sur-Mer. Des studios et petits appartements sont disponibles dans cette tranche de prix." },
];

const BlogArticleMarcheImmobilier = () => {
  useEffect(() => {
    document.title = "Marché immobilier Var 2026 : bilan et prix | Jérémy et Laureline";
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Marché immobilier dans le Var en 2026 : bilan, tendances et prix par ville", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "Marché immobilier Var 2026" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="marché immobilier Var 2026 Côte Varoise" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4">
              <Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span>
              <span className="text-primary-foreground/70">Marché immobilier Var 2026</span>
            </nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">
              Marché immobilier dans le Var en 2026 : bilan, tendances et prix par ville
            </motion.h1>
            <div className="flex items-center gap-4 mt-5 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1.5"><CalendarDays size={14} /> 15 mars 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min de lecture</span>
            </div>
          </div>
        </div>

        <article className="bg-background section-padding">
          <div className="container-narrow mx-auto max-w-3xl px-4">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sand hover:text-sand-hover text-sm mb-8 transition-colors"><ArrowLeft size={14} /> Retour au blog</Link>

            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Le <strong>marché immobilier dans le Var en 2026</strong> présente un tableau contrasté selon les communes. <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link>, <Link to="/bandol" className="text-sand font-medium hover:underline">Bandol</Link>, <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours-les-Plages</Link>, <Link to="/toulon" className="text-sand font-medium hover:underline">Toulon</Link>, <Link to="/la-seyne-sur-mer" className="text-sand font-medium hover:underline">La Seyne-sur-Mer</Link> et <Link to="/ollioules" className="text-sand font-medium hover:underline">Ollioules</Link> constituent notre zone d'expertise quotidienne. Voici notre analyse de terrain.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Vue d'ensemble : le marché varois en 2026</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le marché confirme sa position de <strong>marché de qualité</strong> sur le littoral méditerranéen. La demande reste structurellement supérieure à l'offre sur les biens bien situés. La stabilisation des taux de crédit autour de <strong>3,25-3,50 %</strong> sur 20 ans a permis le retour progressif d'acquéreurs. Les biens proposés au juste prix trouvent acquéreur en <strong>45 à 75 jours</strong>. Les biens surévalués stagnent.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Prix au m² par ville sur la Côte Varoise en 2026</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="text-left p-3 font-medium">Commune</th>
                    <th className="text-left p-3 font-medium">Prix moyen appt (€/m²)</th>
                    <th className="text-left p-3 font-medium">Prix moyen maison (€/m²)</th>
                    <th className="text-left p-3 font-medium">Tendance 2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">Sanary-sur-Mer</td><td className="p-3 font-semibold text-navy">5 946</td><td className="p-3 text-foreground/80">6 947</td><td className="p-3 text-foreground/80">Stable +</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">Bandol</td><td className="p-3 font-semibold text-navy">5 365</td><td className="p-3 text-foreground/80">6 017</td><td className="p-3 text-foreground/80">Stable</td></tr>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">Six-Fours-les-Plages</td><td className="p-3 font-semibold text-navy">4 880</td><td className="p-3 text-foreground/80">5 565</td><td className="p-3 text-foreground/80">Stable +</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">Toulon</td><td className="p-3 font-semibold text-navy">3 266</td><td className="p-3 text-foreground/80">4 361</td><td className="p-3 text-foreground/80">Légère hausse</td></tr>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">La Seyne-sur-Mer</td><td className="p-3 font-semibold text-navy">3 385</td><td className="p-3 text-foreground/80">4 262</td><td className="p-3 text-foreground/80">Hausse +5 %</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">Ollioules</td><td className="p-3 font-semibold text-navy">2 787</td><td className="p-3 text-foreground/80">4 091</td><td className="p-3 text-foreground/80">Hausse progressive</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Ce que nous observons côté vendeurs en 2026</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les vendeurs qui réussissent en 2026 sont ceux qui acceptent une <strong>estimation réaliste</strong>, préparent leur bien avec soin (DPE, diagnostics, home staging), sélectionnent un conseiller qui connaît leur secteur précis, et sont réactifs aux offres. <Link to="/estimation" className="text-sand font-medium hover:underline">Commencez par une estimation gratuite</Link>.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Ce que nous observons côté acquéreurs en 2026</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les acquéreurs sont revenus avec plus de discernement. Critères prioritaires : <strong>présence d'un extérieur</strong>, bon DPE (C ou mieux), secteur calme mais accessible. Les résidences secondaires restent très recherchées sur les communes balnéaires. <Link to="/ollioules" className="text-sand font-medium hover:underline">Ollioules</Link> et <Link to="/la-seyne-sur-mer" className="text-sand font-medium hover:underline">La Seyne-sur-Mer</Link> émergent comme les meilleures opportunités.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les opportunités d'investissement en 2026</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">Rendement locatif</p>
                <p className="text-foreground/80 text-sm">La Seyne-sur-Mer et Ollioules offrent les meilleures rentabilités brutes (5 à 7 %) avec un marché locatif annuel soutenu.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">Valorisation patrimoniale</p>
                <p className="text-foreground/80 text-sm">Sanary-sur-Mer et Bandol offrent la plus grande stabilité de valeur sur le long terme, portées par une demande internationale.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">Location saisonnière</p>
                <p className="text-foreground/80 text-sm">Le triangle Six-Fours / Sanary / Bandol offre des taux d'occupation estivaux excellents. Notre partenaire <a href="https://ouikey.fr" target="_blank" rel="noopener noreferrer" className="text-sand font-medium hover:underline inline-flex items-center gap-1">Ouikey <ExternalLink size={12} /></a> gère des dizaines de biens sur ce secteur.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous achetez, vendez ou investissez sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Notre analyse locale 2026 est à votre disposition — demandez votre estimation gratuite et discutons de votre projet.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Parler de mon projet →</Link></Button>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Marché immobilier Var 2026</h2>
            <Accordion type="single" collapsible className="mb-12">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left text-navy font-medium">{item.q}</AccordionTrigger><AccordionContent className="text-foreground/70 leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogArticleMarcheImmobilier;
