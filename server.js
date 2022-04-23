require('dotenv').config();
////////////////////////////////////////
// Dependencies
////////////////////////////////////////
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.DATABASE_URL;

////////////////////////////////////////
// Middleware
////////////////////////////////////////
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

////////////////////////////////////////
// Routes
////////////////////////////////////////
app.listen(PORT, () => {
	console.log(`You are listening on ${PORT}`);
});