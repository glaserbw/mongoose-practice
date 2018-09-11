// Require needed modules
const express = require('express');
const mongoose = require('mongoose');

// Declare router
const router = express.Router();

// Get reference to models
const db = require('../models'); 

router.get('/', (req, res) => {
	db.Museum.find()
	.then(museums => {
		res.render('museums/index', { museums: museums });
	})
	.catch(err => {
		console.log('error message', err);
		res.render('error');
	});
});


//use interpolation to get unique ID
router.post('/', (req, res) => {
	db.Museum.create(req.body)
	.then(result => {
		console.log(result);
		res.redirect(`/museums/${result.id}`);
	})
	.catch(err => {
		console.log('error message', err);
		res.render('error');
	});
});

router.get('/new', (req, res) => {
	res.render('museums/new');
});

router.get('/:id', (req, res) => {
	db.Museum.findById(req.params.id)
	.then(museum => {
		res.render('museums/show', { museum: museum });
	})
	.catch(err => {
		console.log('error message', err);
		res.render('error');
	});	
  	
});

module.exports = router;























