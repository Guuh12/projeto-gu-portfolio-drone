import Image from 'next/image';

export function AboutMeSection() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          <div className="w-full md:w-2/5">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
              <Image
                src="/Foto-perfil-portfolio.jpg"
                alt="Gustavo Futo"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Sobre Mim
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
              Sou Gustavo Futo | Piloto de Drone
            </h3>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Acredito que boas imagens têm o poder de contar histórias — e com um drone nas mãos, posso contá-las de um ângulo que poucas pessoas enxergam.
              </p>
              <p>
                Tenho 22 anos e sou apaixonado por registrar momentos de forma leve, natural e cinematográfica. Meu estilo de voo é mais casual, ideal para eventos, produções criativas e vídeos institucionais com uma pegada moderna.
              </p>
              <p>
                Mais do que pilotar, gosto de observar, encontrar o melhor enquadramento e criar algo único a cada voo — com criatividade, sensibilidade e segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
