const express = require('express');
const ordersRoutes = express.Router();

// Require Orders model in our routes module
let Orders = require('./orders.model');

// Defined store route
ordersRoutes.route('/add').post(function (req, res) {
  let orders = new Orders(req.body);
  orders.save()
    .then(orders => {
      res.status(200).json({'orders': 'orders in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
ordersRoutes.route('/').get(function (req, res) {
    Orders.find(function(err, useres){
    if(err){
      console.log(err);
    }
    else {
      res.json(useres);
    }
    return null;
  });
});

// Defined edit route
ordersRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Orders.findById(id, function (err, orders){
      res.json(orders);
  });
});

//  Defined update route
ordersRoutes.route('/update/:id').post(function (req, res) {
    Orders.findById(req.params.id, function(err, orders) {
    if (!orders)
      res.status(404).send("data is not found");
    else {
        orders.orders_id = req.body.orders_id;
        orders.user_id = req.body.user_id;
        

        orders.save().then(orders => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
ordersRoutes.route('/delete/:id').get(function (req, res) {
    Orders.findByIdAndRemove({_id: req.params.id}, function(err, orders){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ordersRoutes;