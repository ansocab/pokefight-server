let jsonData = require('../models/pokemonData.js');

exports.getAllPokemon = async function (req, res) {
    res.send(jsonData);
}

exports.getOnePokemon = async function (req, res) {
    const { id } = req.params;
    const singlePokemon = await jsonData.find(item => parseInt(item.id) === parseInt(id));
    
    if(!singlePokemon) {
        return res.status(404).send("Pokemon with this ID does not exist");
    }

    res.send(singlePokemon);
}

exports.getOnePokemonInfo = async function (req, res) {
    const { id, info } = req.params;
    const acceptableFields = new Set(["name", "base", "type"]);
    const singlePokemon = jsonData.find(item => parseInt(item.id) === parseInt(id));
    
    if(!singlePokemon) {
        return res.status(404).send("Pokemon with this ID does not exist");
    }
    if(!acceptableFields.has(info)) {
        return res.status(400).send("You can't request this info type");
    }

    res.send(singlePokemon[info]);
}