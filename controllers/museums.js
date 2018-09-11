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
		res.render('museums', { museums: museums });
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	});
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.send('STUB - NEW MUSEUM POST');
});

router.get('/new', (req, res) => {
	db.Museum.create({
		name: 'Metropolitan Museum of Art',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_MET.jpg/2560px-The_MET.jpg',
		city: 'New York',
		country: 'USA'
	})
	.then(result => {
		res.render('museums/new')
	})
	.catch(err => {
		console.log(err);
		res.send('error, check logs');
	})
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  res.send('museums/show');
});

module.exports = router;
