const user_model = require('../db/user_model')
const jwt = require('jsonwebtoken')
const jwt_config = require('../config/jwt_config')

const login = async (ctx) => {
  const {username, password} = ctx.params
  console.log(await user_model.user_select_by_username([['username', 'password', 'nikiname', 'email'], username]))
  try {
    let user = await user_model.user_select_by_username([['username', 'password', 'nikiname', 'email'], username])
    if (user.length) {
      user = user[0]
      if (user.password === password) {
        const token_user = {username: user.username, email: user.email, nikiname: user.nikiname}
        // console.log(token_user)
        const token = jwt.sign(token_user, jwt_config.secret, {expiresIn: '2h'})
        ctx.body = {
          user: token_user,
          token
        }
      } else {
        ctx.throw(400, '用户名或密码错误')
      }
    } else {
      ctx.throw(400, '用户名不存在')
    }
  } catch (error) {
    ctx.throw(400, error)
  }
}

const register = async (ctx) => {
  const user =  {username, password, nikiname, email} = ctx.request.body
  const res = await user_model.user_insert(user)
}

const get_user = async (ctx) => {
  const {id} = ctx.params
  try {
    const user = await user_model.user_select_by_id(id)
    
  } catch (error) {
    
  }
}

module.exports = {
  login,
  register,
  get_user
}
