
import { AboutMeSection } from '@/components/AboutMeSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import { DuvidasSection } from '@/components/DuvidasSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <AboutMeSection />
      <PortfolioSection />
      <ContactSection />
      <DuvidasSection />
    </div>
  );
}
