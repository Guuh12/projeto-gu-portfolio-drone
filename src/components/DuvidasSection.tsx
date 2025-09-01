import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DuvidasSection() {
  return (
    <section id="duvidas" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de filmagem com drones
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Quais tipos de filmagens vocês realizam com drones?
              </AccordionTrigger>
              <AccordionContent>
                Realizamos diversos tipos de filmagens aéreas, incluindo eventos, 
                imóveis, paisagens, documentários, publicidade e muito mais.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Qual é o tempo de entrega dos vídeos?
              </AccordionTrigger>
              <AccordionContent>
                O tempo de entrega varia de acordo com a complexidade do projeto. 
                Geralmente entregamos o material editado em 3-7 dias úteis. 
                Para projetos mais complexos, o prazo será informado durante o orçamento.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Vocês trabalham em toda a região?
              </AccordionTrigger>
              <AccordionContent>
                Sim, atendemos toda a região metropolitana e áreas próximas. 
                Para locais mais distantes, pode haver taxa de deslocamento. 
                Entre em contato para verificar a disponibilidade na sua região.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Como funciona o processo de filmagem?
              </AccordionTrigger>
              <AccordionContent>
                O processo inclui planejamento prévio, filmagem no local, 
                edição profissional e entrega do material final. Trabalhamos 
                em conjunto com o cliente para garantir que o resultado 
                atenda às expectativas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Vocês possuem licenças e autorizações necessárias?
              </AccordionTrigger>
              <AccordionContent>
                Sim, possuímos todas as licenças e autorizações necessárias 
                para operação de drones, incluindo registro na ANAC. Seguimos todas as normas de segurança 
                e regulamentações vigentes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
