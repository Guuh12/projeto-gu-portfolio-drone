import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 py-8 text-center mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <Link 
              href="https://instagram.com/gus_futo_drone" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Gustavo Yuri Instagram" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </Link>
            {/* 
            <Link 
              href="https://x.com/gustavoyuri_example" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Gustavo Yuri Twitter/X" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={24} />
            </Link> 
            */}
            {/* 
            <Link 
              href="https://linkedin.com/in/gustavoyuri_example" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Gustavo Yuri LinkedIn" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </Link> 
            */}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gustavo Yuri - Todos Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
