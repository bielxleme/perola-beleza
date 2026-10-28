import Reveal from '@/components/Reveal';

export default function Experiencia() {
  return (
    <section id="sobre" className="relative bg-cocoa-950 py-24 text-ivory-100 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-editorial text-sand-400/80">
            <span className="line-accent bg-champagne-400" aria-hidden="true" />
            Experiência Pérola Beleza
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-ivory-50 text-balance sm:text-5xl">
            Seu momento de cuidado, beleza e{' '}
            <span className="italic text-champagne-400">renovação.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ivory-100/80">
            No Salão Pérola Beleza, cada atendimento começa com atenção às suas preferências e ao
            que faz você se sentir bem. Uma experiência dedicada à beleza, à individualidade e ao
            cuidado capilar.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ivory-100/80">
            Um ambiente pensado para acolher, com atendimento próximo e a assinatura profissional
            de quem transforma cuidado em confiança.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <figure className="relative">
            <img
              src="/fotos/ju-retrato.jpg"
              alt="Retrato editorial da profissional Ju Mauri"
              width={1080}
              height={1350}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-2xl shadow-black/30"
            />
            <div
              className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-champagne-400/50 sm:block"
              aria-hidden="true"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
