const router = require('express').Router();
let Notification = require('../models/Notifications');


router.route('/').get((req,res) => {
    Notification.find()
        .then(Notifications => res.json(Notifications))
        .catch(err => res.status(400).json('Error' + err));
})



module.exports = router;