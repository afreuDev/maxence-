export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: '/',
    },
    {
      text: 'Bio',
      href: '#bio',
    },
    {
      text: 'Calendrier',
      href: '#calendrier',
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
  actions: [{ text: 'Contact', href: '#contact', target: '_self' }],
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
