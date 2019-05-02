const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});

    res.json({status: 200, message: 'Success', data: allUsers});
  })
});

router.get('/:id', (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});

    res.json({status: 200, message: 'Success', data: foundUser});
  });
});

module.exports = router;
