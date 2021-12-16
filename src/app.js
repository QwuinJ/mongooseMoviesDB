require('./db/connection');
const yargs = require('yargs');
const {
	addMovie,
	removeMovieByName,
	readMovieObject,
	updateOneByName,
	findActor,
	findGenre,
	findAwards,
	listAll,
	listAllByGenre,
	sortByRating,
} = require('./movie/movie.functions');
const mongoose = require('mongoose');

const app = async (args) => {
	try {
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
			console.log('ended connection');
		} else if (args.removeMovie) {
			console.log('removing movie...');
			const movieObj = { title: args.title };
			await removeMovieByName(movieObj);
			mongoose.disconnect();
			console.log('ended connection');
		} else if (args.readMovie) {
			console.log('reading movie...');
			const readObj = { title: args.title };
			await readMovieObject(readObj);
			mongoose.disconnect();
			console.log('ended connection');
		} else if (args.updateMovie) {
			console.log('updating movie...');
			const updateObj = {
				title: args.title,
				key: args.key,
				value: args.value,
			};
			await updateOneByName(updateObj);
			mongoose.disconnect();
			console.log('ended connection');
		} else if (args.findActor) {
			console.log('listing movies...');
			const actorObj = { actor: args.actor };
			await findActor(actorObj);
			mongoose.disconnect();
			console.log('ended connection');
		} else if (args.findGenre) {
			console.log(`listing ${args.genre} movies...`);
			const genreObj = { genre: args.genre };
			await findGenre(genreObj);
			mongoose.disconnect();
			console.log('ended connection');
		} else if (args.findAwards) {
			console.log(`listing titles with awards...`);
			await findAwards();
			mongoose.disconnect();
		} else if (args.listAll) {
			console.log('listing all movies...');
			await listAll();
			mongoose.disconnect();
		} else if (args.listGenres) {
			console.log('listing all movie genres...');
			await listAllByGenre();
			mongoose.disconnect();
		} else if (args.sortByRating) {
			console.log('listing movies by rating');
			await sortByRating();
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
