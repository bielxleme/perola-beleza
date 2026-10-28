import { Award } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

export default function Autoridade() {
  return (
    <section id="kerastase" className="relative bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Photo: graduation Kérastase */}
        <Reveal>
          <figure className="relative">
            <img
              src="/fotos/ju-diploma-kerastase.jpg"
              alt="Ju Mauri com capelo e diploma da formatura Kérastase"
              width={900}
              height={1600}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-xl shadow-cocoa-950/10"
            />
            <figcaption className="absolute -bottom-5 left-5 right-5 rounded-xl bg-cocoa-950 px-5 py-4 text-ivory-50 shadow-lg sm:left-8 sm:right-auto">
              <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-editorial text-sand-300">
                <Award className="h-3.5 w-3.5 text-champagne-400" strokeWidth={2} aria-hidden="true" />
                Credencial
              </p>
              <p className="mt-1 font-serif text-lg italic">{site.credential}</p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Copy */}
        <Reveal delay={2}>
          <p className="mb-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-editorial text-cocoa-700/70">
            <span className="line-accent" aria-hidden="true" />
            Autoridade profissional
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-cocoa-950 text-balance sm:text-5xl">
            Cuidado capilar com{' '}
            <span className="italic text-champagne-500">olhar atento</span> e técnica
            profissional.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cocoa-800/80">
            Um olhar atento às necessidades de cada cabelo, com foco em cuidado personalizado,
            beleza e tratamentos capilares profissionais.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-cocoa-800/80">
            Sob a liderança de <strong className="font-semibold text-cocoa-950">{site.professional}</strong>,
            o Salão Pérola Beleza une técnica, sensibilidade e a experiência de quem entende que
            cada cliente tem um único caminho para a sua melhor versão.
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-cocoa-950 px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory-50 transition-all hover:-translate-y-0.5 hover:bg-champagne-500 hover:shadow-lg hover:shadow-champagne-500/25"
          >
            Falar com {site.professional}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
