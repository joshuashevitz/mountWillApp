const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3},
    loanrequest: {type: Number, required: true, trim: true},
    address: {type: String, required: true, trim: true },

}, {
        timestamps: true,
    
});

const User = mongoose.model('User', applicantSchema);

module.export = User;