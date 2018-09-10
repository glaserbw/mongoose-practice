// Require mongoose node module
const mongoose = require('mongoose');

// TODO: Connect to Mongo database

// TODO: Require your other models, and export them

// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!

// Connect to your Mongoose database
mongoose.connect(process.env.MONGOOSE_URL || 'mongodb://localhost:27017/mongoosemuseum', { useNewUrlParser: true });

// Gather up your models 
module.exports.Museum = require('./Museum');
module.exports.Piece = require('./Piece');