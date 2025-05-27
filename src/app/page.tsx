
import { AboutMeSection } from '@/components/AboutMeSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <AboutMeSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
