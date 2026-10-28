import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { site, navLinks } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-300/60 bg-ivory-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/fotos/marca-perola.jpg"
                alt="Logotipo do Salão Pérola Beleza"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-sand-400"
                loading="lazy"
              />
              <span className="font-serif text-xl font-semibold text-cocoa-950">
                Salão Pérola <span className="italic text-champagne-500">Beleza</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs font-serif text-lg italic leading-relaxed text-cocoa-700">
              “{site.slogan}”
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial do Salão Pérola Beleza"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-400 text-cocoa-800 transition-all hover:border-champagne-500 hover:bg-champagne-400/10 hover:text-champagne-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook oficial do Salão Pérola Beleza"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-400 text-cocoa-800 transition-all hover:border-champagne-500 hover:bg-champagne-400/10 hover:text-champagne-500"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com o Salão Pérola Beleza no WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-400 text-cocoa-800 transition-all hover:border-champagne-500 hover:bg-champagne-400/10 hover:text-champagne-500"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-editorial text-cocoa-700/60">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cocoa-800/80 transition-colors hover:text-champagne-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-editorial text-cocoa-700/60">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cocoa-800/80">
              <li>{site.professional}</li>
              <li>
                {site.street} — {site.city}
              </li>
              <li>CEP {site.cep}</li>
              <li>{site.phoneDisplay}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sand-300/60 pt-6 sm:flex-row">
          <p className="text-xs text-cocoa-700/60">
            © {year} Salão Pérola Beleza. Todos os direitos reservados.
          </p>
          <p className="text-xs text-cocoa-700/60">{site.city}</p>
        </div>
      </div>
    </footer>
  );
}
