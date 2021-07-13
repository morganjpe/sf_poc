/* eslint @typescript-eslint/no-var-requires: 0 */
const withTypescript = require('@zeit/next-typescript');
const tsConfig = withTypescript();

module.exports = {
  ...tsConfig,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
