import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/hs-hero.jpg";

const faqItems = [
  { q: "Combien coûte un home staging avant une vente immobilière ?", a: "Le home staging maison n'implique pas nécessairement de gros budgets. Les actions les plus impactantes (désencombrement, nettoyage, petites réparations, peinture) coûtent entre 200 et 1 500 €. Pour du home staging professionnel complet, comptez 2 000 à 5 000 €." },
  { q: "Le home staging augmente-t-il vraiment le prix de vente ?", a: "Pas nécessairement le prix affiché, mais il réduit significativement la négociation à la baisse. Un bien bien présenté se vend au prix demandé ou avec peu de négociation. Un bien mal présenté subit souvent une décote de 3 à 10 %." },
  { q: "Faut-il rénover son bien avant de le vendre ?", a: "Pas toujours. Une rénovation complète avant vente est rarement rentable car les acquéreurs préfèrent souvent choisir eux-mêmes les finitions. En revanche, les petites réparations et la fraîcheur générale ont un impact très positif." },
  { q: "Quelle est la première chose à faire pour préparer son bien à la vente ?", a: "Désencombrez et dépersonnalisez. C'est gratuit, rapide et c'est le conseil qui a le plus d'impact sur la première impression des acquéreurs." },
  { q: "Les photos professionnelles sont-elles indispensables après un home staging ?", a: "Absolument. Le home staging n'a d'effet que s'il est capturé par de bonnes photos. Une photo professionnelle d'un logement valorisé génère 3 à 5 fois plus de clics sur les portails immobiliers." },
  { q: "Faut-il faire le home staging avant ou après l'estimation ?", a: "Idéalement, obtenez d'abord l'estimation pour savoir si l'investissement est justifié et quels travaux cibler. Ensuite, préparez le bien et réalisez les photos." },
  { q: "Les acquéreurs font-ils la différence entre un bien home stagé et un bien non préparé ?", a: "Oui, immédiatement. Un bien bien préparé génère des visites plus nombreuses, des acquéreurs plus convaincus et des offres plus proches du prix demandé." },
];

const BlogArticleHomeStaging = () => {
  useEffect(() => {
    document.title = "Home staging : vendre vite et mieux dans le Var | Jérémy et Laureline";
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Home staging : 7 conseils pour vendre plus vite et au meilleur prix dans le Var", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "Home staging Var" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="home staging avant vente immobilier Var Côte Varoise" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4">
              <Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span>
              <span className="text-primary-foreground/70">Home staging Var</span>
            </nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">
              Home staging : 7 conseils pour vendre plus vite et au meilleur prix dans le Var
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
              Le <strong>home staging</strong> est l'une des stratégies les plus efficaces pour vendre rapidement et au meilleur prix sur la Côte Varoise. Il consiste à mettre en scène votre bien pour qu'il plaise au plus grand nombre d'acquéreurs. Des études montrent qu'un bien valorisé se vend en moyenne <strong>30 à 50 % plus rapidement</strong>. Sur un marché comme <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link> ou <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours-les-Plages</Link>, la mise en valeur fait toute la différence.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil 1 — Désencombrez et dépersonnalisez</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Retirez photos de famille, collections d'objets, meubles en excès. L'acquéreur doit pouvoir imaginer SA vie dans cet espace. Réduisez le mobilier à l'essentiel, libérez les plans de travail de la cuisine, rangez les affaires de salle de bain.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil 2 — Nettoyez de façon professionnelle</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Points critiques : joints de salle de bain, vitres et miroirs, sols, façades de placards, et l'odeur générale du logement. Un logement propre et rangé peut convaincre plus vite qu'un logement rénové mais mal entretenu.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil 3 — Neutralisez les couleurs</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Les couleurs neutres (blanc, beige, gris clair) permettent à chacun de se projeter et font paraître les pièces plus lumineuses et plus grandes. Un coup de peinture dans les pièces aux couleurs marquées est l'un des meilleurs investissements.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil 4 — Valorisez les extérieurs (atout Côte Varoise)</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Les extérieurs peuvent représenter <strong>20 à 40 % de la valeur</strong> d'un bien. Assurez-vous que votre extérieur est impeccable : salon de jardin propre, plantes arrosées, sol de terrasse nettoyé, piscine entretenue.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil 5 — Réparez les petits défauts</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Une poignée cassée, un interrupteur abîmé, un carrelage fissuré : ces signaux négatifs inquiètent les acquéreurs et font craindre de plus gros problèmes cachés. Investissez quelques heures pour un logement qui paraît bien entretenu.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil 6 — Optimisez la lumière</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">La luminosité est l'un des premiers critères des acquéreurs. Ouvrez tous les volets, remplacez les ampoules défaillantes, ajoutez une lampe dans les coins sombres, lavez les vitres. Des miroirs bien placés créent profondeur et luminosité.</p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Conseil 7 — Faites appel à un regard extérieur</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Quand on vit dans un logement depuis des années, on ne le voit plus. Un conseiller expérimenté peut vous indiquer en 30 minutes les 5 points prioritaires. <Link to="/estimation" className="text-sand font-medium hover:underline">Demandez votre estimation gratuite</Link> — nous incluons un tour du propriétaire avec conseils de valorisation.</p>

            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous préparez la vente de votre bien sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Demandez votre estimation gratuite — nous vous conseillons sur les actions prioritaires pour vendre vite et au meilleur prix.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Préparer ma vente →</Link></Button>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Home staging et vente immobilière</h2>
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

export default BlogArticleHomeStaging;
