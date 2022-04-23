// import dependencies
require('dotenv').config();
const mongoose = require('mongoose');

// config for DB connection
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

// connect to DB
mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
	.on('connected', () => {console.log('Mongoose has connected to the Database...')})
	.on('disconnected', () => {console.log('Mongoose has disconnected from the Database...')})
	.on('error', (error) => {console.log(error)});

module.exports = mongoose;