let Notification = require('../models/Notifications');

const createNotification = ( type, description ) => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    const added = mm + '/' + dd + '/' + yyyy;

    const newNotification = new Notification({
        type: type,
        description: description,
        added: added
    })

    try{
        newNotification.save();
    } catch (err) {
        console.log(err);
    }

}


module.exports.createNotification = createNotification;
