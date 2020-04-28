const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();



const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
const usersRouter = require('./routes/users.js');
const informationRouter = require('./routes/information.js');

app.use('/users', usersRouter);
app.use('/information', informationRouter);

app.get('/', (req, res)=> {
    res.send('foobar');
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});