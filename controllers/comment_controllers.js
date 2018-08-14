const comment_model = require('../db/comment_model')

const get_comments_limit = async (ctx) => {
  const {article_id, page} = ctx.params
  console.log(article_id, page)
  try {
    const comments = await comment_model.comments_select_limit_by_articleid([1, [(page - 1) * 10, 10]])
    comments.length ? (ctx.body = comments) : ctx.throw(400, '暂无评论')
  } catch (error) {
    ctx.throw(400, error)
  }
}

const add_comment = async (ctx) => {
  const comment = {user_id, article_id, content} = ctx.request.body
  try {
    const result = await comment_model.comments_insert(comment)
    const id = result.insertId
    const [comment_insert] = await comment_model.comment_select_by_id(id)
    ctx.body = comment_insert
  } catch (error) {
    ctx.throw(400, error)
  }
}

const remove_comment = async (ctx) => {
  const {id} = ctx.params
  try {
    const result = await comment_model.comments_delete_by_id(id)
  }catch (error) {
    ctx.throw(400, error)
  }
}

module.exports = {
  get_comments_limit,
  add_comment,
  remove_comment
}