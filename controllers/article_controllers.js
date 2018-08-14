const article_model = require('../db/article_model')

const get_articles_limit = async (ctx) => {
  const {type_id, page} = ctx.params
  try {
    const articles = await article_model.articles_select_limit_by_typeid([type_id, [(page - 1) * 10, 10]])
    ctx.body = articles
  } catch (error) {
    ctx.throw(400, error)
  }
}

const get_articles_top10 = async (ctx) => {
  const {type_id} = ctx.params
  try {
    const articles = await article_model.articles_select_top10(type_id)
    ctx.body = articles
  } catch (error) {
    ctx.throw(400, error)
  }
}

const get_articles_rand = async (ctx) => {
  try {
    const articles = await article_model.articles_select_rand()
    ctx.body = articles
  } catch (error) {
    ctx.throw(400, error)
  }
}

const get_article = async (ctx) => {
  const {id} = ctx.params
  try {
    const [article] = await article_model.article_select_by_id(id)
    ctx.body = article
  } catch (error) {
    ctx.throw(400, error)
  }
}

// token问题
const like_article = async (ctx) => {
  const {article_id} = ctx.params
  try {
    await article_model.article_insert_like({article_id})
  } catch (error) {
    ctx.throw(400, error)
  }
}

// token问题
const cancel_like_article = async (ctx) => {
  const {article_id} = ctx.params
  try {
    await article_model.article_delete_like([article_id, user_id])
  } catch (error) {
    
  }
}

const collection_article = async (ctx) => {
  const {article_id} = ctx.params
  try {
    await article_model.article_insert_connection([article_id, user_id])
  } catch (error) {
    ctx.throw(400, error)
  }
}

const cancel_collection_article = async (ctx) => {
  const {article_id} = ctx.params
  try {
    await article_model.article_delete_connection([article_id, user_id])
  } catch (error) {
    ctx.throw(400, error)
  }
}



module.exports = {
  get_articles_limit,
  get_articles_rand,
  get_articles_top10,
  get_article,
  like_article,
  cancel_like_article,
  like_article,
  cancel_collection_article
}