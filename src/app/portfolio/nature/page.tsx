
import Image from 'next/image';

export default function NaturePage() {
  const pageTitle = "Nature Portfolio";
  const images = [
    { src: "https://placehold.co/600x400.png", alt: "Nature Scene 1", hint: "nature landscape" },
    { src: "https://placehold.co/600x400.png", alt: "Nature Scene 2", hint: "aerial wilderness" },
    { src: "https://placehold.co/600x400.png", alt: "Nature Scene 3", hint: "nature landscape" },
    { src: "https://placehold.co/600x400.png", alt: "Nature Scene 4", hint: "aerial wilderness" },
    { src: "https://placehold.co/600x400.png", alt: "Nature Scene 5", hint: "nature landscape" },
    { src: "https://placehold.co/600x400.png", alt: "Nature Scene 6", hint: "aerial wilderness" },
  ];

  return (
    <main className="flex-grow">
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 text-foreground">
            {pageTitle}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] bg-card border-border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={image.hint}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
