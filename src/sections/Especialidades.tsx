import { Droplets, Palette, Scissors, Sparkles, MessageCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

const services = [
  {
    icon: Droplets,
    title: 'Tratamentos capilares Kérastase',
    desc: 'Rituais de cuidado capilar e tratamentos profissionais realizados com a técnica e o protocolo adequados a cada tipo de fio.',
    img: '/fotos/produtos-kerastase.jpg',
    alt: 'Produtos profissionais Kérastase apresentados em detalhe',
    span: 'lg:col-span-2 lg:row-span-2',
    objectPos: 'object-center',
  },
  {
    icon: Palette,
    title: 'Coloração e mechas',
    desc: 'Personalização de cores e luminosidade, com técnicas adequadas a diferentes estilos e resultados.',
    img: '/fotos/ju-costas.jpg',
    alt: 'Cabelo com mechas e reflexos iluminados, visto de costas',
    span: '',
    objectPos: 'object-top',
  },
  {
    icon: Scissors,
    title: 'Cortes e visagismo',
    desc: 'Um visual alinhado à identidade, às preferências e às características de cada cliente.',
    img: '/fotos/ju-retrato.jpg',
    alt: 'Retrato editorial com cabelo liso e bem cuidado',
    span: '',
    objectPos: 'object-center',
  },
  {
    icon: Sparkles,
    title: 'Cuidados pessoais e cosméticos',
    desc: 'Cuidados complementares e produtos efetivamente disponibilizados pelo salão para manter a beleza em casa, no seu dia a dia.',
    img: null,
    alt: '',
    span: 'lg:col-span-2',
    objectPos: '',
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="relative bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-editorial text-cocoa-700/70">
            <span className="line-accent" aria-hidden="true" />
            Especialidades
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-cocoa-950 text-balance sm:text-5xl">
            Beleza que respeita a{' '}
            <span className="italic text-champagne-500">sua identidade.</span>
          </h2>
          <p className="mt-4 text-lg text-cocoa-800/70">
            Conheça as possibilidades de cuidado e transformação para valorizar a beleza de cada
            cliente.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[17rem]">
          {services.map((s, i) => {
            const Icon = s.icon;
            const hasImage = s.img !== null;
            return (
              <Reveal
                key={s.title}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                as="article"
                className={`group relative overflow-hidden rounded-2xl border ${
                  hasImage
                    ? 'border-sand-300/70 bg-ivory-100'
                    : 'border-champagne-400/40 bg-ivory-100'
                } ${s.span}`}
              >
                {hasImage && (
                  <>
                    <img
                      src={s.img!}
                      alt={s.alt}
                      width={900}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className={`absolute inset-0 h-full w-full object-cover ${s.objectPos} opacity-90 transition-transform duration-700 group-hover:scale-105`}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-cocoa-950/90 via-cocoa-950/40 to-transparent"
                      aria-hidden="true"
                    />
                  </>
                )}
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div
                    className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full ${
                      hasImage
                        ? 'bg-ivory-50/95 text-cocoa-900'
                        : 'bg-cocoa-950 text-ivory-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3
                    className={`font-serif text-2xl font-semibold ${
                      hasImage ? 'text-ivory-50' : 'text-cocoa-950'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-md text-sm leading-relaxed ${
                      hasImage ? 'text-ivory-100/85' : 'text-cocoa-800/80'
                    }`}
                  >
                    {s.desc}
                  </p>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar sobre ${s.title} pelo WhatsApp`}
                    className={`mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                      hasImage
                        ? 'text-champagne-400 hover:text-ivory-50'
                        : 'text-champagne-500 hover:text-cocoa-950'
                    }`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                    Consultar pelo WhatsApp
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
