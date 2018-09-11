// Require Mongoose node module
const mongoose = require('mongoose');

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!

const creatorSchema = new mongoose.Schema({
	firstname: String, 
	lastname: String, 
	image: String, 
	birthyear: Number, 
	deathyear: Number
});

const pieceSchema = new mongoose.Schema({
	name: String, 
	originCountry: String, 
	image: String,
	museum: { type: mongoose.Schema.Types.ObjectId, ref: 'Museum' }, 
	creator: creatorSchema
});

module.exports = mongoose.model('Piece', pieceSchema);



