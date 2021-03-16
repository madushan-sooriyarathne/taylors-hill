const xml2js = require("xml2js");
const fs = require("fs");
const path = require("path");
const promisify = require("util").promisify;

function cleanDuplicates(urls, urlSet) {
  // O^(n * n)
  urls.forEach((url) => {
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

async function addToSiteMap(urlList) {
  const today = new Date();
  const formattedDate = today.toISOString().substring(0, 10);

  const filePath = path.resolve(process.cwd(), "public/sitemap.xml");

  try {
    // read the sitemap.xml file
    const data = await promisify(fs.readFile)(filePath, "utf-8");

    // convert xml tree into a object
    const xmlTree = await promisify(xml2js.parseString)(data);

    // clean the existing xml object for duplicate urls
    cleanDuplicates(urlList, xmlTree.urlset.url);

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
    fs.writeFileSync(filePath, updatedXmlData, "utf-8");
  } catch (error) {
    console.error(`Error occurred! - ${error}`);
  }
}

module.exports = { addToSiteMap };
