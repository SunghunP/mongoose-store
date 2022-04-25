require('dotenv').config();
////////////////////////////////////////
// Dependencies
////////////////////////////////////////
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan') // HTTP status reader
const app = express();
const PORT = process.env.PORT || 3001;

////////////////////////////////////////
// Middleware
////////////////////////////////////////
app.use(express.urlencoded({extended: false})); // parses url encoded bodies
app.use(methodOverride('_method')); 
app.use(express.static('public')); // serve files from public statically 
app.use(morgan("dev")); // log every HTTP request

// Route manager for the product controller
const productRouter = require('./controllers/products');
app.use('/products', productRouter);

////////////////////////////////////////
// Routes
////////////////////////////////////////
app.listen(PORT, () => {
	console.log(`You are listening on ${PORT}`);
});