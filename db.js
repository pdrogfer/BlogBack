let mongoose = require('mongoose');

let mongoDBUrl = 'mongodb://127.0.0.1/dbBlog'

mongoose.connect(mongoDBUrl, { useNewUrlParser: true })

// capture error events
let connection = mongoose.connection

connection.on('error', (error) => {
    console.log(error);

})