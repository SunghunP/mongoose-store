const mongoose = require('./connection');

// js destructuring to unpack properties from mongoose
const { Schema, model } = mongoose;

// Product Schema 
const productSchema = new Schema({
	name:        { type: String, required: true, unique: true},
	description: { type: String, default: `Description of ${this.name}`},
	img:         { type: String, },
	price:       { type: Number, required: true, min: [0, 'The price must be greater than 0!']},
	qty:         { type: Number, required: true, min: [0, 'The quantity must be a positive number!']}
});

// Product model 
const Product = model("Product", productSchema);

// export our model
module.exports = Product;