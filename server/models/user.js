const mongoose = require('mongoose');

var User = mongoose.model('User',{
    user_id: {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    address: {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    pincode: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: '',
        trim: true
    }
});
module.exports = {User};