import { MessageCircle, Sparkles, ArrowDown } from 'lucide-react';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ivory-50 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <div>
          <p className="animate-fade-up mb-6 flex items-center gap-3 text-[0.65rem] uppercase tracking-editorial text-cocoa-700/70">
            <span className="line-accent" aria-hidden="true" />
            Novo Horizonte — SP
          </p>

          <h1 className="animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-cocoa-950 text-balance [animation-delay:0.1s] sm:text-6xl lg:text-7xl">
            Criando um <span className="italic text-champagne-500">visual único</span> para cada
            cliente.
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-cocoa-800/80 text-balance [animation-delay:0.25s]"
          >
            Beleza, personalização e cuidado capilar profissional sob a liderança de{' '}
            <strong className="font-semibold text-cocoa-950">{site.professional}</strong>, no Salão
            Pérola Beleza, em {site.city}.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-4 [animation-delay:0.4s] sm:flex-row sm:items-center">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-cocoa-950 px-8 py-4 text-sm font-semibold tracking-wide text-ivory-50 transition-all hover:-translate-y-0.5 hover:bg-champagne-500 hover:shadow-xl hover:shadow-champagne-500/25"
            >
              <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-sand-400 px-8 py-4 text-sm font-semibold tracking-wide text-cocoa-900 transition-all hover:border-champagne-500 hover:bg-ivory-100"
            >
              <Sparkles className="h-4.5 w-4.5 text-champagne-500" strokeWidth={2} aria-hidden="true" />
              Conhecer nossas especialidades
            </a>
          </div>

          <p className="animate-fade-up mt-8 text-sm italic text-cocoa-700/70 [animation-delay:0.55s]">
            {site.credential}
          </p>
        </div>

        {/* Editorial photo */}
        <figure className="relative animate-fade-in [animation-delay:0.2s]">
          <div
            className="absolute -left-4 -top-4 hidden h-28 w-28 border-l border-t border-champagne-500/50 sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -right-4 hidden h-28 w-28 border-b border-r border-champagne-500/50 sm:block"
            aria-hidden="true"
          />
          <img
            src="/fotos/ju-corpo-inteiro.jpg"
            alt="Ju Mauri, profissional responsável pelo Salão Pérola Beleza, em retrato editorial"
            width={1080}
            height={1350}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-2xl shadow-cocoa-950/10"
          />
          <figcaption className="mt-4 text-center text-xs uppercase tracking-editorial text-cocoa-700/60">
            {site.professional} — Pérola Beleza
          </figcaption>
        </figure>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center pb-6">
        <a
          href="#kerastase"
          aria-label="Rolar para a próxima seção"
          className="text-cocoa-700/50 transition-colors hover:text-champagne-500"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
