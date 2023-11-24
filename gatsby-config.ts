import type { GatsbyConfig, PluginRef } from 'gatsby';
import 'dotenv/config';

import data from './config';

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: data.title,
    siteTitleAlt: data.title,
    siteUrl: data.url,
    siteDescription: data.description,
    siteImage: data.author.photo,
    siteLanguage: `en`,
    ...data,
  },
  graphqlTypegen: true,
  trailingSlash: `always`,
  plugins: [

    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        prismPreset: 'night-owl',
        preset: '@theme-ui/preset-tailwind',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.svg',

        name: data.title,
        short_name: data.short_name,
        description: data.description,
        start_url: `/`,
        background_color: data.theme_color,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: data.theme_color,
        display: `standalone`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: './src/sections/',
      },
      __key: 'sections',
    },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
