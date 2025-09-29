// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  basePath: isProd ? '/sina-sae' : '',
  assetPrefix: isProd ? '/sina-sae/' : '',
  trailingSlash: true,
  output: 'export',
};
