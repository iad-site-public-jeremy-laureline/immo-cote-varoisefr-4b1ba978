import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/cv-hero.jpg";

const faqItems = [
  { q: "Combien de temps entre le compromis et la signature de l'acte définitif ?", a: "En général 3 mois minimum, jusqu'à 4-5 mois si le financement est complexe. Le délai peut être plus court si l'acquéreur achète sans crédit (achat comptant)." },
  { q: "Peut-on se rétracter après la signature d'un compromis de vente ?", a: "L'acquéreur dispose d'un délai légal de rétractation de 10 jours calendaires après réception du compromis signé. Le vendeur, lui, ne peut pas se rétracter sans motif légitime." },
  { q: "Que se passe-t-il si le prêt est refusé après le compromis ?", a: "Si la condition suspensive d'obtention de prêt est stipulée (obligatoire sauf renonciation expresse), l'acquéreur peut se désengager sans pénalité et récupère son dépôt de garantie." },
  { q: "L'indemnité de 10 % versée à la signature est-elle perdue si on se rétracte ?", a: "Pas automatiquement. Si la rétractation intervient dans les 10 jours légaux ou du fait d'une condition suspensive non réalisée, l'acquéreur récupère son dépôt." },
  { q: "Le compromis de vente peut-il être signé sans notaire ?", a: "Oui. Un compromis signé sous seing privé (chez le conseiller immobilier) est juridiquement valable. L'acte authentique final doit obligatoirement être signé devant notaire." },
  { q: "Quels documents dois-je préparer en tant que vendeur ?", a: "Le titre de propriété, les diagnostics techniques (DPE, amiante, termites, ERNT...), pour une copropriété les PV d'AG, règlement et carnet d'entretien, les plans et factures de travaux récents." },
  { q: "Peut-on négocier le prix entre le compromis et l'acte authentique ?", a: "En principe non : le prix est fixé dans le compromis. Des renégociations sont parfois initiées si des problèmes sont découverts lors des diagnostics complémentaires." },
  { q: "Quel est le rôle du conseiller immobilier lors du compromis ?", a: "Le conseiller prépare et coordonne la rédaction du compromis, s'assure que le dossier est complet, accompagne les deux parties et fait le lien avec le notaire jusqu'à la signature définitive." },
];

const BlogArticleCompromis = () => {
  useEffect(() => { document.title = "Compromis de vente : étapes et délais 2026 | Jérémy et Laureline"; window.scrollTo(0, 0); }, []);
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Compromis de vente : étapes, délais et ce qu'il faut savoir avant de signer", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "Compromis de vente" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="compromis de vente signature notaire immobilier 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4"><Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span><Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span><span className="text-primary-foreground/70">Compromis de vente</span></nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">Compromis de vente : étapes, délais et ce qu'il faut savoir avant de signer</motion.h1>
            <div className="flex items-center gap-4 mt-5 text-primary-foreground/60 text-sm"><span className="flex items-center gap-1.5"><CalendarDays size={14} /> 15 mars 2026</span><span className="flex items-center gap-1.5"><Clock size={14} /> 8 min de lecture</span></div>
          </div>
        </div>
        <article className="bg-background section-padding">
          <div className="container-narrow mx-auto max-w-3xl px-4">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sand hover:text-sand-hover text-sm mb-8 transition-colors"><ArrowLeft size={14} /> Retour au blog</Link>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">Le <strong>compromis de vente</strong> est l'étape charnière d'une transaction immobilière : l'acte par lequel vendeur et acquéreur s'engagent mutuellement. Souvent perçu comme une formalité, c'est en réalité un document juridiquement complexe. Voici ce que vous devez absolument savoir.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Compromis ou promesse de vente : quelle différence ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Le <strong>compromis de vente</strong> (promesse synallagmatique) engage les deux parties. La <strong>promesse unilatérale</strong> n'engage que le vendeur qui réserve son bien à l'acquéreur. Le compromis est l'acte le plus courant en France.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les étapes entre le compromis et l'acte authentique</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead><tr className="bg-navy text-primary-foreground"><th className="text-left p-3 font-medium">Étape</th><th className="text-left p-3 font-medium">Description</th><th className="text-left p-3 font-medium">Délai</th></tr></thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">1</td><td className="p-3 text-foreground/80">Signature du compromis</td><td className="p-3 text-foreground/80">Chez le notaire ou le conseiller</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">2</td><td className="p-3 text-foreground/80">Délai de rétractation</td><td className="p-3 text-foreground/80">10 jours calendaires</td></tr>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">3</td><td className="p-3 text-foreground/80">Instruction du financement</td><td className="p-3 text-foreground/80">45 jours minimum</td></tr>
                  <tr className="border-t border-border bg-muted/30"><td className="p-3 text-foreground/80">4</td><td className="p-3 text-foreground/80">Levée des conditions suspensives</td><td className="p-3 text-foreground/80">Prêt, préemption, diagnostics</td></tr>
                  <tr className="border-t border-border"><td className="p-3 text-foreground/80">5</td><td className="p-3 text-foreground/80">Signature de l'acte authentique</td><td className="p-3 text-foreground/80">Transfert de propriété et clés</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les conditions suspensives</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">Obtention de prêt</p><p className="text-foreground/80 text-sm">La plus importante. Protège l'acquéreur si la banque refuse. Durée légale : 30 jours minimum, en pratique 45 à 60 jours.</p></div>
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">Absence de préemption</p><p className="text-foreground/80 text-sm">La commune ou l'État peut préempter certains biens. Délai de purge : généralement 2 mois.</p></div>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les documents obligatoires</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Le vendeur doit remettre : le DPE, les diagnostics amiante et plomb, le diagnostic termites (obligatoire dans le Var), l'ERNT, les diagnostics électricité et gaz, et pour les copropriétés : les 3 derniers PV d'AG, le carnet d'entretien et le règlement de copropriété.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">L'indemnité d'immobilisation et le droit de rétractation</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">L'acquéreur verse une <strong>indemnité de 5 à 10 %</strong> du prix, séquestrée chez le notaire. L'acquéreur dispose d'un <strong>droit de rétractation de 10 jours</strong> après réception du compromis signé, sans motif ni pénalité.</p>

            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous préparez une vente sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Demandez votre estimation gratuite — c'est la première étape d'une transaction bien sécurisée.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Démarrer ma transaction →</Link></Button>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Compromis de vente</h2>
            <Accordion type="single" collapsible className="mb-12">
              {faqItems.map((item, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left text-navy font-medium">{item.q}</AccordionTrigger><AccordionContent className="text-foreground/70 leading-relaxed">{item.a}</AccordionContent></AccordionItem>))}
            </Accordion>
          </div>
        </article>
      </div>
    </>
  );
};
export default BlogArticleCompromis;
