import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotreEquipe = () => {
  useEffect(() => {
    document.title = "Jeremy Vieira & Laureline Loheac — Vos Conseillers IAD dans le Var";
  }, []);

  return (
    <div className="pt-[70px]">
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-4xl font-bold text-navy mb-6"
          >
            Votre duo d'experts immobiliers
          </motion.h1>
          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Installés sur la côte varoise depuis plus de 12 ans, Jeremy et Laureline unissent leurs compétences pour vous offrir un accompagnement complet dans tous vos projets immobiliers.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Jeremy Vieira",
                role: "Conseiller IAD",
                desc: "Expert en transaction immobilière, Jeremy maîtrise parfaitement le marché de la côte varoise. Sa connaissance terrain et sa capacité de négociation sont des atouts majeurs pour valoriser votre bien au meilleur prix.",
                specialties: ["Transaction immobilière", "Négociation", "Valorisation des biens", "Expertise marché local"],
              },
              {
                name: "Laureline Loheac",
                role: "Conseillère IAD",
                desc: "Laureline excelle dans l'accompagnement personnalisé de chaque client. Son approche humaine et rigoureuse, combinée à une stratégie de vente sur-mesure, assure des résultats optimaux.",
                specialties: ["Accompagnement client", "Estimation précise", "Stratégie de vente", "Suivi personnalisé"],
              },
            ].map((person) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted rounded-xl p-8 shadow-card text-left"
              >
                <div className="w-20 h-20 rounded-full bg-sand/20 mb-4 flex items-center justify-center">
                  <span className="font-display text-3xl text-sand font-bold">{person.name[0]}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-navy">{person.name}</h2>
                <p className="text-sand font-medium text-sm mb-3">{person.role}</p>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{person.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {person.specialties.map(s => (
                    <span key={s} className="text-xs bg-sand/10 text-navy px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link to="/estimation">
              <Button variant="sand" size="lg" className="text-base px-8">
                Estimer mon bien gratuitement
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotreEquipe;
