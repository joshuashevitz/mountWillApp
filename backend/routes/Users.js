const router = require('express').Router();
let User = require('../models/applicants.model');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
const username = req.body.username;
const loanrequest = Number(req.body.loanrequest);
const address = req.body.Address;

const newUser = new User({
    username,
    loanrequest,
    address
});

newUser.Save()
.then(()=> res.json('User added!'))
.catch(err=> res.status(400).json('Error: ') + error);
});

module.exports = router;