const waMessage =
  'Olá! Conheci o Salão Pérola Beleza pelo site e gostaria de saber mais sobre os serviços e horários disponíveis.';

export const site = {
  name: 'Salão Pérola Beleza',
  professional: 'Ju Mauri',
  credential: 'Care Coach Kérastase Oficial 2026',
  slogan: 'Criando um visual único para cada cliente',
  street: 'Avenida da Saudade, 42',
  city: 'Novo Horizonte – SP',
  cityShort: 'Novo Horizonte',
  region: 'SP',
  cep: '14960-000',
  phoneDisplay: '(17) 99116-9136',
  whatsappUrl: `https://wa.me/5517991169136?text=${encodeURIComponent(waMessage)}`,
  whatsappSimple: 'https://wa.me/5517991169136',
  instagram: 'https://www.instagram.com/perolabeleza/?hl=pt-br',
  facebook: 'https://www.facebook.com/PerolaBeleza/',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Avenida da Saudade, 42 – Novo Horizonte – SP, 14960-000'
  )}`,
} as const;

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Kérastase & Tratamentos', href: '#kerastase' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;
