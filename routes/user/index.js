const router = require('koa-router')()
const user_controllers = require('../../controllers/user_controllers')

router
  .post('/user/:username', user_controllers.login)
  .post('/user', user_controllers.register)
  .get('/user/:id', user_controllers.get_user)


module.exports = router