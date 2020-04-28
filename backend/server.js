const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
const usersRouter = require('./routes/users');
const informationRouter = require('./routes/information');

app.use('/users', usersRouter);
app.use('/information', informationRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});