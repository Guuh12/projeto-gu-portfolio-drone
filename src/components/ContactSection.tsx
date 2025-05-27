
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-background">
      <div className="container max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-foreground">
          Contato
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Tem algo em mente e acha que posso ajudar? Vamos conversar e transformar sua ideia em algo memorável.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-8">
          <Button asChild size="lg" variant="secondary" className="font-semibold px-8 py-3 text-base w-full sm:w-auto">
            <a href="mailto:gustavoyuri34@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Envie Email
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-semibold px-8 py-3 text-base w-full sm:w-auto">
            <a href="https://wa.me/11949115576" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" /> Envie WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-semibold px-8 py-3 text-base w-full sm:w-auto">
            <a href="https://ig.me/m/gus_futo_drone" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" /> Envie Instagram
            </a>
          </Button>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p className="flex items-center justify-center text-lg">
            <Mail className="mr-2 h-5 w-5 text-primary" />
            <a href="mailto:gustavoyuri34@gmail.com" className="hover:text-primary transition-colors">
              gustavoyuri34@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center text-lg">
            <Phone className="mr-2 h-5 w-5 text-primary" />
            <a href="tel:+11949115576" className="hover:text-primary transition-colors">
              11 94911-5576
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
