const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('users', {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    user_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_lastname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {timestamps: false});
  
};
