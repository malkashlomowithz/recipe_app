const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const MessageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    messages: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }    
});



// Export Recipe Model
module.exports = mongoose.model('Message', MessageSchema);