'use strict';

const debug = require('debug')('sentencecollector:routes:languages');
const express = require('express');

const languages = require('../lib/languages');

const STATUS_ERROR = 500;

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  debug('GET_LANGUAGES');
  try {
    const allLanguages = languages.getAllLanguages();
    res.json(allLanguages);
  } catch (error) {
    debug('GET_LANGUAGES_ERROR', error);
    res.status(STATUS_ERROR);
    res.json({ message: error.message });
  }
});

router.get('/missing', async (req, res) => {
  debug('GET_MISSING_LANGUAGES');
  try {
    const missingLanguages = await languages.getMissingLanguages();
    res.json(missingLanguages);
  } catch (error) {
    debug('GET_MISSING_LANGUAGES_ERROR', error);
    res.status(STATUS_ERROR);
    res.json({ message: error.message });
  }
});

module.exports = router;
