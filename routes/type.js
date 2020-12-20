var express = require('express');
var router = express.Router();

const { getAllTypes, getOneType} = require("../controllers/type");

/* GET home page. */
router.get('/', getAllTypes);
router.get('/:name', getOneType);

module.exports = router;

