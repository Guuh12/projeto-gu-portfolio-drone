
export default function VideosPage() {
  const vimeoBaseUrl = "https://player.vimeo.com/video/";
  const vimeoParams = "?color=D3D3D3&title=0&byline=0&portrait=0";
  const placeholderVideoId = "716922262"; // Example Vimeo video ID

  return (
    <main className="flex-grow">
      {/* Section for Vimeo Video - "A little about my work" (Existing) */}
      <section className="w-full py-12 sm:py-16 bg-background">
        <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8 text-foreground">
            Um pouco sobre meu trabalho
          </h2>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl border border-border">
            <iframe
              src={`${vimeoBaseUrl}716922262${vimeoParams}`}
              width="100%"
              height="100%"           
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
              title="Vimeo Video Showcase"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section: Recordings made */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 text-foreground">
            Evento 1
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-border">
              <iframe
                src={`${vimeoBaseUrl}${placeholderVideoId}${vimeoParams}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                title="Recording 1"
              ></iframe>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-border">
              <iframe
                src={`${vimeoBaseUrl}${placeholderVideoId}${vimeoParams}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                title="Recording 2"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Event 1 */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 text-foreground">
            Evento 2
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-border">
              <iframe
                src={`${vimeoBaseUrl}${placeholderVideoId}${vimeoParams}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                title="Event 1 - Video 1"
              ></iframe>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-border">
              <iframe
                src={`${vimeoBaseUrl}${placeholderVideoId}${vimeoParams}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                title="Event 1 - Video 2"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Event 2 */}
      <section className="w-full py-16 sm:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 text-foreground">
            Evento 3
          </h2>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl border border-border">
            <iframe
              src={`${vimeoBaseUrl}${placeholderVideoId}${vimeoParams}`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
              title="Event 2 - Video 1"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
