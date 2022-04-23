const express = require('express');
const Product = require('../models/product');
const productSeedData = require('../models/productSeed');
const router = express.Router();

// --------------------------------------- //
//                 ROUTES
// --------------------------------------- //
// List of Routes with order
// INDEX - get, NEW - get, CREATE - post , SHOW - get, EDIT - get, UPDATE - put, DESTROY - Delete

// Remember that this is the level for /products/
// Everything you include will be appended to the end of the /products/ route

// Seed data
router.get('/seed', (req, res) => {
	// Delete all of the current data in database
	Product.deleteMany({}, (err, deletedProduct) => {
		// Create new Products using seed data
		Product.create(productSeedData , (err, data) => {
			// After creation redirect to the homepage for products
			res.redirect('/products');
		});
	});
});

// Index - GET: 
router.get('/', (req, res) => {
	// Find all of the Products from the database
	Product.find({}, (err, allProducts) => {
		// Render index page for products
		res.render('product_index.ejs', {products: allProducts})
	});
})

module.exports = router;