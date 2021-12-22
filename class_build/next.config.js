module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "hannah-j-dev",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
