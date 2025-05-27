
import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
  hint: string;
}

const generalPhotos: ImageItem[] = [
  { src: "https://placehold.co/600x400.png", alt: "Photo 1", hint: "drone photography" },
  { src: "https://placehold.co/600x400.png", alt: "Photo 2", hint: "aerial landscape" },
  { src: "https://placehold.co/600x400.png", alt: "Photo 3", hint: "urban aerial" },
  { src: "https://placehold.co/600x400.png", alt: "Photo 4", hint: "drone portrait" },
  { src: "https://placehold.co/600x400.png", alt: "Photo 5", hint: "event photography" },
  { src: "https://placehold.co/600x400.png", alt: "Photo 6", hint: "commercial aerial" },
];

const event1Photos: ImageItem[] = [
  { src: "https://placehold.co/600x400.png", alt: "Event 1 Photo 1", hint: "event highlight" },
  { src: "https://placehold.co/600x400.png", alt: "Event 1 Photo 2", hint: "event moment" },
];

const event2Photos: ImageItem[] = [
  { src: "https://placehold.co/600x400.png", alt: "Event 2 Photo 1", hint: "conference aerial" },
  { src: "https://placehold.co/600x400.png", alt: "Event 2 Photo 2", hint: "group shot" },
  { src: "https://placehold.co/600x400.png", alt: "Event 2 Photo 3", hint: "venue overview" },
  { src: "https://placehold.co/600x400.png", alt: "Event 2 Photo 4", hint: "action shot" },
];

const ImageCard: React.FC<{ image: ImageItem }> = ({ image }) => (
  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] bg-card border-border">
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
);

export default function PhotosPage() {
  const pageTitle = "Fotografias Portfolio";

  return (
    <main className="flex-grow">
      {/* Main Photography Portfolio Section */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 text-foreground">
            {pageTitle}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {generalPhotos.map((image, index) => (
              <ImageCard key={`general-${index}`} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* Event 1 Section */}
      <section className="w-full py-16 sm:py-24 bg-background border-t border-border/40">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 text-foreground">
            Event 1
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {event1Photos.map((image, index) => (
              <ImageCard key={`event1-${index}`} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* Event 2 Section */}
      <section className="w-full py-16 sm:py-24 bg-background border-t border-border/40">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 text-foreground">
            Event 2
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {event2Photos.map((image, index) => (
              <ImageCard key={`event2-${index}`} image={image} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
