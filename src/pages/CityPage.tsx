import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = cities.find(c => c.slug === slug);

  useEffect(() => {
    if (city) document.title = `${city.title} | Jeremy & Laureline`;
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

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={image} alt={`Immobilier ${city.name}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold text-primary-foreground"
          >
            Immobilier à {city.name}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6">
            <Link to="/estimation">
              <Button variant="sand" size="lg">Estimer mon bien</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
            Le marché immobilier à {city.name}
          </h2>
          <p className="text-foreground/80 leading-relaxed">{city.intro}</p>
        </div>
      </section>

      {/* Prices */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Prix au m² à {city.name}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-navy">Type de bien</th>
                  <th className="text-left py-3 px-4 font-semibold text-navy">Prix / m²</th>
                  <th className="text-left py-3 px-4 font-semibold text-navy">Remarque</th>
                </tr>
              </thead>
              <tbody>
                {city.prices.map((p, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground">{p.type}</td>
                    <td className="py-3 px-4 font-semibold text-navy">{p.range}</td>
                    <td className="py-3 px-4 text-muted-foreground">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Pourquoi investir à {city.name} ?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {city.reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <span className="text-sand font-bold text-lg">✓</span>
                <p className="text-foreground/80 text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {city.faq.map((item, i) => (
              <div key={i} className="bg-background rounded-lg p-5 shadow-card">
                <h3 className="font-semibold text-navy text-sm mb-2">{item.q}</h3>
                <p className="text-foreground/70 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sand-light text-center">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
            Estimez gratuitement votre bien à {city.name}
          </h2>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            Nos experts connaissent chaque quartier de {city.name}. Obtenez une estimation précise sous 24h.
          </p>
          <Link to="/estimation">
            <Button variant="sand" size="lg" className="text-base px-8">
              Demander mon estimation gratuite
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
