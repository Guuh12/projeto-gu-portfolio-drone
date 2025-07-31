export default function VideosPage() {
  const vimeoBaseUrl = "https://player.vimeo.com/video/";
  const vimeoParams = "?color=D3D3D3&title=0&byline=0&portrait=0";
  const youtubeBaseUrl = "https://www.youtube.com/embed/";
  const youtubeParams = "?rel=0&modestbranding=1&showinfo=0";

  // Função para detectar o tipo de vídeo e gerar a URL correta do player
  const getPlayerUrl = (videoUrl: string) => {
    // Verifica se é um vídeo do Vimeo
    const vimeoMatch = videoUrl.match(/vimeo.com\/(\d+)(?:\/(\w+))?/);
    if (vimeoMatch) {
      const videoId = vimeoMatch[1];
      const hash = vimeoMatch[2] ? vimeoMatch[2] : null;
      return `${vimeoBaseUrl}${videoId}${vimeoParams}${hash ? `&h=${hash}` : ''}`;
    }

    // Verifica se é um vídeo do YouTube
    const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (youtubeMatch) {
      const videoId = youtubeMatch[1];
      return `${youtubeBaseUrl}${videoId}${youtubeParams}`;
    }

    // Se não conseguir detectar, retorna a URL original
    return videoUrl;
  };

  // Lista centralizada de todas as categorias e vídeos
  const videoCategorias = [
    {
      categoria: 'Principais Trabalhos',
      videos: [
        {
          url: 'https://youtu.be/BFV9h43wXSc',
          title: 'Trabalho Especial 1'
        },
        {
          url: 'https://youtu.be/qfRjUvjUlAM',
          title: 'Trabalho Especial 2'
        },
        {
          url: 'https://vimeo.com/1089431474',
          title: 'Trabalho Especial 3'
        },
        {
          url: 'https://vimeo.com/1093355639',
          title: 'Trabalho Especial 4'
        }
      ]
    },
    {
      categoria: 'Comercios / Empresas',
      videos: [
        {
          url: 'https://youtu.be/qfRjUvjUlAM',
          title: 'W N Barbearia dos Amigos 1'
        },
        {
          url: 'https://vimeo.com/1105818888',
          title: 'W N Barbearia dos Amigos 2'
        }
      ]
    },
    {
      categoria: 'Eventos / Festas',
      videos: [
        {
          url: 'https://youtu.be/BFV9h43wXSc',
          title: 'Encontro de Carros - Donos da Rua'
        }
      ]
    },
    {
      categoria: 'Praias / Natureza / Paisagens',
      videos: [
        {
          url: 'https://vimeo.com/1093355639',
          title: 'Rio de Janeiro - Video 1'
        },
        {
          url: 'https://vimeo.com/1096032870',
          title: 'Rio de Janeiro - Video 2'
        },
        {
          url: 'https://vimeo.com/1096065004',
          title: 'Parque Butantã Edit'
        },
        {
          url: 'https://vimeo.com/1089431474',
          title: 'Parque de Embu das Artes'
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
              src={`${youtubeBaseUrl}m97TCHptwy8${youtubeParams}`}
              width="100%"
              height="100%"           
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
              title="Video Principal do Portfolio"
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
                const playerUrl = getPlayerUrl(video.url);
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
