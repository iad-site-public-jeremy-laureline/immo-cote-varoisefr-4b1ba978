import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Ruler, LayoutGrid, BedDouble, MapPin, TreePine, Search, X } from "lucide-react";
import { properties } from "@/data/properties";

const cities = ["Tous", "Toulon", "Sanary-sur-Mer", "Six-Fours-les-Plages", "La Seyne-sur-Mer", "La Garde"] as const;
const types = ["Tous", "Appartement", "Maison", "Terrain", "Local commercial"] as const;


const typeMap: Record<string, string> = {
  "Local commercial": "Local",
};

const statusConfig: Record<string, { bg: string; text: string }> = {
  Nouveau: { bg: "bg-emerald-500", text: "text-white" },
  Exclusivité: { bg: "bg-sand", text: "text-navy" },
  "Sous compromis": { bg: "bg-white/90", text: "text-muted-foreground" },
};

const propertyImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  2: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
  3: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  4: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  5: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  6: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
  7: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop",
  8: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
  9: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
  10: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);

const NosBiens = () => {
  const [cityFilter, setCityFilter] = useState("Tous");
  const [typeFilter, setTypeFilter] = useState("Tous");
  

  useEffect(() => {
    document.title = "Nos Biens Disponibles — Jérémy et Laureline Immobilier";
  }, []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (cityFilter !== "Tous" && p.city !== cityFilter) return false;
      const mappedType = typeMap[typeFilter] || typeFilter;
      if (typeFilter !== "Tous" && p.type !== mappedType) return false;
      return true;
    });
  }, [cityFilter, typeFilter]);

  const activeFilters = [cityFilter, typeFilter].filter((f) => f !== "Tous").length;

  return (
    <div className="pt-[70px]">
      {/* Hero Header */}
      <section className="relative bg-navy text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--sand) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--sand) / 0.2) 0%, transparent 50%)',
          }} />
        </div>
        <div className="container-narrow mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sand uppercase tracking-[0.2em] text-sm font-medium mb-4"
          >
            Collection immobilière
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          >
            Nos biens d'exception
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-foreground/60 max-w-lg mx-auto text-lg"
          >
            Appartements, maisons, villas et terrains sur la Côte Varoise
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sand/30 bg-sand/10"
          >
            <span className="w-2 h-2 rounded-full bg-sand animate-pulse" />
            <span className="text-sand font-medium text-sm">{properties.length} biens disponibles</span>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-[70px] z-40">
        <div className="container-narrow mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col gap-4">
            {/* Filter rows */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* City filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">
                  <MapPin className="h-3.5 w-3.5 inline mr-1" />
                  Ville
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setCityFilter(city)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        cityFilter === city
                          ? "bg-navy text-primary-foreground shadow-sm"
                          : "text-foreground/60 hover:text-navy hover:bg-muted"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-6 bg-border/60" />

              {/* Type filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">
                  <Search className="h-3.5 w-3.5 inline mr-1" />
                  Type
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setTypeFilter(type)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        typeFilter === type
                          ? "bg-navy text-primary-foreground shadow-sm"
                          : "text-foreground/60 hover:text-navy hover:bg-muted"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active filters summary */}
            {activeFilters > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 pt-2 border-t border-border/40"
              >
                <span className="text-xs text-muted-foreground">{filtered.length} résultat{filtered.length > 1 ? "s" : ""}</span>
                <div className="flex gap-1.5">
                  {cityFilter !== "Tous" && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sand/15 text-sand text-xs font-medium">
                      {cityFilter}
                      <X className="h-3 w-3 cursor-pointer hover:text-navy transition-colors" onClick={() => setCityFilter("Tous")} />
                    </span>
                  )}
                  {typeFilter !== "Tous" && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sand/15 text-sand text-xs font-medium">
                      {typeFilter}
                      <X className="h-3 w-3 cursor-pointer hover:text-navy transition-colors" onClick={() => setTypeFilter("Tous")} />
                    </span>
                  )}
                </div>
                <button
                  onClick={() => { setCityFilter("Tous"); setTypeFilter("Tous"); }}
                  className="ml-auto text-xs text-muted-foreground hover:text-navy font-medium transition-colors"
                >
                  Tout effacer
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container-narrow mx-auto px-4 md:px-8">
          {activeFilters === 0 && (
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filtered.length}</span> bien{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
              </p>
            </div>
          )}

          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-muted-foreground"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-muted flex items-center justify-center">
                <MapPin className="h-7 w-7 opacity-40" />
              </div>
              <p className="text-lg font-display">Aucun bien ne correspond à vos critères</p>
              <p className="text-sm mt-2">Essayez de modifier vos filtres</p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((property, i) => (
                <motion.a
                  key={property.id}
                  href={property.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col">
                    {/* Photo */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={propertyImages[property.id]}
                        alt={`${property.label} — ${property.city}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Status badge */}
                      {property.status && (
                        <Badge className={`absolute top-4 left-4 ${statusConfig[property.status].bg} ${statusConfig[property.status].text} border-none text-xs uppercase tracking-wider font-semibold px-3 py-1 shadow-md ${property.status === 'Sous compromis' ? 'line-through' : ''}`}>
                          {property.status}
                        </Badge>
                      )}

                      {/* Conseiller avatar */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy/90 backdrop-blur-sm text-primary-foreground flex items-center justify-center text-xs font-bold ring-2 ring-white/20">
                        {property.conseiller[0]}
                      </div>

                      {/* City on photo */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-white/80" />
                        <span className="text-white text-sm font-medium">{property.city}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      {/* Price */}
                      <p className="font-display text-2xl md:text-[1.65rem] font-bold text-navy mb-1">
                        {formatPrice(property.price)}
                      </p>

                      {/* Type */}
                      <p className="text-sm text-foreground/70 mb-4 font-medium">
                        {property.label}
                      </p>

                      {/* Details row */}
                      <div className="flex items-center gap-3 flex-wrap text-sm text-foreground/60 mb-4 pb-4 border-b border-border">
                        <span className="flex items-center gap-1.5">
                          <Ruler className="h-4 w-4 text-sand" />
                          {property.surface}
                        </span>
                        {property.rooms && (
                          <span className="flex items-center gap-1.5">
                            <LayoutGrid className="h-4 w-4 text-sand" />
                            {property.rooms} pièce{property.rooms > 1 ? "s" : ""}
                          </span>
                        )}
                        {property.bedrooms && (
                          <span className="flex items-center gap-1.5">
                            <BedDouble className="h-4 w-4 text-sand" />
                            {property.bedrooms} ch.
                          </span>
                        )}
                        {property.terrain && (
                          <span className="flex items-center gap-1.5">
                            <TreePine className="h-4 w-4 text-sand" />
                            {property.terrain}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Conseiller : <span className="font-medium text-foreground/70">{property.conseiller}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy group-hover:text-sand transition-colors duration-300">
                          Voir le bien
                          <ExternalLink className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const FilterGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="flex-1">
    <p className="text-xs font-medium text-muted-foreground mb-2">{label}</p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
            value === opt
              ? "bg-navy text-primary-foreground border-navy shadow-md"
              : "bg-card text-foreground/70 border-border hover:border-navy/30 hover:text-navy"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default NosBiens;
