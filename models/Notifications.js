const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const NotificationSchema = new Schema({
    description: {
        type: String
    },
    type: {
        type: String
    },
    added: {
        type: Date
    }
});


const Notifications = mongoose.model('Notifications', NotificationSchema);
module.exports = Notifications; 