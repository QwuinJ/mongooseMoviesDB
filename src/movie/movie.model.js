const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: true,
		required: true,
	},
	actor: {
		type: String,
		default: 'Not specified',
	},
	rating: {
		type: Number,
		min: 1,
		max: 10,
		default: 5,
	},
	genre: {
		type: String,
		default: 'Not specified',
	},
	released: {
		type: Number,
		default: 0,
	},
	director: {
		type: String,
		default: 'Not specified',
	},
	award: {
		type: Boolean,
		default: false,
	},
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
