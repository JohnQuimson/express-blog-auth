const posts = require('../db/posts.json');

module.exports = (req, res, next) => {
  const { slug } = req.params;
  const sluggedPost = posts.find((p) => p.slug === slug);
  if (!sluggedPost) {
    return res.status(404).send(`Post con slug: ${slug} non trovato`);
  }
  next();
};
