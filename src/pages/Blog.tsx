import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";

import pvHero from "@/assets/blog/pv-hero-notaire.jpg";

const imageMap: Record<string, string> = {
  "/blog/pv-hero-notaire.jpg": pvHero,
};

const Blog = () => {
  useEffect(() => {
    document.title = "Actualités et Conseils Immobiliers sur la Côte Varoise | Jérémy et Laureline";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="bg-navy flex flex-col items-center justify-center text-center px-4" style={{ minHeight: 220 }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3"
        >
          Actualités et Conseils Immobiliers
        </motion.h1>
        <p className="text-sand text-base md:text-lg font-body font-light max-w-xl">
          Guides, analyses et conseils pour vos projets immobiliers sur la Côte Varoise
        </p>
      </section>

      {/* Articles */}
      <section className="bg-background section-padding">
        <div className="container-narrow mx-auto max-w-5xl px-4">
          <div className="grid gap-8">
            {blogArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-6 bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={imageMap[article.heroImage] || article.heroImage}
                      alt={article.heroAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-sand/20 text-sand border-sand/30 hover:bg-sand/30">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><CalendarDays size={12} /> {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-navy mb-2 group-hover:text-sand transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <span className="text-sand font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lire l'article <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
