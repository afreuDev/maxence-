export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: '/',
    },
    {
      text: 'Parcours',
      href: '#a-propos',
    },
    {
      text: 'Résultats',
      href: '#resultats',
    },
    {
      text: 'Partenaires',
      href: '#partenaires',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
  actions: [],
};

import { getPermalink } from './utils/permalinks';

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Mentions Légales', href: getPermalink('/legal') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/maxencemeytri' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:maxencemey431@gmail.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Maxence Mey
  `,
};
