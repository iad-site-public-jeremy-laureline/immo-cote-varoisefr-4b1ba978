import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    document.title = "Nous contacter | Jérémy & Laureline Immobilier";
  }, []);

  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a bien été envoyé !");
    setForm({ nom: "", email: "", telephone: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all bg-background text-foreground";

  return (
    <div className="pt-[70px]">
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4"
          >
            Nous contacter
          </motion.h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Une question ? Un projet immobilier ? Nous sommes disponibles 7j/7 pour vous accompagner.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-8">
                {[
                  { icon: Phone, label: "Téléphone Jérémy", value: "06 31 46 45 38", href: "tel:+33631464538" },
                  { icon: Phone, label: "Téléphone Laureline", value: "06 37 33 98 57", href: "tel:+33637339857" },
                  { icon: Mail, label: "Email", value: "contact@immobilier-var.fr", href: "mailto:contact@immobilier-var.fr" },
                  { icon: MapPin, label: "Secteur", value: "De Saint-Cyr-sur-Mer à Carqueiranne" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center">
                      <item.icon size={18} className="text-sand" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-navy hover:text-sand transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-navy">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="nom" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} required className={inputClass} placeholder="Votre nom" />
              <input name="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required className={inputClass} placeholder="Votre email" />
              <input name="telephone" type="tel" value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} className={inputClass} placeholder="Votre téléphone" />
              <textarea name="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={5} className={inputClass} placeholder="Votre message..." />
              <Button type="submit" variant="sand" size="lg" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;