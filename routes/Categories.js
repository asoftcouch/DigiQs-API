const router = require('express').Router();
const { json } = require('body-parser');
let Category = require('../models/Categories');
const { createNotification } = require('../Methods/SendNotification');

router.route('/').get((req,res) => {

    Category.find().sort({_id: -1})
        .then(Categories => res.json(Categories))
        .catch(err => res.status(400).json('Error' + err));
})


router.route('/add').post((req,res) =>  {


    const value = req.body.category; 
    const description = req.body.description; 

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    const added = mm + '/' + dd + '/' + yyyy;




    if(value){
        const newCategory = new Category({
            value: value,
            last_updated: added,
            description: description
        })

            createNotification('Nueva Categoria', 'Se ha agregado: '+value);

            newCategory.save()
                .then((response)=> res.json(response))
                .catch((err) => res.json(error))
    }



});


module.exports = router;


