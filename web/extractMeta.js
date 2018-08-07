"use strict";

const logger = require("logfmt");
const Metascraper = require("metascraper");
const cache = require("memory-cache");
const TWENTY_FOUR_HOURS = 86400000;

function extractMeta(url, reply) {
  const cachedResult = cache.get(url);
  if (cachedResult) {
    return reply(cachedResult);
  }
  Metascraper.scrapeUrl(url)
    .then(data => {
      const payload = {
        url: data.url || url,
        title: data.title || "Unable to scrape title.",
        content:
          data.description ||
          "Error: Unable to scrape description from the provided url. You'll have to do this on your own.",
        author: data.publisher || "Unable to scrape author.",
        image: data.image || "",
      };
      cache.put(url, payload, TWENTY_FOUR_HOURS);
      logger.log(Object.assign({}, { type: "info" }, payload));
      reply(payload);
    })
    .catch(e => {
      const data = {
        type: "error",
        error_code: e.data.error_code, // eslint-disable-line
        error_message: e.data.error_message, // eslint-disable-line
      };
      logger.log({ type: "info", message: e.data.error_message }); // eslint-disable-line
      reply(data);
    });
}

module.exports = extractMeta;
