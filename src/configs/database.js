const knex = require("knex");
const { attachPaginate } = require("knex-paginate");
const { databaseConfig } = require("./knexfile");

console.log(databaseConfig)

const connection = knex(databaseConfig);

attachPaginate();

module.exports = { connection };