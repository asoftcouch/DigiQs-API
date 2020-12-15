const express = require('express');
const cors = require('cors');
const { json } = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const InventoryRouter = require('./routes/Inventario');
const ordersRouter = require('./routes/Orders');
const clientsRouter = require('./routes/Clients');
const dataRouter = require('./routes/Data');
require('dotenv').config();

const app = express();
const port = '5000';

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());
app.use('/Inventario/', InventoryRouter);
app.use('/Orders/', ordersRouter);
app.use('/Clients/', clientsRouter);
app.use('/Data/', dataRouter);

try{ 

    mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
        app.listen(port)
        console.log('Connection to Database was successful and is listening at port: '+port)
      }
      );
  }
  catch (error) {
    console.log(error);
  }

