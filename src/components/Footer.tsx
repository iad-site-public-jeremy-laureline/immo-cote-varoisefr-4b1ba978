import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Jeremy & Laureline
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Conseillers IAD indépendants spécialisés sur la côte varoise. Vente, achat et estimation immobilière.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-4">
              Réseau social : <a href="#" className="text-sand hover:underline">Facebook</a>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-sand">Navigation rapide</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/estimation" className="text-primary-foreground/70 hover:text-sand transition-colors">Estimation</Link></li>
              <li><Link to="/notre-equipe" className="text-primary-foreground/70 hover:text-sand transition-colors">Notre équipe</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-sand transition-colors">Contact</Link></li>
            </ul>

            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 mt-8 text-sand">Nos secteurs</h4>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              {["Six-Fours-les-Plages", "Sanary-sur-Mer", "Bandol", "Toulon", "La Seyne-sur-Mer", "Ollioules"].map(city => (
                <li key={city}>
                  <Link
                    to={`/${city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                    className="text-primary-foreground/70 hover:text-sand transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-sand">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} className="text-sand" /> 01 23 45 67 89
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail size={16} className="text-sand" /> contact@example.com
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin size={16} className="text-sand" /> Six-Fours-les-Plages, Var
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/40">
          <p>Jeremy Vieira & Laureline Loheac — Conseillers IAD & Agents commerciaux indépendants RSAC & IAD France SAS</p>
          <p className="mt-1">© {new Date().getFullYear()} Jeremy & Laureline Immobilier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
