const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
    },
  ],
  [withCSS],
  [
    withLess,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
  ],
]);
