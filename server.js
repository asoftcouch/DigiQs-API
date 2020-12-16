const express = require('express');
const cors = require('cors');
const { json } = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const InventoryRouter = require('./routes/Inventario');
const ordersRouter = require('./routes/Orders');
const clientsRouter = require('./routes/Clients');
const dataRouter = require('./routes/Data');
const notificationsRouter = require('./routes/Notifications');
const categoriesRouter = require('./routes/Categories');
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
app.use('/Notifications/', notificationsRouter);
app.use('/Categories/', categoriesRouter);

const connectionString = 'mongodb+srv://DigiqsAdmin:CkGKM6TvBHP9GJV3@cluster0.b9g8e.mongodb.net/Digiqsdb?retryWrites=true&w=majority'; //Aqui poner el link con clave y direccion

try{ 

    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
        app.listen(port)
        console.log('Conexion a la base de datos ha sido exitosa, server escuchando en el puerto:: '+port)
      }
      );
  }
  catch (error) {
    console.log(error);
  }

