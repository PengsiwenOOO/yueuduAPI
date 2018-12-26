const router = require('koa-router')()
const article_controllers = require('../../controllers/article_controllers')
const jwt_auth = require('../../middleware/jwt_auth')
router
  .get('/articles/:type_id/page/:page', article_controllers.get_articles_limit)
  .get('/article/:id', article_controllers.get_article)
  .get('/articles/:type_id/top10', article_controllers.get_articles_top10)
  .get('/articles/rand', article_controllers.get_articles_rand)
  .get('/articles/:type_id/rand', article_controllers.get_articles_typeid_rand)
  .post('/article/:id/like', jwt_auth, article_controllers.like_article)
  .delete('/article/:id/like', article_controllers.cancel_like_article)

module.exports = router
