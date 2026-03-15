import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/vr-hero.jpg";

const faqItems = [
  { q: "Quel est le délai moyen pour vendre un bien immobilier sur la Côte Varoise ?", a: "En 2026, un bien correctement estimé et bien présenté se vend en 45 à 75 jours sur les marchés comme Sanary-sur-Mer ou Six-Fours-les-Plages. Un bien surévalué ou mal présenté peut rester 4 à 6 mois sur le marché." },
  { q: "Pourquoi mon bien ne se vend-il pas malgré les visites ?", a: "Deux raisons principales : le prix est trop élevé par rapport au marché local, ou la présentation du bien n'incite pas à l'achat. Une visite sans offre est presque toujours un signal de prix ou de présentation à retravailler." },
  { q: "Faut-il baisser son prix pour vendre plus vite ?", a: "Pas nécessairement. Parfois c'est la présentation, les photos ou la diffusion qui sont à améliorer. Mais si le bien est en ligne depuis plus de 90 jours sans offre, un repositionnement tarifaire est généralement nécessaire." },
  { q: "Le home staging est-il efficace pour vendre rapidement ?", a: "Oui, très efficacement. Des études montrent qu'un bien valorisé se vend en moyenne 30 % plus rapidement et génère moins de négociation sur le prix." },
  { q: "Est-ce que choisir un mandat exclusif aide à vendre plus vite ?", a: "En général, oui. Le mandat exclusif concentre les efforts d'un seul conseiller, garantit la cohérence de la présentation en ligne et donne au professionnel les moyens d'investir dans des outils de valorisation." },
  { q: "Les photos professionnelles font-elles vraiment la différence ?", a: "Absolument. Sur des portails immobiliers où des dizaines d'annonces s'affichent simultanément, une photo professionnelle augmente significativement le nombre de clics et donc de visites." },
  { q: "Comment vendre rapidement un bien avec un mauvais DPE ?", a: "Un mauvais DPE (F ou G) nécessite une stratégie adaptée : soit des travaux ciblés pour améliorer la classe, soit un positionnement de prix tenant compte de la décote. La transparence avec les acquéreurs est essentielle." },
  { q: "Combien de visites faut-il en moyenne avant une offre d'achat ?", a: "Sur la Côte Varoise en 2026, nous observons en moyenne 5 à 10 visites avant une offre pour un bien bien positionné. Pour un bien surévalué, ce ratio peut monter à 20-30 visites ou plus." },
];

const BlogArticleVendreRapidement = () => {
  useEffect(() => {
    document.title = "Vendre rapidement son bien immobilier en 2026 | Jérémy et Laureline";
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Comment vendre rapidement son appartement ou sa maison en 2026 ?", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "Vendre rapidement 2026" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="vendre rapidement maison appartement 2026 immobilier" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4">
              <Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span>
              <span className="text-primary-foreground/70">Vendre rapidement 2026</span>
            </nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">
              Comment vendre rapidement son appartement ou sa maison en 2026 ?
            </motion.h1>
            <div className="flex items-center gap-4 mt-5 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1.5"><CalendarDays size={14} /> 15 mars 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> 9 min de lecture</span>
            </div>
          </div>
        </div>

        <article className="bg-background section-padding">
          <div className="container-narrow mx-auto max-w-3xl px-4">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sand hover:text-sand-hover text-sm mb-8 transition-colors"><ArrowLeft size={14} /> Retour au blog</Link>

            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Sur la Côte Varoise, le marché 2026 est sélectif : les acquéreurs sont plus exigeants, mieux informés et comparent davantage. Un bien bien présenté, au juste prix et accompagné par des professionnels expérimentés se vend en <strong>45 à 75 jours</strong>. Un bien mal positionné peut rester plusieurs mois — et finir par se vendre en dessous de sa valeur. Voici nos <strong>7 conseils concrets</strong> pour <strong>vendre rapidement</strong> en 2026.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil n°1 — L'estimation juste : la base de tout</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le premier facteur de réussite est sans conteste le <strong>prix</strong>. Un bien surestimé reste sur le marché et commence à être perçu comme un bien « avec un problème ». Sur la Côte Varoise, les prix varient considérablement d'un quartier à l'autre — parfois de 1 000 à 2 000 €/m² sur quelques kilomètres. Notre <Link to="/estimation" className="text-sand font-medium hover:underline">estimation</Link> s'appuie sur les transactions réelles des 6 derniers mois dans votre secteur précis.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil n°2 — Le home staging : préparer son bien pour séduire</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le <strong>home staging</strong> est l'ensemble des actions visant à mettre en valeur votre bien. Les études montrent qu'un bien préparé se vend en moyenne <strong>30 % plus vite</strong>. Nos conseils : désencombrer, nettoyer en profondeur, réparer les petits défauts, neutraliser les couleurs marquées, et mettre en valeur les extérieurs — particulièrement valorisés sur la Côte Varoise.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil n°3 — Les photos professionnelles</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              90 % des acquéreurs commencent leur recherche en ligne. Une photo mal cadrée, sombre ou floue peut éliminer votre bien de la sélection en moins de 3 secondes. Nous intégrons systématiquement une <strong>séance photo professionnelle</strong> pour chaque bien confié. Sur des marchés comme <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link> ou <Link to="/bandol" className="text-sand font-medium hover:underline">Bandol</Link>, la qualité visuelle est un différenciateur clé.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil n°4 — La diffusion ciblée de votre annonce</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Une belle annonce doit être diffusée sur les bons supports. Les portails nationaux (SeLoger, Leboncoin, PAP...) sont incontournables, mais la sélection des mots-clés, la qualité de la description et les options de mise en avant influencent votre visibilité. Notre réseau IAD France, avec plus de 15 000 conseillers, nous permet également de <strong>diffuser votre bien en interne</strong> auprès de collègues ayant des acquéreurs en attente.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil n°5 — Bien organiser les visites</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Chaque visite doit être une opportunité maximisée : le bien doit être rangé et lumineux, la température agréable. Vous devez être disponible pour répondre aux questions sur la copropriété, les charges, le voisinage et les travaux récents — avec honnêteté et sans hésitation.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil n°6 — Le mandat exclusif</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Un bien diffusé sous plusieurs mandats simples apparaît plusieurs fois sur les portails avec des prix différents, ce qui crée de la confusion. Le <strong>mandat exclusif</strong> concentre les efforts, garantit la cohérence de la présentation et donne au conseiller les moyens d'investir (photos pro, visite virtuelle, publicité sponsorisée).
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil n°7 — Être réactif et flexible</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Vendre rapidement nécessite de la flexibilité : disponibilité pour les visites, capacité à fournir rapidement les documents, et ouverture à une négociation raisonnée. Refuser une offre légèrement inférieure peut coûter plusieurs mois de vente supplémentaire. Notre rôle est d'analyser chaque offre avec vous et de vous conseiller objectivement.
            </p>

            {/* CTA */}
            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous souhaitez vendre rapidement sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Demandez votre estimation gratuite — nous établissons avec vous la stratégie la plus efficace pour votre bien.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Commencer ma vente →</Link></Button>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Vendre rapidement en 2026</h2>
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

export default BlogArticleVendreRapidement;
