const router = require('express').Router();
let Information = require('../models/Information.model');

router.route('/').get((req, res) => {
Information.find()
.then(Information => res.json(Information))
.catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req,res) => {
const job = req.body.Job;
const creditScore = Number(req.body.CreditScore);
const propertyAddress = req.body.PropertyAddress;
const preExp = req.body.PreExp;
const certified = req.body.Certified;

const newInfo = new Information({
    job,
    creditScore,
    propertyAddress,
    preExp,
    certified,
})
newInfo.save()
.then(() => res.json('Information Added!'))
.catch(err => res.status(400).json('Error' + err));
});