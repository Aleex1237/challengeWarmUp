module.exports = (sequelize, dataTypes) => {
  let alias = "Post";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    idCategory: {
      type: dataTypes.INTEGER.UNSIGNED,
    },
  };

  let config = {
    tableName: "posts",
    timestamp: true,
  };

  const Post = sequelize.define(alias, cols, config);

  Post.associate = (models) => {
    Post.belongsTo(models.Category, {
      as: "category",
      foreignKey: "idCategory",
    });
  };

  return Post;
};
