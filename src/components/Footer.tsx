import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Identity */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Jérémy & Laureline
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Conseillers immobiliers indépendants · Côte Varoise
            </p>
            <p className="text-primary-foreground/70 text-sm mt-3">
              📞 Disponibles 7j/7 · 9h–20h
            </p>
            <p className="text-primary-foreground/50 text-xs mt-4">
              <a href="#" className="text-sand hover:underline">Facebook</a>
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-sand">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-sand transition-colors">Accueil</Link></li>
              <li><Link to="/estimation" className="text-primary-foreground/70 hover:text-sand transition-colors">Estimation gratuite</Link></li>
              <li><Link to="/nos-biens" className="text-primary-foreground/70 hover:text-sand transition-colors">Nos biens</Link></li>
              <li><Link to="/#secteurs" className="text-primary-foreground/70 hover:text-sand transition-colors">Nos secteurs</Link></li>
              <li><Link to="/notre-equipe" className="text-primary-foreground/70 hover:text-sand transition-colors">Notre équipe</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/70 hover:text-sand transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-sand transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 — Sectors */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-sand">Nos secteurs</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Six-Fours-les-Plages", slug: "six-fours-les-plages" },
                { name: "Sanary-sur-Mer", slug: "sanary-sur-mer" },
                { name: "Bandol", slug: "bandol" },
                { name: "Toulon", slug: "toulon" },
                { name: "La Seyne-sur-Mer", slug: "la-seyne-sur-mer" },
                { name: "Ollioules", slug: "ollioules" },
              ].map(city => (
                <li key={city.slug}>
                  <Link
                    to={`/${city.slug}`}
                    className="text-primary-foreground/70 hover:text-sand transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-sand">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} className="text-sand" /> Jérémy : [à compléter]
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} className="text-sand" /> Laureline : [à compléter]
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail size={16} className="text-sand" /> [à compléter]
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin size={16} className="text-sand" />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/40 space-y-1">
          <p>
            Jérémy Vieira — Agent commercial EI · RSAC Melun n°797 411 832 | Laureline Lohéac — Agente commerciale EI · RSAC Melun n°819 657 271
          </p>
          <p>Mandataires du réseau IAD France SAS</p>
          <p className="mt-2">© {new Date().getFullYear()} Jérémy & Laureline Immobilier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;