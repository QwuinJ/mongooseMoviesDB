require('dotenv').config();
const mongoose = require('mongoose');

const connection = async () => {
	try {
		const uri = process.env.MONGO_URI;
		await mongoose.connect(uri);
	} catch (e) {
		console.log("didn't find connection");
		console.log(e);
	}
};

connection();
