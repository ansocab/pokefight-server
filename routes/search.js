var express = require('express');
var router = express.Router();

const { getSearchResults} = require("../controllers/search");

router.get('/', getSearchResults);

module.exports = router;

