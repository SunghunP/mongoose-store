require('dotenv').config();
////////////////////////////////////////
// Dependencies
////////////////////////////////////////
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3001;

////////////////////////////////////////
// Middleware
////////////////////////////////////////
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Route manager for the product controller
const productRouter = require('./controllers/products');
app.use('/products/', productRouter);

////////////////////////////////////////
// Routes
////////////////////////////////////////
app.listen(PORT, () => {
	console.log(`You are listening on ${PORT}`);
});