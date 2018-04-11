const mongoose = require('mongoose');

var Category = mongoose.model('Category', {
    category_id : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    name : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    description : {
        type: String,
        trim: true
    },
    photo : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    }
});

module.exports = {Category};