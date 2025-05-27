
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export function FloatingWhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511949115576"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 ease-in-out flex items-center justify-center"
    >
      <MessageSquare size={28} strokeWidth={1.75} />
    </Link>
  );
}
