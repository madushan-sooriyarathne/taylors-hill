import xml2js from "xml2js";
import globby from "globby";
import fs from "fs";
import path from "path";
import { promisify } from "util";

interface UrlSet {
  loc: Array<string>;
  lastmod: Array<string>;
}

function cleanDuplicates(urls: string[], urlSet: UrlSet[]): void {
  // O^(n * n)
  urls.forEach((url: string) => {
    let index = 0;
    for (let node of urlSet) {
      if (node !== undefined && node.loc[0] === url) {
        // delete the current object from the urlSet list
        delete urlSet[index];

        index++;
        break;
      }
      index++;
    }
  });
}

async function addToSiteMap(urlList: string[]): Promise<void> {
  const today: Date = new Date();
  const formattedDate: string = today.toISOString().substring(0, 10);

  try {
    // read the sitemap.xml file
    const data = await promisify(fs.readFile)(
      path.join(__dirname, "../public/sitemap.xml"),
      "utf-8"
    );

    // convert xml tree into a object
    const xmlTree: any = await promisify(xml2js.parseString)(data);

    // clean the existing xml object for duplicate urls
    cleanDuplicates(urlList, xmlTree.urlset.url as UrlSet[]);

    // insert url in the array to xmlTree
    urlList.forEach((url) => {
      xmlTree.urlset.url.push({
        loc: url,
        lastmod: formattedDate,
      });
    });

    // build xml using xmlTree
    const builder = new xml2js.Builder();
    const updatedXmlData = builder.buildObject(xmlTree);

    // write new Xml data to the file
    fs.writeFileSync(
      path.join(__dirname, "../public/sitemap.xml"),
      updatedXmlData,
      "utf-8"
    );
  } catch (error) {
    console.error(`Error occurred! - ${error}`);
  }
}

async function generateStaticSitemapNodes(baseUrl: string): Promise<void> {
  // get pages
  const pages: string[] = await globby([
    "pages/*.{tsx, ts}", // all tsx files in pages directory
    "pages/*", // all folders in pages directory
    "pages/**/*.{tsx, ts}", // ignore all index files within the sub directories of pages directory
    "!pages/_*.{tsx, ts}", // ignore all next.js files
    "!pages/**/[*.{tsx, ts}", // Ignore all dynamic routes within the sub directories of page directory
    "!pages/api", // ignore api route
  ]);

  const urls: string[] = pages.map((page: string) => {
    // remove file extensions & pages folder name
    const route = page
      .replace("pages", "")
      .replace(/(.tsx|.ts)/, "")
      .replace("index", "");

    return new URL(route, baseUrl).href;
  });

  // write to xml file
  addToSiteMap(urls);
}

generateStaticSitemapNodes("https://taylorshill.lk");

export { addToSiteMap, generateStaticSitemapNodes };
