require("dotenv").config();
const mongoose = require("mongoose");

const Game = require("./game");

const connectDB = () => {
  mongoose.set('useUnifiedTopology', true);
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
};

exports.Game = Game;
exports.connectDB = connectDB;