module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => ({
    '/': { page: '/index' },
    '/about': { page: '/about' },
  }),
};
