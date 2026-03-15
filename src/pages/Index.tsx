import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Globe, Clock, Award, MapPin, Home, Users, Shield, Eye, Handshake, TrendingUp } from "lucide-react";
import { properties } from "@/data/properties";
import jeremyImg from "@/assets/jeremy.png";
import laurelineImg from "@/assets/laureline.png";
import heroImage from "@/assets/hero-coast.jpg";
import parallaxVilla from "@/assets/parallax-villa.jpg";
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
  { value: "15+", label: "ans d'expérience", icon: Award },
  { value: "176", label: "avis clients 4,8/5", icon: Star },
  { value: "10", label: "biens disponibles", icon: Home },
  { value: "6", label: "secteurs couverts", icon: MapPin },
  { value: "7j/7", label: "disponibilité", icon: Clock },
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

const expertisePoints = [
  { icon: Eye, title: "Expertise locale", desc: "Nous vivons et travaillons sur la Côte Varoise. Chaque quartier, chaque rue nous est familier." },
  { icon: TrendingUp, title: "Connaissance du marché", desc: "Nous analysons les prix et tendances au quotidien pour positionner votre bien au juste prix." },
  { icon: Handshake, title: "Accompagnement personnalisé", desc: "Un interlocuteur dédié, disponible 7j/7, de l'estimation jusqu'à la signature chez le notaire." },
  { icon: Shield, title: "Transparence totale", desc: "Aucune surprise. Nous vous informons avec honnêteté à chaque étape de votre projet." },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);

const Index = () => {
  useEffect(() => {
    document.title = "Conseillers Immobiliers Indépendants — Côte Varoise | Jérémy et Laureline";
  }, []);

  const visibleProperties = properties.filter(p => p.status !== "Sous compromis").slice(0, 6);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/55 to-navy-deep/75" />
        <div className="relative z-10 text-center px-4 max-w-4xl w-full pt-20">
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
            className="mt-5 text-lg md:text-xl text-primary-foreground/85 font-body font-light"
          >
            Jérémy et Laureline — 15 ans d'expérience
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-2 text-base md:text-lg text-sand font-body font-medium tracking-wide"
          >
            Six-Fours • Sanary • Bandol • Toulon • La Seyne • Ollioules
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <Link to="/estimation">
              <Button variant="sand" size="lg" className="rounded-full px-10 py-5 text-base shadow-lg hover:shadow-xl transition-shadow">
                Estimer mon bien gratuitement →
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 text-primary-foreground/50">
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* ═══ FORMULAIRE D'ESTIMATION ═══ */}
      <section className="bg-background section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl shadow-card-hover p-8 md:p-10 border border-border/50">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy text-center mb-2">
                Estimation gratuite de votre bien
              </h2>
              <p className="text-muted-foreground text-center text-sm mb-8">
                Réponse sous 24h · Sans engagement
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  import("sonner").then(({ toast }) => toast.success("Votre demande d'estimation a bien été envoyée ! Nous vous recontactons sous 24h."));
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Type de bien</label>
                    <select required className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all bg-background text-foreground">
                      <option value="">Sélectionnez</option>
                      <option value="appartement">Appartement</option>
                      <option value="maison">Maison</option>
                      <option value="villa">Villa</option>
                      <option value="terrain">Terrain</option>
                      <option value="local">Local commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Ville</label>
                    <select required className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all bg-background text-foreground">
                      <option value="">Sélectionnez</option>
                      <option value="six-fours">Six-Fours-les-Plages</option>
                      <option value="sanary">Sanary-sur-Mer</option>
                      <option value="bandol">Bandol</option>
                      <option value="toulon">Toulon</option>
                      <option value="la-seyne">La Seyne-sur-Mer</option>
                      <option value="ollioules">Ollioules</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="Votre prénom" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all bg-background text-foreground" />
                  <input required type="tel" placeholder="Téléphone" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all bg-background text-foreground" />
                </div>
                <Button type="submit" variant="sand" size="lg" className="w-full rounded-xl text-base py-4">
                  Estimer mon bien gratuitement →
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Vos données sont protégées — aucun engagement
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PREUVE SOCIALE — Chiffres clés ═══ */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <Icon size={28} className="text-sand mx-auto mb-3" strokeWidth={1.5} />
                  <div className="font-display text-3xl md:text-4xl font-bold text-sand">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/65 mt-1 font-body">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ BIENS À VENDRE ═══ */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Nos biens à vendre sur la Côte Varoise
            </h2>
            <p className="text-muted-foreground mt-3 font-body">Découvrez notre sélection de biens disponibles</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleProperties.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <a
                  href={property.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/40"
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-navy/10">
                      <Home size={48} className="text-navy/20" />
                    </div>
                    {property.status && (
                      <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                        property.status === "Nouveau" ? "bg-sand text-navy" :
                        property.status === "Exclusivité" ? "bg-navy text-primary-foreground" :
                        "bg-muted text-foreground"
                      }`}>
                        {property.status}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-xl font-bold text-navy">{formatPrice(property.price)}</span>
                    </div>
                    <h3 className="font-body font-semibold text-foreground text-sm mb-1">{property.label}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <MapPin size={13} /> {property.city}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span>{property.surface}</span>
                      {property.rooms && <span>· {property.rooms} pièces</span>}
                      {property.terrain && <span>· Terrain {property.terrain}</span>}
                    </div>
                    <div className="mt-4 text-sand font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Voir le bien →
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/nos-biens">
              <Button variant="navy-outline" size="lg" className="rounded-full px-8">
                Voir tous nos biens →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ EXPERTISE LOCALE ═══ */}
      <section className="section-padding bg-sand-light">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Votre agence immobilière sur la Côte Varoise
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Forts de plus de 15 ans d'expérience, nous mettons notre double expertise au service de votre projet immobilier.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertisePoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-7 shadow-card text-center border border-border/30"
                >
                  <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon size={26} className="text-sand" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Team cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-7 shadow-card text-center border border-border/30">
              <img src={jeremyImg} alt="Jérémy Vieira" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top ring-2 ring-sand/30" />
              <h3 className="font-display text-xl font-semibold text-navy">Jérémy Vieira</h3>
              <p className="text-sm text-muted-foreground mt-1">Conseiller immobilier indépendant</p>
              <p className="text-sm text-muted-foreground">Six-Fours-les-Plages et environs</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <Star size={14} className="fill-sand text-sand" />
                <span className="text-sm font-medium text-navy">4,8/5</span>
                <span className="text-xs text-muted-foreground">· 45 avis</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl p-7 shadow-card text-center border border-border/30">
              <img src={laurelineImg} alt="Laureline Lohéac" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top ring-2 ring-sand/30" />
              <h3 className="font-display text-xl font-semibold text-navy">Laureline Lohéac</h3>
              <p className="text-sm text-muted-foreground mt-1">Conseillère immobilière indépendante</p>
              <p className="text-sm text-muted-foreground">Sanary-sur-Mer et environs</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <Star size={14} className="fill-sand text-sand" />
                <span className="text-sm font-medium text-navy">4,8/5</span>
                <span className="text-xs text-muted-foreground">· 131 avis</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="inline-flex items-center gap-1 text-xs bg-sand/15 text-navy px-2 py-0.5 rounded-full font-medium">
                  <Globe size={10} /> Anglais
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTEURS D'INTERVENTION ═══ */}
      <section id="secteurs" className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Nos secteurs d'intervention
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
                <Link to={`/${sector.slug}`} className="group block relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-all duration-300">
                  <img src={sectorImages[sector.name]} alt={`Immobilier ${sector.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/20 to-transparent group-hover:from-navy-deep/70 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground">{sector.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARALLAX — Confiance */}
      <section
        className="parallax-section min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${parallaxVilla})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 to-navy/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-4 py-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
            176 clients nous font confiance
          </h2>
          <p className="text-primary-foreground/85 font-body font-light text-lg md:text-xl">
            ⭐ 4,8 / 5 — note moyenne vérifiée
          </p>
        </motion.div>
      </section>

      {/* ═══ AVIS CLIENTS ═══ */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-sand/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star size={14} className="fill-sand text-sand" />
              4,8/5 · 176 avis clients vérifiés
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Ils nous font confiance
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-7 shadow-card border border-border/30"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-sand text-sand" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.type}</p>
                  </div>
                  <span className="text-xs bg-sand/10 text-navy px-3 py-1.5 rounded-full font-medium">{t.badge}</span>
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

      {/* ═══ CTA ESTIMATION ═══ */}
      <section
        className="parallax-section min-h-[480px] flex items-center justify-center"
        style={{ backgroundImage: `url(${parallaxAerial})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/65 to-navy/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Vous souhaitez connaître la valeur de votre bien ?
          </h2>
          <p className="text-primary-foreground/80 font-body font-light text-base md:text-lg mb-8">
            Obtenez votre estimation gratuite en moins de 24h — sans engagement
          </p>
          <Link to="/estimation">
            <Button variant="sand" size="lg" className="rounded-full px-10 py-5 text-base shadow-lg">
              Estimer mon bien gratuitement →
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ═══ OUIKEY ═══ */}
      <section className="section-padding bg-sand-light">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                Votre bien peut aussi générer des revenus
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                En attente de la vente, ou si vous souhaitez valoriser votre bien via la location saisonnière, découvrez Ouikey — notre service de conciergerie partenaire, expert de la location courte durée sur la Côte Varoise.
              </p>
              <a href="https://ouikey.fr" target="_blank" rel="noopener noreferrer">
                <Button variant="navy-outline" size="default" className="rounded-full px-6">Découvrir Ouikey →</Button>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-6">
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
