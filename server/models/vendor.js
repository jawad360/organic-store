const mongoose = require('mongoose');

var Vendor = mongoose.model('', {
    vendor_id: {
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
    },
    rating: {
        type: Number,
        default: 0
    }
})

module.exports = {Vendor};