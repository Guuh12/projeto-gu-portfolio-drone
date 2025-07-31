
import Link from 'next/link';
import Image from 'next/image';

export function FloatingWhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511949115576"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-0 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 ease-in-out flex items-center justify-center w-14 h-14"
    >
      <Image
        src="/Whats-app-icone.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-14 h-14 rounded-full"
      />
    </Link>
  );
}
