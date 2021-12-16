require('dotenv').config();
const mongoose = require('mongoose');

const connection = async () => {
	try {
		const uri =
			'mongodb+srv://Admin:5mpGvvLo34D9xCFV@cluster0.9ezja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
		await mongoose.connect(uri);
	} catch (e) {
		console.log("didn't find connection");
		console.log(e);
	}
};

connection();
