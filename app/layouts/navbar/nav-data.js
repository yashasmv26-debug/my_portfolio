import config from '~/config.json';

export const navLinks = [
  {
    label: 'About',
    pathname: '/#profile',
  },
  {
    label: 'Projects',
    // anchor should match a real section id in home.jsx
    pathname: '/#college-management',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
