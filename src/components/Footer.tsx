import { Music, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background/70">
      <div className="container max-w-3xl text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Music className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold text-background">
            Edilson Morais
          </span>
        </div>
        <p className="font-body text-sm">
          40 anos tocando. 217 alunos transformados.
        </p>
        <p className="font-body text-lg text-background/90 font-semibold">
          Mas isso não importa. O que importa é: você vai tocar ou não?
        </p>
        <div className="flex items-center justify-center gap-2 text-sm">
          <Mail className="h-4 w-4" />
          <a href="mailto:edilsomdil@gmail.com" className="hover:text-background transition-colors">
            edilsomdil@gmail.com
          </a>
        </div>
        <div className="pt-4 border-t border-background/10 text-xs space-y-1">
          <p>Termos de Uso | Política de Privacidade</p>
          <p>Todos os direitos reservados – Edilson Morais {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
