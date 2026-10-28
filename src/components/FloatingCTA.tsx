import { MessageCircle } from 'lucide-react';
import { site } from '@/data/site';

export default function FloatingCTA() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar horário pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-cocoa-950 text-ivory-50 shadow-xl shadow-cocoa-950/20 transition-all hover:scale-105 hover:bg-champagne-500 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-cocoa-950 px-4 py-2 text-sm font-medium text-ivory-50 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Agendar pelo WhatsApp
      </span>
    </a>
  );
}
