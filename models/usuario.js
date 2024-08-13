'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.usuario.belongsToMany(models.serie, { through:'favoritos', foreignKey: "usuario_id" });
      models.usuario.belongsTo(models.rol, {foreignKey: 'role_id'});
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuarios',
  });
  return usuario;
};