const router = require('express').Router();
let User = require('../models/user.model');

router.get('/', (req,res) => {
    User.find(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {

    const username= req.body.username;
    const loanrequest= Number(req.body.loanrequest);
    const address= req.body.address;
    const email = req.body.address;
    const newUser = new User ({
        username,
        loanrequest,
        address,
        email
     });

        newUser.save()
        .then(() => res.json('Application Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;