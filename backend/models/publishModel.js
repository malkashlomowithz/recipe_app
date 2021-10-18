const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const PublishSchema = new Schema({
    _id: {
        type: String,
        required: false,
        unique : false
    },
    title: {
        type: String,
        required: true,
        unique : false
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    preparations: {
        type: String,
        required: true
    },
    servings: {
        type: Number,
        required: false
    },
    preparation_time:{
        type: String,
        required: false
    },
    file:{    
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
        required: true
    },
    top_10 : {    
        type: Boolean,
        required: false
    },
});

module.exports = mongoose.model('PublishedRecipe', PublishSchema);
