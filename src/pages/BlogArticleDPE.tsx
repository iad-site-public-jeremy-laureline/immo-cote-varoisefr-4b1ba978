import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/dpe-hero.jpg";

const faqItems = [
  { q: "Le DPE est-il obligatoire pour vendre un bien immobilier en 2026 ?", a: "Oui, absolument. Le DPE est obligatoire pour toute mise en vente et doit figurer dans l'annonce dès la première publication. Il doit être remis à l'acquéreur au plus tard lors de la signature du compromis. En l'absence de DPE valide, la vente peut être contestée." },
  { q: "Quelle est la durée de validité d'un DPE ?", a: "Un DPE est valable 10 ans en général. Cependant, les DPE réalisés avant le 1er juillet 2021 ont été invalidés par la réforme du calcul. Si votre DPE date d'avant cette date, vous devez en faire réaliser un nouveau." },
  { q: "La réforme du calcul du DPE en 2026 améliore-t-elle ou dégrade-t-elle mon classement ?", a: "Cela dépend du mode de chauffage. Les logements chauffés à l'électricité bénéficient du nouveau coefficient de conversion et voient souvent leur classe s'améliorer. Les logements au gaz ou fioul peuvent dans certains cas voir leur classe se dégrader." },
  { q: "Peut-on vendre un logement classé G en 2026 ?", a: "Oui, la vente est toujours possible. En revanche, un logement classé G ne peut plus être proposé à la location depuis 2025, ce qui réduit le nombre d'acquéreurs potentiels. Un audit énergétique est également obligatoire lors de la vente." },
  { q: "Les travaux de rénovation énergétique avant vente sont-ils rentables ?", a: "Dans la plupart des cas sur la Côte Varoise, oui — si les travaux sont bien ciblés. L'isolation des combles et le remplacement du système de chauffage offrent le meilleur rapport coût/gain de classe DPE." },
  { q: "Qu'est-ce que l'audit énergétique et est-il obligatoire ?", a: "L'audit énergétique est un document plus complet que le DPE : il propose un parcours de travaux par étapes avec coûts estimatifs et gains attendus. Il est obligatoire pour les biens classés F ou G mis en vente." },
  { q: "Le DPE impacte-t-il vraiment le prix de vente sur la Côte Varoise ?", a: "Oui, significativement. Un bien classé F ou G subit une décote de 5 à 15 % par rapport à un bien équivalent bien classé. Sur un appartement à 400 000 €, cela représente 20 000 à 60 000 € de moins." },
  { q: "Comment se passe un DPE sur le Var ?", a: "Un diagnostiqueur certifié visite votre logement, relève les caractéristiques de l'isolation, du chauffage, des fenêtres et calcule la performance énergétique. Le coût d'un DPE dans le Var est généralement compris entre 100 et 200 €." },
];

const BlogArticleDPE = () => {
  useEffect(() => {
    document.title = "DPE 2026 : impact sur votre vente dans le Var | Jérémy et Laureline";
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "DPE 2026 : ce qui change et l'impact sur votre vente dans le Var", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "DPE 2026" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="DPE 2026 diagnostic performance energetique vente" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4">
              <Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span>
              <span className="text-primary-foreground/70">DPE 2026</span>
            </nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">
              DPE 2026 : ce qui change et l'impact sur votre vente dans le Var
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
              Le <strong>DPE en 2026</strong> connaît une évolution significative qui touche directement les vendeurs et acquéreurs sur la Côte Varoise. Depuis le 1er janvier 2026, le mode de calcul du <strong>diagnostic de performance énergétique</strong> intègre un nouveau coefficient de conversion de l'électricité, ce qui modifie les étiquettes DPE de nombreux logements. En tant que conseillers immobiliers à <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours-les-Plages</Link> et <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link>, nous voyons quotidiennement l'impact du DPE sur les décisions des acquéreurs et sur les prix de vente.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Le DPE en 2026 : rappel et nouveautés</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le diagnostic de performance énergétique (DPE) est un document obligatoire lors de toute vente immobilière depuis 2006. Les biens sont classés de A (très performant) à G (très énergivore — les « passoires thermiques »). En 2026, la principale nouveauté réside dans la <strong>révision du coefficient de conversion de l'électricité</strong>, porté de 2,3 à 2,58. Des logements électriques auparavant classés D ou E peuvent désormais être reclassés en C ou D, <strong>améliorant leur étiquette sans travaux</strong>.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Autre nouveauté 2026 : le renforcement du calendrier d'<strong>interdiction de location des passoires thermiques</strong>. Les logements classés G sont interdits à la location depuis 2025, les logements F le seront progressivement.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Quel est l'impact du DPE sur le prix de vente ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sur le marché immobilier de la Côte Varoise, le DPE est désormais un <strong>critère de décision majeur</strong>. Les biens classés A, B ou C se vendent plus rapidement et avec moins de négociation. Les biens classés F ou G subissent une <strong>décote de 5 à 15 %</strong>.
            </p>
            <div className="bg-blue-light rounded-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Exemple concret :</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Pour une villa à <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link> estimée à 600 000 € en classe C, une même villa en classe F peut se négocier à 510 000–540 000 €, soit une <strong>décote de 60 000 à 90 000 €</strong>.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Quelles obligations pour les vendeurs selon la classe DPE ?</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="text-left p-3 font-medium">Classe</th>
                    <th className="text-left p-3 font-medium">Obligations 2026</th>
                    <th className="text-left p-3 font-medium">Impact sur la vente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">A, B, C</td><td className="p-3 text-foreground/80">DPE valide dans l'annonce — aucune obligation supplémentaire</td><td className="p-3 text-foreground/80">Atout commercial fort — vente facilitée</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">D, E</td><td className="p-3 text-foreground/80">DPE obligatoire — mention dans l'annonce</td><td className="p-3 text-foreground/80">Marché standard — négociation normale</td></tr>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">F</td><td className="p-3 text-foreground/80">DPE + audit énergétique obligatoire</td><td className="p-3 text-foreground/80">Décote 5-10 % — travaux souvent demandés</td></tr>
                  <tr className="border-t border-border bg-sand-light"><td className="p-3 font-semibold text-navy">G</td><td className="p-3 text-foreground/80">DPE + audit énergétique + logement non louable</td><td className="p-3 text-foreground/80">Décote 10-15 % — acheteurs plus rares</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Comment améliorer son DPE avant de vendre dans le Var ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Si votre bien est classé F ou G, nous vous conseillons d'évaluer la rentabilité de <strong>travaux ciblés</strong> avant la mise en vente :</p>
            <div className="space-y-3 mb-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">Isolation des combles</p>
                <p className="text-foreground/80 text-sm">Le poste le plus rentable. Gain de 1 à 2 classes DPE pour un coût de 3 000 à 8 000 €.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">Remplacement du système de chauffage</p>
                <p className="text-foreground/80 text-sm">L'installation d'une pompe à chaleur peut transformer un logement E ou F en C ou D. Coût : 5 000 à 15 000 €.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="font-semibold text-navy mb-1">Remplacement des fenêtres</p>
                <p className="text-foreground/80 text-sm">Moins impactant sur le DPE mais très apprécié des acquéreurs visuellement.</p>
              </div>
            </div>
            <div className="bg-sand-light border-l-4 border-sand rounded-r-lg p-5 my-6">
              <p className="text-foreground/80 text-sm leading-relaxed">
                <strong>MaPrimeRénov' 2026 :</strong> Des aides de l'État restent disponibles pour financer une partie de ces travaux. Notre partenaire <a href="https://ouikey.fr" target="_blank" rel="noopener noreferrer" className="text-sand font-medium hover:underline inline-flex items-center gap-1">Ouikey <ExternalLink size={12} /></a> peut vous orienter vers les dispositifs adaptés.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">DPE et acquéreurs sur la Côte Varoise : ce qu'ils regardent</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les acquéreurs en 2026 sont très attentifs au DPE pour deux raisons : les <strong>charges d'énergie</strong> (d'autant plus dans le Var avec les besoins en climatisation estivale) et la <strong>valeur future</strong> du bien. Un bien classé G sera difficile à revendre ou louer dans 5-10 ans.
            </p>

            {/* CTA */}
            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Votre bien est classé F ou G et vous envisagez de vendre ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Commencez par une estimation gratuite — nous analysons votre situation et vous conseillons sur la stratégie la plus rentable.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Obtenir une estimation gratuite →</Link></Button>
            </div>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — DPE 2026 et vente immobilière</h2>
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

export default BlogArticleDPE;
