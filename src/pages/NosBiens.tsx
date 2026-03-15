import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Home, Ruler, LayoutGrid, BedDouble } from "lucide-react";
import { properties } from "@/data/properties";

const cities = ["Tous", "Toulon", "Sanary-sur-Mer", "Six-Fours-les-Plages", "La Seyne-sur-Mer", "La Garde"] as const;
const types = ["Tous", "Appartement", "Maison", "Terrain", "Local commercial"] as const;
const conseillers = ["Tous", "Jérémy", "Laureline"] as const;

const typeMap: Record<string, string> = {
  "Local commercial": "Local",
};

const statusStyles: Record<string, string> = {
  Nouveau: "bg-[hsl(150,45%,35%)] text-primary-foreground border-transparent",
  Exclusivité: "bg-sand text-navy border-transparent",
  "Sous compromis": "bg-muted text-muted-foreground border-muted line-through",
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);

const NosBiens = () => {
  const [cityFilter, setCityFilter] = useState("Tous");
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [conseillerFilter, setConseillerFilter] = useState("Tous");

  useEffect(() => {
    document.title = "Nos Biens Disponibles — Jérémy et Laureline Immobilier";
  }, []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (cityFilter !== "Tous" && p.city !== cityFilter) return false;
      const mappedType = typeMap[typeFilter] || typeFilter;
      if (typeFilter !== "Tous" && p.type !== mappedType) return false;
      if (conseillerFilter !== "Tous" && p.conseiller !== conseillerFilter) return false;
      return true;
    });
  }, [cityFilter, typeFilter, conseillerFilter]);

  return (
    <div className="pt-[70px]">
      {/* Header */}
      <section className="bg-navy text-primary-foreground py-16 md:py-20">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-4"
          >
            Nos biens disponibles à la vente
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Appartements, maisons, villas et terrains sur la Côte Varoise
          </p>
          <p className="text-sand font-medium mt-3">{properties.length} biens disponibles</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border sticky top-[70px] z-40">
        <div className="container-narrow mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FilterGroup label="Ville" options={cities} value={cityFilter} onChange={setCityFilter} />
            <FilterGroup label="Type" options={types} value={typeFilter} onChange={setTypeFilter} />
            <FilterGroup label="Conseiller" options={conseillers} value={conseillerFilter} onChange={setConseillerFilter} />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} bien{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Home className="mx-auto mb-4 h-10 w-10 opacity-40" />
              <p>Aucun bien ne correspond à vos critères.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center">
                      <Home className="h-12 w-12 text-muted-foreground/30" />
                      {property.status && (
                        <Badge className={`absolute top-3 left-3 ${statusStyles[property.status]} text-xs uppercase tracking-wider`}>
                          {property.status}
                        </Badge>
                      )}
                      {/* Conseiller badge */}
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-navy text-primary-foreground flex items-center justify-center text-xs font-bold">
                        {property.conseiller[0]}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      {/* Price */}
                      <p className="font-display text-2xl font-bold text-navy mb-2">
                        {formatPrice(property.price)}
                      </p>

                      {/* Type & City */}
                      <p className="text-sm text-foreground/80 mb-3">
                        {property.type} · {property.city}
                      </p>

                      {/* Details */}
                      <div className="flex items-center gap-4 text-sm text-foreground/70 mb-4">
                        <span className="flex items-center gap-1">
                          <Ruler className="h-3.5 w-3.5" />
                          {property.surface}
                        </span>
                        {property.rooms && (
                          <span className="flex items-center gap-1">
                            <LayoutGrid className="h-3.5 w-3.5" />
                            {property.rooms}p
                          </span>
                        )}
                        {property.bedrooms && (
                          <span className="flex items-center gap-1">
                            <BedDouble className="h-3.5 w-3.5" />
                            {property.bedrooms}ch
                          </span>
                        )}
                      </div>
                      {property.terrain && (
                        <p className="text-xs text-muted-foreground mb-4">
                          Terrain {property.terrain}
                        </p>
                      )}

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{property.conseiller}</span>
                        <a href={property.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="sand" size="sm" className="gap-1.5">
                            Voir l'annonce →
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
    <p className="text-xs font-medium text-muted-foreground mb-1.5">{label}</p>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            value === opt
              ? "bg-navy text-primary-foreground"
              : "bg-muted text-foreground hover:bg-muted-foreground/10"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default NosBiens;