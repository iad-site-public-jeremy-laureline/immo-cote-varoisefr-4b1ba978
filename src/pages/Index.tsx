import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Globe } from "lucide-react";
import { toast } from "sonner";
import jeremyImg from "@/assets/jeremy.png";
import laurelineImg from "@/assets/laureline.png";
import heroImage from "@/assets/hero-coast.jpg";
import parallaxVilla from "@/assets/parallax-villa.jpg";
import parallaxPort from "@/assets/parallax-port.jpg";
import parallaxInterior from "@/assets/parallax-interior.jpg";
import parallaxAerial from "@/assets/parallax-aerial.jpg";
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
  { value: "15+", label: "ans d'expérience" },
  { value: "176", label: "avis clients 4,8/5" },
  { value: "10", label: "biens disponibles" },
  { value: "6", label: "secteurs couverts" },
  { value: "7j/7", label: "disponibilité" },
];

const testimonials = [
  {
    name: "Romain",
    type: "Mise en vente",
    text: "J'ai eu affaire à M. Vieira lors de la vente de ma maison. Une vente qui s'annonçait difficile mais tout s'est super bien passé et vendu à un bon prix ! Je recommande à 100%.",
    badge: "Jérémy · Six-Fours",
  },
  {
    name: "JC",
    type: "Mise en vente",
    text: "Je lui ai confié mes deux biens pour la mise en vente. Cela s'est fait relativement rapidement au prix net vendeur que je souhaitais. Excellent professionnel dans son domaine.",
    badge: "Jérémy · Var",
  },
  {
    name: "RdL",
    type: "Mise en vente",
    text: "Très professionnelle et qualité de suivi irréprochable. Digne de confiance !",
    badge: "Laureline · Sanary",
  },
];

const typeOptions = [
  { value: "appartement", label: "Appartement" },
  { value: "maison", label: "Maison" },
  { value: "villa", label: "Villa" },
  { value: "terrain", label: "Terrain" },
  { value: "local", label: "Local commercial" },
];

const Index = () => {
  const [heroForm, setHeroForm] = useState({ typeBien: "", ville: "", prenom: "", telephone: "" });

  useEffect(() => {
    document.title = "Conseillers Immobiliers Indépendants — Côte Varoise | Jérémy & Laureline";
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande d'estimation a bien été envoyée ! Nous vous recontactons sous 24h.");
    setHeroForm({ typeBien: "", ville: "", prenom: "", telephone: "" });
  };

  const inputClass = "w-full px-4 py-3 border border-border rounded-lg font-body text-sm focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all bg-background text-foreground";

  return (
    <div>
      {/* [1] HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 text-center px-4 max-w-4xl w-full">
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
            className="mt-4 text-lg md:text-xl text-primary-foreground/80 font-body font-light"
          >
            Jérémy & Laureline — 15 ans d'expérience | Six-Fours · Sanary · Bandol · Toulon · La Seyne · Ollioules
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 mx-auto max-w-2xl"
          >
            <form onSubmit={handleHeroSubmit} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-card-hover p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <select name="typeBien" value={heroForm.typeBien} onChange={e => setHeroForm({ ...heroForm, typeBien: e.target.value })} required className={inputClass}>
                  <option value="">Type de bien</option>
                  {typeOptions.map(t => (<option key={t.value} value={t.value}>{t.label}</option>))}
                </select>
                <input name="ville" value={heroForm.ville} onChange={e => setHeroForm({ ...heroForm, ville: e.target.value })} required className={inputClass} placeholder="Ville" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input name="prenom" value={heroForm.prenom} onChange={e => setHeroForm({ ...heroForm, prenom: e.target.value })} required className={inputClass} placeholder="Prénom" />
                <input name="telephone" type="tel" value={heroForm.telephone} onChange={e => setHeroForm({ ...heroForm, telephone: e.target.value })} required className={inputClass} placeholder="Téléphone" />
              </div>
              <Button type="submit" variant="sand" size="lg" className="w-full text-base py-4">
                Estimer mon bien gratuitement →
              </Button>
            </form>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 text-primary-foreground/60">
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* [2] BANDEAU — Chiffres clés */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-sand">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [3] PARALLAX 1 — Villa */}
      <section
        className="parallax-section min-h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${parallaxVilla})` }}
      >
        <div className="absolute inset-0 bg-navy/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 py-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Votre bien, notre priorité
          </h2>
          <p className="text-primary-foreground/80 font-body font-light text-lg mb-8">
            Estimation gratuite · Réponse sous 24h
          </p>
          <Link to="/estimation">
            <Button variant="sand" size="lg" className="text-base px-10 py-4">
              Estimer mon bien →
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* [4] BANDEAU — Présentation */}
      <section className="bg-background section-padding">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Deux experts à votre service, une seule priorité : votre projet
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Forts de plus de 15 ans d'expérience dans l'immobilier, nous avons choisi la Côte Varoise pour exercer notre métier au plus près du terrain et des gens. Jérémy et Laureline, c'est une double expertise complémentaire : la transaction, la négociation, la valorisation — au service de votre projet, à chaque étape.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              En tant que conseillers indépendants, nous ne sommes contraints par aucun horaire d'agence. Disponibles 7j/7, nous nous déplaçons chez vous, nous connaissons chaque quartier, chaque rue, chaque dynamique de prix de notre secteur. Votre bien mérite une attention exclusive — c'est exactement ce que nous offrons.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-muted rounded-xl p-6 shadow-card text-center">
              <img src={jeremyImg} alt="Jérémy Vieira" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
              <h3 className="font-display text-xl font-semibold text-navy">Jérémy Vieira</h3>
              <p className="text-sm text-muted-foreground mt-1">Conseiller immobilier indépendant</p>
              <p className="text-sm text-muted-foreground">Six-Fours-les-Plages & environs</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <Star size={14} className="fill-sand text-sand" />
                <span className="text-sm font-medium text-navy">4,8/5</span>
                <span className="text-xs text-muted-foreground">· 45 avis clients</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Parle : Français</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="bg-muted rounded-xl p-6 shadow-card text-center">
              <img src={laurelineImg} alt="Laureline Lohéac" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
              <h3 className="font-display text-xl font-semibold text-navy">Laureline Lohéac</h3>
              <p className="text-sm text-muted-foreground mt-1">Conseillère immobilière indépendante</p>
              <p className="text-sm text-muted-foreground">Sanary-sur-Mer & environs</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <Star size={14} className="fill-sand text-sand" />
                <span className="text-sm font-medium text-navy">4,8/5</span>
                <span className="text-xs text-muted-foreground">· 131 avis clients</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <p className="text-xs text-muted-foreground">Parle : Français · </p>
                <span className="inline-flex items-center gap-1 text-xs bg-sand/15 text-navy px-2 py-0.5 rounded-full font-medium">
                  <Globe size={10} /> Anglais
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [5] PARALLAX 2 — Port */}
      <section
        className="parallax-section min-h-[450px] flex items-center justify-center"
        style={{ backgroundImage: `url(${parallaxPort})` }}
      >
        <div className="absolute inset-0 bg-navy/45" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 py-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
            Six-Fours · Sanary · Bandol
          </h2>
          <p className="font-display text-2xl md:text-3xl text-sand mb-6">
            Toulon · La Seyne · Ollioules
          </p>
          <p className="text-primary-foreground/80 font-body font-light text-base md:text-lg max-w-lg mx-auto">
            15 ans de terrain. 6 villes. Une seule adresse : la vôtre.
          </p>
        </motion.div>
      </section>

      {/* [6] BANDEAU — Nos secteurs */}
      <section id="secteurs" className="section-padding bg-gray-light">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                transition={{ duration: 0.6 }}
              >
                <Link to={`/${sector.slug}`} className="group block relative rounded-lg overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-shadow">
                  <img src={sectorImages[sector.name]} alt={`Immobilier ${sector.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground">{sector.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [7] PARALLAX 3 — Intérieur */}
      <section
        className="parallax-section min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${parallaxInterior})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "hsl(37 38% 60% / 0.3)" }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 py-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            176 clients nous font confiance
          </h2>
          <p className="text-primary-foreground/90 font-body font-light text-lg md:text-xl">
            ⭐ 4,8 / 5 — note moyenne vérifiée
          </p>
        </motion.div>
      </section>

      {/* [8] BANDEAU — Témoignages */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-sand/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star size={14} className="fill-sand text-sand" />
              4,8/5 · 176 avis clients vérifiés
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Ils nous ont fait confiance
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-muted rounded-lg p-6 shadow-card"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-sand text-sand" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.type}</p>
                  </div>
                  <span className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full">{t.badge}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="https://www.immodvisor.com" target="_blank" rel="noopener noreferrer" className="text-sm text-sand hover:underline font-medium">
              Voir tous les avis Jérémy →
            </a>
            <a href="https://www.immodvisor.com" target="_blank" rel="noopener noreferrer" className="text-sm text-sand hover:underline font-medium">
              Voir tous les avis Laureline →
            </a>
          </div>
        </div>
      </section>

      {/* [9] PARALLAX 4 — Vue aérienne / CTA final */}
      <section
        className="parallax-section min-h-[480px] flex items-center justify-center"
        style={{ backgroundImage: `url(${parallaxAerial})` }}
      >
        <div className="absolute inset-0 bg-navy/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 py-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Prêt à vendre votre bien ?
          </h2>
          <p className="text-primary-foreground/80 font-body font-light text-base md:text-lg max-w-lg mx-auto mb-8">
            Obtenez votre estimation gratuite en moins de 24h — sans engagement
          </p>
          <Link to="/estimation">
            <Button variant="sand" size="lg" className="text-base px-10 py-4">
              Démarrer mon estimation →
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Ouikey */}
      <section className="section-padding bg-gray-light">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                Votre bien peut aussi générer des revenus
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                En attente de la vente, ou si vous souhaitez valoriser votre bien via la location saisonnière, découvrez Ouikey — notre service de conciergerie partenaire, expert de la location courte durée sur la Côte Varoise.
              </p>
              <a href="https://ouikey.fr" target="_blank" rel="noopener noreferrer">
                <Button variant="navy-outline" size="default">Découvrir Ouikey →</Button>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="space-y-6">
              {[
                { emoji: "🏠", title: "Gestion clé en main", desc: "On s'occupe de tout, de A à Z" },
                { emoji: "📈", title: "Revenus optimisés", desc: "Tarification dynamique et visibilité maximale" },
                { emoji: "✅", title: "Zéro contrainte propriétaire", desc: "Vous profitez, nous gérons" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;