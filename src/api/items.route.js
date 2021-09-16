

const express = require('express');
const itemsRoutes = express.Router();

// Require Business model in our routes module
let Items = require('./items.model');

// Defined store route
itemsRoutes.route('/add').post(function (req, res) {
  let items = new Items(req.body);
  items.save()
    .then(items => {
      res.status(200).json({'items': 'items in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
itemsRoutes.route('/').get(function (req, res) {
    Items.find(function(err, itemses){
    if(err){
      console.log(err);
    }
    else {
      res.json(itemses);
    }
    return null;
  });
});

// Defined edit route
itemsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Items.findById(id, function (err, items){
      res.json(items);
  });
});

//  Defined update route
itemsRoutes.route('/update/:id').post(function (req, res) {
    Items.findById(req.params.id, function(err, users) {
    if (!Items)
      res.status(404).send("data is not found");
    else {
        Items.itemssid = req.body.itemssid;
        Items.itemsname = req.body.itemsname;
        

        Items.save().then(items => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemsRoutes.route('/delete/:id').get(function (req, res) {
    Items.findByIdAndRemove({_id: req.params.id}, function(err, users){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = itemsRoutes;