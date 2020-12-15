const router = require('express').Router();
let Inventory = require('../models/Inventory');
let Clients = require('../models/Clients');
let Orders = require('../models/Orders');
const { ensureIndexes } = require('../models/Clients');



router.route('/orders').get( async (req,res) =>  {
    // const filter = req.query.filter || "";  
    //orders pueden estar => pending, approved, declined. 

    const document = await Orders.countDocuments({status: 'Pending'}) 
    res.json(document)
    // Orders.countDocuments({status: filter})
    //     .then(Orders => res.json(Orders))
    //     .catch(err => res.status(400).json('Error'+err))
})


module.exports = router; 