const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "Name must be at least 3 characters long."],
        required:true,
    }
})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;

