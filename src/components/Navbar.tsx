import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/5 backdrop-blur-md border-b border-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">
            Curso de Cajón
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
          <a href="#metodo" className="hover:text-foreground transition-colors">Método</a>
          <a href="#oferta" className="hover:text-foreground transition-colors">Oferta</a>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="font-body font-semibold">
              Inscribirme
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
