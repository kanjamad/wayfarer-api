const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
db.City.find({}, (err, allCities) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});

res.json({status: 200, message: 'Success', data: allCities});
})
});

router.get('/:id', (req, res) => {
db.City.findById(req.params.id, (err, foundCity) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});

res.json({status: 200, message: 'Success', data: foundCity});
});
});

router.post('/', (req, res) => {
db.City.create(req.body, (err, newCity) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
res.json({status: 200, message: 'Success', data: newCity});
});
});

router.put("/:id", (req, res) => {
db.City.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCity) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
res.json({status: 200, message: 'Success', data: updatedCity});
});
});

router.delete('/:id', (req, res) => {
db.City.findByIdAndRemove(req.params.id, (err, deletedCity) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
res.json({status: 200, message: 'Success', data: deletedCity});
});
});



module.exports = router;