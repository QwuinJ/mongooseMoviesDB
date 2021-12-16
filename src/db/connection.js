require('dotenv').config();
const mongoose = require('mongoose');

const connection = async () => {
	try {
		await mongoose.connect(process.env.MOGNO_URI);
		console.log('successsfully connected');
	} catch (error) {
		console.log(error);
	}
};

connection();
