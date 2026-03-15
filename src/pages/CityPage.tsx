import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cities } from "@/data/cities";
import sixFoursImg from "@/assets/six-fours.jpg";
import sanaryImg from "@/assets/sanary.jpg";
import bandolImg from "@/assets/bandol.jpg";
import toulonImg from "@/assets/toulon.jpg";
import laSeyne from "@/assets/la-seyne.jpg";
import ollioulesImg from "@/assets/ollioules.jpg";

const cityImages: Record<string, string> = {
  "six-fours-les-plages": sixFoursImg,
  "sanary-sur-mer": sanaryImg,
  "bandol": bandolImg,
  "toulon": toulonImg,
  "la-seyne-sur-mer": laSeyne,
  "ollioules": ollioulesImg,
};

/** Render bold text wrapped in ** */
const renderText = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-navy">{part}</strong> : part
  );
};

const otherCities = (currentSlug: string) =>
  cities.filter(c => c.slug !== currentSlug);

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = cities.find(c => c.slug === slug);

  useEffect(() => {
    if (city) {
      document.title = city.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", city.metaDescription);
    }
  }, [city]);

  if (!city) {
    return (
      <div className="pt-[70px] section-padding text-center">
        <h1 className="font-display text-3xl text-navy">Ville non trouvée</h1>
        <Link to="/" className="text-sand hover:underline mt-4 inline-block">Retour à l'accueil</Link>
      </div>
    );
  }

  const image = cityImages[city.slug];
  const others = otherCities(city.slug);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={image} alt={`Immobilier ${city.name}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto"
          >
            {city.h1}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6">
            <Link to="/estimation">
              <Button variant="sand" size="lg">Estimer mon bien gratuitement</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg">{city.intro}</p>
        </div>
      </section>

      {/* Market */}
      <section className="section-padding bg-muted">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">{city.marketTitle}</h2>
          <div className="space-y-4">
            {city.marketText.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">{renderText(p)}</p>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/estimation" className="text-sand font-semibold hover:underline">
              Demandez votre estimation gratuite →
            </Link>
          </div>
        </div>
      </section>

      {/* Prices by sector */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">{city.pricesTitle}</h2>
          {city.pricesIntro && (
            <p className="text-foreground/80 leading-relaxed mb-6">{city.pricesIntro}</p>
          )}
          <div className="space-y-4">
            {city.priceSectors.map((sector, i) => (
              <div key={i} className="bg-muted rounded-lg p-5 border-l-4 border-sand">
                <h3 className="font-semibold text-navy mb-2">{sector.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
          {city.pricesOutro && (
            <p className="text-foreground/80 mt-6">
              {city.pricesOutro}{" "}
              <Link to="/estimation" className="text-sand font-semibold hover:underline">
                Estimation gratuite →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Photo placeholder - selling section image */}
      <section className="relative h-[35vh] min-h-[250px] overflow-hidden">
        <img src={image} alt={`Vendre à ${city.name}`} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy/30" />
      </section>

      {/* Selling */}
      <section className="section-padding bg-muted">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">{city.sellingTitle}</h2>
          <div className="space-y-4">
            {city.sellingText.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Buying */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">{city.buyingTitle}</h2>
          <div className="space-y-4">
            {city.buyingText.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
            ))}
          </div>
          {/* Internal links to other cities */}
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-foreground/70">
              Découvrez également nos analyses pour :{" "}
              {others.map((c, i) => (
                <span key={c.slug}>
                  <Link to={`/${c.slug}`} className="text-sand font-medium hover:underline">{c.name}</Link>
                  {i < others.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Invest section (La Seyne only) */}
      {city.investTitle && city.investText && (
        <section className="section-padding bg-muted">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">{city.investTitle}</h2>
            <div className="space-y-4">
              {city.investText.map((p, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expertise section (Sanary only) */}
      {city.expertiseTitle && city.expertiseText && (
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">{city.expertiseTitle}</h2>
            <div className="space-y-4">
              {city.expertiseText.map((p, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Estimation CTA */}
      <section className="section-padding bg-sand-light">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">{city.estimationTitle}</h2>
          <p className="text-foreground/70 mb-6 leading-relaxed max-w-2xl mx-auto">{city.estimationText}</p>
          <Link to="/estimation">
            <Button variant="sand" size="lg" className="text-base px-8">
              Demander mon estimation gratuite
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">
            Foire aux questions — Immobilier à {city.name}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {city.faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg shadow-card border-none">
                <AccordionTrigger className="px-5 py-4 text-navy text-sm font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 text-foreground/70 text-sm leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other cities */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-xl font-bold text-navy mb-4">Nos autres secteurs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {others.map(c => (
              <Link
                key={c.slug}
                to={`/${c.slug}`}
                className="bg-muted rounded-lg p-3 text-center hover:bg-sand/20 transition-colors group"
              >
                <div className="aspect-[4/3] rounded overflow-hidden mb-2">
                  <img src={cityImages[c.slug]} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <span className="text-sm font-medium text-navy">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
