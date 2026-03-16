import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, Loader2, Home, LayoutGrid } from "lucide-react";
import { useProperties } from "@/hooks/useProperties";
import PropertyCard from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NosBiens = () => {
  const { properties, loading, error } = useProperties();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [piecesFilter, setPiecesFilter] = useState("Tous");

  useEffect(() => {
    document.title = "Nos Biens Disponibles — Jérémy et Laureline Immobilier";
  }, []);

  // Extract clean type from the raw "Ville" field (e.g. "appartement à Toulon..." → "Appartement")
  const getCleanType = (p: { ville: string; titre: string }) => {
    const src = (p.ville || p.titre).toLowerCase();
    if (src.includes("maison")) return "Maison";
    if (src.includes("appartement") || src.includes("studio")) return "Appartement";
    if (src.includes("terrain")) return "Terrain";
    if (src.includes("boutique") || src.includes("local") || src.includes("commercial")) return "Local commercial";
    return "Autre";
  };

  const types = useMemo(() => {
    const unique = [...new Set(properties.map(getCleanType))].sort();
    return ["Tous", ...unique];
  }, [properties]);

  const piecesOptions = ["Tous", "1", "2", "3", "4", "5+"];

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      // Search filter
      if (search) {
        const q = search.toLowerCase().trim();
        const searchable = `${p.ville} ${p.titre} ${p.description} ${p.type}`.toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      // Type filter
      if (typeFilter !== "Tous" && getCleanType(p) !== typeFilter) return false;
      // Pieces filter
      if (piecesFilter !== "Tous") {
        const pieces = p.pieces;
        if (piecesFilter === "5+") {
          if (!pieces || pieces < 5) return false;
        } else {
          if (pieces !== Number(piecesFilter)) return false;
        }
      }
      return true;
    });
  }, [properties, search, typeFilter, piecesFilter]);

  const hasActiveFilters = search || typeFilter !== "Tous" || piecesFilter !== "Tous";

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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search bar */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher par ville, code postal, type…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Type dropdown */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px] gap-2">
                <Home size={14} className="text-muted-foreground shrink-0" />
                <SelectValue placeholder="Type de bien" />
              </SelectTrigger>
              <SelectContent>
                {types.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t === "Tous" ? "Tous les types" : t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Pieces dropdown */}
            <Select value={piecesFilter} onValueChange={setPiecesFilter}>
              <SelectTrigger className="w-full sm:w-[180px] gap-2">
                <LayoutGrid size={14} className="text-muted-foreground shrink-0" />
                <SelectValue placeholder="Nombre de pièces" />
              </SelectTrigger>
              <SelectContent>
                {piecesOptions.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p === "Tous" ? "Toutes les pièces" : p === "5+" ? "5 pièces et +" : `${p} pièce${Number(p) > 1 ? "s" : ""}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              <div className="mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{filtered.length}</span> bien{filtered.length > 1 ? "s" : ""}{" "}
                  {hasActiveFilters ? "trouvé" : "disponible"}{filtered.length > 1 ? "s" : ""}
                </p>
              </div>
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

export default NosBiens;
