module.exports = {
  title: 'zk-threshold-proof',
  tagline: 'ZK Threshold Proofs Made Easy',
  url: 'https://fsegall.github.io',
  baseUrl: '/zk-threshold-proof/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fsegall',
  projectName: 'zk-threshold-proof',
  themeConfig: {
    navbar: {
      title: 'zk-threshold-proof',
      logo: { alt: 'Logo', src: 'img/logo.png' },
      items: [
        { to: 'docs/intro', label: 'Docs', position: 'left' },
        { href: 'https://github.com/fsegall/zk-threshold-proof', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Livre Soluções.`,
    },
  },
  presets: [
    ['@docusaurus/preset-classic', { docs: { sidebarPath: require.resolve('./sidebars.js') } }],
  ],
};