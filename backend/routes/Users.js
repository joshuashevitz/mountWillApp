const router = require('express').Router();
let User = require('../models/user.model');
const nodemailer = require('nodemailer');

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
        email: req.body.email,
        creditscore: req.body.creditscore,
        Date: Date.parse(req.body.Date)
    }
  
    const newUser = new User(userData);

        newUser.save()
        .then(() => res.json('Application Added!'))
        .catch(err => res.status(400).json('Error: ' + err));

        // async..await is not allowed in global scope, must use a wrapper
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'mountwilsoncapital@gmail.com',
              pass: 'Jshevitz92'
            }
          });

          const mailOptions = {
            from: 'mountwilsoncapital@gmail.com',
            to: userData.email,
            subject: 'mail confirmation',
            text: `Thank you for Applying to Mount WIlson Capital Hard Money Lender,
            
            We have recieved your application. It is being processed and then will be reviewed.
            we will send an Email to request further information if necessary or to schedule a future meeting 
            to discuss the next steps of the loan. 
            
            Best regard,
            The Team at Mount Wilson Capital.`
          };
          transporter.sendMail(mailOptions, function(error, info){
            if(error) {
              console.log(error);
            } else {
              console.log('email send: ' + info.response);
            }
          });
          

    });
    
    router.get('/:id', (req, res) => {
        User.findById(req.params.id)
          .then(user => res.json(user))
          .catch(err => res.status(400).json('Error: ' + err));
      });
      router.delete('/:id',(req, res) => {
        User.findByIdAndDelete(req.params.id)
          .then(() => res.json('Applicant deleted.'))
          .catch(err => res.status(400).json('Error: ' + err));
      });

module.exports = router;