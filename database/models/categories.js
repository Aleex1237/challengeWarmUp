module.exports = (sequelize, dataTypes) => {
  let alias = "Category";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
  };

  let config = {
    tableName: "categories",
    timestamp: false,
  };

  const Category = sequelize.define(alias, cols, config);

  return Category;
};
