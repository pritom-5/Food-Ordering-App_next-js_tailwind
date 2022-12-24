/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    USERNAME: "sakibShadman",
    PASSWORD: "Tp2ruk7quDU4EHsi",
    CLASTER: "atlascluster",
    DB: "foodDb",
  },
};

module.exports = nextConfig;
