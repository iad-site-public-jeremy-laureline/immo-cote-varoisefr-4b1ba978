import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/blog/va-hero.jpg";

const faqItems = [
  { q: "Faut-il obligatoirement vendre son bien avant d'en acheter un autre ?", a: "Non, ce n'est pas obligatoire. Vous pouvez acheter avant de vendre grâce à un prêt relais ou à un apport suffisant. Cependant, sans financement adapté, la pression de devoir vendre rapidement peut vous conduire à brader votre bien." },
  { q: "Qu'est-ce qu'un prêt relais et est-il risqué ?", a: "Le prêt relais vous avance une partie de la valeur de votre bien à vendre pour financer un nouvel achat. Le risque principal est que votre bien ne se vende pas dans les délais prévus, générant des coûts d'intérêts supplémentaires." },
  { q: "Peut-on faire une offre d'achat conditionnelle à la vente de son bien ?", a: "Oui, c'est la condition suspensive de vente. Elle permet d'acheter un bien sous condition que le vôtre soit vendu. Certains vendeurs refusent cette condition en période de marché tendu." },
  { q: "Quel délai prévoir entre la vente et l'achat ?", a: "Essayez de synchroniser les deux signatures à quelques jours ou semaines d'intervalle. La « vente longue » — 4 à 6 mois après le compromis — peut vous donner le temps de trouver votre prochain achat." },
  { q: "Quels sont les avantages de vendre d'abord ?", a: "Vous connaissez exactement votre budget, votre dossier de financement est plus solide et vous pouvez négocier sans condition suspensive — un avantage réel sur un marché concurrentiel." },
  { q: "Que faire si on ne trouve pas à acheter après avoir vendu ?", a: "Prévoyez une solution de logement temporaire (location meublée, hébergement familial). Sur la Côte Varoise, les locations saisonnières peuvent être une solution temporaire confortable." },
  { q: "Comment se passe concrètement une vente-achat simultané avec vous ?", a: "Nous gérons les deux transactions en parallèle : estimation et commercialisation de votre bien actuel d'un côté, recherche active de votre prochain bien de l'autre. Nous synchronisons les délais et alignons les dates de signature." },
];

const BlogArticleVendreAcheter = () => {
  useEffect(() => {
    document.title = "Vendre avant ou après acheter : que choisir ? | Jérémy et Laureline";
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Vendre avant d'acheter ou acheter avant de vendre en 2026 ?", datePublished: "2026-03-15", author: [{ "@type": "Person", name: "Jérémy Vieira" }, { "@type": "Person", name: "Laureline Loheac" }], publisher: { "@type": "Organization", name: "Jérémy & Laureline Immobilier" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://immo-cote-varoisefr.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://immo-cote-varoisefr.lovable.app/blog" }, { "@type": "ListItem", position: 3, name: "Vendre avant ou après acheter" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-[70px]">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src={heroImg} alt="vendre avant acheter ou acheter avant vendre immobilier 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <nav className="text-xs text-primary-foreground/50 mb-4">
              <Link to="/" className="hover:text-sand transition-colors">Accueil</Link><span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-sand transition-colors">Blog</Link><span className="mx-2">›</span>
              <span className="text-primary-foreground/70">Vendre avant ou après acheter</span>
            </nav>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">
              Vendre avant d'acheter ou acheter avant de vendre en 2026 ?
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
              C'est l'un des dilemmes les plus fréquents : vous êtes propriétaire et souhaitez acheter un autre bien. Faut-il <strong>vendre avant d'acheter</strong> pour sécuriser votre financement ? Ou <strong>acheter avant de vendre</strong> pour éviter de vous retrouver sans logement ? En 2026, les conditions de marché et les solutions de financement influencent directement la meilleure stratégie.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les deux grandes options et leurs enjeux</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-sand">
                <p className="font-semibold text-navy mb-2">Option A — Vendre avant d'acheter</p>
                <p className="text-foreground/80 text-sm leading-relaxed mb-2"><strong>Avantage :</strong> vous connaissez exactement votre apport et votre capacité d'emprunt est optimale.</p>
                <p className="text-foreground/80 text-sm leading-relaxed"><strong>Inconvénient :</strong> vous risquez de vous retrouver sans logement entre les deux transactions.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-navy">
                <p className="font-semibold text-navy mb-2">Option B — Acheter avant de vendre</p>
                <p className="text-foreground/80 text-sm leading-relaxed mb-2"><strong>Avantage :</strong> vous prenez le temps de trouver le bon bien sans pression.</p>
                <p className="text-foreground/80 text-sm leading-relaxed"><strong>Inconvénient :</strong> vous devez gérer simultanément deux crédits, impliquant un prêt relais.</p>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Le prêt relais : comment ça fonctionne en 2026 ?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le <strong>prêt relais</strong> est un crédit à court terme (6 à 24 mois) qui vous avance une partie de la valeur de votre bien actuel. En 2026, les taux se situent entre <strong>3,50 % et 4,50 %</strong>. Le montant avancé représente généralement 70 à 80 % de la valeur estimée.
            </p>
            <div className="bg-blue-light rounded-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Exemple :</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Votre appartement à <Link to="/six-fours-les-plages" className="text-sand font-medium hover:underline">Six-Fours-les-Plages</Link> est estimé à 350 000 €. Vous achetez à <Link to="/sanary-sur-mer" className="text-sand font-medium hover:underline">Sanary-sur-Mer</Link> pour 480 000 €. Votre banque vous accorde un prêt relais de <strong>245 000 €</strong> (70 % de 350 000 €), que vous remboursez intégralement à la vente.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">La vente avec condition suspensive d'achat</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Une troisième voie existe : l'<strong>achat conditionnel à la vente de votre bien actuel</strong>. Si votre bien ne se vend pas dans le délai convenu, vous pouvez vous rétracter sans pénalité. Certains vendeurs refusent cette condition en période de marché tendu.
            </p>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Notre recommandation selon votre situation</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-sand-light rounded-lg p-4">
                <p className="text-foreground/80 text-sm"><strong>Bien dans un secteur très demandé</strong> (Sanary, Six-Fours bord de mer, Bandol) : achetez avant de vendre avec prêt relais. Votre bien se vendra rapidement.</p>
              </div>
              <div className="bg-sand-light rounded-lg p-4">
                <p className="text-foreground/80 text-sm"><strong>Bien dans un secteur plus concurrentiel</strong> (centre de Toulon, La Seyne) : sécurisez d'abord la vente, puis achetez.</p>
              </div>
              <div className="bg-sand-light rounded-lg p-4">
                <p className="text-foreground/80 text-sm"><strong>Apport supérieur à 30 %</strong> : l'achat avant vente est souvent possible sans prêt relais en montant un double crédit temporaire.</p>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-4 mt-12">Les erreurs à éviter dans le timing vente/achat</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'erreur la plus fréquente : <strong>sous-estimer le délai de vente</strong> de son bien actuel. Même dans des secteurs dynamiques, la vente peut prendre de 45 à 120 jours. Autre erreur : ne pas avoir son financement validé avant de faire une offre d'achat.
            </p>

            <div className="bg-navy rounded-xl p-8 text-center my-12">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Vous prévoyez de vendre et d'acheter sur la Côte Varoise ?</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 max-w-lg mx-auto">Commençons par estimer votre bien actuel — c'est la base de toute stratégie bien construite.</p>
              <Button asChild variant="sand" size="lg"><Link to="/estimation">Estimer mon bien gratuitement →</Link></Button>
            </div>

            <h2 className="font-display text-2xl font-bold text-navy mb-6 mt-12">Foire aux questions — Vendre avant ou après acheter</h2>
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

export default BlogArticleVendreAcheter;
