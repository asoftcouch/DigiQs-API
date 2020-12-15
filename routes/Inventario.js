const router = require('express').Router();
let Inventory = require('../models/Inventory');
const { createNotification } = require('../Methods/SendNotification');
router.route('/').get((req,res) => {
    Inventory.find().sort({_id: -1})
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
    const price = req.body.price;
    const category = req.body.category;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    const added = mm + '/' + dd + '/' + yyyy;




    if(name && quantity && price && category)  {

        const newInventory = new Inventory({
            name, 
            quantity,
            price,
            category,
            added
        });

        createNotification('Nuevo Inventario', 'Se ha agregado: '+name);
        newInventory.save()
            .then(() => res.json('Inventario nuevo ha sido creado'+added))
            .catch(err => res.status(400).json('Error: '+ err));
    } 
    else {
        res.json('Error al guardar');
    }
});



module.exports = router; 