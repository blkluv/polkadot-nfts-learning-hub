/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Home',
      link: {
        type: 'generated-index',
        title: 'About the NFTs pallet',
        description: 'Learn about the NFTs pallet and how it can unlock new use cases.',
        slug: '/',
      },
      items: [
        'background',
        'about-nfts-pallet/design-and-core-features',
        'about-nfts-pallet/attribute-types',
        'about-nfts-pallet/settings-and-roles',
        'about-nfts-pallet/distribution-and-marketplaces',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Use cases',
      link: {
        type: 'generated-index',
        title: 'Exploring use cases',
        description: 'Explore the different use cases for the NFTs pallet on Polkadot.',
        slug: '/use-cases',
      },
      items: ['use-cases/art', 'use-cases/certificates', 'use-cases/engagement', 'use-cases/advanced',],
    },
    {
      type: 'category',
      label: 'Developer Guides',
      link: {
        type: 'generated-index',
        title: 'Developer Guides',
        description: 'Start hacking on use case ideas you want to explore.',
        slug: '/developers',
      },
      items: ['guides/features', 'guides/setup', 'guides/create-collection'],
    },
  ],
  videoSidebar: [
    'videos-for-users',
    'videos-for-devs',
  ],
};