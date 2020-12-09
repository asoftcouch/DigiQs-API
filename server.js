const express = require('express');
const cors = require('cors');
const { json } = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = '5000';

const uri = process.env.CONNECTION_STRING;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} ); 


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection was successful');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

const InventarioRouter = require('./routes/Inventario');

app.use('/Inventario/', InventarioRouter);

app.listen(port, () => {
    console.log('Server is running on port: '+port);
})

