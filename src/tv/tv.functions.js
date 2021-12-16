const TV = require('./tv.model');

exports.addTV = async (tvObj) => {
	try {
		const newTV = new TV(tvObj);
		await newTV.save();
		console.log(`${tvObj.title} added to database`);
	} catch (e) {
		console.log(e);
	}
};
