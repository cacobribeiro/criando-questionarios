const express = require('express');

const index = express.Router();
const data = require('../data.json');
const models = require('../models');

index.get('/', async (req, res) => {
  try {
    res.status(200).json({ data });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

index.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Aqui poderia ser criado um model para puxar as informações sobre o questionario direto do banco de dados.
    // Como optei por não criar um banco, estou puxando os arquivos do data.json
    const getData = await models.getData(id)[0];
    console.log(getData);
    res.status(200).json({ data: getData });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = index;
