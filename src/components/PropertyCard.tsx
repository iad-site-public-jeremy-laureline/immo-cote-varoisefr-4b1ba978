import { motion } from "framer-motion";
import { Ruler, LayoutGrid, BedDouble, ExternalLink, MapPin, Home } from "lucide-react";
import type { SheetProperty } from "@/hooks/useProperties";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

interface PropertyCardProps {
  property: SheetProperty;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const hasPhoto = !!property.photo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="group h-full"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-[0_2px_20px_-4px_hsl(var(--navy)/0.08)] hover:shadow-[0_12px_40px_-8px_hsl(var(--navy)/0.15)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
        {/* Photo — ~70% of card */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {hasPhoto ? (
            <img
              src={property.photo}
              alt={property.titre || `${property.type} — ${property.ville}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <Home className="h-16 w-16 text-muted-foreground/30" />
            </div>
          )}

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {/* City on photo */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-white/80" />
            <span className="text-white text-sm font-medium drop-shadow-sm">
              {property.ville}
            </span>
          </div>

          {/* Badge placeholder zone (top-left) */}
          {/* Ready for future badges like Nouveau, Exclusivité, etc. */}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          {/* Price — most prominent */}
          {property.prix && (
            <p className="font-display text-2xl md:text-[1.7rem] font-bold text-primary mb-1.5">
              {formatPrice(property.prix)}
            </p>
          )}

          {/* Type + Ville */}
          <p className="text-sm font-medium text-foreground/75 mb-3">
            {property.type}
            {property.ville && <span className="text-muted-foreground"> · {property.ville}</span>}
          </p>

          {/* Technical specs */}
          <div className="flex items-center gap-3 flex-wrap text-sm text-foreground/60 mb-4 pb-4 border-b border-border/60">
            {property.surface && (
              <span className="flex items-center gap-1.5">
                <Ruler className="h-4 w-4 text-secondary" />
                {property.surface} m²
              </span>
            )}
            {property.pieces && (
              <span className="flex items-center gap-1.5">
                <LayoutGrid className="h-4 w-4 text-secondary" />
                {property.pieces} pièce{property.pieces > 1 ? "s" : ""}
              </span>
            )}
            {property.chambres && (
              <span className="flex items-center gap-1.5">
                <BedDouble className="h-4 w-4 text-secondary" />
                {property.chambres} ch.
              </span>
            )}
          </div>

          {/* Description excerpt */}
          {property.description && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {property.description}
            </p>
          )}

          {/* CTA */}
          <div className="mt-auto pt-2">
            {property.url ? (
              <a
                href={property.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300"
              >
                Voir le bien
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">Détails à venir</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
