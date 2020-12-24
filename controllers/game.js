const { Game } = require("../models");

exports.saveGameResult = async (req, res) => {
  const dbResponse = await Game.create(req.body);
  return res.status(200).json(dbResponse);
};

exports.getLeaderboard = async (req, res) => {
  const games = await Game.find().sort({ defeated_pokemon: 1 });
  res.send(games);
};
