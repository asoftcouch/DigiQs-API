const express = require('express');
const cors = require('cors');
const { json } = require('express');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = '5000';

app.use(cors());

app.use(express.json());

app.listen(port, () => {
    console.log('Server is running on port: '+port);
})

