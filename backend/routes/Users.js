const express = require('express');
const router = express.Router();
let User = require('../models/user.model');

router.get('/', (req,res) => {
    User.find(req.params.id)
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
router.get('/:id', (req,res) => {
User.findById(req.params.id)
.then(users => res.json(users))
.catch(err => res.status(400).json('Error: ' + err));
});
router.delete('/:id', (req,res) => {
User.findByIdAndDelete(req.params.id)
.then(() => res.json('Applicant Deleted.'))
.catch(err => res.status(400).json('error: ' + err));
});
router.post('/update:id', (req, res) => {
User.findById(req.params.id)
.then(User => {
    User.username = req.body.username;
    User.loanrequest = Number(req.body.loanrequest);
    address = req.params.address;

    User.save()
    .then(data => {
        res.json(data);
    })
    
    .catch(err => {
        res.status(400).json('Error: ' + err);
});
});
});
 
module.exports = router;