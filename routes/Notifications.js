const router = require('express').Router();
let Notification = require('../models/Notifications');


router.route('/').get((req,res) => {
    Notification.find().sort({_id: -1})
        .then(Notifications => res.json(Notifications))
        .catch(err => res.status(400).json('Error' + err));
})


router.route('/new').get((req,res) => {
   
    //description, type, added
    const description = req.body.description;
    const type = req.body.type; 

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

    newNotification.save()
        .then((response) => res.json(response))
        .catch((err) => res.json(error))
})



module.exports = router;