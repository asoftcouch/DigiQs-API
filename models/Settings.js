const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const categoriesSchema = mongoose.Schema ({
    
    name: {
        type: String
    }
})


const SettingsSchema = new Schema({
    provider: {
        type: String
    },

    Email: {
        type: String
    },

    Categories: [categoriesSchema],

    API_KEY: {
        type: String
    },

    last_updated:{
        type: Date
    }
});


const Settings = mongoose.model('Settings', SettingsSchema);
module.exports = Settings; 