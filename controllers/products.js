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

// Index - GET: Find all of products from database and render them in product_index.ejs 
router.get('/', (req, res) => {
	// Find all of the Products from the database
	Product.find({}, (err, allProducts) => {
		// Render index page for products
		res.render('product_index.ejs', {products: allProducts});
	});
});

// New - GET: render product_show.ejs 
router.get('/new', (req, res) => {
	res.send('ayoooofsjignsiognriugn')
});

// Create - POST: Post data of created product to the /products page 
router.post('/');

// Show - GET: Renders show page for product_show.ejs
router.get('/:id', (req, res) => {
	const id = req.params.id
	Product.findById(id, (err, product) => {
		// Render show page for a single product
		res.render('product_show.ejs', {product});
	});	
});

// Edit - GET: Render show page for products_edit.ejs
router.get('/:id/edit');

// Update - PUT: Update the edited product
router.put('/:id');

// Destroy - DELETE: Delete the product
router.delete('/:id');

module.exports = router;