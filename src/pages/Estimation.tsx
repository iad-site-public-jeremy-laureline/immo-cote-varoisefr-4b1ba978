import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, MapPin } from "lucide-react";
import EstimationForm from "@/components/EstimationForm";

const benefits = [
  { icon: Shield, title: "Gratuit et sans engagement", desc: "Aucun frais, aucune obligation" },
  { icon: Clock, title: "Réponse sous 24h", desc: "Un conseiller vous contacte rapidement" },
  { icon: MapPin, title: "Expertise locale", desc: "Plus de 15 ans de connaissance du marché varois" },
];

const Estimation = () => {
  useEffect(() => {
    document.title = "Estimation Immobilière Gratuite sur la Côte Varoise | Jérémy et Laureline";
  }, []);

  return (
    <div className="pt-[70px]">
      <section className="section-padding bg-sand-light">
        <div className="container-narrow mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Estimation Immobilière Gratuite sur la Côte Varoise
            </h1>
            <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Vous envisagez de vendre votre bien à Six-Fours, Sanary, Bandol, Toulon ou dans les environs ? La première étape est d'en connaître la juste valeur. Notre estimation est gratuite, sans engagement, et réalisée par des experts qui connaissent le marché local dans le détail. Vous recevez notre avis de valeur sous 24 heures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <b.icon className="mx-auto mb-2 text-sand" size={28} />
                <h3 className="font-semibold text-navy text-sm">{b.title}</h3>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-background rounded-xl p-6 md:p-8 shadow-card">
            <EstimationForm variant="full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estimation;