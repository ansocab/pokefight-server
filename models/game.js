const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    name: String,
    pokemon: String,
    defeated_pokemon: Number,
  },
  { timestamps: true }
);

const Game = mongoose.model("game", GameSchema);
module.exports = Game;