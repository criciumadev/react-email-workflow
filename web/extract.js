"use strict";

const express = require("express");
const extractMeta = require("./extractMeta");
const { Router } = express;
const router = new Router();

const EXPIRATION = process.env.SERVICE_TIME || 3000;

/**
 * POST Extract content from url.
 */
router.post("/", getExtractionData, (req, res, next) => {
  const data = res.locals.data;
  const status = data.error_code ? data.error_code : 200;
  res.status(status).json(data);
});

function getExtractionData(req, res, next) {
  extractMeta(req.body.url, data => {
    res.locals.data = data;
    next();
  });
}

module.exports = router;
