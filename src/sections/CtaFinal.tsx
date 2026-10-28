import { MessageCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-cocoa-950 py-28 text-center text-ivory-50 sm:py-36">
      {/* Background photo with overlay */}
      <img
        src="/fotos/ju-corpo-inteiro.jpg"
        alt=""
        aria-hidden="true"
        width={1080}
        height={1350}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top opacity-20"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cocoa-950/80 via-cocoa-950/60 to-cocoa-950"
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <p className="mb-6 text-[0.65rem] uppercase tracking-editorial text-sand-300">
          {site.name}
        </p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-balance sm:text-6xl">
          Realce sua beleza.{' '}
          <span className="italic text-champagne-400">Viva sua experiência Pérola.</span>
        </h2>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-ivory-50 px-9 py-4.5 text-sm font-semibold tracking-wide text-cocoa-950 transition-all hover:-translate-y-0.5 hover:bg-champagne-400 hover:shadow-2xl hover:shadow-champagne-400/25"
        >
          <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} aria-hidden="true" />
          Falar com {site.professional} pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
