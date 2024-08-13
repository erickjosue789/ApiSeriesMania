'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.genero.belongsToMany(models.serie, { through: 'seriegeneros', foreignKey: "genero_id" });
    }
  }
  genero.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'genero',
    tableName:'generos',
  });
  return genero;
};