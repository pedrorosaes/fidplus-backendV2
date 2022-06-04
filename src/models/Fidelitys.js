const { DataTypes } = require("sequelize");
const db = require("../database");

const Restaurants = require("./Restaurants");

const Fidelitys = db.define(
  "Fidelitys",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    restaurant_id: {
      type: DataTypes.STRING,
      references: {
        model: Restaurants,
        key: "id",
      },
    },
  },
  {
    tableName: "Fidelitys",
  }
);

module.exports = Fidelitys;
