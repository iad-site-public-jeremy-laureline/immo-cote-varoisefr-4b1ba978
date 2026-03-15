import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, Home, Ruler, LayoutGrid } from "lucide-react";
import { properties, type PropertyType, type Conseiller } from "@/data/properties";

const cities = ["Toutes", "Toulon", "Sanary-sur-Mer", "Six-Fours", "La Seyne", "La Garde"] as const;
const types = ["Tous", "Appartement", "Maison", "Terrain", "Local"] as const;
const conseillers = ["Tous", "Jérémy", "Laureline"] as const;

const statusColors: Record<string, string> = {
  Nouveau: "bg-emerald-600 text-white border-emerald-600",
  Exclusivité: "bg-gold text-navy border-gold",
  "Sous compromis": "bg-muted text-muted-foreground border-muted",
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);

const NosBiens = () => {
  const [cityFilter, setCityFilter] = useState("Toutes");
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [conseillerFilter, setConseillerFilter] = useState("Tous");

  useEffect(() => {
    document.title = "Nos Biens — Jeremy & Laureline Immobilier";
  }, []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (cityFilter !== "Toutes" && p.cityFilter !== cityFilter) return false;
      if (typeFilter !== "Tous" && p.type !== typeFilter) return false;
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
            Nos biens à la vente
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Découvrez notre sélection de biens immobiliers sur la côte varoise, accompagnés par Jérémy et Laureline.
          </p>
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
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <img
                        src="/placeholder.svg"
                        alt={`${property.label} — ${property.city}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {property.status && (
                        <Badge className={`absolute top-3 left-3 ${statusColors[property.status]} text-xs`}>
                          {property.status}
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-5 flex flex-col flex-1">
                      {/* Type & City */}
                      <p className="text-xs font-medium text-gold uppercase tracking-wider mb-1">
                        {property.type}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-navy leading-tight mb-1">
                        {property.label}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{property.city}</p>

                      {/* Details */}
                      <div className="flex items-center gap-4 text-sm text-foreground/70 mb-4">
                        <span className="flex items-center gap-1">
                          <Ruler className="h-3.5 w-3.5" />
                          {property.surface}
                        </span>
                        {property.terrain && (
                          <span className="text-xs text-muted-foreground">
                            Terrain {property.terrain}
                          </span>
                        )}
                        {property.rooms && (
                          <span className="flex items-center gap-1">
                            <LayoutGrid className="h-3.5 w-3.5" />
                            {property.rooms}p
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <p className="text-xl font-bold text-navy mb-4">
                        {formatPrice(property.price)}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        {/* Conseiller */}
                        <div className="flex items-center gap-2">
                          <Avatar className="h-7 w-7">
                            <AvatarFallback className="text-xs bg-navy/10 text-navy">
                              {property.conseiller[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-muted-foreground">{property.conseiller}</span>
                        </div>

                        <a href={property.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="sand" size="sm" className="gap-1.5">
                            Voir l'annonce
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
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
