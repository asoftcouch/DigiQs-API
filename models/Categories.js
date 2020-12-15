const mongoose = require('mongoose');


const Schema = mongoose.Schema;



const CategoriesSchema = new Schema({

    value: {
        type: String
    },

    last_updated:{
        type: Date
    },

    description: {
        type: String
    }

    
});


const Settings = mongoose.model('Categories', CategoriesSchema);
module.exports = Settings; 