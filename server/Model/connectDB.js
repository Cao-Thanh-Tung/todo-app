const pgp = require("pg-promise")();
const db = pgp("postgres://postgres:newadmin@localhost:5432/todoapp");
module.exports = db;
