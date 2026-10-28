import { MapPin, Phone, MessageCircle, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

export default function Contato() {
  return (
    <section id="contato" className="relative bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-editorial text-cocoa-700/70">
            <span className="line-accent" aria-hidden="true" />
            Contato e agendamento
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-cocoa-950 text-balance sm:text-5xl">
            Seu próximo momento Pérola{' '}
            <span className="italic text-champagne-500">começa aqui.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact info + CTAs */}
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-2xl border border-sand-300/70 bg-ivory-50 p-7">
              <p className="font-serif text-2xl font-semibold text-cocoa-950">{site.name}</p>
              <p className="mt-1 text-sm text-cocoa-800/70">{site.professional}</p>
              <ul className="mt-5 space-y-3 text-sm text-cocoa-800/85">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" strokeWidth={2} aria-hidden="true" />
                  <span>
                    {site.street} — {site.city}
                    <br />
                    CEP {site.cep}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-champagne-500" strokeWidth={2} aria-hidden="true" />
                  <span>{site.phoneDisplay}</span>
                </li>
              </ul>
            </div>

            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-champagne-400/50 bg-champagne-400/10 p-6 transition-all hover:border-champagne-500 hover:bg-champagne-400/15"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cocoa-950 text-ivory-50">
                <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-editorial text-champagne-500">
                  WhatsApp
                </p>
                <p className="mt-1 font-serif text-xl text-cocoa-950">{site.phoneDisplay}</p>
                <p className="mt-0.5 text-xs text-cocoa-800/70">
                  Toque para agendar com mensagem pré-preenchida
                </p>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-sand-400 bg-ivory-50 px-5 py-4 text-sm font-semibold text-cocoa-900 transition-all hover:border-champagne-500 hover:bg-ivory-100"
              >
                <MapPin className="h-4 w-4 text-champagne-500" strokeWidth={2} aria-hidden="true" />
                Ver localização
                <ArrowUpRight className="h-3.5 w-3.5 text-cocoa-700/60" strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-sand-400 bg-ivory-50 px-5 py-4 text-sm font-semibold text-cocoa-900 transition-all hover:border-champagne-500 hover:bg-ivory-100"
              >
                <Instagram className="h-4 w-4 text-champagne-500" strokeWidth={2} aria-hidden="true" />
                Seguir no Instagram
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-sand-400 bg-ivory-50 px-5 py-4 text-sm font-semibold text-cocoa-900 transition-all hover:border-champagne-500 hover:bg-ivory-100 sm:col-span-2"
              >
                <Facebook className="h-4 w-4 text-champagne-500" strokeWidth={2} aria-hidden="true" />
                Acessar Facebook
              </a>
            </div>
          </Reveal>

          {/* Map (lazy-loaded click-to-load for performance) */}
          <Reveal delay={2}>
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-2xl border border-sand-300/70 bg-ivory-50">
              <iframe
                title="Localização do Salão Pérola Beleza em Novo Horizonte SP"
                src="https://www.google.com/maps?q=Avenida%20da%20Saudade%2C%2042%20-%20Novo%20Horizonte%20-%20SP%2C%2014960-000&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
