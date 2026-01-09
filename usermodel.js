const mongoose = require('mongoose');

monogoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = monogoose.Schema({
    name: String,
    username: String
    email: String
})

module.exports = mongoose.model("user", userSchema);

