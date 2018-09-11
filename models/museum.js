// Require Mongoose node module
const mongoose = require('mongoose');

// Create the Museum Schema 
const museumSchema = new mongoose.Schema({
	name: String, 
	image: String,  
	city: String, 
	country: String
});

// Create and export the user model
module.exports = mongoose.model('Museum', museumSchema);


