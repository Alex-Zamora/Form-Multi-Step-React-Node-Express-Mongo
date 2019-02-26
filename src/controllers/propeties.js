const express = require('express');
const router = express.Router();
const Propety = require('../models/propety');

router.get('/', (req, res) => {
  Propety.find(function (err, propety) {
    if (err) return next(err);
    res.json(propety);
  });
});


router.post('/', (req, res) => {
  const propety = new Propety(req.body);
  propety.save()
    .then(() => {
        res.status(200).json({propety: 'propety saved'});
    })
    .catch(err => {
        res.status(400).send({
          propety: 'Error at save the propety',
          message: err.message
        });
    });
});

router.get('/:id', (req, res, next) => {
  Propety.findById(req.params.id, function (err, propety) {
    if (err) return next(err);
    res.json(propety)
  });
});

router.put('/:id', (req, res, next) => {
  Propety.findById(req.params.id, function (err, propety) {
    if (!propety) {
      return next(new Error('data is not found'));
    } else {
      console.log(req.body);
      propety.adress.state = req.body.adress.state
      propety.adress.city = req.body.adress.city
      propety.adress.colony = req.body.adress.colony
      propety.adress.number = req.body.adress.number
      propety.owner.name = req.body.owner.name
      propety.owner.lastName = req.body.owner.lastName
      propety.owner.age = req.body.owner.age
      propety.owner.phone = req.body.owner.phone
      propety.owner.email = req.body.owner.email
      propety.salePrice = req.body.salePrice
      propety.save()
      .then(() => {
          res.json('Propety update');
      })
      .catch(err => {
        res.status(400).send({
          propety: 'Error at update the propety',
          message: err.message
        });
      });
    };
  });
});

module.exports = router;