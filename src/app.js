require('./db/connection');
const yargs = require('yargs');
const {
	addMovie,
	removeMovieByName,
	readMovieObject,
	updateOneMovie,
	findActorMovie,
	findGenreMovie,
	findAwardsMovie,
	listAllMovie,
	sortByRatingMovie,
} = require('./movie/movie.functions');
const {
	addTV,
	removeTV,
	listAllTV,
	readTVObject,
	findGenreTV,
	sortByRatingTV,
	updateTVShow,
	findActorTV,
	findAwardsTV,
	listAll,
} = require('./tv/tv.functions');
const mongoose = require('mongoose');

const app = async (args) => {
	try {
		// add movie
		if (args.addMovie) {
			console.log('adding movie...');
			const movieObj = {
				title: args.title,
				actor: args.actor,
				rating: args.rating,
				genre: args.genre,
				released: args.released,
				director: args.director,
				award: args.award,
			};
			await addMovie(movieObj);
			mongoose.disconnect();
			// remove movie
		} else if (args.removeMovie) {
			const movieObj = { title: args.title };
			await removeMovieByName(movieObj);
			mongoose.disconnect();
			// read one movie entry
		} else if (args.readMovie) {
			const readObj = { title: args.title };
			await readMovieObject(readObj);
			mongoose.disconnect();
			// update one movie
		} else if (args.updateMovie) {
			const updateObj = {
				title: args.title,
				key: args.key,
				value: args.value,
			};
			await updateOneMovie(updateObj);
			mongoose.disconnect();
			// list movies with a specific actor
		} else if (args.listActorMovie) {
			const actorObj = { actor: args.actor };
			await findActorMovie(actorObj);
			mongoose.disconnect();
			// list movies in a specific genre
		} else if (args.listGenreMovie) {
			const genreObj = { genre: args.genre };
			await findGenreMovie(genreObj);
			mongoose.disconnect();
			// list movies with awards
		} else if (args.listAwardsMovie) {
			await findAwardsMovie();
			mongoose.disconnect();
			// list all movies
		} else if (args.listAllMovies) {
			await listAllMovie();
			mongoose.disconnect();
			// list all movies in order of rating
		} else if (args.listByRatingMovie) {
			await sortByRatingMovie();
			mongoose.disconnect();
			// add TV show
		} else if (args.addTV) {
			const tvObj = {
				title: args.title,
				actor: args.actor,
				rating: args.rating,
				genre: args.genre,
				released: args.released,
				director: args.director,
				award: args.award,
			};
			await addTV(tvObj);
			mongoose.disconnect();
			// remove TV show
		} else if (args.removeTV) {
			const tvObj = { title: args.title };
			await removeTV(tvObj);
			mongoose.disconnect();
			// list all TV shows
		} else if (args.listAllTV) {
			await listAllTV();
			mongoose.disconnect();
			// view one TV show
		} else if (args.readTV) {
			const readObj = { title: args.title };
			await readTVObject(readObj);
			mongoose.disconnect();
			// update TV show
		} else if (args.updateTV) {
			const updateTV = {
				title: args.title,
				key: args.key,
				value: args.value,
			};
			await updateTVShow(updateTV);
			mongoose.disconnect();
			// list all TV shows with a specific actor
		} else if (args.listActorTV) {
			const actorObj = { actor: args.actor };
			await findActorTV(actorObj);
			mongoose.disconnect();
			// list all TV shows in specified genre
		} else if (args.listGenreTV) {
			const genreObj = { genre: args.genre };
			await findGenreTV(genreObj);
			mongoose.disconnect();
			// sort TV shows by rating
		} else if (args.listByRatingTV) {
			await sortByRatingTV();
			mongoose.disconnect();
			// list all tv shows with awards
		} else if (args.listAwardsTV) {
			await findAwardsTV();
			mongoose.disconnect();
			// List all tv shows and all movies
		} else if (args.listAll) {
			await listAll();
			mongoose.disconnect();
		} else {
			console.log('INVALID COMMAND. TRY AGAIN.');
			mongoose.disconnect();
			console.log('end connection');
		}
	} catch (e) {
		console.log(e);
		mongoose.disconnect();
		console.log('disconnected');
	}
};

app(yargs.argv);
