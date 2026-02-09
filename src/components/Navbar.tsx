import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/5 backdrop-blur-md border-b border-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">
            Curso de Cajón
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
          <a href="#modulos" className="hover:text-foreground transition-colors">Módulos</a>
          <a href="#beneficios" className="hover:text-foreground transition-colors">Beneficios</a>
          <Button size="sm" className="font-body font-semibold">
            Inscribirme
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
