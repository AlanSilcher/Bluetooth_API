const { Router } = require('express');

const router = Router();

const {
 createUserHandler,
 logInHandler
} = require("../handlers/handlers")



router.post('/user', createUserHandler)

router.post('/login', logInHandler)


module.exports = router;
