import { useEffect } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  useEffect(() => {
    document.title = "Actualités & Conseils Immobiliers sur la Côte Varoise | Jérémy & Laureline";
  }, []);

  return (
    <div className="pt-[70px]">
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-4xl font-bold text-navy mb-6"
          >
            Actualités & Conseils Immobiliers sur la Côte Varoise
          </motion.h1>
          <p className="text-muted-foreground">
            Articles et conseils à venir. Restez connectés !
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;