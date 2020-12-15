const router = require('express').Router();
let Inventory = require('../models/Inventory');
let Clients = require('../models/Clients');
let Orders = require('../models/Orders');
const { ensureIndexes } = require('../models/Clients');



router.route('/orders').get( async (req,res) =>  {
    // const filter = req.query.filter || "";  
    //orders pueden estar => pending, approved, declined. 

    try{ 
    const pending = await Orders.countDocuments({status: 'pending'})
    const approved = await Orders.countDocuments({status: 'approved'})
    const declined = await Orders.countDocuments({status: 'declined'})
    res.json( { pending: pending, approved: approved, declined: declined } );
    } catch (err) {
        res.json(err);
    }
    // Orders.countDocuments({status: filter})
    //     .then(Orders => res.json(Orders))
    //     .catch(err => res.status(400).json('Error'+err))
})


module.exports = router; 