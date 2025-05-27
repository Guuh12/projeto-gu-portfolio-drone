
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface PortfolioCategoryCardProps {
  title: string;
  imageUrl: string;
  imageHint: string;
  link: string;
}

export function PortfolioCategoryCard({ title, imageUrl, imageHint, link }: PortfolioCategoryCardProps) {
  return (
    <Link href={link} passHref legacyBehavior>
      <a className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
        <Card className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-[1.03] bg-card border-border">
          <Image
            src={imageUrl}
            alt={`Portfolio category: ${title}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            data-ai-hint={imageHint}
            priority={false} // Set to true for LCP elements if applicable
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/60" />
          <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
            <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-sm">
              {title}
            </h3>
          </div>
        </Card>
      </a>
    </Link>
  );
}
