import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface EstimationFormProps {
  variant?: "inline" | "full";
}

const EstimationForm = ({ variant = "inline" }: EstimationFormProps) => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    typeBien: "",
    ville: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-transactional-email", {
        body: { template: "estimation", data: formData },
      });
      if (error) throw error;
      toast.success("Votre demande d'estimation a bien été envoyée ! Nous vous recontactons sous 24h.");
      setFormData({ prenom: "", nom: "", telephone: "", email: "", typeBien: "", ville: "", message: "" });
    } catch (err) {
      console.error("Erreur envoi email:", err);
      toast.error("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 border border-border rounded-lg font-body text-sm focus:outline-none focus:border-sand focus:ring-2 focus:ring-sand/20 transition-all bg-background text-foreground";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid ${variant === "full" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"} gap-4`}>
        <div>
          <label className={labelClass}>Prénom</label>
          <input name="prenom" value={formData.prenom} onChange={handleChange} required className={inputClass} placeholder="Votre prénom" />
        </div>
        <div>
          <label className={labelClass}>Nom</label>
          <input name="nom" value={formData.nom} onChange={handleChange} required className={inputClass} placeholder="Votre nom" />
        </div>
        <div>
          <label className={labelClass}>Téléphone</label>
          <input name="telephone" type="tel" value={formData.telephone} onChange={handleChange} required className={inputClass} placeholder="06 12 34 56 78" />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="vous@email.com" />
        </div>
        <div>
          <label className={labelClass}>Type de bien</label>
          <select name="typeBien" value={formData.typeBien} onChange={handleChange} required className={inputClass}>
            <option value="">Sélectionnez</option>
            <option value="appartement">Appartement</option>
            <option value="maison">Maison</option>
            <option value="villa">Villa</option>
            <option value="terrain">Terrain</option>
            <option value="local">Local commercial</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Ville</label>
          <select name="ville" value={formData.ville} onChange={handleChange} required className={inputClass}>
            <option value="">Sélectionnez</option>
            <option value="six-fours">Six-Fours-les-Plages</option>
            <option value="sanary">Sanary-sur-Mer</option>
            <option value="bandol">Bandol</option>
            <option value="toulon">Toulon</option>
            <option value="la-seyne">La Seyne-sur-Mer</option>
            <option value="ollioules">Ollioules</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Message (optionnel)</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={inputClass} placeholder="Précisez votre projet..." />
      </div>
      <Button type="submit" variant="sand" size="lg" className="w-full text-base py-4" disabled={loading}>
        {loading ? "Envoi en cours…" : "Estimer mon bien gratuitement →"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Vos données sont protégées — aucun engagement
      </p>
    </form>
  );
};

export default EstimationForm;