const Movie = require('./movie.model');

// add Movie
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

// remove movie
exports.removeMovieByName = async (movieObj) => {
	try {
		await Movie.deleteOne({ title: movieObj.title });
		console.log(`Deleted ${movieObj.title}`);
	} catch (e) {
		console.log(e);
	}
};

// view one movie object
exports.readMovieObject = async (readObj) => {
	try {
		const result = await Movie.findOne({ title: readObj.title });
		console.log(result);
	} catch (e) {
		console.log(e);
	}
};

// update movie entry
exports.updateOneMovie = async (updateObj) => {
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

// list movies with a specific actor
exports.findActorMovie = async (actorObj) => {
	try {
		const result = await Movie.find({ actor: actorObj.actor });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};

// list movies in a specific genre
exports.findGenreMovie = async (genreObj) => {
	try {
		const result = await Movie.find({ genre: genreObj.genre });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};

// list all movies with awards
exports.findAwardsMovie = async () => {
	try {
		const result = await Movie.find({ award: true });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};

// list all movies
exports.listAllMovie = async () => {
	try {
		const result = await Movie.find();
		console.log(result.map((result) => result).sort());
	} catch (e) {
		console.log(e);
	}
};

exports.sortByRatingMovie = async () => {
	try {
		console.log('found fucntion');
		const result = await Movie.find().sort({ rating: -1 });
		console.log(result);
	} catch (e) {
		console.log(e);
	}
};
