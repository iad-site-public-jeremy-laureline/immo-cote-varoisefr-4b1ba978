import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import Estimation from "./pages/Estimation.tsx";
import CityPage from "./pages/CityPage.tsx";
import Contact from "./pages/Contact.tsx";
import NotreEquipe from "./pages/NotreEquipe.tsx";
import NosBiens from "./pages/NosBiens.tsx";
import Blog from "./pages/Blog.tsx";
import BlogArticlePlusValue from "./pages/BlogArticlePlusValue.tsx";
import BlogArticleFraisNotaire from "./pages/BlogArticleFraisNotaire.tsx";
import BlogArticleDPE from "./pages/BlogArticleDPE.tsx";
import BlogArticleVendreRapidement from "./pages/BlogArticleVendreRapidement.tsx";
import BlogArticleMarcheImmobilier from "./pages/BlogArticleMarcheImmobilier.tsx";
import BlogArticleHomeStaging from "./pages/BlogArticleHomeStaging.tsx";
import BlogArticleVendreAcheter from "./pages/BlogArticleVendreAcheter.tsx";
import BlogArticleInvestissement from "./pages/BlogArticleInvestissement.tsx";
import BlogArticleCompromis from "./pages/BlogArticleCompromis.tsx";
import BlogArticleBonMoment from "./pages/BlogArticleBonMoment.tsx";
import EquipeFrance from "./pages/EquipeFrance.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/nos-biens" element={<NosBiens />} />
          <Route path="/notre-equipe" element={<NotreEquipe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/plus-value-immobiliere-vente-2026" element={<BlogArticlePlusValue />} />
          <Route path="/blog/frais-notaire-achat-immobilier-2026" element={<BlogArticleFraisNotaire />} />
          <Route path="/blog/dpe-2026-vente-immobilier-var" element={<BlogArticleDPE />} />
          <Route path="/blog/comment-vendre-rapidement-bien-immobilier" element={<BlogArticleVendreRapidement />} />
          <Route path="/blog/marche-immobilier-var-2026" element={<BlogArticleMarcheImmobilier />} />
          <Route path="/blog/home-staging-conseils-vendre-var" element={<BlogArticleHomeStaging />} />
          <Route path="/blog/vendre-avant-acheter-ou-acheter-avant-vendre" element={<BlogArticleVendreAcheter />} />
          <Route path="/blog/investissement-locatif-cote-varoise-2026" element={<BlogArticleInvestissement />} />
          <Route path="/blog/compromis-vente-delais-etapes" element={<BlogArticleCompromis />} />
          <Route path="/blog/bon-moment-vendre-immobilier-var-2026" element={<BlogArticleBonMoment />} />
          <Route path="/equipe-france" element={<EquipeFrance />} />
          <Route path="/:slug" element={<CityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
