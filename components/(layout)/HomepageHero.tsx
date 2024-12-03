import { Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HomepageHero = () => {
  return (
    <section className="py-32">
      <div className="container text-center mx-auto">
        <Badge className="bg-primary text-accent mb-8">Merci Hellowork !</Badge>
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            Offres d'emploi propulsées par Hellowork
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Découvrez des offres d'emploi de qualité, postulez en un clic à
            l'aide de notre plateforme Jobijoba !
          </p>
        </div>
        <Button size="lg" className="mt-10">
          Commencer
        </Button>
      </div>
    </section>
  );
};

export default HomepageHero;
