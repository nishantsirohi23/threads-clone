import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://nishant:mernstack@cluster0.0uk4gdp.mongodb.net/threads?retryWrites=true&w=majority", {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
