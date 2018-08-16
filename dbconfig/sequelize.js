const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("../models/products")(sequelize, Sequelize);
db.users = require("../models/users")(sequelize, Sequelize);
db.sellers = require("../models/sellers")(sequelize, Sequelize);
db.couriers = require("../models/couriers")(sequelize, Sequelize);

module.exports = db;
