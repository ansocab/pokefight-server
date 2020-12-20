let jsonData = require('../models/typeData.js');

exports.getAllTypes = async function (req, res) {
    res.send(jsonData);
}

exports.getOneType = async function (req, res) {
    const { name } = req.params;
    const singleType = await jsonData.find(item => item.name === name);
    
    if(!singleType) {
        return res.status(404).send("Type with this name does not exist");
    }

    res.send(singleType);
}