const express = require('express');
const router = express.Router();
let User = require('../models/user');

router.get('/', (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
const newUser = new User({
    username: req.body.username
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