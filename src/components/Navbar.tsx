import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Estimer mon bien", href: "/estimation" },
  { label: "Nos secteurs", href: "/#secteurs" },
  { label: "Notre équipe", href: "/notre-equipe" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-background shadow-nav"
    : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-navy" : "text-primary-foreground";
  const logoColor = scrolled || !isHome ? "text-navy" : "text-primary-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="container-narrow mx-auto flex h-[70px] items-center justify-between px-4 md:px-8">
        <Link to="/" className={`font-display text-lg md:text-xl font-semibold tracking-tight transition-colors ${logoColor}`}>
          Jeremy & Laureline <span className="hidden sm:inline">— Immobilier</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-sand ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-navy font-medium py-2 hover:text-sand transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
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
