// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute = require('./business.route');
const usersRoute = require('./users.route');
const ordersRoute = require('./orders.route');
const itemsRoute = require('./items.route');
const orderitemsRoute = require('./orderitems.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', businessRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/items', itemsRoute);
app.use('/orderitems', orderitemsRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});