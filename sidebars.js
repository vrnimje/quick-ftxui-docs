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
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  docs: [
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Guides',
        description: 'Learn ways to use and develop applications using Quick-FTXUI',
        slug: '/guides',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: ['guides/quick-start', 'guides/use',],
    },
    {
      type: 'category',
      label: 'User Manual',
      link: {
        type: 'generated-index',
        title: 'User Manual',
        description: "Welcome to Quick-FTXUI's User Manual !!! This section contains the technical details of using Quick-FTXUI",
        slug: '/user-manual',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: ['user-manual/overview', 'user-manual/comps', 'user-manual/dom'],
    },
  ],
};

module.exports = sidebars;