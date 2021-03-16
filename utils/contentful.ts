import { Asset, Entry, EntryCollection } from "contentful";

console.log();

// contentful client
const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_TOKEN as string,
});

async function getSingleEntry<T>(entryId: string): Promise<T> {
  try {
    const data: Entry<T> = await client.getEntry(entryId);
    const fetchedData: T = data.fields;
    return fetchedData;
  } catch (error: any) {
    throw Error("Error fetching the entry with given ID");
  }
}

async function getMultipleEntries<T>(contentType: string): Promise<T[]> {
  let fetchedData: T[] = [];

  try {
    const data: EntryCollection<T> = await client.getEntries({
      content_type: contentType,
    });

    fetchedData = data.items.map((entry: Entry<T>): T => entry.fields);
  } catch (error: any) {
    console.error(`Error occurred - ${error.message}`);
  }

  return fetchedData;
}

async function getEntriesFromQuery<T>(query: Object): Promise<T[] | T> {
  let fetchedData: T[] | T = [];
  try {
    const data: EntryCollection<T> = await client.getEntries(query);

    if (data.items.length < 1) {
      // Return an empty array if no items returned from contentful query
      fetchedData = [];
    } else if (data.items.length === 1) {
      // Select the fields of first item if only one item returned from contentful query
      fetchedData = data.items[0].fields;
    } else {
      fetchedData = data.items.map((item: Entry<T>) => item.fields);
    }
  } catch (error: any) {
    console.error(`Error occurred - ${error.message}`);
  }

  return fetchedData;
}

function serializeAssetUrls<T, K>(obj: T, ...fields: string[]): K {
  // create a shallow copy of the object
  const cloneObject: { [key: string]: any } = { ...obj };

  for (let [key, value] of Object.entries(cloneObject)) {
    if (fields.includes(key)) {
      // serialize the object

      // check if the value is a array
      if (value instanceof Array) {
        cloneObject[key] = value.map((item: Asset) => item.fields.file.url);
      } else {
        cloneObject[key] = (value as Asset).fields.file.url;
      }
    }
  }

  return cloneObject as K;
}

export {
  getSingleEntry,
  getMultipleEntries,
  getEntriesFromQuery,
  serializeAssetUrls,
};
