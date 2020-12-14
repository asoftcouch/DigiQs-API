const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ClientsSchema = new Schema({
    CompanyName: {
        type: String
    },
    Rtn: {
        type: String
    },
    added: {
        type: Date
    }
});


const Clients = mongoose.model('Clients', ClientsSchema);
module.exports = Clients; 