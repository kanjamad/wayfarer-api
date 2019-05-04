const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
db.Post.find({}).exec((err, allPosts) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});

res.json({status: 200, message: 'Success', data: allPosts});
})
});

router.get('/:id', (req, res) => {
db.Post.findById(req.params.id, (err, foundPost) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});

res.json({status: 200, message: 'Success', data: foundPost});
});
});

router.post('/', (req, res) => {
db.Post.create(req.body, (err, newPost) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
res.json({status: 200, message: 'Success', data: newPost});
});
});

router.put("/:id", (req, res) => {
db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
res.json({status: 200, message: 'Success', data: updatedPost});
});
});

router.delete('/:id', (req, res) => {
db.Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
if (err) return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
res.json({status: 200, message: 'Success', data: deletedPost});
});
});



module.exports = router;