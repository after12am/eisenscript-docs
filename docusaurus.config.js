module.exports = {
  title: 'EisenScript',
  tagline: 'The tagline of EisenScript',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/eisenscript-docs/build/',
  favicon: '',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'EisenScript',
      links: [
        {
          href: 'https://github.com/after12am/eisenscript-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started-introduction',
            },
            {
              label: 'Reference',
              to: 'docs/reference-primitives',
            },
            {
              label: 'Tutorial',
              to: 'docs/tutorial-how-to-create-generative',
            },
            {
              label: 'Example',
              to: 'docs/example-alien',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Satoshi Okami. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/after12am/eisenscript-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
