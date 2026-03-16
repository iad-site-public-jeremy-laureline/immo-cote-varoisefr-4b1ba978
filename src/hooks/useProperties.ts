import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface SheetProperty {
  conseiller: string;
  reference: string;
  url: string;
  type: string;
  ville: string;
  titre: string;
  surface: number | null;
  pieces: number | null;
  prix: number | null;
  chambres: number | null;
  description: string;
  photo: string;
}

interface RawRow {
  Conseiller?: string;
  Reference?: string;
  URL?: string;
  Type_bien?: string;
  Ville?: string;
  Titre?: string;
  Surface_m2?: string | number;
  Pieces?: string | number;
  Prix?: string | number;
  Chambres?: string | number;
  Description?: string;
  Photo_principale?: string;
}

function parseNumber(val: unknown): number | null {
  if (val === undefined || val === null || val === "") return null;
  const n = typeof val === "number" ? val : Number(String(val).replace(/[^\d.,]/g, "").replace(",", "."));
  return isNaN(n) ? null : n;
}

function mapRow(row: RawRow): SheetProperty {
  return {
    conseiller: row.Conseiller?.trim() || "",
    reference: row.Reference?.trim() || "",
    url: row.URL?.trim() || "",
    type: row.Type_bien?.trim() || "",
    ville: row.Ville?.trim() || "",
    titre: row.Titre?.trim() || "",
    surface: parseNumber(row.Surface_m2),
    pieces: parseNumber(row.Pieces),
    prix: parseNumber(row.Prix),
    chambres: parseNumber(row.Chambres),
    description: row.Description?.trim() || "",
    photo: row.Photo_principale?.trim() || "",
  };
}

export function useProperties() {
  const [properties, setProperties] = useState<SheetProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const { data, error: fnError } = await supabase.functions.invoke("proxy-biens");
        if (fnError) throw new Error(fnError.message);
        const rows: RawRow[] = Array.isArray(data) ? data : data?.data || [];
        if (!cancelled) {
          setProperties(rows.map(mapRow).filter((p) => p.titre || p.url));
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, []);

  return { properties, loading, error };
}
