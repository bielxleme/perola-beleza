import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import Autoridade from '@/sections/Autoridade';
import Especialidades from '@/sections/Especialidades';
import Experiencia from '@/sections/Experiencia';
import Galeria from '@/sections/Galeria';
import Contato from '@/sections/Contato';
import CtaFinal from '@/sections/CtaFinal';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cocoa-950 focus:px-5 focus:py-2.5 focus:text-sm focus:text-ivory-50"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Autoridade />
        <Especialidades />
        <Experiencia />
        <Galeria />
        <Contato />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
