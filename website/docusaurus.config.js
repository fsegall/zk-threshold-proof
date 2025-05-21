
// @ts-check
const config = {
  title: 'zk-threshold-proof',
  tagline: 'ZK SDK for threshold comparisons without disclosure',
  url: 'https://fsegall.github.io',
  baseUrl: '/zk-threshold-proof/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fsegall',
  projectName: 'zk-threshold-proof',
  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'zk-threshold-proof',
      logo: { alt: 'Livre Soluções Logo', src: 'img/logo.png' },
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { href: 'https://github.com/fsegall/zk-threshold-proof', label: 'GitHub', position: 'right' },
        { href: 'https://www.npmjs.com/package/zk-threshold-proof', label: 'npm', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Quickstart', to: '/' }] },
        { title: 'Community', items: [{ label: 'LinkedIn Felipe Segall', href: 'https://www.linkedin.com/in/fsegall/' }] },
        { title: 'More', items: [{ label: 'GitHub', href: 'https://github.com/fsegall/zk-threshold-proof' }] },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Livre Soluções de Software`,
    },
  },
};
module.exports = config;
