require('./db/connection');
const yargs = require('yargs');
const { addMovie } = require('./movie/movie.functions');
const mongoose = require('mongoose');

const app = async (args) => {
	try {
		if (args.add) {
			const movieObj = {
				title: args.title,
				actor: args.actor,
				rating: args.rating,
			};
			await addMovie(movieObj);
			console.log('add movie');
			mongoose.disconnect();
			console.log('end connection');
		} else if (args.remove) {
			// remove function
			console.log('remove movie');
		} else {
			console.log('butts lol');
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
