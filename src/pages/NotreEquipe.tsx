import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, FileText, Clock, Award, Users, Languages } from "lucide-react";
import jeremyImg from "@/assets/jeremy.png";
import laurelineImg from "@/assets/laureline.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const NotreEquipe = () => {
  useEffect(() => {
    document.title = "Jérémy Vieira et Laureline Lohéac — Vos conseillers immobiliers indépendants";
  }, []);

  return (
    <div className="pt-[70px]">
      {/* SECTION 1 — Hero */}
      <section className="bg-navy flex flex-col items-center justify-center text-center px-4" style={{ minHeight: 280 }}>
        <nav className="text-xs text-primary-foreground/40 mb-6">
          <Link to="/" className="hover:text-sand transition-colors">Accueil</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-foreground/60">Notre équipe</span>
        </nav>
        <motion.h1 {...fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
          Jérémy Vieira et Laureline Lohéac
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-sand text-base md:text-lg font-body font-light max-w-xl">
          Vos conseillers immobiliers indépendants sur la Côte Varoise
        </motion.p>
      </section>

      {/* SECTION 2 — Jérémy */}
      <section className="bg-background">
        <div className="container-narrow mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Photo */}
            <motion.div {...fadeUp} className="relative">
              <img
                src={jeremyImg}
                alt="Jérémy Vieira — Conseiller immobilier indépendant"
                className="w-full h-[420px] md:h-full object-cover object-top shadow-[4px_0_24px_-4px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            {/* Bio */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="px-6 md:pl-12 md:pr-0 py-8 md:py-4 flex flex-col justify-center">
              <p className="text-xs font-medium tracking-[0.2em] text-sand uppercase mb-3">
                Conseiller immobilier indépendant
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
                Jérémy Vieira
              </h2>
              <div className="w-[60px] h-[2px] bg-sand mb-6" />
              <p className="text-foreground/75 text-base leading-relaxed mb-4">
                Passionné par l'immobilier depuis plus de 15 ans, Jérémy a construit une expertise solide dans la transaction, la négociation et l'accompagnement des vendeurs et acquéreurs. Installé sur la Côte Varoise, il connaît chaque quartier, chaque rue, chaque dynamique de prix de son secteur.
              </p>
              <p className="text-foreground/75 text-base leading-relaxed mb-6">
                Au-delà de l'immobilier, Jérémy co-dirige Ouikey, un réseau de conciergerie spécialisé dans la location courte durée — une double compétence rare qui lui permet d'offrir à ses clients une vision globale de la valorisation immobilière.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {["Transaction\n& Vente", "Négociation\n& Estimation", "Réseau 140+\nconseillers"].map((badge) => (
                  <div key={badge} className="bg-blue-light text-navy text-center text-[13px] font-medium py-3 px-3 rounded-lg whitespace-pre-line leading-tight">
                    {badge}
                  </div>
                ))}
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm text-foreground/70 mb-6">
                <p className="flex items-center gap-2"><MapPin size={14} className="text-sand" /> Six-Fours-les-Plages (83140)</p>
                <p className="flex items-center gap-2"><Globe size={14} className="text-sand" /> Parle : Français</p>
                <p className="flex items-center gap-2"><FileText size={14} className="text-sand" /> RSAC Toulon n°797 411 832</p>
              </div>

              <Link to="/contact">
                <Button className="bg-navy text-primary-foreground hover:bg-sand hover:text-navy transition-all font-semibold">
                  Contacter Jérémy →
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Séparateur + avis combinés */}
      <div className="bg-background">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="flex items-center justify-center gap-6 py-8">
            <div className="h-[1px] flex-1 bg-border" />
            <div className="bg-navy text-primary-foreground px-8 py-4 rounded-lg text-center shadow-sm flex items-center gap-6">
              <div>
                <p className="text-lg font-semibold">⭐ 4,8 / 5</p>
                <p className="text-xs text-primary-foreground/70 mt-0.5">176 avis clients vérifiés</p>
              </div>
              <div className="w-[1px] h-8 bg-primary-foreground/20" />
              <div>
                <p className="text-lg font-semibold">+ 500</p>
                <p className="text-xs text-primary-foreground/70 mt-0.5">transactions réalisées</p>
              </div>
            </div>
            <div className="h-[1px] flex-1 bg-border" />
          </motion.div>
        </div>
      </div>

      {/* SECTION 3 — Laureline (inversé) */}
      <section className="bg-background">
        <div className="container-narrow mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Bio (gauche sur desktop) — Photo first on mobile via order */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="px-6 md:pr-12 md:pl-0 py-8 md:py-4 flex flex-col justify-center order-2 md:order-1">
              <p className="text-xs font-medium tracking-[0.2em] text-sand uppercase mb-3">
                Conseillère immobilière indépendante
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
                Laureline Lohéac
              </h2>
              <div className="w-[60px] h-[2px] bg-sand mb-6" />
              <p className="text-foreground/75 text-base leading-relaxed mb-4">
                Avec plus de 15 ans d'expérience dans l'immobilier, Laureline s'est imposée comme une référence sur le secteur de Sanary-sur-Mer et ses environs. Reconnue pour son professionnalisme, sa disponibilité et son sens du détail, elle accompagne ses clients à chaque étape de leur projet avec rigueur et bienveillance.
              </p>
              <p className="text-foreground/75 text-base leading-relaxed mb-6">
                Parlant anglais, elle intervient régulièrement auprès d'une clientèle internationale attirée par la Côte Varoise. Co-fondatrice de Ouikey, elle allie expertise transactionnelle et vision complète de la gestion immobilière.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {["Transaction\n& Estimation", "Clientèle\ninternationale", "Gestion\nlocative"].map((badge) => (
                  <div key={badge} className="bg-blue-light text-navy text-center text-[13px] font-medium py-3 px-3 rounded-lg whitespace-pre-line leading-tight">
                    {badge}
                  </div>
                ))}
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm text-foreground/70 mb-6">
                <p className="flex items-center gap-2"><MapPin size={14} className="text-sand" /> Sanary-sur-Mer (83110)</p>
                <p className="flex items-center gap-2">
                  <Globe size={14} className="text-sand" /> Parle : Français ·{" "}
                  <span className="bg-sand/20 text-navy px-2 py-0.5 rounded text-xs font-medium">Anglais</span>
                </p>
                <p className="flex items-center gap-2"><FileText size={14} className="text-sand" /> RSAC Melun n°819 657 271</p>
              </div>

              <Link to="/contact">
                <Button className="bg-navy text-primary-foreground hover:bg-sand hover:text-navy transition-all font-semibold">
                  Contacter Laureline →
                </Button>
              </Link>
            </motion.div>

            {/* Photo (droite sur desktop, first on mobile) */}
            <motion.div {...fadeUp} className="relative order-1 md:order-2">
              <img
                src={laurelineImg}
                alt="Laureline Lohéac — Conseillère immobilière indépendante"
                className="w-full h-[420px] md:h-full object-cover object-top shadow-[-4px_0_24px_-4px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Notre approche */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
            Ce qui nous distingue
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Disponibles 7j/7", desc: "Joignables de 9h à 20h sans rendez-vous" },
              { icon: Award, title: "Expertise 15 ans", desc: "Transaction, négociation, valorisation locative" },
              { icon: Languages, title: "Bilingues FR / EN", desc: "Clientèle française et étrangère bienvenue" },
              { icon: Users, title: "Réseau national", desc: "140+ conseillers en réseau partout en France" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <item.icon size={32} className="mx-auto mb-3 text-sand" />
                <h3 className="text-primary-foreground text-[15px] font-medium mb-2">{item.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#B8C8D8" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA final */}
      <section className="bg-gray-light py-20 px-4">
        <div className="container-narrow mx-auto text-center max-w-2xl">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Votre projet immobilier commence ici
          </motion.h2>
          <p className="text-foreground/70 mb-8">
            Prenez contact avec nous pour une estimation gratuite de votre bien — sans engagement, réponse sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/estimation">
              <Button className="bg-navy text-primary-foreground hover:bg-navy-deep font-semibold px-8">
                Estimer mon bien gratuitement →
              </Button>
            </Link>
            <Link to="/nos-biens">
              <Button variant="navy-outline" className="px-8">
                Voir nos biens →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotreEquipe;