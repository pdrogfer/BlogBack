let express = require('express');
let router = express.Router();

let Post = require('../../models/post')

// GET all posts: 
router.get('/', (req, res) => {
    Post.find((err, postsResult) => {
        if (err) return res.json({ error: err })
        console.log(postsResult);
        res.json(postsResult)
    })
})

// GET post by id:
router.get('/:postId', (req, res) => {
    Post.findById(req.params.postId, (err, resultPost) => {
        if (err) return res.json({ err })
        res.json(resultPost)
    })
})

// POST create new post:
router.post('/new', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        console.log("Request OK");

        if (err) return res.json(err)
        res.json(createdPost)
    })
})

// PUT edit post by id
router.put('/edit', (req, res) => {
    // object 'new' needed, if not, mongoose returns old document before edit
    Post.findByIdAndUpdate(req.body.postId, req.body, { new: true }, (err, postEdited) => {
        if (err) return res.json({ err })
        res.json(postEdited)
    })
})

// DELETE post by id
router.delete('/delete', (req, res) => {
    // postID to be deleted must be sent inside body
    Post.findByIdAndDelete(req.body.postId, (err, postDeleted) => {
        if (err) return res.json({ err })
        res.json(postDeleted)
    })
})



module.exports = router;