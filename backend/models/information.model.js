const mongoose = require('mongoose');
const Schema = mongoose.Schema

const InformationSchema = new Schema({
    Job: { 
         type: String,
         required: true, 
         trim: true, 
         minlength: 3
        },
    CreditScore: {
        type: Number, 
        required: true, trim: true
    },
    PropertyAddress: {
        type: String, 
        required: true, trim: true 
    },
    PreExp: {
        type: String, 
        required: true
    },
    Certified: {type: Boolean, 
        required: true}
}, 
{
        timestamps: true,   
});

const Information = mongoose.model('Information', InformationSchema);

module.exports = Information;