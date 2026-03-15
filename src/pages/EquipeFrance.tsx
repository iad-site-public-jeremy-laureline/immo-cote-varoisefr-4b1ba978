import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Phone, ExternalLink, Users, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

// ⚠️ Replace with your Google Apps Script API URL
const API_URL = "https://script.google.com/macros/s/AKfycbxS_PObPQd3m8MgjVZtOgMRYiJjJroaab1sIk514Nty6dpjLyesI2idJWW245eHbbZ1/exec";

interface TeamMember {
  id: string;
  nom: string;
  prenom: string;
  filiale: string;
  email: string;
  telephone: string;
  niveau: string;
  qualification: string;
  code_postal: string;
  ville: string;
  date_activation: string;
  photo: string;
  minisite: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const MemberCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    {/* Photo */}
    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
      {member.photo ? (
        <img
          src={member.photo}
          alt={`${member.prenom} ${member.nom}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-blue-light">
          <User size={64} className="text-navy/20" />
        </div>
      )}
      {/* Qualification badge */}
      <div className="absolute bottom-3 left-3 right-3">
        <span className="inline-block bg-navy/90 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          {member.qualification}
        </span>
      </div>
    </div>

    {/* Info */}
    <div className="p-5">
      <h3 className="font-display text-lg font-semibold text-navy mb-1">
        {member.prenom} {member.nom}
      </h3>

      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
        <MapPin size={13} className="text-sand shrink-0" />
        <span>{member.ville}</span>
      </div>

      {member.telephone && (
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
          <Phone size={13} className="text-sand shrink-0" />
          <a href={`tel:${member.telephone}`} className="hover:text-navy transition-colors">
            {member.telephone}
          </a>
        </div>
      )}

      {member.minisite && (
        <a href={member.minisite} target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="sand" className="w-full gap-2">
            Voir le profil
            <ExternalLink size={14} />
          </Button>
        </a>
      )}
    </div>
  </motion.div>
);

const CardSkeleton = () => (
  <div className="bg-card rounded-xl border border-border overflow-hidden">
    <Skeleton className="aspect-[3/4] w-full" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-10 w-full mt-2" />
    </div>
  </div>
);

const EquipeFrance = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [qualifFilter, setQualifFilter] = useState("all");

  useEffect(() => {
    document.title = "Équipe française — Nos conseillers immobiliers en France";
    window.scrollTo(0, 0);

    const fetchMembers = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Erreur de chargement");
        const data = await res.json();
        setMembers(Array.isArray(data) ? data : data.data || []);
      } catch (err) {
        setError("Impossible de charger l'équipe. Veuillez réessayer.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const cities = useMemo(
    () => [...new Set(members.map((m) => m.ville).filter(Boolean))].sort(),
    [members]
  );

  const qualifications = useMemo(
    () => [...new Set(members.map((m) => m.qualification).filter(Boolean))].sort(),
    [members]
  );

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchSearch =
        !search ||
        `${m.prenom} ${m.nom}`.toLowerCase().includes(search.toLowerCase());
      const matchCity = cityFilter === "all" || m.ville === cityFilter;
      const matchQualif = qualifFilter === "all" || m.qualification === qualifFilter;
      return matchSearch && matchCity && matchQualif;
    });
  }, [members, search, cityFilter, qualifFilter]);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="bg-navy flex flex-col items-center justify-center text-center px-4" style={{ minHeight: 260 }}>
        <nav className="text-xs text-primary-foreground/40 mb-6">
          <Link to="/" className="hover:text-sand transition-colors">Accueil</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-foreground/60">Équipe française</span>
        </nav>
        <motion.h1 {...fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
          Notre équipe en France
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-sand text-base md:text-lg font-body font-light max-w-xl">
          Découvrez nos conseillers immobiliers partout en France
        </motion.p>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border sticky top-[70px] z-40">
        <div className="container-narrow mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher par nom…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* City filter */}
            <Select value={cityFilter} onValueChange={setCityFilter}>
              <SelectTrigger className="md:w-[200px]">
                <SelectValue placeholder="Ville" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les villes</SelectItem>
                {cities.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Qualification filter */}
            <Select value={qualifFilter} onValueChange={setQualifFilter}>
              <SelectTrigger className="md:w-[220px]">
                <SelectValue placeholder="Qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les qualifications</SelectItem>
                {qualifications.map((q) => (
                  <SelectItem key={q} value={q}>{q}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gray-light section-padding">
        <div className="container-narrow mx-auto px-4 md:px-8">
          {/* Count */}
          <div className="flex items-center gap-2 mb-8 text-muted-foreground text-sm">
            <Users size={16} />
            <span>
              {loading
                ? "Chargement…"
                : `${filtered.length} conseiller${filtered.length > 1 ? "s" : ""} trouvé${filtered.length > 1 ? "s" : ""}`}
            </span>
          </div>

          {error && (
            <div className="text-center py-16">
              <p className="text-destructive mb-4">{error}</p>
              <Button variant="navy-outline" onClick={() => window.location.reload()}>
                Réessayer
              </Button>
            </div>
          )}

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-16">
              <User size={48} className="mx-auto mb-4 text-muted-foreground/30" />
              <p className="text-muted-foreground text-lg">Aucun conseiller ne correspond à votre recherche.</p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setSearch("");
                  setCityFilter("all");
                  setQualifFilter("all");
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EquipeFrance;
