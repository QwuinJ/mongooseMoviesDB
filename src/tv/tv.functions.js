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

exports.removeTV = async (tvObj) => {
	try {
		await TV.deleteOne({ title: tvObj.title });
		console.log(`Deleted ${tvObj.title}`);
	} catch (e) {
		console.log(e);
	}
};
