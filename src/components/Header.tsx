import { useEffect, useState } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { site, navLinks } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-sand-300/60 bg-ivory-50/90 backdrop-blur-xl py-2.5 shadow-sm'
          : 'border-b border-transparent bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <img
            src="/fotos/marca-perola.jpg"
            alt="Logotipo do Salão Pérola Beleza"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-sand-400 transition-transform duration-500 group-hover:scale-105"
          />
          <span className="leading-none">
            <span className="block font-serif text-xl font-semibold tracking-wide text-cocoa-950">
              Pérola <span className="italic text-champagne-500">Beleza</span>
            </span>
            <span className="mt-0.5 block text-[0.6rem] uppercase tracking-editorial text-cocoa-700/70">
              Salão
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-cocoa-800/80 transition-colors hover:text-cocoa-950 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-champagne-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-cocoa-950 px-5 py-2.5 text-sm font-semibold text-ivory-50 transition-all hover:bg-champagne-500 hover:shadow-lg hover:shadow-champagne-500/20 sm:flex"
          >
            <CalendarCheck className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Agendar horário
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-400 text-cocoa-900 transition-colors hover:bg-ivory-100 lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-sand-300/60 bg-ivory-50/97 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-serif text-lg text-cocoa-900 transition-colors hover:bg-ivory-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-cocoa-950 px-4 py-3.5 text-sm font-semibold text-ivory-50"
          >
            <CalendarCheck className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Agendar horário
          </a>
        </nav>
      </div>
    </header>
  );
}
