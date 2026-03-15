import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoJL from "@/assets/logo-jl.png";
import logoJLWhite from "@/assets/logo-jl-white.png";

const sectorLinks = [
  { label: "Six-Fours-les-Plages", href: "/six-fours-les-plages" },
  { label: "Sanary-sur-Mer", href: "/sanary-sur-mer" },
  { label: "Bandol", href: "/bandol" },
  { label: "Toulon", href: "/toulon" },
  { label: "La Seyne-sur-Mer", href: "/la-seyne-sur-mer" },
  { label: "Ollioules", href: "/ollioules" },
];

const teamLinks = [
  { label: "Var", href: "/notre-equipe" },
  { label: "France", href: "/equipe-france" },
];

const navLinks = [
  { label: "Nos biens", href: "/nos-biens" },
  { label: "Nos secteurs", href: "#", dropdown: "sectors" as const },
  { label: "Notre équipe", href: "#", dropdown: "team" as const },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navBg = scrolled || !isHome ? "bg-background shadow-nav" : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-navy" : "text-primary-foreground";

  const getDropdownItems = (key: string) => {
    if (key === "sectors") return sectorLinks;
    if (key === "team") return teamLinks;
    return [];
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="container-narrow mx-auto flex h-[70px] items-center justify-between px-4 md:px-8">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img
            src={scrolled || !isHome ? logoJL : logoJLWhite}
            alt="JL Immobilier Côte Varoise"
            className="h-[46px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.dropdown ? null : link.dropdown!)}
                  className={`text-sm font-medium transition-colors hover:text-sand ${textColor} flex items-center gap-1`}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${openDropdown === link.dropdown ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === link.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-background rounded-lg shadow-card-hover border border-border py-2 min-w-[220px]"
                    >
                      {getDropdownItems(link.dropdown!).map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-sand transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-sand ${textColor}`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/estimation">
            <Button variant="sand" size="default" className="ml-2">
              Estimation gratuite
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <p className="text-navy font-medium py-2">{link.label}</p>
                    <div className="pl-4 flex flex-col gap-1">
                      {getDropdownItems(link.dropdown!).map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="text-muted-foreground text-sm py-1 hover:text-sand transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-navy font-medium py-2 hover:text-sand transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/estimation" onClick={() => setMobileOpen(false)}>
                <Button variant="sand" className="w-full mt-2">
                  Estimation gratuite
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;