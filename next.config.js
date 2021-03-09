import { generateStaticSitemapNodes } from "./utils/sitemapOperations";

module.exports = {
  env: {
    MAP_BOX_SECRET: process.env.MAP_BOX_SECRET,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_CONTENT_DELIVERY_API_TOKEN:
      process.env.CONTENTFUL_CONTENT_DELIVERY_API_TOKEN,
    CONTENTFUL_CONTENT_PREVIEW_API_TOKEN:
      process.env.CONTENTFUL_CONTENT_PREVIEW_API_TOKEN,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateStaticSitemapNodes("https://taylorshill.lk");
    }

    return config;
  },
};
