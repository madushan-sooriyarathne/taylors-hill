module.exports = {
  env: {
    MAP_BOX_SECRET: process.env.MAP_BOX_SECRET,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_CONTENT_DELIVERY_API_TOKEN:
      process.env.CONTENTFUL_CONTENT_DELIVERY_API_TOKEN,
    CONTENTFUL_CONTENT_PREVIEW_API_TOKEN:
      process.env.CONTENTFUL_CONTENT_PREVIEW_API_TOKEN,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX,
    MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/generateStaticSitemap");
    }

    return config;
  },
};
