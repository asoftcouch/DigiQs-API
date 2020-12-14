const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const InventorySchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: String
    },
    price: {
        type: String
    },
    category: {
        type: String
    }
});


const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory; 