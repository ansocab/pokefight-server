var express = require('express');
var router = express.Router();

const { getPokemonPage, getAllPokemon, getOnePokemon, getOnePokemonInfo } = require("../controllers/pokemon");

router.get('/page', getPokemonPage);
router.get('/:id', getOnePokemon);
router.get('/:id/:info', getOnePokemonInfo);
router.get('/', getAllPokemon);

module.exports = router;


