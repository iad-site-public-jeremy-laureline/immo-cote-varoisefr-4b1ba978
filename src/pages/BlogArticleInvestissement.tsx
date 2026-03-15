import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/il-hero.jpg";

const faqItems = [
  { q: "Quel est le meilleur secteur pour investir sur la Côte Varoise en 2026 ?", a: "Cela dépend de votre stratégie. Pour le rendement locatif annuel : Toulon et La Seyne-sur-Mer. Pour la location saisonnière et la valorisation patrimoniale : Sanary-sur-Mer, Six-Fours (secteur Brusc) et Bandol." },
  { q: "Quel rendement locatif espérer sur la Côte Varoise ?", a: "Entre 2 et 6,5 % brut selon la commune et le type de location. Les rendements les plus élevés s'obtiennent à Toulon et La Seyne en location annuelle." },
  { q: "La location saisonnière est-elle réglementée dans le Var ?", a: "Oui. La déclaration en mairie est obligatoire pour les résidences principales louées plus de 120 jours par an. Certaines communes imposent une autorisation de changement d'usage pour les résidences secondaires." },
  { q: "Le LMNP est-il encore intéressant en 2026 après la réforme ?", a: "Oui, le régime LMNP reste attractif pour la réduction de l'imposition locative. La réforme 2025 sur la réintégration des amortissements en cas de revente est un facteur à intégrer." },
  { q: "Faut-il investir seul ou via une SCI sur la Côte Varoise ?", a: "Cela dépend de votre situation patrimoniale et familiale. La SCI est souvent recommandée pour les investissements à plusieurs ou pour faciliter la transmission." },
  { q: "Comment gérer la location saisonnière sans s'en occuper ?", a: "Notre partenaire Ouikey prend en charge l'intégralité de la gestion locative saisonnière : publication des annonces, accueil, ménage, linge, maintenance." },
  { q: "Quel apport faut-il pour investir dans l'immobilier locatif dans le Var ?", a: "Les banques exigent généralement 10 à 20 % d'apport. Pour un bien à 200 000 €, prévoyez 20 000 à 40 000 € d'apport + 14 000 à 17 000 € de frais de notaire." },
  { q: "Comment trouver les meilleures opportunités d'investissement ?", a: "En travaillant avec des conseillers immobiliers implantés localement, vous accédez à des biens avant leur diffusion publique et à une analyse précise du marché par secteur." },
];

const BlogArticleInvestissement = () => {
  useEffect(() => { document.title = "Investissement locatif Côte Varoise 2026 | Jérémy et Laureline"; window.scrollTo(0, 0); }, []);
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Investir dans l'immobilier locatif sur la Côte Varoise : notre guide 2026", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "Investissement locatif 2026" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="investissement locatif Côte Varoise Var 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4"><Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span><Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span><span className="text-primary-foreground/70">Investissement locatif 2026</span></nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">Investir dans l'immobilier locatif sur la Côte Varoise : notre guide 2026</motion.h1>
            <div className="flex items-center gap-4 mt-5 text-primary-foreground/60 text-sm"><span className="flex items-center gap-1.5"><CalendarDays size={14} /> 15 mars 2026</span><span className="flex items-center gap-1.5"><Clock size={14} /> 9 min de lecture</span></div>
          </div>
        </div>
        <article className="bg-background section-padding">
          <div className="container-narrow mx-auto max-w-3xl px-4">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sand hover:text-sand-hover text-sm mb-8 transition-colors"><ArrowLeft size={14} /> Retour au blog</Link>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">La Côte Varoise est l'une des destinations les plus attractives de France pour l'<strong>investissement locatif immobilier en 2026</strong>. Soleil garanti, demande touristique soutenue, qualité de vie reconnue : les fondamentaux sont solides. Voici notre guide complet pour investir intelligemment.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Pourquoi investir sur la Côte Varoise en 2026 ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">La région réunit : une demande locative annuelle soutenue (population active, étudiants, personnels militaires à <Link to="/toulon" className="text-sand font-medium hover:underline">Toulon</Link>), une demande touristique forte de mai à octobre, et des prix offrant des rendements corrects comparativement aux grandes métropoles. Deux stratégies coexistent : la <strong>location longue durée</strong> (revenus réguliers) et la <strong>location courte durée</strong> (revenus plus élevés).</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Rendements locatifs par commune en 2026</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead><tr className="bg-navy text-primary-foreground"><th className="text-left p-3 font-medium">Commune</th><th className="text-left p-3 font-medium">Prix moyen (€/m²)</th><th className="text-left p-3 font-medium">Rendement brut</th><th className="text-left p-3 font-medium">Potentiel saisonnier</th></tr></thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">Toulon (Mourillon)</td><td className="p-3 text-foreground/80">3 500–5 500</td><td className="p-3 font-semibold text-navy">4 à 6 %</td><td className="p-3 text-foreground/80">Moyen</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">La Seyne-sur-Mer</td><td className="p-3 text-foreground/80">2 800–4 500</td><td className="p-3 font-semibold text-navy">4 à 6,5 %</td><td className="p-3 text-foreground/80">Bon</td></tr>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">Six-Fours-les-Plages</td><td className="p-3 text-foreground/80">4 200–6 500</td><td className="p-3 font-semibold text-navy">3 à 4,5 %</td><td className="p-3 text-foreground/80">Très bon</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">Sanary-sur-Mer</td><td className="p-3 text-foreground/80">5 000–9 500</td><td className="p-3 font-semibold text-navy">2 à 3,5 %</td><td className="p-3 text-foreground/80">Excellent</td></tr>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">Bandol</td><td className="p-3 text-foreground/80">5 000–10 000</td><td className="p-3 font-semibold text-navy">2 à 3 %</td><td className="p-3 text-foreground/80">Excellent</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">Ollioules</td><td className="p-3 text-foreground/80">2 500–4 000</td><td className="p-3 font-semibold text-navy">3,5 à 5 %</td><td className="p-3 text-foreground/80">Faible</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Location longue durée vs saisonnière</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">La location saisonnière peut générer <strong>2 à 3 fois plus de revenus</strong> sur les communes balnéaires en haute saison. En contrepartie, elle demande une gestion active. Notre partenaire <a href="https://ouikey.fr" target="_blank" rel="noopener noreferrer" className="text-sand font-medium hover:underline inline-flex items-center gap-1">Ouikey <ExternalLink size={12} /></a> prend en charge l'intégralité de cette gestion.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Fiscalité de l'investissement locatif en 2026</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">Régime LMNP</p><p className="text-foreground/80 text-sm">Permet d'amortir le bien et les meubles. Attention à la réforme 2025 imposant la réintégration des amortissements dans le calcul de la plus-value à la revente.</p></div>
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">Régime foncier (location nue)</p><p className="text-foreground/80 text-sm">Revenus imposés avec déduction des charges réelles. Plus simple, moins optimisant que le LMNP.</p></div>
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">Nouveau statut bailleur privé 2026 (dispositif Jeanbrun)</p><p className="text-foreground/80 text-sm">Permet aux propriétaires bailleurs louant en nu à usage de résidence principale d'amortir le coût d'acquisition. À explorer avec votre conseiller fiscal.</p></div>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Quel bien acheter pour investir ?</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-sand-light rounded-lg p-4"><p className="text-foreground/80 text-sm"><strong>Location saisonnière :</strong> appartements avec extérieur proches de la mer à <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary</Link>, <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours</Link> ou Bandol.</p></div>
              <div className="bg-sand-light rounded-lg p-4"><p className="text-foreground/80 text-sm"><strong>Rendement optimisé :</strong> studios et 2 pièces à Toulon (Mourillon) et <Link to="/la-seyne-sur-mer" className="text-sand font-medium hover:underline">La Seyne-sur-Mer</Link>.</p></div>
              <div className="bg-sand-light rounded-lg p-4"><p className="text-foreground/80 text-sm"><strong>Valorisation patrimoniale :</strong> Sanary-sur-Mer et Bandol pour la stabilité de valeur long terme.</p></div>
            </div>

            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous souhaitez investir sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Demandez notre analyse gratuite — nous évaluons ensemble la rentabilité de votre projet.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Analyser mon projet →</Link></Button>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Investissement locatif 2026</h2>
            <Accordion type="single" collapsible className="mb-12">
              {faqItems.map((item, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left text-navy font-medium">{item.q}</AccordionTrigger><AccordionContent className="text-foreground/70 leading-relaxed">{item.a}</AccordionContent></AccordionItem>))}
            </Accordion>
          </div>
        </article>
      </div>
    </>
  );
};
export default BlogArticleInvestissement;
