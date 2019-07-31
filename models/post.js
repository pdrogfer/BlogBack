let mongoose = require('mongoose')
let Schema = mongoose.Schema

let postSchema = new Schema({
    title: String,
    content: String,
})

module.exports = mongoose.model('Post', postSchema)