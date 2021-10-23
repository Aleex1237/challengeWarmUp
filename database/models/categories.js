module.exports = (sequelize, dataTypes) => {
  let alias = "Category";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    timestamps: false,
    tableName: "categories",
    
  };

  const Category = sequelize.define(alias, cols, config);

  Category.associate = (models) => {
    Category.hasMany(models.Post, {
      as: "posts",
      foreignKey: "idCategory",
    });
  };

  return Category;
};
