const router = require('express').Router();
let User = require('../models/user.model');

router.get('/', (req,res) => {
    User.find(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {

    const userData = {
        username: req.body.username,
        loanrequest: Number(req.body.loanrequest),
        address: req.body.address,
        email: req.body.address
    }
    const newUser = new User(userData);

        newUser.save()
        .then(() => res.json('Application Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;