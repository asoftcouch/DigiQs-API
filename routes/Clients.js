const router = require('express').Router();
let Client = require('../models/Clients');


router.route('/').get((req,res) => {
    Client.find().sort({_id: -1})
        .then(Clients => res.json(Clients))
        .catch(err => res.status(400).json('Error' + err));
})

router.route('/:id').get((req,res) => {
    Client.findById(req.params.id)
        .then(Clients => res.json(Clients))
        .catch(err => res.status(400).json('Error' + err));
})

router.route('/add').post((req, res) => {
    const companyName = req.body.companyName; 
    const RTN = req.body.rtn; 

    console.log(companyName, RTN)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const added = mm + '/' + dd + '/' + yyyy;

    const newClient = new Client({
        CompanyName: companyName, 
        Rtn: RTN,
        added
    })

    try{
        newClient.save()
            .then(() => res.json('Nuevo cliento agregado'))
            .catch(err => res.status(400).json('Error'+ err));
    } catch(err) {
        res.json('Error al guardar: '+err);
    }


})


module.exports = router;