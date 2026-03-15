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