import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Globe } from "lucide-react";
import jeremyImg from "@/assets/jeremy.png";
import laurelineImg from "@/assets/laureline.png";

const NotreEquipe = () => {
  useEffect(() => {
    document.title = "Jérémy Vieira & Laureline Lohéac — Vos conseillers immobiliers indépendants";
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
            Jérémy Vieira & Laureline Lohéac — Vos conseillers immobiliers indépendants
          </motion.h1>
          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Forts de plus de 15 ans d'expérience dans l'immobilier, nous mettons notre double expertise complémentaire au service de vos projets sur la Côte Varoise.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jérémy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-xl p-8 shadow-card text-left"
            >
              <img src={jeremyImg} alt="Jérémy Vieira" className="w-20 h-20 rounded-full mb-4 object-cover object-top" />
              <h2 className="font-display text-2xl font-bold text-navy">Jérémy Vieira</h2>
              <p className="text-sand font-medium text-sm mb-1">Conseiller immobilier indépendant</p>
              <p className="text-sm text-muted-foreground mb-3">Six-Fours-les-Plages & environs</p>
              <div className="flex items-center gap-1 mb-3">
                <Star size={14} className="fill-sand text-sand" />
                <span className="text-sm font-medium text-navy">4,8/5</span>
                <span className="text-xs text-muted-foreground">· 45 avis clients</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                Expert en transaction immobilière, Jérémy maîtrise parfaitement le marché de la côte varoise. Sa connaissance terrain et sa capacité de négociation sont des atouts majeurs pour valoriser votre bien au meilleur prix.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Transaction immobilière", "Négociation", "Valorisation des biens", "Expertise marché local"].map(s => (
                  <span key={s} className="text-xs bg-sand/10 text-navy px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </motion.div>

            {/* Laureline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-muted rounded-xl p-8 shadow-card text-left"
            >
              <img src={laurelineImg} alt="Laureline Lohéac" className="w-20 h-20 rounded-full mb-4 object-cover object-top" />
              <h2 className="font-display text-2xl font-bold text-navy">Laureline Lohéac</h2>
              <p className="text-sand font-medium text-sm mb-1">Conseillère immobilière indépendante</p>
              <p className="text-sm text-muted-foreground mb-3">Sanary-sur-Mer & environs</p>
              <div className="flex items-center gap-1 mb-3">
                <Star size={14} className="fill-sand text-sand" />
                <span className="text-sm font-medium text-navy">4,8/5</span>
                <span className="text-xs text-muted-foreground">· 131 avis clients</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                Laureline excelle dans l'accompagnement personnalisé de chaque client. Son approche humaine et rigoureuse, combinée à une stratégie de vente sur-mesure, assure des résultats optimaux.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Accompagnement client", "Estimation précise", "Stratégie de vente", "Suivi personnalisé"].map(s => (
                  <span key={s} className="text-xs bg-sand/10 text-navy px-3 py-1 rounded-full">{s}</span>
                ))}
                <span className="inline-flex items-center gap-1 text-xs bg-sand/15 text-navy px-3 py-1 rounded-full font-medium">
                  <Globe size={10} /> Anglais
                </span>
              </div>
            </motion.div>
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