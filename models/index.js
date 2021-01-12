const data = require('../data.json');

const getData = (id) => data.filter((question) => Number(question.id) === Number(id));

module.exports = {
  getData,
};
