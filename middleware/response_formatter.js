module.exports  = async (ctx, next) => {
  try {
    await next()
    ctx.body = {
      res_code: 200,
      res_msg: '请求成功',
      res: ctx.body
    }
  } catch (err) {
    ctx.body = {
      res_code: err.status,
      res_msg: err.message
    }
  }
}