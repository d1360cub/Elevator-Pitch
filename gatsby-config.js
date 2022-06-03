require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'd13060cub | FullStack Web Developer 👨🏼‍💻',
    url: 'https://khriztianmoreno.dev',
    image: 'https://khriztianmoreno.com/img/profile.jpg',
    language: 'en',
    description: 'FullStack Web Developer',
    socialLinks: {
      github: 'https://github.com/d1360cub',
      linkedin: 'https://www.linkedin.com/in/diegocubides/',
      web: 'https://khriztianmoreno.com',
      mailto: 'mailto:diegofernandocubides@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-screens',
        path: 'content/elevator-pitch/screens',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-images',
        path: 'content/elevator-pitch/images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID || 'UA-131757507-1',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-elevator-pitch'],
      },
    },
  ],
};
