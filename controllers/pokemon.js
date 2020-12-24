const { json } = require("express");
let jsonData = require("../models/pokemonData.js");

exports.getAllPokemon = async function (req, res) {
  res.send(jsonData);
}

exports.getPokemonPage = async function (req, res) {
  const limit = 15;
  const totalPages = jsonData.length / limit;
  const page = parseInt(req.query.page);

  if (page > totalPages+1 || page === 0 || !page) {
    return res.status(404).send(`Page with this number is not available. Page range goes from 1 to ${Math.ceil(totalPages)}`);
  }

  const pokemonPage = await jsonData.slice(limit * (page - 1), limit * page);
  res.send({pokemon_list: pokemonPage, current_page: page, total_pages: Math.ceil(totalPages)});
};

exports.getOnePokemon = async function (req, res) {
  const { id } = req.params;
  const singlePokemon = await jsonData.find(
    (item) => parseInt(item.id) === parseInt(id)
  );

  if (!singlePokemon) {
    return res.status(404).send("Pokemon with this ID does not exist");
  }

  res.send(singlePokemon);
};

exports.getOnePokemonInfo = async function (req, res) {
  const { id, info } = req.params;
  const acceptableFields = new Set(["name", "base", "type"]);
  const singlePokemon = jsonData.find(
    (item) => parseInt(item.id) === parseInt(id)
  );

  if (!singlePokemon) {
    return res.status(404).send("Pokemon with this ID does not exist");
  }
  if (!acceptableFields.has(info)) {
    return res.status(400).send("You can't request this info type");
  }

  res.send(singlePokemon[info]);
};
