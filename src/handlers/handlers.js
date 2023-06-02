const { createUserController, logInController } = require('../controllers/controllers')


const createUserHandler = async (req, res) =>{
    const { user_email, user_name, user_lastname, user_password } = req.body;
    try {
      const postUser = await createUserController(user_email, user_name, user_lastname, user_password);
      res.status(200).json(postUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

const logInHandler = async (req, res) => {
    const { user_email, user_password } = req.body;

    const user = await logInController(user_email, user_password);

    try {
        if (user) {
          res.status(200).json("true")
        } else {
            res.status(200).json("false")
        }
      } catch (error) {
        res.status(400).json(error.message)
      }

}

module.exports = {
    createUserHandler,
    logInHandler
}