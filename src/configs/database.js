const knex = require("knex");
const { attachPaginate } = require("knex-paginate");
const { databaseConfig } = require("./knexfile");

const connection = knex(databaseConfig);

attachPaginate();

export { connection };
