const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const { Game } = require("./models/game");
const { connectDB } = require("./models");
const cors = require("cors");
const pokemonRouter = require("./routes/pokemon");
const gameRouter = require("./routes/game");
const typeRouter = require("./routes/type");
const searchRouter = require("./routes/search");

var app = express();

const whitelist = ["http://localhost:3000", "https://pokemonrps.netlify.app/"]
const options = {
  origin: function(origin, callback) {
    if(whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
} 
app.use(cors(options));

app.use(express.json());
const { PORT = 4000 } = process.env;
app.use(logger("dev"));

app.use("/pokemon", pokemonRouter);
app.use("/game", gameRouter);
app.use("/type", typeRouter);
app.use("/search", searchRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

(async function () {
  await connectDB();
  app.listen(PORT, () =>
    console.log("Server listening in http://localhost:" + PORT)
  );
})();
