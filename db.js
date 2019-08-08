let mongoose = require('mongoose');

let mongoDBLocalUrl = 'mongodb://127.0.0.1/dbBlog'

mongoose.connect(process.env.MONGODB_URI || mongoDBLocalUrl, { useNewUrlParser: true })

// capture error events
let connection = mongoose.connection

connection.on('error', (error) => {
    console.log(error);

})