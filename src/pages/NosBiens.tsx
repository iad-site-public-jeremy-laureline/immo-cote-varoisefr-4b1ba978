import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, X, Users, Loader2 } from "lucide-react";
import { useProperties } from "@/hooks/useProperties";
import PropertyCard from "@/components/PropertyCard";

const NosBiens = () => {
  const { properties, loading, error } = useProperties();
  const [cityFilter, setCityFilter] = useState("Tous");
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [conseillerFilter, setConseillerFilter] = useState("Tous");

  useEffect(() => {
    document.title = "Nos Biens Disponibles — Jérémy et Laureline Immobilier";
  }, []);

  // Dynamic filter options from data
  const cities = useMemo(() => {
    const unique = [...new Set(properties.map((p) => p.ville).filter(Boolean))].sort();
    return ["Tous", ...unique];
  }, [properties]);

  const types = useMemo(() => {
    const unique = [...new Set(properties.map((p) => p.type).filter(Boolean))].sort();
    return ["Tous", ...unique];
  }, [properties]);

  const conseillers = useMemo(() => {
    const unique = [...new Set(properties.map((p) => p.conseiller).filter(Boolean))].sort();
    return ["Tous", ...unique];
  }, [properties]);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (cityFilter !== "Tous" && p.ville !== cityFilter) return false;
      if (typeFilter !== "Tous" && p.type !== typeFilter) return false;
      if (conseillerFilter !== "Tous" && p.conseiller !== conseillerFilter) return false;
      return true;
    });
  }, [properties, cityFilter, typeFilter, conseillerFilter]);

  const activeFilters = [cityFilter, typeFilter, conseillerFilter].filter((f) => f !== "Tous").length;

  const clearAll = () => {
    setCityFilter("Tous");
    setTypeFilter("Tous");
    setConseillerFilter("Tous");
  };

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(var(--sand) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--sand) / 0.2) 0%, transparent 50%)",
          }}
        />
        <div className="container-narrow mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4"
          >
            Collection immobilière
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          >
            Nos biens
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-foreground/60 max-w-lg mx-auto text-lg"
          >
            Découvrez notre sélection de biens disponibles sur la Côte Varoise
          </motion.p>
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary/30 bg-secondary/10"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary font-medium text-sm">
                {properties.length} bien{properties.length > 1 ? "s" : ""} disponible{properties.length > 1 ? "s" : ""}
              </span>
            </motion.div>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-[70px] z-40">
        <div className="container-narrow mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              {/* City */}
              <FilterGroup icon={<MapPin className="h-3.5 w-3.5" />} label="Ville">
                {cities.map((city) => (
                  <FilterButton key={city} active={cityFilter === city} onClick={() => setCityFilter(city)}>
                    {city}
                  </FilterButton>
                ))}
              </FilterGroup>

              <div className="hidden lg:block w-px h-6 bg-border/60" />

              {/* Type */}
              <FilterGroup icon={<Search className="h-3.5 w-3.5" />} label="Type">
                {types.map((type) => (
                  <FilterButton key={type} active={typeFilter === type} onClick={() => setTypeFilter(type)}>
                    {type}
                  </FilterButton>
                ))}
              </FilterGroup>

              <div className="hidden lg:block w-px h-6 bg-border/60" />

              {/* Conseiller */}
              <FilterGroup icon={<Users className="h-3.5 w-3.5" />} label="Conseiller">
                {conseillers.map((c) => (
                  <FilterButton key={c} active={conseillerFilter === c} onClick={() => setConseillerFilter(c)}>
                    {c}
                  </FilterButton>
                ))}
              </FilterGroup>
            </div>

            {/* Active filters summary */}
            <AnimatePresence>
              {activeFilters > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 pt-2 border-t border-border/40"
                >
                  <span className="text-xs text-muted-foreground">
                    {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {cityFilter !== "Tous" && (
                      <ActiveTag label={cityFilter} onRemove={() => setCityFilter("Tous")} />
                    )}
                    {typeFilter !== "Tous" && (
                      <ActiveTag label={typeFilter} onRemove={() => setTypeFilter("Tous")} />
                    )}
                    {conseillerFilter !== "Tous" && (
                      <ActiveTag label={conseillerFilter} onRemove={() => setConseillerFilter("Tous")} />
                    )}
                  </div>
                  <button
                    onClick={clearAll}
                    className="ml-auto text-xs text-muted-foreground hover:text-primary font-medium transition-colors"
                  >
                    Tout effacer
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container-narrow mx-auto px-4 md:px-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 text-muted-foreground gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-secondary" />
              <p className="text-sm">Chargement des biens…</p>
            </div>
          ) : error ? (
            <div className="text-center py-24 text-destructive">
              <p className="text-lg font-display mb-2">Erreur de chargement</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 text-muted-foreground">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-muted flex items-center justify-center">
                <MapPin className="h-7 w-7 opacity-40" />
              </div>
              <p className="text-lg font-display">Aucun bien ne correspond à vos critères</p>
              <p className="text-sm mt-2">Essayez de modifier vos filtres</p>
            </motion.div>
          ) : (
            <>
              {activeFilters === 0 && (
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{filtered.length}</span> bien{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
                  </p>
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {filtered.map((property, i) => (
                  <PropertyCard key={property.reference || i} property={property} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

/* ── Subcomponents ── */

function FilterGroup({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0 inline-flex items-center gap-1">
        {icon}
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-foreground/60 hover:text-primary hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}

function ActiveTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-medium">
      {label}
      <X className="h-3 w-3 cursor-pointer hover:text-primary transition-colors" onClick={onRemove} />
    </span>
  );
}

export default NosBiens;
