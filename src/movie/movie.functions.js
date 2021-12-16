const { mongoose } = require('mongoose');
const Movie = require('./movie.model');

exports.addMovie = async (movieObj) => {
	try {
		const newMovie = new Movie(movieObj);
		await newMovie.save();
		console.log(`${movieObj.title} added to database`);
		console.log(`${newMovie}`);
	} catch (e) {
		console.log(e);
		// mongoose.connection.close();
	}
};

exports.removeMovieByName = async (movieObj) => {
	try {
		await Movie.deleteOne({ title: movieObj.title });
		console.log(`Deleted ${movieObj.title}`);
	} catch (e) {
		console.log(e);
	}
};

exports.readMovieObject = async (readObj) => {
	try {
		const result = await Movie.findOne({ title: readObj.title });
		console.log(`Found one movie with the title ${readObj.title}`);
		console.log(result);
	} catch (e) {
		console.log(e);
	}
};

exports.updateOneByName = async (updateObj) => {
	try {
		const newKey = updateObj.key;
		const newValue = updateObj.value;
		const result = await Movie.findOneAndUpdate(
			{ title: updateObj.title },
			{ [newKey]: newValue }
		);
		console.log(
			`Updated ${updateObj.title}. The field ${newKey} is now set to ${newValue}`
		);
	} catch (e) {
		console.log(e);
	}
};

exports.findActor = async (actorObj) => {
	try {
		console.log('found function');
		const actorFind = actorObj.actor;
		const result = await Movie.find({ actor: actorFind });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};

exports.findGenre = async (genreObj) => {
	try {
		console.log('found function');
		const result = await Movie.find({ genre: genreObj.genre });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};

exports.findAwards = async () => {
	try {
		console.log('found function');
		const result = await Movie.find({ award: true });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};

exports.listAll = async () => {
	try {
		console.log('found function');
		const result = await Movie.find();
		console.log(result.map((result) => result).sort());
	} catch (e) {
		console.log(e);
	}
};

exports.listAllByGenre = async () => {
	try {
		console.log('found function');
		const result = await Movie.find();
		console.log(result.map((result) => result.genre).sort());
	} catch (e) {
		console.log(e);
	}
};

exports.sortByRating = async () => {
	try {
		console.log('found fucntion');
		const result = await Movie.find().sort({ rating: -1 });
		console.log(`Title: ${result.title} \nRating: ${result.rating}/10`);
	} catch (e) {
		console.log(e);
	}
};
