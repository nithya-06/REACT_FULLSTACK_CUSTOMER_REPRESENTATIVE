const express = require('express');
const order_itemRoutes = express.Router();


let Order_Items = require('./order_item.model');

// Defined store route
order_itemRoutes.route('/add').post(function (req, res) {
  let order_item = new Order_Items(req.body);
  order_item.save()
    .then(order_item => {
      res.status(200).json({'order_item': 'order_item in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
order_itemRoutes.route('/').get(function (req, res) {
    Order_Items.find(function(err, useres){
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
order_itemRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Order_Items.findById(id, function (err, order_item){
      res.json(order_item);
  });
});

//  Defined update route
order_itemRoutes.route('/update/:id').post(function (req, res) {
    Order_Items.findById(req.params.id, function(err, order_item) {
    if (!order_item)
      res.status(404).send("data is not found");
    else {
        order_item.order_id = req.body.order_id;
        order_item.item_id = req.body.item_id;
        

        order_item.save().then(order_item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
order_itemRoutes.route('/delete/:id').get(function (req, res) {
    Order_Items.findByIdAndRemove({_id: req.params.id}, function(err, order_item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = order_itemRoutes;