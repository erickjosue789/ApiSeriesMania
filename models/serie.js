'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.serie.belongsToMany(models.usuario, { through: 'favoritos', foreignKey: "serie_id" });
      models.serie.belongsToMany(models.genero, { through: 'seriegeneros', foreignKey: "serie_id" });
    }
  }
  serie.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'serie',
    tableName:'series',
  });
  return serie;
};