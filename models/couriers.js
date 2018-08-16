module.exports = (sequelize, Sequelize) => {
  const couriers = sequelize.define(
    "couriers",
    {
      idcourier: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nameCourier: Sequelize.STRING,
      priceCourier: Sequelize.INTEGER
    },
    {
      freezeTableName: true
    }
  );
  return couriers;
};
