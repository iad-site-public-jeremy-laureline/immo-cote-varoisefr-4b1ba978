import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/bm-hero.jpg";

const faqItems = [
  { q: "Les prix de l'immobilier vont-ils baisser dans le Var en 2026 ?", a: "Non selon les données actuelles. Le marché est stable à légèrement haussier sur les marchés émergents (La Seyne, Ollioules) et stable sur les marchés premium (Sanary, Bandol)." },
  { q: "Est-ce le bon moment pour vendre une résidence secondaire dans le Var ?", a: "2026 est une bonne période. La demande reste forte et des réformes fiscales favorables aux vendeurs peuvent jouer en votre faveur." },
  { q: "Faut-il vendre avant ou après l'été dans le Var ?", a: "Le printemps (mars-juin) est généralement la meilleure période. Les biens sont mis en valeur par la lumière et les acquéreurs cherchent à conclure avant l'été." },
  { q: "Mon bien avec un DPE F est-il vendable en 2026 ?", a: "Oui, mais avec une décote probable de 5 à 10 %. Avant de vendre, faites évaluer le coût de travaux d'amélioration — ils peuvent être rentabilisés sur le prix." },
  { q: "Comment savoir si mon bien est correctement estimé ?", a: "Si votre bien est en ligne depuis plus de 90 jours sans offre sérieuse, le signal est clair : le prix est trop élevé ou la présentation insuffisante." },
  { q: "Vaut-il mieux vendre vite ou attendre une meilleure offre ?", a: "Si une offre sérieuse se présente au prix juste dans les 60 premiers jours, nous conseillons généralement de l'accepter plutôt que d'attendre." },
  { q: "Que se passe-t-il si je vends en dessous du prix du marché ?", a: "Vendre légèrement en dessous peut être stratégique pour générer plusieurs offres simultanées et créer une concurrence entre acquéreurs." },
];

const BlogArticleBonMoment = () => {
  useEffect(() => { document.title = "Vendre dans le Var en 2026 : est-ce le bon moment ? | Jérémy et Laureline"; window.scrollTo(0, 0); }, []);
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Est-ce le bon moment pour vendre son bien dans le Var en 2026 ?", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "Bon moment pour vendre 2026" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="vendre immobilier Var 2026 bon moment Côte Varoise" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4"><Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span><Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span><span className="text-primary-foreground/70">Bon moment pour vendre 2026</span></nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">Est-ce le bon moment pour vendre son bien dans le Var en 2026 ?</motion.h1>
            <div className="flex items-center gap-4 mt-5 text-primary-foreground/60 text-sm"><span className="flex items-center gap-1.5"><CalendarDays size={14} /> 15 mars 2026</span><span className="flex items-center gap-1.5"><Clock size={14} /> 8 min de lecture</span></div>
          </div>
        </div>
        <article className="bg-background section-padding">
          <div className="container-narrow mx-auto max-w-3xl px-4">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sand hover:text-sand-hover text-sm mb-8 transition-colors"><ArrowLeft size={14} /> Retour au blog</Link>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">C'est la question que nous posent le plus souvent les propriétaires : « <strong>Est-ce le bon moment pour vendre ?</strong> » La réponse est nuancée — elle dépend de votre bien, de votre secteur sur la Côte Varoise et de votre situation personnelle. Voici notre analyse de terrain, sans langue de bois.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les signaux du marché immobilier du Var en 2026</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Plusieurs signaux positifs pour les vendeurs : la <strong>stabilisation des taux</strong> autour de 3,25-3,50 % a ramené les acquéreurs. Les <strong>prix résistent</strong> bien sur la Côte Varoise. La <strong>demande en résidences secondaires</strong> reste structurellement forte à <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary</Link>, <Link to="/bandol" className="text-sand font-medium hover:underline">Bandol</Link> et <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours</Link>.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Pourquoi 2026 est une fenêtre favorable</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">C'est un <strong>marché équilibré</strong> — ni trop tendu, ni trop mou — qui favorise les ventes sereines. Pour les propriétaires de résidences secondaires, 2026 est aussi intéressant en raison des réformes fiscales sur la <Link to="/blog/plus-value-immobiliere-vente-2026" className="text-sand font-medium hover:underline">plus-value immobilière</Link>.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les cas où attendre peut être judicieux</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-sand-light rounded-lg p-4"><p className="text-foreground/80 text-sm"><strong>DPE F ou G :</strong> des travaux ciblés peuvent être rentabilisés sur le prix de vente avant de mettre en vente.</p></div>
              <div className="bg-sand-light rounded-lg p-4"><p className="text-foreground/80 text-sm"><strong>Achat récent (&lt; 2 ans) :</strong> les coûts de transaction élevés obèrent la rentabilité.</p></div>
              <div className="bg-sand-light rounded-lg p-4"><p className="text-foreground/80 text-sm"><strong>Seuil d'abattement fiscal proche :</strong> patienter 1-2 ans peut économiser des milliers d'euros d'impôt sur la plus-value.</p></div>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">La saisonnalité : quel est le meilleur moment de l'année ?</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">🌸 Printemps (mars-juin)</p><p className="text-foreground/80 text-sm">La meilleure période. Acquéreurs actifs, biens mis en valeur par la lumière et la végétation.</p></div>
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">☀️ Été (juillet-août)</p><p className="text-foreground/80 text-sm">Ralentissement en volume mais actif pour les résidences secondaires. Visites plus qualifiées.</p></div>
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">🍂 Automne (sept-nov)</p><p className="text-foreground/80 text-sm">Deuxième bonne période, souvent sous-estimée. Acquéreurs motivés avec projet concret.</p></div>
              <div className="bg-muted/30 rounded-lg p-4"><p className="font-semibold text-navy mb-1">❄️ Hiver (déc-fév)</p><p className="text-foreground/80 text-sm">Plus calme. Prix négociés souvent plus favorables aux acquéreurs.</p></div>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Estimation immobilière : la première étape</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Avant de décider, une <strong>estimation professionnelle</strong> actualisée est indispensable. Notre estimation est réalisée sur place, basée sur les transactions réelles des 6 derniers mois dans votre secteur précis. <Link to="/estimation" className="text-sand font-medium hover:underline">Demandez-la gratuitement</Link>.</p>

            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous envisagez de vendre sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">La première étape est une estimation gratuite et sans engagement — toutes les informations pour décider au bon moment.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Demander mon estimation gratuite →</Link></Button>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Vendre dans le Var en 2026</h2>
            <Accordion type="single" collapsible className="mb-12">
              {faqItems.map((item, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left text-navy font-medium">{item.q}</AccordionTrigger><AccordionContent className="text-foreground/70 leading-relaxed">{item.a}</AccordionContent></AccordionItem>))}
            </Accordion>
          </div>
        </article>
      </div>
    </>
  );
};
export default BlogArticleBonMoment;
