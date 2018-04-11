const mongoose = require('mongoose');

var Invertory = mongoose.model('Inventory',{
    inventory_id : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    product_id : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    vendor_id : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    },
    price : {
        type: Number,
        required: true,
    },
    quantity : {
        type: Number,
        required: true,
    },
    description : {
        type: String,
        required: true,
        minlength: '',
        trim: true
    }
});