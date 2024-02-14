const { Sequelize, DataTypes } = require("sequelize");
const CitiesModel = require("./models/Cities.model");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established with database");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });

(async () => await sequelize.sync())();

const Cities = CitiesModel(sequelize, DataTypes);

module.exports = {
  Cities,
};
