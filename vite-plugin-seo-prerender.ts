import { Plugin } from "vite";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join, dirname } from "path";

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

const BASE_URL = "https://immobilier-cote-varoise.fr";

const routesMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Conseillers Immobiliers Indépendants — Côte Varoise | Jérémy & Laureline",
    description: "Jérémy Vieira et Laureline Lohéac, conseillers immobiliers indépendants sur la Côte Varoise. Estimation gratuite à Six-Fours, Sanary, Bandol, Toulon, La Seyne, Ollioules. Réponse sous 24h.",
    canonical: "/",
  },
  "/estimation": {
    title: "Estimation Immobilière Gratuite sur la Côte Varoise | Jérémy et Laureline",
    description: "Faites estimer votre bien immobilier gratuitement sur la Côte Varoise par Jérémy et Laureline, conseillers immobiliers indépendants IAD France. Sans engagement.",
    canonical: "/estimation",
  },
  "/nos-biens": {
    title: "Nos Biens Disponibles — Jérémy et Laureline Immobilier",
    description: "Découvrez nos biens immobiliers disponibles sur la Côte Varoise : maisons, appartements, villas à Six-Fours, Sanary, Bandol, Toulon, La Seyne, Ollioules.",
    canonical: "/nos-biens",
  },
  "/notre-equipe": {
    title: "Jérémy Vieira et Laureline Lohéac — Vos conseillers immobiliers indépendants",
    description: "Découvrez le parcours de Jérémy Vieira et Laureline Lohéac, conseillers immobiliers indépendants IAD France sur la Côte Varoise. Accompagnement personnalisé.",
    canonical: "/notre-equipe",
  },
  "/contact": {
    title: "Nous contacter | Jérémy et Laureline Immobilier",
    description: "Contactez Jérémy Vieira et Laureline Lohéac, conseillers immobiliers indépendants sur la Côte Varoise. Estimation gratuite, réponse sous 24h.",
    canonical: "/contact",
  },
  "/blog": {
    title: "Actualités et Conseils Immobiliers sur la Côte Varoise | Jérémy et Laureline",
    description: "Conseils et actualités immobilières sur la Côte Varoise. Plus-value, frais de notaire, DPE, marché immobilier du Var. Par Jérémy et Laureline.",
    canonical: "/blog",
  },
  "/blog/plus-value-immobiliere-vente-2026": {
    title: "Plus-value immobilière 2026 : calcul et exonérations | Jérémy et Laureline",
    description: "Tout savoir sur la plus-value immobilière en 2026 : calcul, abattements, exonérations. Guide complet par vos conseillers immobiliers sur la Côte Varoise.",
    canonical: "/blog/plus-value-immobiliere-vente-2026",
  },
  "/blog/frais-notaire-achat-immobilier-2026": {
    title: "Frais de notaire 2026 : calcul complet | Jérémy et Laureline",
    description: "Frais de notaire pour un achat immobilier en 2026 : calcul détaillé, barème, simulation. Guide complet par Jérémy et Laureline, conseillers Côte Varoise.",
    canonical: "/blog/frais-notaire-achat-immobilier-2026",
  },
  "/blog/dpe-2026-vente-immobilier-var": {
    title: "DPE 2026 : impact sur votre vente dans le Var | Jérémy et Laureline",
    description: "Diagnostic de performance énergétique 2026 : impact sur la vente de votre bien dans le Var. Obligations, classes énergétiques, conseils pratiques.",
    canonical: "/blog/dpe-2026-vente-immobilier-var",
  },
  "/blog/comment-vendre-rapidement-bien-immobilier": {
    title: "Vendre rapidement son bien immobilier en 2026 | Jérémy et Laureline",
    description: "Conseils pour vendre rapidement votre bien immobilier en 2026 : estimation, mise en valeur, diffusion, négociation. Par vos conseillers Côte Varoise.",
    canonical: "/blog/comment-vendre-rapidement-bien-immobilier",
  },
  "/blog/marche-immobilier-var-2026": {
    title: "Marché immobilier Var 2026 : bilan et prix | Jérémy et Laureline",
    description: "Bilan du marché immobilier dans le Var en 2026 : prix au m², tendances, secteurs porteurs. Analyse par Jérémy et Laureline, conseillers Côte Varoise.",
    canonical: "/blog/marche-immobilier-var-2026",
  },
  "/blog/home-staging-conseils-vendre-var": {
    title: "Home staging : vendre vite et mieux dans le Var | Jérémy et Laureline",
    description: "Home staging : astuces et conseils pour vendre votre bien rapidement et au meilleur prix dans le Var. Par Jérémy et Laureline.",
    canonical: "/blog/home-staging-conseils-vendre-var",
  },
  "/blog/vendre-avant-acheter-ou-acheter-avant-vendre": {
    title: "Vendre avant ou après acheter : que choisir ? | Jérémy et Laureline",
    description: "Faut-il vendre avant d'acheter ou acheter avant de vendre ? Avantages, risques et solutions. Conseils par vos conseillers immobiliers Côte Varoise.",
    canonical: "/blog/vendre-avant-acheter-ou-acheter-avant-vendre",
  },
  "/blog/investissement-locatif-cote-varoise-2026": {
    title: "Investissement locatif Côte Varoise 2026 | Jérémy et Laureline",
    description: "Investissement locatif sur la Côte Varoise en 2026 : rendement, secteurs porteurs, fiscalité. Guide complet par Jérémy et Laureline.",
    canonical: "/blog/investissement-locatif-cote-varoise-2026",
  },
  "/blog/compromis-vente-delais-etapes": {
    title: "Compromis de vente : étapes et délais 2026 | Jérémy et Laureline",
    description: "Compromis de vente immobilier : étapes clés, délais légaux, clauses suspensives. Guide complet 2026 par Jérémy et Laureline.",
    canonical: "/blog/compromis-vente-delais-etapes",
  },
  "/blog/bon-moment-vendre-immobilier-var-2026": {
    title: "Vendre dans le Var en 2026 : est-ce le bon moment ? | Jérémy et Laureline",
    description: "Est-ce le bon moment pour vendre dans le Var en 2026 ? Analyse du marché, saisonnalité, conseils. Par Jérémy et Laureline, conseillers Côte Varoise.",
    canonical: "/blog/bon-moment-vendre-immobilier-var-2026",
  },
  "/equipe-france": {
    title: "Équipe française — Nos conseillers immobiliers en France",
    description: "Découvrez notre équipe de conseillers immobiliers IAD France partout en France. Rejoignez un réseau humain et performant.",
    canonical: "/equipe-france",
  },
  "/sanary-sur-mer": {
    title: "Immobilier Sanary-sur-Mer | Jérémy et Laureline",
    description: "Immobilier à Sanary-sur-Mer : estimation gratuite, vente et achat avec Jérémy et Laureline, conseillers immobiliers indépendants. Prix m², marché local.",
    canonical: "/sanary-sur-mer",
  },
  "/six-fours-les-plages": {
    title: "Immobilier Six-Fours-les-Plages | Jérémy et Laureline",
    description: "Vendre ou acheter à Six-Fours-les-Plages ? Jérémy et Laureline, conseillers immobiliers indépendants. Estimation gratuite, prix du m², biens disponibles.",
    canonical: "/six-fours-les-plages",
  },
  "/bandol": {
    title: "Immobilier Bandol | Jérémy et Laureline",
    description: "Vendre votre villa ou appartement à Bandol ? Jérémy et Laureline, conseillers immobiliers indépendants experts de la côte varoise. Estimation gratuite.",
    canonical: "/bandol",
  },
  "/toulon": {
    title: "Immobilier Toulon | Jérémy et Laureline",
    description: "Achat et vente immobilière à Toulon avec Jérémy et Laureline, conseillers immobiliers indépendants. Estimation gratuite, accompagnement personnalisé.",
    canonical: "/toulon",
  },
  "/la-seyne-sur-mer": {
    title: "Immobilier La Seyne-sur-Mer | Jérémy et Laureline",
    description: "Immobilier à La Seyne-sur-Mer. Jérémy et Laureline, conseillers immobiliers indépendants. Estimation gratuite et accompagnement personnalisé.",
    canonical: "/la-seyne-sur-mer",
  },
  "/ollioules": {
    title: "Immobilier Ollioules | Jérémy et Laureline",
    description: "Immobilier à Ollioules. Jérémy et Laureline, conseillers immobiliers indépendants spécialistes du Var. Estimation gratuite de votre bien.",
    canonical: "/ollioules",
  },
};

const jsonLD = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Jérémy & Laureline — Conseillers immobiliers indépendants",
  "url": BASE_URL,
  "telephone": "+33659536691",
  "email": "jeremy.vieira@iadfrance.fr",
  "description": "Jérémy Vieira et Laureline Lohéac, conseillers immobiliers indépendants IAD France sur la Côte Varoise. Estimation gratuite, accompagnement vente et achat.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Six-Fours-les-Plages",
    "postalCode": "83140",
    "addressRegion": "Var",
    "addressCountry": "FR",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 43.0970, "longitude": 5.8490 },
  "areaServed": [
    { "@type": "City", "name": "Six-Fours-les-Plages" },
    { "@type": "City", "name": "Sanary-sur-Mer" },
    { "@type": "City", "name": "Bandol" },
    { "@type": "City", "name": "Toulon" },
    { "@type": "City", "name": "La Seyne-sur-Mer" },
    { "@type": "City", "name": "Ollioules" },
    { "@type": "AdministrativeArea", "name": "Var" },
  ],
  "memberOf": { "@type": "Organization", "name": "IAD France" },
};

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function generateMetaTags(meta: RouteMeta): string {
  const ogTitle = meta.ogTitle || meta.title;
  const ogDesc = meta.ogDescription || meta.description;
  return `
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}">
    <link rel="canonical" href="${BASE_URL}${meta.canonical}">
    <meta property="og:title" content="${escapeHtml(ogTitle)}">
    <meta property="og:description" content="${escapeHtml(ogDesc)}">
    <meta property="og:url" content="${BASE_URL}${meta.canonical}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:site_name" content="Jérémy et Laureline Immobilier">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(ogTitle)}">
    <meta name="twitter:description" content="${escapeHtml(ogDesc)}">
    <meta name="geo.region" content="FR-83">
    <meta name="geo.placename" content="Six-Fours-les-Plages">`;
}

function injectMeta(html: string, meta: RouteMeta, includeJsonLD: boolean): string {
  let result = html.replace(/<title>[^<]*<\/title>/g, "");
  result = result.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/g, "");
  result = result.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/g, "");
  result = result.replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/g, "");
  result = result.replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/g, "");
  result = result.replace(/<meta\s+name="geo\.[^"]*"\s+content="[^"]*"\s*\/?>/g, "");
  result = result.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
  const metaTags = generateMetaTags(meta);
  const jsonLDScript = includeJsonLD
    ? `\n    <script type="application/ld+json">${JSON.stringify(jsonLD)}</script>`
    : "";
  result = result.replace(
    /(<meta\s+charset="UTF-8"\s*\/?>)/i,
    `$1${metaTags}${jsonLDScript}`
  );
  return result;
}

export default function seoPrerender(): Plugin {
  return {
    name: "vite-plugin-seo-prerender",
    apply: "build",
    closeBundle() {
      const distDir = join(process.cwd(), "dist");
      const indexPath = join(distDir, "index.html");
      if (!existsSync(indexPath)) {
        console.warn("[seo-prerender] dist/index.html not found, skipping.");
        return;
      }
      const baseHtml = readFileSync(indexPath, "utf-8");
      for (const [route, meta] of Object.entries(routesMeta)) {
        const includeJsonLD = route === "/";
        const html = injectMeta(baseHtml, meta, includeJsonLD);
        let outPath: string;
        if (route === "/") {
          outPath = indexPath;
        } else {
          outPath = join(distDir, route, "index.html");
        }
        const outDir = dirname(outPath);
        if (!existsSync(outDir)) {
          mkdirSync(outDir, { recursive: true });
        }
        writeFileSync(outPath, html, "utf-8");
        console.log(`[seo-prerender] ✅ ${route} → ${outPath.replace(distDir, "dist")}`);
      }
      console.log(`[seo-prerender] 🎉 Generated ${Object.keys(routesMeta).length} unique HTML files.`);
    },
  };
}
