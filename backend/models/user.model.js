const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3},
    loanrequest: {type: Number, required: true, trim: true},
    address: {type: String, required: true, trim: true },
    email: {type: String, required: true, trim: true},
    creditscore: {type: Number, required:true}
});

let users = mongoose.model('User', userSchema);

module.exports = users;