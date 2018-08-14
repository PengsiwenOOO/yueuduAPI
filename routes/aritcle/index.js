const router = require('koa-router')()
const article_controllers = require('../../controllers/article_controllers')
router
  .get('/articles/:type_id/page/:page', article_controllers.get_articles_limit)
  .get('/article/:id', article_controllers.get_article)
  .get('/articles/:type_id/top10', article_controllers.get_articles_top10)
  .get('/articles/rand', article_controllers.get_articles_rand)
  .post('/article/:id/like', article_controllers.like_article)
  .delete('/article/:id/like', article_controllers.cancel_like_article)
  // .post('/article/:id/collection', )

module.exports = router
