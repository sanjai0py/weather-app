const Cities = (sequelize, DataTypes) => {
  return sequelize.define("Cities", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Cities;
