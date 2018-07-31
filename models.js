'use strict'; 

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

var authorSchema = mongoose.Schema({
	firstName: 'string',
	lastName: 'string',
	userName: {
		type: 'string', 
		unique: true
	}
}); 

