const router = require('express').Router();
let Orders = require('../models/Orders');

router.route('/').get((req,res) => {
    Orders.find().sort({_id: -1})
        .then(Orders => res.json(Orders))
        .catch(err => res.status(400).json('Error' + err));
})


router.route('/:id').get((req,res) => {
    Orders.findById(req.params.id)
        .then(Inventory => res.json(Inventory))
        .catch(err => res.status(400).json('Error' + err));
})

router.route('/add').post((req,res) =>  {

    const status = 'Pending';
    const total = req.body.total; 

        const newOrder = new Orders({
            status: status,
            total: total,
            random: 'Diciembre',
            Details: []
            
        });

        if(!req.body.details == ''){

            req.body.details.forEach(element => {
                newOrder.Details.push({
                    product: element.product,
                    price: element.price,
                    quantity: element.quantity,
                    category: element.category
                })

            });
        }

        newOrder.save()
            .then(() => res.json('Una nueva orden ha sido creada'))
            .catch(err => res.status(400).json('Error: '+ err));
    } 

);



module.exports = router; 