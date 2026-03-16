import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Phone, ExternalLink, Users, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";

interface RawMember {
  Id: number;
  Nom: string;
  Prenom: string;
  Initiale: string;
  Email_professionnel: string;
  Telephone_mobile: string | number;
  Niveau: number;
  Qualification: string;
  Secteur_activite: string;
  Code_secteur: string | number;
  Ville_de_rattachement: string;
  Date_activation: string;
  Photo_de_profil: string;
  Mini_site_iad: string;
}

interface TeamMember {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  niveau: string;
  qualification: string;
  secteur: string;
  code_postal: string;
  ville: string;
  date_activation: string;
  photo: string;
  minisite: string;
}

const mapRawMember = (raw: RawMember): TeamMember => ({
  id: String(raw.Id),
  nom: raw.Nom || "",
  prenom: raw.Prenom || "",
  email: raw.Email_professionnel || "",
  telephone: raw.Telephone_mobile ? `0${String(raw.Telephone_mobile).replace(/^33/, "")}` : "",
  niveau: String(raw.Niveau || ""),
  qualification: raw.Qualification || "",
  secteur: raw.Secteur_activite || "",
  code_postal: String(raw.Code_secteur ?? ""),
  ville: raw.Ville_de_rattachement ?? "",
  date_activation: raw.Date_activation || "",
  photo: raw.Photo_de_profil || "",
  minisite: raw.Mini_site_iad || "",
});

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
      <div className="absolute bottom-3 left-3 right-3">
        <span className="inline-block bg-navy/90 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          {member.qualification}
        </span>
      </div>
    </div>

    <div className="p-5">
      <h3 className="font-display text-lg font-semibold text-navy mb-1">
        {member.prenom} {member.nom}
      </h3>
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
        <MapPin size={13} className="text-sand shrink-0" />
        <span>{member.code_postal} {member.ville}</span>
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

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center py-24 gap-5">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-muted" />
      <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-sand animate-spin" />
    </div>
    <div className="text-center">
      <p className="font-display text-lg text-navy font-medium">Chargement de l'équipe…</p>
      <p className="text-sm text-muted-foreground mt-1">Récupération des profils en cours</p>
    </div>
  </div>
);

const EquipeFrance = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Équipe française — Nos conseillers immobiliers en France";
    window.scrollTo(0, 0);

    const fetchMembers = async () => {
      try {
        const { data, error: fnError } = await supabase.functions.invoke("proxy-equipe");
        if (fnError) throw new Error(fnError.message);
        const rawList: RawMember[] = Array.isArray(data) ? data : data?.data || [];
        setMembers(rawList.map(mapRawMember));
      } catch (err) {
        setError("Impossible de charger l'équipe. Veuillez réessayer.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const filtered = useMemo(() => {
    const list = search
      ? members.filter((m) => {
          const q = search.toLowerCase().trim();
          return (
            `${m.prenom} ${m.nom}`.toLowerCase().includes(q) ||
            `${m.nom} ${m.prenom}`.toLowerCase().includes(q) ||
            m.ville.toLowerCase().includes(q) ||
            m.code_postal.includes(q)
          );
        })
      : [...members];
    return list.sort((a, b) => a.prenom.localeCompare(b.prenom, "fr"));
  }, [members, search]);

  return (
    <div className="pt-[70px]">
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

      <section className="bg-background border-b border-border sticky top-[70px] z-40">
        <div className="container-narrow mx-auto px-4 md:px-8 py-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher par nom, ville ou code postal…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-light section-padding">
        <div className="container-narrow mx-auto px-4 md:px-8">
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

            {loading && <LoadingState />}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-16">
              <User size={48} className="mx-auto mb-4 text-muted-foreground/30" />
              <p className="text-muted-foreground text-lg">Aucun conseiller ne correspond à votre recherche.</p>
              <Button variant="ghost" className="mt-4" onClick={() => setSearch("")}>
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
