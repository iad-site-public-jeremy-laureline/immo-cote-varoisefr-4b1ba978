import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Clock, Users, MapPin, Percent } from "lucide-react";
import EstimationForm from "@/components/EstimationForm";
import heroImage from "@/assets/hero-coast.jpg";
import sixFoursImg from "@/assets/six-fours.jpg";
import sanaryImg from "@/assets/sanary.jpg";
import bandolImg from "@/assets/bandol.jpg";
import toulonImg from "@/assets/toulon.jpg";
import laSeyne from "@/assets/la-seyne.jpg";
import ollioulesImg from "@/assets/ollioules.jpg";

const sectorImages: Record<string, string> = {
  "Six-Fours-les-Plages": sixFoursImg,
  "Sanary-sur-Mer": sanaryImg,
  "Bandol": bandolImg,
  "Toulon": toulonImg,
  "La Seyne-sur-Mer": laSeyne,
  "Ollioules": ollioulesImg,
};

const sectors = [
  { name: "Six-Fours-les-Plages", slug: "six-fours-les-plages" },
  { name: "Sanary-sur-Mer", slug: "sanary-sur-mer" },
  { name: "Bandol", slug: "bandol" },
  { name: "Toulon", slug: "toulon" },
  { name: "La Seyne-sur-Mer", slug: "la-seyne-sur-mer" },
  { name: "Ollioules", slug: "ollioules" },
];

const stats = [
  { icon: Clock, value: "12+", label: "ans d'expérience" },
  { icon: Users, value: "140+", label: "conseillers dans le réseau" },
  { icon: MapPin, value: "Var", label: "& Côte Varoise" },
  { icon: Percent, value: "-30%", label: "vs marché (honoraires)" },
];

const testimonials = [
  { name: "Marie D.", type: "Vente maison à Six-Fours", text: "Jeremy et Laureline ont vendu notre maison en moins de 2 mois. Professionnalisme et disponibilité remarquables !" },
  { name: "Pierre L.", type: "Achat appartement Sanary", text: "Un accompagnement sur-mesure du début à la fin. Leur connaissance du marché local est impressionnante." },
  { name: "Sophie M.", type: "Vente villa Bandol", text: "Des honoraires très compétitifs et un service haut de gamme. Je recommande vivement !" },
];

const Index = () => {
  useEffect(() => {
    document.title = "Conseillers IAD sur la Côte Varoise | Jeremy & Laureline Immobilier";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
          >
            Vos experts immobiliers sur la Côte Varoise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-primary-foreground/80 font-body"
          >
            Jeremy & Laureline — Conseillers IAD | Six-Fours · Sanary · Bandol · Toulon
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Link to="/estimation">
              <Button variant="sand" size="lg" className="text-base px-8 py-4 text-lg">
                Estimer mon bien gratuitement
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 text-primary-foreground/60"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-background section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-3 text-sand" size={28} />
                <div className="font-display text-3xl md:text-4xl font-bold text-navy">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="bg-muted section-padding">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Deux experts à votre service sur la côte varoise
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Installés sur la côte varoise depuis plus de 12 ans, nous connaissons chaque quartier, chaque rue, chaque tendance de prix de notre secteur. Jeremy et Laureline, c'est une double expertise au service de votre projet : la transaction immobilière et la valorisation locative, sous le toit du premier réseau de mandataires indépendants de France, IAD.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              En tant que conseillers indépendants, nous ne sommes pas contraints par les horaires d'une agence. Nous sommes disponibles 7j/7, nous nous déplaçons chez vous, et nous vous accompagnons de l'estimation jusqu'à la signature chez le notaire. Votre bien mérite une attention exclusive — c'est ce que nous vous offrons.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { name: "Jeremy Vieira", desc: "Expert en transaction immobilière, négociation et valorisation des biens sur le secteur côtier." },
              { name: "Laureline Loheac", desc: "Spécialiste de l'accompagnement client, estimation et stratégie de vente personnalisée." },
            ].map((person) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 shadow-card text-center"
              >
                <div className="w-20 h-20 rounded-full bg-sand/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-2xl text-sand font-bold">{person.name[0]}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">{person.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="secteurs" className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Nous intervenons sur toute la côte varoise
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {sectors.map((sector) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/${sector.slug}`}
                  className="group block relative rounded-lg overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <img
                    src={sectorImages[sector.name]}
                    alt={`Immobilier ${sector.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground">
                      {sector.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimation Form */}
      <section className="section-padding bg-sand-light">
        <div className="container-narrow mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Combien vaut votre bien ?
            </h2>
            <p className="text-foreground/70">
              Propriétaires, obtenez en 24h une estimation précise de votre bien par des experts qui connaissent chaque rue de la côte varoise.
            </p>
          </motion.div>
          <div className="bg-background rounded-xl p-6 md:p-8 shadow-card">
            <EstimationForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-12"
          >
            Témoignages
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-lg p-6 shadow-card"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-sand text-sand" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ouikey */}
      <section className="section-padding bg-blue-light">
        <div className="container-narrow mx-auto text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Votre bien peut aussi générer des revenus en location courte durée
            </h2>
            <p className="text-foreground/70 mb-6">
              En attendant la vente, ou si vous souhaitez valoriser votre bien, découvrez Ouikey, notre service de conciergerie partenaire.
            </p>
            <Button variant="navy-outline" size="lg">
              En savoir plus sur Ouikey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
