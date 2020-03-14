// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for registering a user. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/register", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.phone,
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
        console.log(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/deliveries", function(req, res) {
    db.Delivery.findAll({
      include : [{
        model: db.User,
        as: "user",
        attributes:["id", "name"]
      }]
    }).then(function(dbDeliveries) {
      res.json(dbDeliveries);
    });
  });

  app.post("/api/delivery", function(req, res) {
    let delivery = {
      date: req.body.date,
      time: req.body.time,
      address: req.body.address,
      zipCode: req.body.zipCode,
      city: req.body.city,
      state: req.body.state,
      phone: req.body.phone,
      quantity: parseInt(req.body.quantity),
      total: parseInt(req.body.total),
      userId: parseInt(req.body.userId),
    };
    db.Delivery.create(delivery)
      .then(function(delivery) {
        res.status(200).json({id: delivery.id});
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });

  app.get("/api/deliveries/:userId", function(req, res) {
    db.Delivery.findAll( {
      where: { "userId": parseInt(req.params.userId) }}
    ).then(function(userDeliveries) {
      res.json(userDeliveries);
    });
  });

  app.delete("/api/deliveries/:id", function(req, res) {
    db.Delivery.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(delivery) {
      res.json(delivery);
    });
  });

  app.put("/api/delivery", function(req, res) {
    db.Delivery.update({
      date: req.body.date,
      time: req.body.time,
      address: req.body.address,
      zipCode: req.body.zipCode,
      city: req.body.city,
      state: req.body.state,
      phone: req.body.phone,
      quantity: req.body.quantity,
      total: req.body.total
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(delivery) {
      res.json(delivery);
    });
  });

  app.post("/api/times", function(req, res) {
    db.Delivery.findAll({
      attributes:["time"],
      where:{
        date: req.body.date
      }
    }).then(function(times) {
      res.json(times);
    });
  });
};
