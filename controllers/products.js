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
	// render the new product page
	res.render('product_new.ejs');
});

// Create - POST: Post data of created product to the /products page 
router.post('/', (req, res) => {
	if (!req.body.img) req.body.img = '../noimageprovided.png'
	Product.create(req.body, (err, createdProduct) => {
		if (err) {
			console.log(err)
			return res.send(err)
		} else {
			res.redirect('/products');
		};
	});
});

// Show - GET: Renders show page for product_show.ejs
router.get('/:id', (req, res) => {
	const id = req.params.id;
	Product.findById(id, (err, product) => {
		// Render show page for a single product
		res.render('product_show.ejs', {product});
	});	
});

// Edit - GET: Render edit page for products_edit.ejs
router.get('/:id/edit', (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		res.render('product_edit.ejs', {product});
	});
});

// Update - PUT: Update the edited product
router.put('/:id', (req,res) => {
	if (!req.body.img) req.body.img = '../noimageprovided.png'
	Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct) => {
		if(err) console.log(err);
		res.redirect(`/products/${req.params.id}`);
	});
});

// Destroy - DELETE: Delete the product
router.delete('/:id', (req, res) => {
	Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
		res.redirect('/products/');
	});
});

module.exports = router;