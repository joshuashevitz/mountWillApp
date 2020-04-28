const express = require('express');
const router = express.Router();
const Information = require('../models/information.model');

router.get('/', (req, res) => {
    res.send('our backend is doing something');
});

router.post('/add', (req,res) => {

});

router.delete('/delete/:id', (req,res)=>{

});
module.exports = router;
