const express = require('express');
const router = express.Router();
let User = require('../models/user.model');

router.get('/', (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
const newUser = new User({
    username: req.body.username,
    loanrequest: Number(req.body.loanrequest),
    address: req.body.address
});

newUser.save()
.then(data => {
    res.json(data);
})
.catch(err => {
res.status(400).json('Error: ' + err);
});
});

module.exports = router;