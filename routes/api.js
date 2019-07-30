let express = require('express');
let router = express.Router();

let apiPostsRouter = require('./api/posts')

router.use('/posts', apiPostsRouter)

module.exports = router;