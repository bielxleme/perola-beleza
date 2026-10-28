# Salão Pérola Beleza — Landing Page

Landing page premium do **Salão Pérola Beleza** (Novo Horizonte — SP), sob a liderança de Ju Mauri, Care Coach Kérastase Oficial 2026.

## Rodando localmente

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção (dist/)
npm run preview    # pré-visualiza o build
npm run lint       # ESLint
npm run typecheck  # verificação de tipos
```

## Publicando na Vercel

1. Suba o projeto para um repositório Git.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Vite automaticamente:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clique em **Deploy**. Nenhuma variável de ambiente é necessária.

Alternativa via CLI:

```bash
npm i -g vercel
vercel --prod
```

## Estrutura

```
public/
  fotos/            Fotografias reais do salão (otimizáveis no futuro para WebP/AVIF)
  favicon.svg       Favicon tipográfico "P"
  robots.txt
src/
  components/       Header, Footer, FloatingCTA, Reveal (animação de entrada)
  sections/         Hero, Autoridade, Especialidades, Experiencia, Galeria, Contato, CtaFinal
  data/site.ts      Fonte única de dados oficiais (contato, links, endereço)
  lib/              (reservado para utilitários)
  styles/index.css  Tokens de cor, tipografia, animações e reduced-motion
  App.tsx           Composição principal
  main.tsx          Ponto de entrada
index.html          SEO, Open Graph e JSON-LD (BeautySalon)
```

## Alterando conteúdo

Todos os dados oficiais (telefone, WhatsApp, redes sociais, endereço, slogan) estão em `src/data/site.ts`. A mensagem inicial do WhatsApp também é definida nesse arquivo.

## Direção de arte

- **Paleta:** off-white/marfim (base), areia e nude (apoio), marrom profundo (contraste), champagne/rosé (detalhes) — tokens no `tailwind.config.js`.
- **Tipografia:** Cormorant Garamond (editorial serifada) + Manrope (sans legível).
- **Movimento:** reveals suaves no scroll, hovers refinados e suporte completo a `prefers-reduced-motion`.

## Fotografias e materiais pendentes

O site usa fotografias reais fornecidas pelo salão. Para evoluí-lo, ainda seriam bem-vindos:

- Fotos do **ambiente físico do salão** (estações, recepção, fachada).
- Fotos de **resultados reais** autorizadas (coloração, mechas, cortes) para a galeria.
- Versão **PNG/transparente do logotipo** para favicon e marca d'água.
- Fotos específicas para os cards de **cortes/visagismo** e **cuidados/cosméticos** (hoje usam retratos editoriais da própria Ju Mauri como ilustração).
- Horários de funcionamento (não informados — não inventados; podem ser adicionados em `site.ts` quando confirmados).
