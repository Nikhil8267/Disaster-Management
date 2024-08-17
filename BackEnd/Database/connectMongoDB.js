const mongoose = require('mongoose')


const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(`mongodb://localhost:27017/Disaster-Management`);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};


module.exports = connectMongoDB;