"use strict";

const express = require("express");
const juice = require("juice");
const createHTML = require("./createHTML");

const { Router } = express;
const router = new Router();

const EXPIRATION = process.env.SERVICE_TIME || 3000;

/**
 * POST Extract content from url.
 */
router.post("/", getHTML, (req, res, next) => {
  const data = res.locals.data;
  const status = data.error_code ? data.error_code : 200;
  res.status(status).json(data);
});

function getHTML(req, res, next) {
  const { subject, date, header, preheader, indicated, meta, elements } = req.body;

  createHTML({ subject, date, header, preheader, indicated, meta, elements }, html => {
    res.locals.data = { html: juice(html, { removeStyleTags: false }) };
    next();
  });
}

module.exports = router;
