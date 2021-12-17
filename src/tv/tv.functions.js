const TV = require('./tv.model');
const Movie = require('../movie/movie.model');

// add new TV show
exports.addTV = async (tvObj) => {
	try {
		const newTV = new TV(tvObj);
		await newTV.save();
		console.log(`${tvObj.title} added to database`);
	} catch (e) {
		console.log(e);
	}
};

// remove TV show by title
exports.removeTV = async (tvObj) => {
	try {
		await TV.deleteOne({ title: tvObj.title });
		console.log(`Deleted ${tvObj.title}`);
	} catch (e) {
		console.log(e);
	}
};

// update TV show
exports.updateTVShow = async (updateTV) => {
	try {
		const newKey = updateTV.key;
		const newValue = updateTV.value;
		const result = await TV.findOneAndUpdate(
			{ title: updateTV.title },
			{ [newKey]: newValue }
		);
		console.log(
			`Updated ${updateTV.title}. The field of "${newKey}" is now set to ${newValue}`
		);
	} catch (e) {
		console.log(e);
	}
};

// list all
exports.listAllTV = async () => {
	try {
		const result = await TV.find();
		console.log(result.map((result) => result).sort());
	} catch (e) {
		console.log(e);
	}
};

// look at one specific TV show object
exports.readTVObject = async (readObj) => {
	try {
		const result = await TV.findOne({ title: readObj.title });
		console.log(result);
	} catch (e) {
		console.log(e);
	}
};

// list all with specific actor
exports.findActorTV = async (actorObj) => {
	try {
		const actorFind = actorObj.actor;
		const result = await TV.find({ actor: actorFind });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};
// list all in specific genre
exports.findGenreTV = async (genreObj) => {
	try {
		const result = await TV.find({ genre: genreObj.genre });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};
// list all with awards

exports.findAwardsTV = async () => {
	try {
		const result = await TV.find({ award: true });
		console.log(result.map((result) => result.title).sort());
	} catch (e) {
		console.log(e);
	}
};
// sort shows by awards
exports.sortByRatingTV = async () => {
	try {
		const result = await TV.find().sort({ rating: -1 });
		console.log(result);
	} catch (e) {
		console.log(e);
	}
};

// list ALL TV and ALL Movies...
exports.listAll = async () => {
	try {
		const resultTV = await TV.find();
		const resultMovie = await Movie.find();
		console.log(`${resultTV}${resultMovie}`);
	} catch (e) {
		console.log(e);
	}
};
