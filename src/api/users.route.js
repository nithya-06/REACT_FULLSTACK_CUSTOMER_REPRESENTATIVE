const express = require('express');
const usersRoutes = express.Router();

let Users = require('./users.model');

// Defined store route
usersRoutes.route('/add').post(function (req, res) {
  let users = new Users(req.body);
  users.save()
    .then(users => {
      res.status(200).json({'users': 'users in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
usersRoutes.route('/').get(function (req, res) {
    Users.find(function(err, useres){
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
usersRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Users.findById(id, function (err, users){
      res.json(users);
  });
});

//  Defined update route
usersRoutes.route('/update/:id').post(function (req, res) {
    Users.findById(req.params.id, function(err, users) {
    if (!users)
      res.status(404).send("data is not found");
    else {
        users.usersid = req.body.usersid;
        users.usersname = req.body.usersname;
        

        users.save().then(users => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
usersRoutes.route('/delete/:id').get(function (req, res) {
    Users.findByIdAndRemove({_id: req.params.id}, function(err, users){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = usersRoutes;