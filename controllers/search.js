const { json } = require('express');
let jsonData = require('../models/pokemonData.js');

exports.getSearchResults = async function (req, res) {
    const { query } = req.query;
    const searchResult = await jsonData.filter((p) => p.name.english.toLowerCase().includes(query.toLowerCase()))
        
    // if(searchResult.length === 0) {
    //     return res.status(404).send(["No pokemon found"]);
    // }

    res.send(searchResult);
}