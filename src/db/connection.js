require('dotenv').config();
const mongoose = require('mongoose');

const connection = async () => {
	console.log('found connection function');
	try {
		const uri =
			'mongodb+srv://Admin:5mpGvvLo34D9xCFV@cluster0.9ezja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
		await mongoose.connect(uri);
		console.log('found connection');
	} catch (e) {
		console.log("didn't find connection");
		console.log(e);
	}
};

connection();
