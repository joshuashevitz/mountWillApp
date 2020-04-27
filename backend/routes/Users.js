const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
const username = req.body.username;
const loanrequest = Number(req.body.loanrequest);
const address = req.body.Address;

const newUser = new Users({
    username,
    loanrequest,
    address
});

newUser.save()
.then(()=> res.json('User added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;