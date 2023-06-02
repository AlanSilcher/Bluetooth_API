const { where } = require("sequelize")
const { Users } = require('../db')


const createUserController = async (user_email, user_name, user_lastname, user_password) => {
    const existingUser = await Users.findOne({ where: { user_email } });
  
    if (existingUser) {
      throw new Error('El correo electrónico ya está registrado.');
    }
  
    const user = await Users.create({ user_email, user_name, user_lastname, user_password});
  
    return user;
  };
  

const logInController = async (user_email, user_password) => {
  
    const login = await Users.findOne({ where: { user_email, user_password } });

    return login
}



module.exports = {
    createUserController,
    logInController
}