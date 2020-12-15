const router = require('express').Router();
let Settings = require('../models/Settings');


router.route('/').get((req,res) => {

    Settings.find()
        .then(Settings => res.json(Settings))
        .catch(err => res.status(400).json('Error' + err));
})


router.route('/addcategory').post((req,res) =>  {

    const key = '5fd8240173b8fd49b066ac10'

    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');

    var mm = String(today.getMonth() + 1).padStart(2, '0'); //Enero is 0

    var yyyy = today.getFullYear();

    const lastUpdated = mm + '/' + dd + '/' + yyyy;

    const categoryName = req.body.category;

    try {
    Settings.findByIdAndUpdate({_id: key}, { $push: {category: categoryName} }, {useFindAndModify: false})
    res.json('Se ha actualizado categorias, '+categoryName);
    } 
    catch(err) {
        res.json('Error: '+err);
    }


});


module.exports = router;


