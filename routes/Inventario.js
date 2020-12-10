const router = require('express').Router();
let Inventory = require('../models/Inventory');

router.route('/').get((req,res) => {
    Inventory.find()
        .then(Inventorys => res.json(Inventorys))
        .catch(err => res.status(400).json('Error' + err));
})


router.route('/:id').get((req,res) => {
    Inventory.findById(req.params.id)
        .then(Inventory => res.json(Inventory))
        .catch(err => res.status(400).json('Error' + err));
})

router.route('/add').post((req,res) =>  {

    const name = req.body.name; 
    const quantity = req.body.quantity;

    const newInventory = new Inventory({
        name, 
        quantity
    });

    newInventory.save()
        .then(() => res.json('Inventario nuevo'))
        .catch(err => res.status(400).json('Error: '+ err));
});



module.exports = router; 