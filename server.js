require('dotenv').config();
////////////////////////////////////////
// Dependencies
////////////////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.DATABASE_URL;

////////////////////////////////////////
// Middleware
////////////////////////////////////////
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message, ". Mongo is not running"));
db.on('connected', () => console.log('mongoose connected'));
db.on('disconnected', () => console.log('mongoose disconnected'));

////////////////////////////////////////
// Routes
////////////////////////////////////////
app.listen(PORT, () => {
	console.log(`You are listening on ${PORT}`);
});