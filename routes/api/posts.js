let express = require('express');
let router = express.Router();

let Post = require('../../models/post')

// GET all posts: 
router.get('/', (req, res) => {
    Post.find((err, postsResult) => {
        if (err) return res.json({ error: err })
        res.json(postsResult)
    })
})

// POST create new post:
router.post('new', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        if (err) return res.json(err)
        res.json(createdPost)
    })
})

module.exports = router;