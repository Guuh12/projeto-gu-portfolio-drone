export default function VideosPage() {
  const vimeoBaseUrl = "https://player.vimeo.com/video/";
  const vimeoParams = "?color=D3D3D3&title=0&byline=0&portrait=0";

  // Lista centralizada de todas as categorias e vídeos
  const videoCategorias = [
    {
      categoria: 'Principais Trabalhos',
      videos: [
        {
          url: 'https://vimeo.com/1093355639',
          title: 'Trabalho Especial 1'
        },
        {
          url: 'https://vimeo.com/1089431474',
          title: 'Trabalho Especial 2'
        },
        {
          url: 'https://vimeo.com/1089433300',
          title: 'Trabalho Especial 3'
        }
      ]
    },
    {
      categoria: 'Rio de Janeiro',
      videos: [
        {
          url: 'https://vimeo.com/1093355639',
          title: 'Rio de Janeiro - Video 1'
        },
        {
          url: 'https://vimeo.com/1089433300',
          title: 'Rio de Janeiro - Video 2'
        }
      ]
    },
    {
      categoria: 'Evento 3',
      videos: [
        {
          url: 'https://vimeo.com/71692226211',
          title: 'Event 2 - Video 1'
        }
      ]
    }
  ];

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
              src={`${vimeoBaseUrl}7169222627${vimeoParams}`}
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

      {/* Renderiza todas as categorias e vídeos dinamicamente */}
      {videoCategorias.map((cat, i) => (
        <section key={i} className="w-full py-16 sm:py-24 bg-background">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 text-foreground">
              {cat.categoria}
            </h2>
            <div className={`grid ${cat.videos.length > 1 ? 'grid-cols-1 md:grid-cols-2 gap-8' : 'aspect-video w-full max-w-3xl mx-auto'} `}>
              {cat.videos.map((video, idx) => {
                // Extrai o ID e o hash (se houver) do link do Vimeo
                const match = video.url.match(/vimeo.com\/(\d+)(?:\/(\w+))?/);
                const videoId = match ? match[1] : null;
                const hash = match && match[2] ? match[2] : null;
                // Monta a URL do player, incluindo o hash se existir
                const playerUrl = videoId
                  ? `${vimeoBaseUrl}${videoId}${vimeoParams}${hash ? `&h=${hash}` : ''}`
                  : video.url;
                return (
                  <div key={idx} className={cat.videos.length > 1 ? 'aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-border' : ''}>
                    <iframe
                      src={playerUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                      title={video.title}
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
