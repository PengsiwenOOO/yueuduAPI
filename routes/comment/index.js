const router = require('koa-router')()
const comment_controllers = require('../../controllers/comment_controllers')

router
  .get('/comments/:article_id/page/:page', comment_controllers.get_comments_limit)
  .post('/comment', comment_controllers.add_comment)
  .delete('/comment/:id', comment_controllers.remove_comment)
module.exports = router