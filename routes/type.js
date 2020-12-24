var express = require('express');
var router = express.Router();

const { getAllTypes, getOneType} = require("../controllers/type");

router.get('/', getAllTypes);
router.get('/:name', getOneType);

module.exports = router;

