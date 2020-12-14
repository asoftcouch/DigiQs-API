const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const orderDetailSchema = mongoose.Schema ({
    
    product: {
        type: String
    },

    price: {
        type: String
    },

    quantity: {
        type: String
    },

    category: {
        type: String
    }
})

const OrdersSchema = new Schema({
    status: {
        type: String
    },

    random: {
        type: String
    },

    Details: [orderDetailSchema],

    total: {
        type: String
    }
});


const Inventory = mongoose.model('Orders', OrdersSchema);
module.exports = Inventory; 