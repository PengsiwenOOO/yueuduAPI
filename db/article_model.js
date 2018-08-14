const query = require('./index')

class ArticleModel {
  constructor () {}

  static articles_select_limit_by_typeid (values) {
    const _sql = `SELECT id, title, play_time, author, podcast, duration, img_url, content FROM t_articles WHERE type_id = ? ORDER BY id DESC LIMIT ?`
    return query(_sql, values)
  }

  static articles_select_top10 (values) {
    const _sql = `SELECT id, title, author, podcast FROM t_articles WHERE type_id = ? ORDER BY play_time DESC LIMIT 0, 10`
    return query(_sql, values)
  }

  static articles_select_rand () {
    const _sql = `SELECT id, title, img_url FROM t_articles ORDER BY RAND() LIMIT 20`
    return query(_sql)
  }

  static articles_select_like_by_title () {
    const _sql = `SELECT id, title, author, podcast, duration, play_time FROM t_articles WHERE title LIKE '%?%'`
    return query(_sql, values)
  }

  static articles_select_count () {
    const _sql = `SELECT count(id) FROM t_articles`
    return query(_sql, values)
  }

  static article_select_by_id (values) {
    const _sql = `SELECT id, title, author, podcast, img_url, mp3_url, play_time, content, labels, duration, (SELECT count(id) FROM t_like WHERE t_like.article_id = t_articles.id) as like_count, (SELECT count(id) FROM t_collections WHERE t_collections.article_id = t_articles.id) as collection_count FROM t_articles WHERE id = ?`
    return query(_sql, values)
  }

  static article_update_by_id (values) {
    const _sql = `UPDATE t_articles SET ? WHERE id = ?`
    return query(_sql, values)
  }

  static article_insert_like (values) {
    const _sql = `INSERT INTO t_like SET ?`
    return query(_sql, values)
  }

  static article_delete_like (values) {
    const _sql = `DELETE FROM t_like WHERE article_id = ? AND user_id = ?`
    return query(_sql, values)
  }

  static article_insert_connection (values) {
    const _sql = `INSERT INTO t_collections WHERE article_id = ? AND user_id = ?`
    return query(_sql, values)
  }
  
  static article_delete_connection (values) {
    const _sql = `DELETE FROM t_like WHERE articlet_id = ? AND user_id = ?`
    return query(_sql, values)
  }
}

module.exports = ArticleModel