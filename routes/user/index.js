const router = require('koa-router')()
const user_controllers = require('../../controllers/user_controllers')
const jwt_auth = require('../../middleware/jwt_auth')

router
  .post('/user/login', jwt_auth, user_controllers.login)
  .post('/user', jwt_auth, user_controllers.register)
  .get('/user/:id', jwt_auth, user_controllers.get_user)


module.exports = router