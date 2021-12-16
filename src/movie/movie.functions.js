const { mongoose } = require('mongoose');
const Movie = require('./movie.model');

exports.addMovie = async (movieObj) => {
	try {
		const newMovie = new Movie(movieObj);
		await newMovie.save();
		mongoose.disconnect();
		console.log(`${movieObj}`);
		console.log('disconnected');
	} catch (e) {
		console.log(e);
		mongoose.disconnect();
	}
};
