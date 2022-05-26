require("dotenv").config();

const databaseConfig = {
  client: "postgres",
  // debug: true,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
  pool: {
    min: 10,
    max: 150,
  },
};

module.exports = { databaseConfig };
