const mongoose = require('mongoose');

var Order = mongoose.model('Order', {
    order_id : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    user_id : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    inventory_id : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    quantity : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    date : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    status : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    }
})