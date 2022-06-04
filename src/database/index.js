const Sequelize = require("sequelize");

const DB_NAME = "heroku_b7e8c7bc6ade819";
const DB_USER = "b1d22bb257afac";
const DB_PASS = "a512ea32";
const DB_CONFIG = {
  dialect: "mysql",
  host: "us-cdbr-east-05.cleardb.net",
  port: "3306",
};
// const DB_NAME = "heroku_b7e8c7bc6ade819";
// const DB_USER = "root";
// const DB_PASS = "32259710";
// const DB_CONFIG = {
//   dialect: "mysql",
//   host: "localhost",
//   port: "3306",
// };

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (err) {
  console.error("Erro ao tentar se conectar com o banco de dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de Dados conectado");
  } catch (error) {
    console.error("Erro ao tentar se conectar com o banco de dados");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
