const globby = require("globby");
const addToSiteMap = require("./sitemapOps").addToSiteMap;

(async function (baseUrl) {
  // get pages
  const pages = await globby([
    "pages/*.{tsx, ts}", // all tsx files in pages directory
    "pages/*", // all folders in pages directory
    "pages/**/*.{tsx, ts}", // ignore all index files within the sub directories of pages directory
    "!pages/_*.{tsx, ts}", // ignore all next.js files
    "!pages/**/[*.{tsx, ts}", // Ignore all dynamic routes within the sub directories of page directory
    "!pages/api", // ignore api route
  ]);

  const urls = pages.map((page) => {
    // remove file extensions & pages folder name
    const route = page
      .replace("pages", "")
      .replace(/(.tsx|.ts)/, "")
      .replace("index", "");

    return new URL(route, baseUrl).href;
  });

  // write to xml file
  await addToSiteMap(urls);
})("https://taylorshill.lk").then(() =>
  console.log("sitemap.xml is updated with static urls.")
);
