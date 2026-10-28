import Reveal from '@/components/Reveal';

const gallery = [
  {
    src: '/fotos/ju-costas.jpg',
    alt: 'Cabelo com mechas e coqueho elegante, visto de costas',
    className: 'sm:row-span-2',
    imgClass: 'h-full w-full object-cover object-top',
  },
  {
    src: '/fotos/produtos-kerastase.jpg',
    alt: 'Produtos profissionais Kérastase apresentados em detalhe',
    className: '',
    imgClass: 'h-full w-full object-cover object-center',
  },
  {
    src: '/fotos/ju-corpo-inteiro.jpg',
    alt: 'Retrato editorial de corpo inteiro da profissional Ju Mauri',
    className: '',
    imgClass: 'h-full w-full object-cover object-center',
  },
  {
    src: '/fotos/equipe.jpg',
    alt: 'Profissionais de beleza reunidos em encontro da L’Oréal Latin America',
    className: 'sm:col-span-2',
    imgClass: 'h-full w-full object-cover object-center',
  },
  {
    src: '/fotos/ju-retrato.jpg',
    alt: 'Retrato editorial com cabelo liso e bem cuidado',
    className: '',
    imgClass: 'h-full w-full object-cover object-center',
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="relative bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-editorial text-cocoa-700/70">
            <span className="line-accent" aria-hidden="true" />
            Galeria
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-cocoa-950 text-balance sm:text-5xl">
            A estética <span className="italic text-champagne-500">Pérola Beleza.</span>
          </h2>
          <p className="mt-4 text-lg text-cocoa-800/70">
            Uma seleção visual da identidade, dos rituais de cuidado e da assinatura profissional
            do salão.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[12rem]">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              as="figure"
              className={`group overflow-hidden rounded-xl border border-sand-300/60 ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
                className={`${item.imgClass} transition-transform duration-700 group-hover:scale-105`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
