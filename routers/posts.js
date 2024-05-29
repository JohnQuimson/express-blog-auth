const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/posts.js');
const postSlugExists = require('../middlewares/postSlugExists.js');
const { authenticateWithJWT } = require('../middlewares/jwt.js');

const multer = require('multer');
const uploader = multer({ dest: 'public/imgs/posts' });

router.get('/', postsControllers.index);
router.get('/create', postsControllers.create);
// router.post('/', postsControllers.store);

router.use(authenticateWithJWT);

router.post('/', uploader.single('image'), postsControllers.store);
router.get('/:slug', postsControllers.show);
router.get('/:slug/download', postsControllers.download);
router.delete('/:slug', postSlugExists, postsControllers.destroy);

module.exports = router;
