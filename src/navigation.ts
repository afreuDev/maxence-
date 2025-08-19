import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Bio',
      href: getPermalink('/bio'),
    },
    {
      text: 'Calendrier',
      href: getPermalink('/calendrier'),
    },
    {
      text: 'Résultats',
      href: getPermalink('/resultats'),
    },
    {
      text: 'Galerie',
      href: getPermalink('/galerie'),
    },
    {
      text: 'Partenaires',
      href: getPermalink('/partenaires'),
    },
    {
      text: 'Presse',
      href: getPermalink('/presse'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/maxencemeytri' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:maxencemey431@gmail.com' },
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Maxence Mey · Tous droits réservés.
  `,
};
